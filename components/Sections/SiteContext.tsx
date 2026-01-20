import React from 'react';
import { motion } from 'framer-motion';

export const SiteContext: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5 space-y-20">
      {/* Why This Site Exists */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <span className="block text-xs font-mono text-secondary/70 tracking-widest mb-6 uppercase">
          07 / Context
        </span>
        <h3 className="text-white font-medium mb-6">
          This isn’t a résumé. It’s a snapshot.
        </h3>
        <p className="text-secondary font-light leading-relaxed mb-6">
          A place to document experiments, show taste, connect ideas, and leave traces of work.
        </p>
        <p className="text-sm font-mono text-secondary/70 italic">
          If something here feels unfinished — that’s intentional.
        </p>
      </motion.div>

      {/* Current Interests */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h3 className="text-sm font-mono text-white mb-6 uppercase tracking-wider">
          Right now I’m thinking about:
        </h3>
        <ul className="space-y-3 text-secondary font-light">
          <li className="flex items-center gap-3">
            <span className="w-1 h-1 bg-white/40" />
            reputation as infrastructure
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1 h-1 bg-white/40" />
            identity without surveillance
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1 h-1 bg-white/40" />
            AI as interface, not oracle
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1 h-1 bg-white/40" />
            verifiable systems over trusted ones
          </li>
          <li className="flex items-center gap-3">
            <span className="w-1 h-1 bg-white/40" />
            how culture propagates onchain
          </li>
        </ul>
        <p className="mt-8 text-xs font-mono text-secondary/60">
          These interests evolve. The questions stay.
        </p>
      </motion.div>
    </section>
  );
};