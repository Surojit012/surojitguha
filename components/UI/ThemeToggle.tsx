import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 border border-white/10 rounded-full text-secondary/70 hover:text-primary hover:border-white/20 transition-all duration-300 pointer-events-auto"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <Sun size={14} className="sm:w-4 sm:h-4" />
            ) : (
                <Moon size={14} className="sm:w-4 sm:h-4" />
            )}
        </button>
    );
};
