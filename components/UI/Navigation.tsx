import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-start md:items-center z-50 pointer-events-none mix-blend-difference"
    >
      <div className="font-mono text-xs tracking-widest text-secondary/80 pointer-events-auto cursor-pointer hover:text-white transition-colors flex items-center gap-4">
        <span>SG / 2024</span>
        <span className="hidden md:block opacity-30 text-[10px] border border-secondary/50 px-1.5 py-0.5 rounded-sm">
          {isMac ? '⌘K' : 'CTRL+K'}
        </span>
      </div>
      <div className="flex gap-8 font-mono text-xs tracking-widest pointer-events-auto">
        <a href="#work" onClick={scrollToSection('work')} className="text-secondary/80 hover:text-white transition-colors cursor-pointer">WORK</a>
        <a href="#connect" onClick={scrollToSection('connect')} className="text-secondary/80 hover:text-white transition-colors cursor-pointer">CONTACT</a>
      </div>
    </motion.nav>
  );
};