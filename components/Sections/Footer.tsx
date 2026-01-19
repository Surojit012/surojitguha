import React from 'react';
import { Link } from 'wouter';

export const Footer: React.FC = () => {
  return (
    <footer id="connect" className="py-24 border-t border-white/5 bg-background relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          
          {/* Left Column */}
          <div className="space-y-4 max-w-sm">
            <h3 className="text-white font-medium text-base">Surojit Guha</h3>
            <p className="text-secondary/60 text-sm font-light leading-relaxed">
              Collaborating on thoughtful infrastructure and experimental tools.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 min-w-[140px] md:items-end md:text-right">
            <a 
              href="https://twitter.com/surojitpvt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-secondary/60 hover:text-white tracking-widest uppercase transition-colors"
            >
              TWITTER / X
            </a>
            <a 
              href="mailto:open@collaboration" 
              className="text-xs font-mono text-secondary/60 hover:text-white tracking-widest uppercase transition-colors"
            >
              EMAIL
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-secondary/60 hover:text-white tracking-widest uppercase transition-colors"
            >
              GITHUB
            </a>
            <Link href="/context" className="text-xs font-mono text-secondary/60 hover:text-white tracking-widest uppercase transition-colors cursor-pointer">
              CONTEXT
            </Link>
          </div>
        </div>

        <div className="mt-32 text-center pointer-events-none select-none opacity-50">
            <span className="text-[10px] font-mono text-white/10 uppercase tracking-[0.2em]">End of buffer</span>
        </div>
      </div>
    </footer>
  );
};