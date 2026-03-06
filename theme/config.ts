/**
 * Theme Configuration
 * 
 * Premium dark theme with glassmorphism effects and Apple-level typography.
 * All colors, typography scales, and visual effects are defined here.
 */

import { ThemeConfig, Theme } from './types';

/**
 * Complete theme configuration with color palette, typography system, and effects
 */
export const themeConfig: ThemeConfig = {
  colors: {
    background: {
      primary: '#0B0B0D',   // Near black with blue tint
      secondary: '#121214', // Slightly lighter
      tertiary: '#1A1A1D',  // Card backgrounds
    },
    text: {
      primary: '#FFFFFF',   // Pure white
      secondary: '#A0A0A8', // Muted gray
      tertiary: '#606068',  // Subtle gray
    },
    accent: {
      primary: '#6366F1',   // Indigo
      secondary: '#8B5CF6', // Purple
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.02)',
      border: 'rgba(255, 255, 255, 0.05)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
  },
  typography: {
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'SF Pro Text',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
      mono: [
        'JetBrains Mono',
        'SF Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
      display: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'SF Pro Display',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px',
      '5xl': '96px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: '1.2',   // Headings
      normal: '1.5',  // Body text
      relaxed: '1.7', // Reading content
    },
    letterSpacing: {
      tight: '-0.02em',  // Large headings
      normal: '0',       // Default
      wide: '0.05em',    // Small caps
    },
  },
  effects: {
    glassmorphism: {
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(12px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    shadows: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.2)',
      md: '0 4px 16px rgba(0, 0, 0, 0.25)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.3)',
      xl: '0 16px 48px rgba(0, 0, 0, 0.4)',
      glow: '0 0 20px rgba(99, 102, 241, 0.3)',
      glowPurple: '0 0 20px rgba(139, 92, 246, 0.3)',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      text: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #06B6D4 100%)',
      shimmer: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
    },
  },
};

/**
 * Default dark theme
 */
export const darkTheme: Theme = {
  mode: 'dark',
  config: themeConfig,
  customProperties: {
    '--color-bg-primary': themeConfig.colors.background.primary,
    '--color-bg-secondary': themeConfig.colors.background.secondary,
    '--color-bg-tertiary': themeConfig.colors.background.tertiary,
    '--color-text-primary': themeConfig.colors.text.primary,
    '--color-text-secondary': themeConfig.colors.text.secondary,
    '--color-text-tertiary': themeConfig.colors.text.tertiary,
    '--color-accent-primary': themeConfig.colors.accent.primary,
    '--color-accent-secondary': themeConfig.colors.accent.secondary,
    '--font-sans': themeConfig.typography.fontFamily.sans.join(', '),
    '--font-mono': themeConfig.typography.fontFamily.mono.join(', '),
    '--font-display': themeConfig.typography.fontFamily.display.join(', '),
  },
};

/**
 * Helper function to generate glassmorphism styles
 */
export const getGlassmorphismStyles = (
  blur: number = 12,
  opacity: number = 0.02,
  borderOpacity: number = 0.05,
  shadowIntensity: number = 1
): React.CSSProperties => ({
  background: `rgba(255, 255, 255, ${opacity})`,
  backdropFilter: `blur(${blur}px) saturate(180%)`,
  WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
  border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
  boxShadow: `0 8px 32px rgba(0, 0, 0, ${0.3 * shadowIntensity})`,
});
