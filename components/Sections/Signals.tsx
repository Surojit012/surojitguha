import React from 'react';
import { motion } from 'framer-motion';
import { Disc } from 'lucide-react';

interface Signal {
  id: string;
  image: string;
  project: string;
  descriptor: string;
  link?: string;
}

const signals: Signal[] = [
  {
    id: '1',
    image: '/assets/signal-01.png',
    project: 'Popkins',
    descriptor: 'Playful on-chain characters from the Sui ecosystem.',
    link: '#'
  },
  {
    id: '2',
    image: '/assets/signal-02.png',
    project: 'Fwogs',
    descriptor: 'A stylized PFP series rooted in internet culture and identity.',
    link: '#'
  },
  {
    id: '3',
    image: '/assets/signal-03.png',
    project: 'Pythenians',
    descriptor: 'Network-native artifacts from the Pyth community.',
    link: 'https://pyth.network'
  }
];

const SignalCard: React.FC<{ signal: Signal; index: number }> = ({ signal, index }) => (
  <motion.a
    href={signal.link}
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
        alt={signal.project}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ imageRendering: 'pixelated' }} // Ensures pixel art remains crisp
      />
      
      {/* Subtle overlay that vanishes on hover */}
      <div className="absolute inset-0 bg-background/0 group-hover:bg-transparent transition-colors duration-500" />
    </div>

    <div className="space-y-1">
      <h3 className="text-sm font-medium text-primary/90 group-hover:text-white transition-colors duration-500">
        {signal.project}
      </h3>
      <p className="text-[11px] font-mono text-secondary/60 group-hover:text-secondary/80 transition-colors duration-500 leading-snug">
        {signal.descriptor}
      </p>
    </div>
  </motion.a>
);

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
        {signals.map((s, i) => (
          <SignalCard key={s.id} signal={s} index={i} />
        ))}
      </div>
    </section>
  );
};