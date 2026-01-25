import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

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
      className="fixed top-0 w-full p-4 sm:p-6 md:p-10 flex justify-between items-start md:items-center z-50 pointer-events-none backdrop-blur-md bg-background/20 border-b border-white/5"
    >
      <div className="font-mono text-xs tracking-widest text-white/80 pointer-events-auto cursor-pointer hover:text-white transition-colors flex items-center gap-2 sm:gap-4">
        <span className="text-[10px] sm:text-xs">SG / 2024</span>
        <span className="hidden sm:block opacity-60 text-[9px] sm:text-[10px] border border-white/30 px-1 sm:px-1.5 py-0.5 rounded-sm">
          {isMac ? '⌘K' : 'CTRL+K'}
        </span>
      </div>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 font-mono text-[10px] sm:text-xs tracking-widest pointer-events-auto">
        <a href="#work" onClick={scrollToSection('work')} className="text-white/80 hover:text-white transition-colors cursor-pointer">WORK</a>
        <a href="#connect" onClick={scrollToSection('connect')} className="text-white/80 hover:text-white transition-colors cursor-pointer">CONTACT</a>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};