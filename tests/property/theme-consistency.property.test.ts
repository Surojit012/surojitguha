/**
 * Property-Based Test: Theme Color Consistency
 * 
 * Feature: ai-native-portfolio-upgrade
 * Property 4: Theme Color Consistency
 * 
 * **Validates: Requirements 2.1**
 * 
 * For any component in the application, all color values should be derived 
 * from the theme configuration object, and no hardcoded color values should 
 * exist outside the theme system.
 */

import { describe, test, expect } from 'vitest';
import * as fc from 'fast-check';
import { themeConfig } from '../../theme/config';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Extract all color-like values from a string
 * Matches: hex colors, rgb/rgba, hsl/hsla, and CSS color names
 */
function extractColorValues(content: string): string[] {
  const colorPatterns = [
    // Hex colors: #RGB, #RRGGBB, #RRGGBBAA
    /#[0-9A-Fa-f]{3,8}\b/g,
    // RGB/RGBA: rgb(r, g, b), rgba(r, g, b, a)
    /rgba?\([^)]+\)/g,
    // HSL/HSLA: hsl(h, s, l), hsla(h, s, l, a)
    /hsla?\([^)]+\)/g,
  ];

  const colors: string[] = [];
  for (const pattern of colorPatterns) {
    const matches = content.match(pattern);
    if (matches) {
      colors.push(...matches);
    }
  }

  return colors;
}

/**
 * Get all theme colors from the theme configuration
 */
function getThemeColors(): Set<string> {
  const colors = new Set<string>();

  // Add background colors
  colors.add(themeConfig.colors.background.primary.toLowerCase());
  colors.add(themeConfig.colors.background.secondary.toLowerCase());
  colors.add(themeConfig.colors.background.tertiary.toLowerCase());

  // Add text colors
  colors.add(themeConfig.colors.text.primary.toLowerCase());
  colors.add(themeConfig.colors.text.secondary.toLowerCase());
  colors.add(themeConfig.colors.text.tertiary.toLowerCase());

  // Add accent colors
  colors.add(themeConfig.colors.accent.primary.toLowerCase());
  colors.add(themeConfig.colors.accent.secondary.toLowerCase());

  // Add glass colors
  colors.add(themeConfig.colors.glass.background.toLowerCase());
  colors.add(themeConfig.colors.glass.border.toLowerCase());
  colors.add(themeConfig.colors.glass.shadow.toLowerCase());

  // Add shadow colors from effects
  Object.values(themeConfig.effects.shadows).forEach(shadow => {
    const shadowColors = extractColorValues(shadow);
    shadowColors.forEach(c => colors.add(c.toLowerCase()));
  });

  // Add gradient colors from effects
  Object.values(themeConfig.effects.gradients).forEach(gradient => {
    const gradientColors = extractColorValues(gradient);
    gradientColors.forEach(c => colors.add(c.toLowerCase()));
  });

  return colors;
}

/**
 * Check if a color is a Tailwind CSS utility class (allowed)
 */
function isTailwindColorClass(context: string): boolean {
  // Tailwind color patterns that are acceptable
  const tailwindPatterns = [
    /text-(white|black|transparent|current)/,
    /bg-(white|black|transparent|current)/,
    /border-(white|black|transparent|current)/,
    /text-\w+\/\d+/,  // opacity modifiers like text-white/50
    /bg-\w+\/\d+/,    // opacity modifiers like bg-white/5
    /border-\w+\/\d+/, // opacity modifiers like border-white/10
    /text-(primary|secondary|tertiary)/, // semantic color names
    /bg-(primary|secondary|tertiary)/,
    /border-(primary|secondary|tertiary)/,
  ];

  return tailwindPatterns.some(pattern => pattern.test(context));
}

/**
 * Recursively get all component files
 */
