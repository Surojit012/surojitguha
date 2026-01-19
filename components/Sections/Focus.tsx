import React from 'react';
import { motion } from 'framer-motion';

const FocusItem: React.FC<{ title: string; subtitle: string; items: string[]; note: string }> = ({ title, subtitle, items, note }) => (
  <div className="space-y-4">
    <h3 className="text-lg text-white font-medium">{title}</h3>
    <p className="text-sm text-secondary font-light h-10">{subtitle}</p>
    <ul className="border-l border-white/10 pl-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-primary/80 font-mono">{item}</li>
      ))}
    </ul>
    <p className="text-xs text-secondary/50 pt-2 italic">{note}</p>
  </div>
);

export const Focus: React.FC = () => {
  return (
    <section className="py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="block text-xs font-mono text-secondary/50 tracking-widest mb-12 uppercase">
          03 / What I Work On
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FocusItem 
            title="Experiments"
            subtitle="Small, fast builds that test ideas."
            items={['reputation', 'identity', 'trust', 'onchain culture', 'social signal']}
            note="Not everything needs a roadmap. Some things just need to exist."
          />
          <FocusItem 
            title="Interfaces"
            subtitle="Designing clean, readable, low-friction interfaces."
            items={['web3 tools', 'community utilities', 'experimental apps']}
            note="The goal is not decoration. The goal is comprehension."
          />
          <FocusItem 
            title="Community"
            subtitle="Active across multiple crypto ecosystems."
            items={['contributing ideas', 'building small tools', 'participating early', 'learning dynamics']}
            note="Culture is infrastructure. Ignore it and the protocol breaks."
          />
        </div>
      </motion.div>
    </section>
  );
};