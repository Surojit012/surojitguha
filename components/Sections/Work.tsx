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
    id: 'nexora',
    title: 'Nexora',
    description: 'AI-powered growth systems for brand scaling and automated sales.',
    link: 'https://nexora-seven-kappa.vercel.app/'
  },
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
    link: 'https://x.com/surojitpvt/status/2013108250917425252?s=20'
  },
  {
    id: 'gentle-computing',
    title: 'Gentle Computing',
    description: 'Software as furniture: quiet, reliable, present.',
    type: 'Note',
    link: 'https://x.com/surojitpvt/status/2013115540173205902?s=20'
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

const Card: React.FC<{ item: WorkItem; index: number; isWriting?: boolean }> = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="group h-full app-card">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full"
      >
        {item.type && (
          <span className="mb-3 text-[10px] font-mono text-secondary/60 uppercase tracking-widest group-hover:text-secondary/80 transition-colors">
            {item.type}
          </span>
        )}
        <div className="flex justify-between items-start mb-3">
          <h3 className="app-title font-medium text-white group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <ArrowUpRight 
            size={14} 
            className="text-secondary/50 group-hover:text-white transition-colors transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0 ml-3" 
          />
        </div>
        <p className="text-sm text-secondary font-light leading-relaxed mt-auto">
          {item.description}
        </p>
      </a>
    </div>
  </motion.div>
);

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 space-y-16 sm:space-y-20 md:space-y-24 border-t border-white/5">
      {/* 04 / VIBECODED APPS */}
      <div className="px-4 sm:px-6 md:px-0">
        <div className="mb-6 sm:mb-8 max-w-2xl">
           <span className="block text-[10px] sm:text-xs font-mono text-secondary tracking-widest mb-3 sm:mb-4 uppercase">
            04 / Vibecoded Apps
          </span>
          <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
            Applications built through fast iteration and AI-assisted workflows. Shipped early. Refined selectively.
          </p>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {apps.map((app, i) => (
            <Card key={app.id} item={app} index={i} />
          ))}
        </div>
      </div>

      {/* 05 / SELECTED WRITING */}
      <div className="px-4 sm:px-6 md:px-0">
        <div className="mb-6 sm:mb-8 max-w-2xl">
           <span className="block text-[10px] sm:text-xs font-mono text-secondary tracking-widest mb-3 sm:mb-4 uppercase">
            05 / Selected Writing
          </span>
          <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
            Writing as public thinking. Only pieces that hold up over time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {writing.map((piece, i) => (
            <Card key={piece.id} item={piece} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};