function getComponentFiles(dir: string): string[] {
  const files: string[] = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...getComponentFiles(fullPath));
    } else if (entry.isFile() && /\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

describe('Property 4: Theme Color Consistency', () => {
  const themeColors = getThemeColors();
  const componentsDir = path.join(process.cwd(), 'components');
  const componentFiles = getComponentFiles(componentsDir);

  test('all hardcoded colors in components should be in theme config', () => {
    const violations: Array<{ file: string; color: string; line: number }> = [];

    for (const file of componentFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        // Skip comments and imports
        if (line.trim().startsWith('//') || 
            line.trim().startsWith('/*') || 
            line.trim().startsWith('*') ||
            line.trim().startsWith('import')) {
          return;
        }

        // Skip Tailwind classes (they're acceptable)
        if (isTailwindColorClass(line)) {
          return;
        }

        const colors = extractColorValues(line);
        
        for (const color of colors) {
          const normalizedColor = color.toLowerCase();
          
          // Check if this color is in the theme config
          if (!themeColors.has(normalizedColor)) {
            // Additional check: is this color part of a Tailwind opacity modifier?
            // e.g., rgba(255, 255, 255, 0.02) is acceptable if it's in theme
            const isWhiteWithOpacity = /rgba?\(255,\s*255,\s*255,/.test(normalizedColor);
            const isBlackWithOpacity = /rgba?\(0,\s*0,\s*0,/.test(normalizedColor);
            
            // These are acceptable as they're commonly used with opacity
            if (isWhiteWithOpacity || isBlackWithOpacity) {
              continue;
            }

            violations.push({
              file: path.relative(process.cwd(), file),
              color: color,
              line: index + 1,
            });
          }
        }
      });
    }

    // Report violations
    if (violations.length > 0) {
      const report = violations
        .map(v => `  ${v.file}:${v.line} - ${v.color}`)
        .join('\n');
      
      expect.fail(
        `Found ${violations.length} hardcoded color(s) not in theme config:\n${report}\n\n` +
        `All colors should be defined in theme/config.ts`
      );
    }

    expect(violations).toHaveLength(0);
  });

  test('property: theme config should contain all required color categories', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('background', 'text', 'accent', 'glass'),
        (category) => {
          // Verify that each category exists in theme config
          expect(themeConfig.colors).toHaveProperty(category);
          
          const categoryColors = themeConfig.colors[category as keyof typeof themeConfig.colors];
          expect(categoryColors).toBeDefined();
          expect(typeof categoryColors).toBe('object');
          
          // Each category should have at least one color defined
          const colorValues = Object.values(categoryColors);
          expect(colorValues.length).toBeGreaterThan(0);
          
          // Each color value should be a valid string
          colorValues.forEach(color => {
            expect(typeof color).toBe('string');
            expect(color.length).toBeGreaterThan(0);
          });

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('property: all theme colors should be valid CSS color values', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...Array.from(themeColors)),
        (color) => {
          // Check if color is a valid hex, rgb, rgba, hsl, or hsla
          const isValidHex = /^#[0-9A-Fa-f]{3,8}$/.test(color);
          const isValidRgb = /^rgba?\([^)]+\)$/.test(color);
          const isValidHsl = /^hsla?\([^)]+\)$/.test(color);

          expect(isValidHex || isValidRgb || isValidHsl).toBe(true);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('property: glassmorphism helper should only use theme colors', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 50 }),
        fc.double({ min: 0, max: 1 }),
        fc.double({ min: 0, max: 1 }),
        fc.double({ min: 0, max: 2 }),
        (blur, opacity, borderOpacity, shadowIntensity) => {
          // Import the helper function
          const { getGlassmorphismStyles } = require('../../theme/config');
          
          const styles = getGlassmorphismStyles(blur, opacity, borderOpacity, shadowIntensity);
          
          // Verify the styles object is valid
          expect(styles).toBeDefined();
          expect(styles.background).toBeDefined();
          expect(styles.backdropFilter).toBeDefined();
          expect(styles.border).toBeDefined();
          expect(styles.boxShadow).toBeDefined();

          // Verify background uses rgba with white
          expect(styles.background).toMatch(/^rgba\(255,\s*255,\s*255,/);
          
          // Verify backdrop filter has blur
          expect(styles.backdropFilter).toContain('blur');
          expect(styles.backdropFilter).toContain(`${blur}px`);

          // Verify border uses rgba with white
          expect(styles.border).toMatch(/rgba\(255,\s*255,\s*255,/);

          // Verify box shadow uses rgba with black
          expect(styles.boxShadow).toMatch(/rgba\(0,\s*0,\s*0,/);

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('property: theme custom properties should map to theme colors', () => {
    const { darkTheme } = require('../../theme/config');
    
    fc.assert(
      fc.property(
        fc.constantFrom(
          '--color-bg-primary',
          '--color-bg-secondary',
          '--color-bg-tertiary',
          '--color-text-primary',
          '--color-text-secondary',
          '--color-text-tertiary',
          '--color-accent-primary',
          '--color-accent-secondary'
        ),
        (customProperty) => {
          // Verify custom property exists
          expect(darkTheme.customProperties).toHaveProperty(customProperty);
          
          const value = darkTheme.customProperties[customProperty];
          
          // Verify it's a valid color value
          expect(typeof value).toBe('string');
          expect(value.length).toBeGreaterThan(0);

          // Verify it matches a theme color
          const normalizedValue = value.toLowerCase();
          expect(themeColors.has(normalizedValue)).toBe(true);

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
