import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-40"
      >
        <span className="block text-xs font-mono text-secondary/50 tracking-widest mb-6 uppercase">
          01 / About
        </span>
        
        <h2 className="text-2xl md:text-3xl text-white font-medium mb-8 leading-tight">
          I explore systems through interfaces.
        </h2>
        
        <div className="space-y-6 text-secondary font-light leading-relaxed">
          <p>
            My work starts with ideas, not specs.
            I use vibecoding and AI-assisted tools to collapse the distance between intent and a working system.
          </p>
          <p>
            I’m interested in how people experience complex infrastructure —
            crypto protocols, reputation layers, coordination systems, and AI-driven tools.
          </p>
          <p>
            I believe the interface is the protocol.
            If a system can’t be understood or trusted through its surface, the underlying code doesn’t matter.
          </p>
          <p className="text-white/90">
            Exploration over exploitation.
          </p>
        </div>
      </motion.div>

      {/* Method Section - Centered Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col items-center justify-center text-center space-y-8"
      >
        <span className="text-[10px] font-mono text-secondary/30 uppercase tracking-[0.25em]">
          Method
        </span>
        
        <p className="text-secondary/80 font-light leading-relaxed max-w-md">
          Vibecoding is how I explore ideas quickly.<br />
          AI reduces the friction between intent and execution.
        </p>
        
        <span className="text-[10px] font-mono text-white/60 tracking-[0.2em] uppercase pt-2">
          Speed first. Taste always.
        </span>
      </motion.div>
    </section>
  );
};