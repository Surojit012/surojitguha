import React from 'react';
import { Link } from 'wouter';

export const Footer: React.FC = () => {
  return (
    <footer id="connect" className="py-16 sm:py-20 md:py-24 border-t border-white/5 bg-background relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-12 md:gap-16">
          
          {/* Left Section - Name & Description */}
          <div className="flex-1 space-y-3 sm:space-y-4 max-w-lg">
            <h3 className="text-white font-medium text-sm sm:text-base">Surojit Guha</h3>
            <p className="text-secondary/60 text-xs sm:text-sm font-light leading-relaxed">
              Collaborating on thoughtful infrastructure and experimental tools.
            </p>
          </div>

          {/* Right Section - Navigation & Connect */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16">
            {/* Navigation */}
            <div className="space-y-2 sm:space-y-3 min-w-[100px]">
              <h4 className="text-[10px] sm:text-xs font-mono text-secondary/40 tracking-widest uppercase mb-3 sm:mb-4">Navigate</h4>
              <div className="space-y-1.5 sm:space-y-2">
                <a href="#work" className="block text-xs sm:text-sm text-secondary/70 hover:text-white transition-colors">
                  Work
                </a>
                <Link href="/context" className="block text-xs sm:text-sm text-secondary/70 hover:text-white transition-colors cursor-pointer">
                  Context
                </Link>
                <a href="#signals" className="block text-xs sm:text-sm text-secondary/70 hover:text-white transition-colors">
                  Signals
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-2 sm:space-y-3 min-w-[120px]">
              <h4 className="text-[10px] sm:text-xs font-mono text-secondary/40 tracking-widest uppercase mb-3 sm:mb-4">Connect</h4>
              <div className="space-y-1.5 sm:space-y-2">
                <a 
                  href="https://twitter.com/surojitpvt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-xs sm:text-sm text-secondary/70 hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
                <a 
                  href="mailto:open@collaboration" 
                  className="block text-xs sm:text-sm text-secondary/70 hover:text-white transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-xs sm:text-sm text-secondary/70 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-[10px] sm:text-xs text-secondary/40 font-mono">
            Built with intention, not haste.
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-white/10 uppercase tracking-[0.2em] select-none">
            End of buffer
          </div>
        </div>
      </div>
    </footer>
  );
};