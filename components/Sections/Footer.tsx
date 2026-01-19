import React from 'react';
import { Link } from 'wouter';

export const Footer: React.FC = () => {
  return (
    <footer id="connect" className="py-24 border-t border-white/5 bg-background relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
          
          {/* Left Section - Name & Description */}
          <div className="flex-1 space-y-4 max-w-lg">
            <h3 className="text-white font-medium text-base">Surojit Guha</h3>
            <p className="text-secondary/60 text-sm font-light leading-relaxed">
              Collaborating on thoughtful infrastructure and experimental tools.
            </p>
          </div>

          {/* Right Section - Navigation & Connect */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Navigation */}
            <div className="space-y-3 min-w-[100px]">
              <h4 className="text-xs font-mono text-secondary/40 tracking-widest uppercase mb-4">Navigate</h4>
              <div className="space-y-2">
                <a href="#work" className="block text-sm text-secondary/70 hover:text-white transition-colors">
                  Work
                </a>
                <Link href="/context" className="block text-sm text-secondary/70 hover:text-white transition-colors cursor-pointer">
                  Context
                </Link>
                <a href="#signals" className="block text-sm text-secondary/70 hover:text-white transition-colors">
                  Signals
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-3 min-w-[120px]">
              <h4 className="text-xs font-mono text-secondary/40 tracking-widest uppercase mb-4">Connect</h4>
              <div className="space-y-2">
                <a 
                  href="https://twitter.com/surojitpvt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-secondary/70 hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
                <a 
                  href="mailto:open@collaboration" 
                  className="block text-sm text-secondary/70 hover:text-white transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-secondary/70 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-secondary/40 font-mono">
            Built with intention, not haste.
          </div>
          <div className="text-[10px] font-mono text-white/10 uppercase tracking-[0.2em] select-none">
            End of buffer
          </div>
        </div>
      </div>
    </footer>
  );
};