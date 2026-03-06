import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const lines = [
  { text: "I don't write software the traditional way.", highlight: false },
  { text: "I steer models.", highlight: true },
  { text: "I experiment rapidly.", highlight: true },
  { text: "I build small systems that explore bigger ideas.", highlight: true },
  { text: "AI changes how software is created.", highlight: false },
  { text: "The builders who adapt fastest will shape the next decade.", highlight: true },
];

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-10 sm:mb-14 text-secondary/70">
          <Compass size={14} />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            How I Build
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`text-base sm:text-lg md:text-xl font-light leading-relaxed ${
                line.highlight
                  ? 'text-white/90'
                  : 'text-secondary/60'
              }`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
