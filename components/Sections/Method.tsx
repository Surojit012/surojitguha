import React from 'react';
import { motion } from 'framer-motion';

export const Method: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <span className="block text-xs font-mono text-secondary/50 tracking-widest mb-6 uppercase">
          02 / Philosophy
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white font-medium mb-4">I believe good products:</h3>
            <ul className="space-y-3 text-secondary font-light text-sm">
              <li>explain themselves without tutorials</li>
              <li>feel calm even when they’re complex</li>
              <li>earn trust through clarity, not claims</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">I prefer:</h3>
            <ul className="space-y-3 text-secondary font-light text-sm">
              <li>minimal surfaces</li>
              <li>explicit logic</li>
              <li>systems that don’t need to shout</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/[0.02] border border-white/5">
          <p className="text-sm font-mono text-secondary/80 text-center">
            If something feels noisy, I strip it down.<br/>
            If something feels fake, I throw it away.
          </p>
        </div>
      </motion.div>
    </section>
  );
};