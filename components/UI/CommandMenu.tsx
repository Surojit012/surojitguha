import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Copy, ExternalLink, Hash } from 'lucide-react';
import { useLocation } from 'wouter';

interface CommandItem {
  id: string;
  label: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export const CommandMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setLocation] = useLocation();

  // Toggle function
  const toggleOpen = () => setIsOpen(prev => !prev);

  // Navigation Actions
  const navigateTo = (id: string) => {
    setIsOpen(false);
    // Slight delay to allow modal to close smoothly
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('open@collaboration');
    // You could add a toast here
    setIsOpen(false);
  };

  const items: CommandItem[] = [
    { id: 'home', label: 'Home / Top', category: 'Navigation', icon: <ArrowRight size={14} />, action: () => navigateTo('root') },
    { id: 'work', label: 'Vibecoded Apps', category: 'Navigation', icon: <Hash size={14} />, action: () => navigateTo('work') },
    { id: 'signal', label: 'Writing & Signal', category: 'Navigation', icon: <Hash size={14} />, action: () => navigateTo('signal') },
    { id: 'connect', label: 'Contact', category: 'Navigation', icon: <Hash size={14} />, action: () => navigateTo('connect') },
    { id: 'context', label: 'Read Context', category: 'Context', icon: <ArrowRight size={14} />, action: () => { setIsOpen(false); setLocation('/context'); } },
    { id: 'twitter', label: 'Twitter / X', category: 'Social', icon: <ExternalLink size={14} />, action: () => openLink('https://twitter.com/surojitpvt') },
    { id: 'email', label: 'Copy Email', category: 'Action', icon: <Copy size={14} />, action: copyEmail, shortcut: '↵' },
  ];

  const filteredItems = items.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard Event Listeners
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleOpen();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, []);

  // List Navigation
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        filteredItems[selectedIndex]?.action();
      }
    };

    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [isOpen, selectedIndex, filteredItems]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#0f0f11] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden rounded-sm"
          >
            {/* Search Bar */}
            <div className="flex items-center px-4 py-4 border-b border-white/5">
              <Search size={16} className="text-secondary/50 mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-white font-mono text-sm focus:outline-none placeholder:text-secondary/30"
              />
              <span className="text-[10px] font-mono text-secondary/30 border border-white/10 px-1.5 py-0.5 rounded">ESC</span>
            </div>

            {/* List */}
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filteredItems.length === 0 ? (
                <div className="px-4 py-8 text-center text-xs font-mono text-secondary/40">
                  No results found.
                </div>
              ) : (
                filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => item.action()}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`px-4 py-3 flex items-center justify-between cursor-pointer transition-colors ${
                      index === selectedIndex ? 'bg-white/[0.04]' : 'transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded ${index === selectedIndex ? 'text-white' : 'text-secondary/40'}`}>
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-sm font-light ${index === selectedIndex ? 'text-white' : 'text-secondary'}`}>
                          {item.label}
                        </span>
                        {item.category && (
                          <span className="text-[10px] font-mono text-secondary/40 uppercase tracking-wider">
                            {item.category}
                          </span>
                        )}
                      </div>
                    </div>
                    {item.shortcut && (
                      <span className="text-[10px] font-mono text-secondary/30 border border-white/10 px-1.5 py-0.5 rounded">
                        {item.shortcut}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-white/[0.02] border-t border-white/5 flex justify-between items-center">
               <span className="text-[10px] font-mono text-secondary/30">
                 PROTCOL INTERFACE v1.0
               </span>
               <div className="flex gap-2">
                 <span className="text-[10px] font-mono text-secondary/30">Select</span>
                 <span className="text-[10px] font-mono text-secondary/30">↵</span>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};