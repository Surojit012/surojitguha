import React from 'react';
import { motion } from 'framer-motion';
import { Disc } from 'lucide-react';
import { myNFTs } from '../../utils/nftConfig';

const SignalCard: React.FC<{ signal: typeof myNFTs[0]; index: number }> = ({ signal, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group block cursor-default"
    >
      <div className="relative aspect-square overflow-hidden mb-2 sm:mb-3 bg-white/[0.01] transition-opacity duration-500 group-hover:opacity-90">
        <motion.img
          src={signal.image}
          alt={signal.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          style={{ imageRendering: 'auto' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.includes('.png')) {
              target.src = target.src.replace('.png', '.svg');
            } else {
              target.src = '/assets/nft-placeholder.svg';
            }
          }}
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-xs sm:text-sm font-medium text-primary/80 group-hover:text-primary/90 transition-colors duration-500">
          {signal.name}
        </h3>
        <p className="text-[11px] sm:text-[12px] text-secondary/70 group-hover:text-secondary/80 transition-colors duration-500 leading-relaxed">
          {signal.description}
        </p>
        <p className="text-[10px] sm:text-[11px] font-light text-secondary/70 group-hover:text-secondary/80 transition-colors duration-500 leading-relaxed italic mt-1.5 sm:mt-2">
          {signal.interpretation}
        </p>
      </div>
    </motion.div>
  );
};

export const Signals: React.FC = () => {
  return (
    <section id="signals" className="py-16 sm:py-20 md:py-24 border-t border-white/5 px-4 sm:px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 sm:mb-16 max-w-xl"
      >
        <div className="flex items-center gap-3 mb-3 sm:mb-4 text-secondary/70">
          <Disc size={12} className="sm:hidden" />
          <Disc size={14} className="hidden sm:block" />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            06 / Signals Held
          </span>
        </div>
        <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
          A small set of digital artifacts I hold.<br />
          Collected for alignment, not speculation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-6">
        {myNFTs.map((s, i) => (
          <SignalCard key={s.id} signal={s} index={i} />
        ))}
      </div>
    </section>
  );
};