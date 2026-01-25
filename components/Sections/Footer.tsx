import React from 'react';
import { Link } from 'wouter';

export const Footer: React.FC = () => {
  return (
    <footer id="connect" className="py-16 sm:py-20 md:py-24 border-t border-white/5 bg-background relative z-10">
      <div className="px-4 sm:px-6 md:px-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">

          {/* Far Left - Name & Description */}
          <div className="flex-1 max-w-md space-y-3 sm:space-y-4">
            <h3 className="text-white font-medium text-sm sm:text-base">Surojit Guha</h3>
            <p className="text-secondary/80 text-xs sm:text-sm font-light leading-relaxed">
              Collaborating on thoughtful infrastructure and experimental tools.
            </p>

            {/* Affiliation Badges */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.tanssi.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-1 border border-white/10 rounded-full text-[9px] sm:text-[10px] font-mono text-secondary/60 hover:text-secondary/80 hover:border-white/20 transition-all duration-300"
              >
                <svg width="12" height="12" viewBox="0 0 100 100" fill="currentColor" className="opacity-50">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
                  <circle cx="50" cy="25" r="8" fill="currentColor" />
                  <circle cx="28" cy="65" r="8" fill="currentColor" />
                  <circle cx="72" cy="65" r="8" fill="currentColor" />
                  <line x1="50" y1="33" x2="35" y2="57" stroke="currentColor" strokeWidth="4" />
                  <line x1="50" y1="33" x2="65" y2="57" stroke="currentColor" strokeWidth="4" />
                  <line x1="36" y1="65" x2="64" y2="65" stroke="currentColor" strokeWidth="4" />
                </svg>
                <span>Tanssi Network · Ambassador</span>
              </a>
              <a
                href="https://www.aegis.im/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-1 border border-white/10 rounded-full text-[9px] sm:text-[10px] font-mono text-secondary/60 hover:text-secondary/80 hover:border-white/20 transition-all duration-300"
              >
                <svg width="12" height="12" viewBox="0 0 100 100" fill="currentColor" className="opacity-50">
                  <path d="M50 5 L90 30 L90 70 L50 95 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="6" />
                  <path d="M50 25 L70 38 L70 62 L50 75 L30 62 L30 38 Z" fill="currentColor" opacity="0.4" />
                </svg>
                <span>Aegis · Ambassador</span>
              </a>
            </div>
          </div>

          {/* Center - Navigation & Connect */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24">
            {/* Navigate Section */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-[10px] sm:text-xs font-mono text-secondary/60 tracking-widest uppercase">Navigate</h4>
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

            {/* Connect Section */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-[10px] sm:text-xs font-mono text-secondary/60 tracking-widest uppercase">Connect</h4>
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
                  href="https://github.com/Surojit012"
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
          <div className="text-[10px] sm:text-xs text-secondary/60 font-mono">
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