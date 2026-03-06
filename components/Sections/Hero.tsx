import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Fix for TypeScript not recognizing R3F elements
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      pointLight: any;
      ambientLight: any;
      icosahedronGeometry: any;
      meshPhongMaterial: any;
      group: any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      pointLight: any;
      ambientLight: any;
      icosahedronGeometry: any;
      meshPhongMaterial: any;
      group: any;
    }
  }
}

// Neural Sphere — a rotating wireframe icosahedron
const NeuralSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshPhongMaterial
          color="#a78bfa"
          emissive="#4f46e5"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2.6, 0]} />
        <meshPhongMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#a78bfa" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#60a5fa" />
    </group>
  );
};

const tags = ['AI', 'Vibecoding', 'Web3', 'Protocol Design', 'Experiments'];

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(11,11,13,0.5)_0%,rgba(11,11,13,0)_60%)]" />

      {/* 3D Neural Sphere */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center opacity-60">
        <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px]">
          <Canvas
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            camera={{ position: [0, 0, 6], fov: 45 }}
            style={{ background: 'transparent' }}
          >
            <NeuralSphere />
          </Canvas>
        </div>
      </div>

      {/* Content */}
      <div className="z-10 text-center space-y-6 sm:space-y-8 px-4 sm:px-6 relative max-w-4xl">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight select-none leading-[1.1] text-white"
        >
          Surojit Guha
        </motion.h1>

        {/* Short Info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-secondary font-light tracking-wide"
        >
          AI-Native Builder Exploring the Future of Software
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#work"
            onClick={scrollTo('work')}
            className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-white/90 flex items-center gap-2 cursor-pointer"
          >
            View Projects
            <ArrowRight size={14} />
          </a>
          <a
            href="#signal"
            onClick={scrollTo('signal')}
            className="btn-secondary px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-white/70 flex items-center gap-2 cursor-pointer"
          >
            Read Experiments
          </a>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4"
        >
          {tags.map((tag, i) => (
            <React.Fragment key={tag}>
              <span className="text-[10px] sm:text-xs font-mono text-secondary/50 tracking-widest uppercase">
                {tag}
              </span>
              {i < tags.length - 1 && (
                <span className="text-secondary/20 text-[10px]">•</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-3 sm:gap-4 select-none pointer-events-none"
      >
        <span className="text-[9px] sm:text-[10px] font-mono text-secondary/40 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ArrowDown size={12} className="text-secondary/40 animate-pulse" strokeWidth={1} />
      </motion.div>
    </section>
  );
};