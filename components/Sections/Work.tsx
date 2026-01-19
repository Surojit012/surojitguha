import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  link: string;
  type?: string;
}

const apps: WorkItem[] = [
  {
    id: 'reply-guy',
    title: 'Reply Guy',
    description: 'Lightweight tool for generating context-aware replies.',
    link: 'https://reply-guy-eta.vercel.app/'
  },
  {
    id: 'ritual-critic',
    title: 'Ritual Critic',
    description: 'AI-assisted critique layer for community artifacts.',
    link: 'https://ritual-critic.vercel.app/'
  },
  {
    id: 'proof-of-bags',
    title: 'Proof of Bags',
    description: 'Reputation and behavior signal layer for token ecosystems.',
    link: 'https://proofofbags.vercel.app/'
  }
];

const writing: WorkItem[] = [
  {
    id: 'interface-protocol',
    title: 'The Interface is the Protocol',
    description: 'Frontend usability as infrastructure risk.',
    type: 'Thread',
    link: 'https://twitter.com/surojitpvt'
  },
  {
    id: 'gentle-computing',
    title: 'Gentle Computing',
    description: 'Software as furniture: quiet, reliable, present.',
    type: 'Note',
    link: 'https://twitter.com/surojitpvt'
  },
  {
    id: 'identity-dark-forest',
    title: 'Identity in the Dark Forest',
    description: 'Privacy and reputation in zero-knowledge systems.',
    type: 'Essay',
    link: 'https://twitter.com/surojitpvt'
  },
  {
    id: 'vibecoding',
    title: 'Vibecoding & The Latent Space',
    description: 'Steering models instead of writing syntax.',
    type: 'Experiment',
    link: 'https://twitter.com/surojitpvt'
  }
];

const Card: React.FC<{ item: WorkItem; index: number; isWriting?: boolean }> = ({ item, index, isWriting }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group flex flex-col p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full"
  >
    {item.type && (
      <span className="mb-3 text-[10px] font-mono text-secondary/40 uppercase tracking-widest group-hover:text-secondary/60 transition-colors">
        {item.type}
      </span>
    )}
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-base font-medium text-white group-hover:text-primary transition-colors pr-4">
        {item.title}
      </h3>
      <ArrowUpRight 
        size={14} 
        className="text-secondary/30 group-hover:text-white transition-colors transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" 
      />
    </div>
    <p className="text-sm text-secondary font-light leading-relaxed mt-auto">
      {item.description}
    </p>
  </motion.a>
);

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 space-y-24 border-t border-white/5">
      {/* 04 / VIBECODED APPS */}
      <div>
        <div className="mb-8 max-w-2xl">
           <span className="block text-xs font-mono text-secondary tracking-widest mb-4 uppercase">
            04 / Vibecoded Apps
          </span>
          <p className="text-secondary font-light leading-relaxed">
            Applications built through fast iteration and AI-assisted workflows. Shipped early. Refined selectively.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {apps.map((app, i) => (
            <Card key={app.id} item={app} index={i} />
          ))}
        </div>
      </div>

      {/* 05 / SELECTED WRITING */}
      <div>
        <div className="mb-8 max-w-2xl">
           <span className="block text-xs font-mono text-secondary tracking-widest mb-4 uppercase">
            05 / Selected Writing
          </span>
          <p className="text-secondary font-light leading-relaxed">
            Writing as public thinking. Only pieces that hold up over time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {writing.map((piece, i) => (
            <Card key={piece.id} item={piece} index={i} isWriting />
          ))}
        </div>
      </div>
    </section>
  );
};