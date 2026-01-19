import React from 'react';
import { motion } from 'framer-motion';

export const Thoughts: React.FC = () => {
  return (
    <section className="py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <span className="block text-xs font-mono text-secondary/50 tracking-widest mb-6 uppercase">
          06 / Public Thoughts
        </span>

        <p className="text-primary/80 font-light mb-8">
          Most of my thinking happens in public.
        </p>

        <div className="bg-white/[0.02] border border-white/5 p-8 mb-8">
          <p className="text-secondary font-light mb-4">
            On X (<a href="https://twitter.com/surojitpvt" target="_blank" rel="noopener noreferrer" className="text-white hover:underline decoration-white/30 underline-offset-4">@surojitpvt</a>), I write about:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono text-primary/70">
            <li>+ emerging protocols</li>
            <li>+ infra design</li>
            <li>+ experiments I’m building</li>
            <li>+ things that feel broken</li>
            <li>+ things that feel important</li>
          </ul>
        </div>

        <p className="text-sm font-mono text-secondary/60 uppercase tracking-wider">
          Short form. Direct. No engagement farming.
        </p>
      </motion.div>
    </section>
  );
};