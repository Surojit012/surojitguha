import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleField } from './ParticleField';
import { PerspectiveCamera } from '@react-three/drei';

// Fix for TypeScript not recognizing R3F elements
// We augment both the global JSX namespace and the module 'react' to cover different TS configurations.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      fog: any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      fog: any;
    }
  }
}

export const Scene: React.FC = () => {
  return (
    <Canvas
      dpr={[1, 2]} // Optimize for high DPI screens
      gl={{ 
        antialias: false, 
        alpha: true,
        powerPreference: "high-performance" 
      }}
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <ParticleField />
      <fog attach="fog" args={['#0b0b0d', 10, 40]} />
    </Canvas>
  );
};