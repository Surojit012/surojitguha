import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(11,11,13,0.5)_0%,rgba(11,11,13,0)_60%)]" />

      <div className="z-10 text-center space-y-6 sm:space-y-8 px-4 sm:px-6 relative max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white select-none"
        >
          Surojit Guha
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[9px] sm:text-[10px] md:text-xs font-mono text-secondary/60 uppercase tracking-[0.25em] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-0 select-none">
            <span>Web3 Infrastructure</span>
            <span className="hidden sm:inline-block mx-2 md:mx-4 opacity-40">•</span>
            <span>Interactive Systems</span>
            <span className="hidden sm:inline-block mx-2 md:mx-4 opacity-40">•</span>
            <span>Digital Culture</span>
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-3 sm:gap-4 select-none pointer-events-none"
      >
        <span className="text-[9px] sm:text-[10px] font-mono text-secondary/30 uppercase tracking-[0.3em]">Signal</span>
        <ArrowDown size={12} className="sm:hidden text-secondary/30 animate-pulse" strokeWidth={1} />
        <ArrowDown size={14} className="hidden sm:block text-secondary/30 animate-pulse" strokeWidth={1} />
      </motion.div>
    </section>
  );
};