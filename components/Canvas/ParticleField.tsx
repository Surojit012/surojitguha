import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Fix for TypeScript not recognizing R3F elements
// We augment both the global JSX namespace and the module 'react' to cover different TS configurations.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      shaderMaterial: any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      shaderMaterial: any;
    }
  }
}

// Vertex Shader: Peripheral Flow Fields
const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uScroll;
  uniform float uReducedMotion;
  
  attribute float aScale;
  attribute float aSpeed;
  attribute float aRandom;
  
  varying float vAlpha;
  
  // --- SIMPLEX NOISE FUNCTION ---
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec3 pos = position;
    
    // --- 1. SPATIAL ZONING (Core vs. Periphery) ---
    float halfWidth = uResolution.x * 0.5;
    float normalizedX = abs(pos.x) / halfWidth; 
    
    // Core Zone: 0.0 - 0.4 (Stable)
    // Transition: 0.4 - 0.75
    // Peripheral Zone: 0.75 - 1.0 (Active)
    float edgeWeight = smoothstep(0.35, 0.85, normalizedX);
    
    float motionFactor = 1.0 - uReducedMotion;
    float t = uTime * aSpeed;

    // --- 2. BASE MOTION (Stable Core) ---
    // Continuous vertical drift, subtle and linear
    // This anchors the "Protocol Logic" feeling in the center
    float baseDrift = sin(t * 0.05 + pos.x) * 0.5;
    pos.y += baseDrift * motionFactor;

    // --- 3. FLOW FIELD (Dynamic Periphery) ---
    // Generate flow vectors using low-frequency noise
    // Coordinate scale controls "texture" size of the flow (0.04 = large smooth eddies)
    // Time scale controls how fast the flow evolves
    vec2 noiseCoord = pos.xy * 0.04;
    float flowTime = uTime * 0.1;
    
    // Sample noise for flow direction
    float noiseVal = snoise(noiseCoord + vec2(0.0, flowTime));
    
    // Convert noise to a vector (gentle curvature)
    // We displace mostly in X/Z to create volume, less in Y to maintain vertical rhythm
    vec3 flowVector = vec3(
        sin(noiseVal * 3.14),      // X curve
        cos(noiseVal * 2.0) * 0.5, // Y variations (subtle)
        sin(noiseVal * 4.0)        // Z depth
    );
    
    // Apply flow: Strong at edges, zero at center
    // "Particles are being guided, not pushed"
    pos += flowVector * edgeWeight * 3.0 * motionFactor;

    // --- 4. SCROLL PARALLAX ---
    // Center moves less (stable), edges drag more (fluid)
    if (uReducedMotion < 0.5) {
        float scrollDrag = uScroll * 0.02;
        // Center has minimal parallax (0.3), Edges have full parallax (1.0)
        float parallaxStrength = 0.3 + (0.7 * edgeWeight);
        pos.y -= scrollDrag * parallaxStrength;
    }

    // --- 5. INTERACTION (Subtle) ---
    // Only affect particles near the cursor, stronger at edges
    vec2 worldMouse = uMouse * (uResolution.x / 2.0);
    worldMouse.x = uMouse.x * (uResolution.x / 2.0);
    worldMouse.y = uMouse.y * (uResolution.y / 2.0);
    
    float mouseDist = distance(pos.xy, worldMouse);
    float interactRadius = 8.0;
    float distFactor = 1.0 - smoothstep(0.0, interactRadius, mouseDist);
    
    if (distFactor > 0.0) {
        vec3 dir = normalize(vec3(pos.x - worldMouse.x, pos.y - worldMouse.y, 0.0));
        // Edges interact 3x more strongly than center
        float pushStrength = (0.3 + 2.7 * edgeWeight);
        pos += dir * distFactor * pushStrength * motionFactor;
    }

    // Output
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    gl_PointSize = aScale * (300.0 / -mvPosition.z);
    vAlpha = smoothstep(60.0, 10.0, -mvPosition.z); // Soften depth fade
  }
`;

// Fragment Shader: Soft glowing dots
const fragmentShader = `
  varying float vAlpha;
  
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    float strength = 1.0 - (dist * 2.0);
    strength = pow(strength, 2.0);
    
    vec3 color = vec3(0.95, 0.96, 1.0); // Cool white
    
    gl_FragColor = vec4(color, strength * vAlpha * 0.4);
  }
`;

export const ParticleField: React.FC = () => {
  const meshRef = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const particlesCount = 3500; // Slight increase for density at edges
  
  const [positions, scales, speeds, randoms] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);
    const speeds = new Float32Array(particlesCount);
    const randoms = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount; i++) {
      // Wide distribution to ensure peripheral zones are populated
      positions[i * 3] = (Math.random() - 0.5) * 60;     // X: Wide field
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // Y: Tall field
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25; // Z: Depth
      
      scales[i] = Math.random() * 2.0 + 0.5;
      speeds[i] = Math.random() * 0.8 + 0.2; // Varied speeds for organic feel
      randoms[i] = Math.random();
    }
    
    return [positions, scales, speeds, randoms];
  }, []);

  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(viewport.width, viewport.height) },
    uScroll: { value: 0 },
    uReducedMotion: { value: prefersReducedMotion ? 1.0 : 0.0 }
  }).current;

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.uTime.value = state.clock.getElapsedTime();
      uniforms.uResolution.value.set(viewport.width, viewport.height);
      
      if (typeof window !== 'undefined') {
        uniforms.uScroll.value = window.scrollY;
      }
      
      uniforms.uMouse.value.lerp(mouse, 0.05);
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={particlesCount}
          array={scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSpeed"
          count={particlesCount}
          array={speeds}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={particlesCount}
          array={randoms}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};