/**
 * Theme System Type Definitions
 * 
 * Defines TypeScript interfaces for the premium dark theme system
 * with glassmorphism effects and Apple-level typography.
 */

/**
 * Glassmorphism effect configuration
 */
export interface GlassmorphismProps {
  /** Backdrop blur amount in pixels (default: 12) */
  blur?: number;
  /** Background opacity (default: 0.02) */
  opacity?: number;
  /** Border opacity (default: 0.05) */
  borderOpacity?: number;
  /** Shadow intensity multiplier (default: 1) */
  shadowIntensity?: number;
}

/**
 * Complete theme configuration structure
 */
export interface ThemeConfig {
  colors: {
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    accent: {
      primary: string;
      secondary: string;
    };
    glass: {
      background: string;
      border: string;
      shadow: string;
    };
  };
  typography: {
    fontFamily: {
      sans: string[];
      mono: string[];
      display: string[];
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
    lineHeight: Record<string, string>;
    letterSpacing: Record<string, string>;
  };
  effects: {
    glassmorphism: {
      background: string;
      backdropFilter: string;
      border: string;
    };
    shadows: Record<string, string>;
    gradients: Record<string, string>;
  };
}

/**
 * Theme mode and configuration
 */
export interface Theme {
  mode: 'dark' | 'light';
  config: ThemeConfig;
  customProperties: Record<string, string>;
}
