import React from 'react';
import { motion } from 'framer-motion';
import { Disc, ExternalLink } from 'lucide-react';
import { myNFTs, getBlockchainInfo } from '../../utils/nftConfig';

import React from 'react';
import { motion } from 'framer-motion';
import { Disc, ExternalLink } from 'lucide-react';
import { myNFTs, getBlockchainInfo } from '../../utils/nftConfig';

const SignalCard: React.FC<{ signal: typeof myNFTs[0]; index: number }> = ({ signal, index }) => {
  const blockchainInfo = getBlockchainInfo(signal.blockchain || 'other');
  
  return (
    <motion.a
      href={signal.marketplaceUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden mb-4 border border-white/5 group-hover:border-white/20 transition-colors duration-500 bg-white/[0.02]">
        {/* Image Container */}
        <motion.img
          src={signal.image}
          alt={signal.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ imageRendering: 'auto' }}
          onError={(e) => {
            // Fallback to SVG placeholder if PNG doesn't exist
            const target = e.target as HTMLImageElement;
            if (target.src.includes('.png')) {
              target.src = target.src.replace('.png', '.svg');
            } else {
              target.src = '/assets/nft-placeholder.svg';
            }
          }}
        />
        
        {/* Blockchain indicator */}
        {signal.blockchain && (
          <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span 
              className="text-[8px] font-mono px-1.5 py-0.5 rounded-sm border"
              style={{ 
                borderColor: blockchainInfo.color + '40',
                backgroundColor: blockchainInfo.color + '10',
                color: blockchainInfo.color
              }}
            >
              {blockchainInfo.symbol}
            </span>
          </div>
        )}
        
        {/* External link indicator */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink size={12} className="text-white/60" />
        </div>
        
        {/* Subtle overlay that vanishes on hover */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium text-primary/90 group-hover:text-white transition-colors duration-500">
          {signal.collection}
        </h3>
        <p className="text-xs text-secondary/80 group-hover:text-secondary transition-colors duration-500">
          {signal.name}
        </p>
        <p className="text-[11px] font-mono text-secondary/60 group-hover:text-secondary/80 transition-colors duration-500 leading-snug">
          {signal.description}
        </p>
      </div>
    </motion.a>
  );
};

export const Signals: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-xl"
      >
        <div className="flex items-center gap-3 mb-4 text-secondary/50">
           <Disc size={14} />
           <span className="text-xs font-mono tracking-widest uppercase">
            04 / Signals Held
          </span>
        </div>
        <p className="text-secondary font-light leading-relaxed">
          A small set of digital artifacts I hold.<br/>
          Collected for alignment, not speculation.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {myNFTs.map((s, i) => (
          <SignalCard key={s.id} signal={s} index={i} />
        ))}
      </div>
    </section>
  );
};