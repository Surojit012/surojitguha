import React from 'react';
import { motion } from 'framer-motion';
import { WritingPiece } from '../../types';
import { ArrowUpRight, Feather } from 'lucide-react';

const curatedContent: WritingPiece[] = [
  {
    id: '1',
    title: 'The Interface is the Protocol',
    description: 'Frontend usability as infrastructure risk.',
    category: 'Thread',
    tags: ['Infrastructure', 'UX'],
    link: 'https://x.com/surojitpvt/status/2013108250917425252?s=20'
  },
  {
    id: '2',
    title: 'Gentle Computing',
    description: 'Software as furniture: quiet, reliable, present.',
    category: 'Note',
    tags: ['Philosophy', 'Design'],
    link: 'https://x.com/surojitpvt/status/2013115540173205902?s=20'
  },
  {
    id: '3',
    title: 'Identity in the Dark Forest',
    description: 'Privacy and reputation in zero-knowledge systems.',
    category: 'Essay',
    tags: ['Trust & Identity', 'Privacy'],
    link: 'https://twitter.com/surojitpvt'
  },
  {
    id: '4',
    title: 'Vibecoding & The Latent Space',
    description: 'Steering models instead of writing syntax.',
    category: 'Experiment',
    tags: ['Vibecoding', 'AI'],
    link: 'https://twitter.com/surojitpvt'
  }
];

const WritingCard: React.FC<{ piece: WritingPiece; index: number }> = ({ piece, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
  >
    <a
      href={piece.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between p-4 sm:p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-700 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] block"
    >
      <div>
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-secondary/60 border border-white/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-sm group-hover:border-white/20 transition-colors">
            {piece.category}
          </span>
          <ArrowUpRight 
            size={14} 
            className="sm:hidden text-secondary/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" 
          />
          <ArrowUpRight 
            size={16} 
            className="hidden sm:block text-secondary/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" 
          />
        </div>

        <h3 className="text-lg sm:text-xl font-medium text-primary/90 group-hover:text-white mb-3 sm:mb-4 transition-colors duration-500 leading-tight">
          {piece.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed max-w-[95%]">
          {piece.description}
        </p>
      </div>
    </a>
  </motion.div>
);

export const Writing: React.FC = () => {
  return (
    <section id="signal" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-12 sm:mb-16 max-w-xl">
          <div className="flex items-center gap-3 mb-3 sm:mb-4 text-secondary/50">
               <Feather size={12} className="sm:hidden" />
               <Feather size={14} className="hidden sm:block" />
               <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase">
                03 / Selected Writing
              </span>
            </div>
            <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
              Public thinking.<br/>
              Only pieces that endure.
            </p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
        {curatedContent.map((piece, i) => (
          <WritingCard key={piece.id} piece={piece} index={i} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="mt-8 sm:mt-12 text-right">
          <a 
            href="https://twitter.com/surojitpvt" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[10px] sm:text-xs font-mono text-secondary/50 hover:text-white transition-colors tracking-widest uppercase border-b border-transparent hover:border-white/20 pb-1"
          >
            More writing on X →
          </a>
        </div>
      </motion.div>
    </section>
  );
};