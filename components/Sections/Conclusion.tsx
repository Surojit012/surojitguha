import React from 'react';
import { motion } from 'framer-motion';

export const Conclusion: React.FC = () => {
  return (
    <section className="py-20 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="block text-xs font-mono text-secondary tracking-widest mb-6 uppercase">
          05 / Context
        </span>
        <p className="text-lg md:text-xl font-light leading-relaxed text-secondary">
          Some ideas remain text. Some demand interfaces.<br/>
          <span className="text-white">Vibecoding collapses the distance.</span>
        </p>
      </motion.div>
    </section>
  );
};