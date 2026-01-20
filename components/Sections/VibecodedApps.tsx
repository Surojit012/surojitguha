import React from 'react';
import { motion } from 'framer-motion';
import { VibecodedApp } from '../../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const apps: VibecodedApp[] = [
  {
    id: '1',
    name: 'Reply Guy',
    description: 'An AI-powered reply assistant designed to generate context-aware, high-signal responses for social platforms.',
    tags: ['Vibecoding', 'LLMs', 'Rapid iteration'],
    link: 'https://reply-guy-eta.vercel.app/'
  },
  {
    id: '2',
    name: 'Ritual Critic',
    description: 'An AI critique system that analyzes submissions, scores them, and produces contextual roasts — adding signal through interpretation, not authority.',
    tags: ['AI analysis', 'Scoring', 'Cultural signal'],
    link: 'https://ritual-critic.vercel.app/'
  },
  {
    id: '3',
    name: 'Proof of Bags',
    description: 'A reputation and proof layer that evaluates onchain behavior to surface credible signal without relying on follower counts or hype.',
    tags: ['Onchain data', 'Reputation', 'Verification'],
    link: 'https://proofofbags.vercel.app/'
  }
];

const AppCard: React.FC<{ app: VibecodedApp; index: number }> = ({ app, index }) => {
  return (
    <motion.a
      href={app.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col h-full relative border border-white/5 bg-white/[0.02] p-4 sm:p-6 md:p-8 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(79,240,183,0.05)] transition-all duration-700 backdrop-blur-sm"
    >
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
           <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-glow transition-colors duration-500 whitespace-nowrap">
            {app.name}
          </h3>
          <span className="hidden group-hover:inline-flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-glow border border-glow/20 px-1 sm:px-1.5 py-0.5 rounded-[2px]">
            Vibecoded
          </span>
        </div>
        <ArrowUpRight size={14} className="sm:hidden text-secondary/40 group-hover:text-white transition-colors duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" />
        <ArrowUpRight size={16} className="hidden sm:block text-secondary/40 group-hover:text-white transition-colors duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" />
      </div>
      
      <p className="text-secondary mb-6 sm:mb-8 font-light text-xs sm:text-sm leading-relaxed max-w-[95%]">
        {app.description}
      </p>

      <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4">
        {app.tags.map(tag => (
          <span key={tag} className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-secondary/40 group-hover:text-secondary/60 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export const VibecodedApps: React.FC = () => {
  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 sm:mb-16 max-w-xl"
      >
        <div className="flex items-center gap-3 mb-3 sm:mb-4 text-secondary/50">
           <Sparkles size={12} className="sm:hidden" />
           <Sparkles size={14} className="hidden sm:block" />
           <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            02 / Vibecoded Apps
          </span>
        </div>
        <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
          Applications built through fast iteration and AI-assisted workflows.<br/>
          Shipped early. Refined selectively.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
        {apps.map((app, i) => (
          <AppCard key={app.id} app={app} index={i} />
        ))}
      </div>
    </section>
  );
};