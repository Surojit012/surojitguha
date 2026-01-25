import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

interface ToolCluster {
  id: string;
  name: string;
  description: string;
  items: string[];
}

const clusters: ToolCluster[] = [
  {
    id: '1',
    name: 'Vibecoding & AI Steering',
    description: 'Using AI-assisted workflows to collapse the distance between intent and execution.',
    items: ['LLMs', 'Prompt systems', 'Rapid iteration', 'Model steering', 'AI-assisted UI']
  },
  {
    id: '2',
    name: 'Interface & Interaction',
    description: 'Designing calm, high-signal interfaces with subtle motion and strong hierarchy.',
    items: ['Layout systems', 'Micro-interactions', 'Motion', 'Visual hierarchy', 'Dark UI']
  },
  {
    id: '3',
    name: 'Web & App Runtime',
    description: 'Pragmatic execution environments for shipping real products.',
    items: ['Next.js', 'React', 'Client-side state', 'APIs', 'Vercel']
  },
  {
    id: '4',
    name: 'Onchain & Crypto-Native Systems',
    description: 'Designing interfaces for wallets, identity, and protocol-native flows.',
    items: ['Onchain identity', 'Reputation systems', 'Wallet UX', 'Web3 infra literacy']
  },
  {
    id: '5',
    name: 'Shipping & Iteration',
    description: 'Shipping early, refining selectively, prioritizing signal over polish.',
    items: ['GitHub', 'Deploy pipelines', 'Feedback loops', 'Iterative releases']
  }
];

const ClusterCard: React.FC<{ cluster: ToolCluster; index: number }> = ({ cluster, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col h-full relative border border-white/5 bg-white/[0.02] p-4 sm:p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-700 backdrop-blur-sm"
    >
      <h3 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4 leading-tight">
        {cluster.name}
      </h3>
      
      <p className="text-secondary mb-6 sm:mb-8 font-light text-xs sm:text-sm leading-relaxed">
        {cluster.description}
      </p>

      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-auto pt-3 sm:pt-4">
        {cluster.items.map((item, i) => (
          <span 
            key={item} 
            className="text-[9px] sm:text-[10px] font-mono text-secondary/60"
          >
            {item}{i < cluster.items.length - 1 && <span className="ml-3 text-secondary/30">·</span>}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const ToolsIThinkWith: React.FC = () => {
  return (
    <section id="tools" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 sm:mb-16 max-w-xl"
      >
        <div className="flex items-center gap-3 mb-3 sm:mb-4 text-secondary/70">
          <Layers size={12} className="sm:hidden" />
          <Layers size={14} className="hidden sm:block" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            03 / Tools I Think With
          </span>
        </div>
        <p className="text-sm sm:text-base text-secondary/60 font-light leading-relaxed">
          Subsystems and tools I use to explore, build, and ship ideas quickly.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {clusters.map((cluster, i) => (
          <ClusterCard key={cluster.id} cluster={cluster} index={i} />
        ))}
      </div>
    </section>
  );
};
