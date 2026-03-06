# Implementation Plan: AI-Native Portfolio Upgrade

## Overview

This implementation plan transforms Surojit Guha's portfolio into a premium, AI-native experience with enhanced visual effects, new content sections, and a comprehensive animation system. The implementation uses React 18.2.0 with TypeScript, Three.js for 3D graphics, Framer Motion for animations, and follows a performance-first approach with 60fps animations, WCAG 2.1 AA accessibility compliance, and responsive design across all devices.

The plan follows 6 phases: Foundation setup, Hero section implementation, Content sections, Footer enhancement, Testing and refinement, and Documentation/deployment.

## Tasks

- [ ] 1. Foundation setup - Theme system, animation configuration, and testing infrastructure
  - [x] 1.1 Create theme system with TypeScript interfaces and configuration
    - Create `src/theme/types.ts` with ThemeConfig, Theme, and GlassmorphismProps interfaces
    - Create `src/theme/config.ts` with complete color palette, typography system, and effect definitions
    - Implement theme colors: background (#0B0B0D, #121214, #1A1A1D), text (#FFFFFF, #A0A0A8, #606068), accent (#6366F1, #8B5CF6)
    - Implement typography scale: 12px-96px with Inter/SF Pro font stack
    - Define glassmorphism effects: backdrop-filter blur(12px), rgba backgrounds, border styles
    - _Requirements: 2.1, 2.2, 2.3_

  - [-] 1.2 Write property test for theme color consistency
    - **Property 4: Theme Color Consistency**
    - **Validates: Requirements 2.1**

  - [ ] 1.3 Create animation configuration system
    - Create `src/animations/types.ts` with AnimationConfig interface
    - Create `src/animations/config.ts` with scroll, hover, and particle animation settings
    - Implement reduced motion detection using prefers-reduced-motion media query
    - Configure animation defaults: 300ms duration, cubic-bezier(0.16, 1, 0.3, 1) easing
    - _Requirements: 7.1, 7.2_

  - [ ] 1.4 Write property test for reduced motion preference respect
    - **Property 13: Reduced Motion Preference Respect**
    - **Validates: Requirements 7.1**

  - [ ] 1.5 Set up testing infrastructure
    - Install and configure Vitest for unit testing
    - Install and configure fast-check for property-based testing
    - Install React Testing Library and jest-axe for accessibility testing
    - Create test utilities in `tests/utils/` for common test helpers
    - Configure test coverage thresholds (>80% line coverage, >75% branch coverage)
    - _Requirements: Testing strategy_

- [ ] 2. Checkpoint - Verify foundation setup
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 3. Hero section implementation - AnimatedGradientText, Rotating3DObject, ParticleSystem
  - [ ] 3.1 Implement AnimatedGradientText component
    - Create `src/components/hero/AnimatedGradientText.tsx` with AnimatedGradientTextProps interface
    - Implement CSS background-clip with animated gradient using CSS custom properties
    - Configure gradient colors: deep purple → electric blue → cyan → purple (8-10s loop)
    - Add Framer Motion entrance animations with fade-in and slide-up
    - Implement reduced motion fallback (static gradient)
    - _Requirements: 1.1, 2.3_

  - [ ] 3.2 Write property test for gradient animation cycle completeness
    - **Property 1: Gradient Animation Cycle Completeness**
    - **Validates: Requirements 1.1**

  - [ ] 3.3 Write unit tests for AnimatedGradientText
    - Test gradient color array rendering
    - Test animation duration configuration
    - Test reduced motion fallback
    - Test className prop application
    - _Requirements: 1.1_

  - [ ] 3.4 Implement Rotating3DObject component
    - Create `src/components/hero/Rotating3DObject.tsx` with Rotating3DObjectProps interface
    - Set up @react-three/fiber Canvas component with proper configuration
    - Implement icosahedron geometry with custom gradient wireframe shader
    - Add auto-rotation using useFrame hook (0.005 rad/frame)
    - Implement mouse interaction for subtle tilt based on cursor position
    - Add responsive scaling based on viewport size
    - Implement lazy loading with React.lazy for code splitting
    - _Requirements: 1.2, 9.1_

  - [ ] 3.5 Write property test for 3D object rotation continuity
    - **Property 2: 3D Object Rotation Continuity**
    - **Validates: Requirements 1.2**

  - [ ] 3.6 Write unit tests for Rotating3DObject
    - Test geometry prop variations (torus, icosahedron, octahedron)
    - Test rotation speed configuration
    - Test WebGL fallback when not supported
    - Test lazy loading behavior
    - _Requirements: 1.2_

  - [ ] 3.7 Implement ParticleSystem component
    - Create `src/components/hero/ParticleSystem.tsx` with ParticleSystemProps interface
    - Implement Canvas 2D API particle rendering with particle pool pattern
    - Configure 50-80 particles with 1-3px size, white color with 0.1-0.3 opacity
    - Implement upward drift with horizontal wobble movement
    - Add particle respawn at bottom when exiting top of viewport
    - Implement fade in/out based on scroll position
    - Add optional cursor repulsion interaction
    - Use requestAnimationFrame for animation loop
    - _Requirements: 1.3, 9.2_

  - [ ] 3.8 Write property test for particle system boundary constraints
    - **Property 3: Particle System Boundary Constraints**
    - **Validates: Requirements 1.3**

  - [ ] 3.9 Write unit tests for ParticleSystem
    - Test particle count limits
    - Test spawn area boundaries
    - Test velocity range configuration
    - Test cleanup on unmount
    - _Requirements: 1.3_

  - [ ] 3.10 Create HeroEnhanced component integrating all hero elements
    - Create `src/components/hero/HeroEnhanced.tsx`
    - Integrate AnimatedGradientText, Rotating3DObject, and ParticleSystem
    - Implement responsive layout: 3D object right of text on desktop, above on mobile
    - Add glassmorphism container with proper z-index layering
    - Implement scroll-triggered entrance animations with Framer Motion
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [ ] 3.11 Write integration tests for HeroEnhanced
    - Test all three components render together
    - Test responsive layout at different breakpoints
    - Test scroll animations trigger correctly
    - _Requirements: 1.4_

- [ ] 4. Checkpoint - Verify hero section implementation
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Content sections implementation - BuilderLab, Philosophy, ThinkingEnhanced
  - [ ] 5.1 Create data models for Builder Lab
    - Create `src/types/project.ts` with Project, Technology, and ProjectStatus types
    - Define 4 project data objects: Vibecoded Apps, Dynamic NFT System, Infrastructure Experiments, Signal Processing
    - Include all required fields: title, description, technologies, status, featured, links
    - _Requirements: 4.1_

  - [ ] 5.2 Write property test for component data completeness
    - **Property 8: Component Data Completeness**
    - **Validates: Requirements 4.1**

  - [ ] 5.3 Implement ProjectCard component
    - Create `src/components/builder-lab/ProjectCard.tsx` with ProjectCardProps interface
    - Implement glassmorphism container with hover effects (scale 1.02, shadow expansion)
    - Add technology tags with pill design and fade-in stagger animation
    - Implement status indicator with colored dot (pulse animation for 'development')
    - Add image reveal on hover if image available
    - Implement click handler for navigation or expansion
    - _Requirements: 4.2, 4.3_

  - [ ] 5.4 Write property test for status indicator visual distinctness
    - **Property 9: Status Indicator Visual Distinctness**
    - **Validates: Requirements 4.3**

  - [ ] 5.5 Write unit tests for ProjectCard
    - Test all status types render correctly
    - Test hover animations
    - Test technology tag rendering
    - Test click behavior
    - Test image fallback
    - _Requirements: 4.2, 4.3_

  - [ ] 5.6 Implement BuilderLab section component
    - Create `src/components/builder-lab/BuilderLab.tsx` with BuilderLabProps interface
    - Implement responsive grid layout: 2x2 on desktop, single column on mobile
    - Add scroll-triggered staggered entrance animations (100ms delay per card)
    - Render 4 ProjectCard components with project data
    - Add section heading with animated gradient text
    - _Requirements: 4.1, 4.4, 8.1_

  - [ ] 5.7 Write property test for scroll animation trigger accuracy
    - **Property 10: Scroll Animation Trigger Accuracy**
    - **Validates: Requirements 4.4, 7.2**

  - [ ] 5.8 Write unit tests for BuilderLab
    - Test grid layout at different breakpoints
    - Test staggered animations
    - Test empty projects array handling
    - _Requirements: 4.1, 4.4_

  - [ ] 5.9 Create data models for Philosophy section
    - Create `src/types/philosophy.ts` with PhilosophyPrinciple interface
    - Define 4 principle data objects: Build in Public, Infrastructure Over Apps, Thoughtful Defaults, Signal Over Noise
    - Include title, description, icon configuration for each principle
    - _Requirements: 5.1_

  - [ ] 5.10 Implement Philosophy section component
    - Create `src/components/philosophy/Philosophy.tsx` with PhilosophyProps interface
    - Implement 2x2 grid layout on desktop, single column on mobile
    - Create principle cards with glassmorphism, icon at top, title, description
    - Add subtle hover animation (lift + glow effect)
    - Implement scroll-triggered entrance animations
    - _Requirements: 5.1, 5.2_

  - [ ] 5.11 Write unit tests for Philosophy
    - Test principle card rendering
    - Test grid layout responsiveness
    - Test hover animations
    - Test icon rendering (lucide, custom, emoji types)
    - _Requirements: 5.1, 5.2_

  - [ ] 5.12 Enhance existing Thinking section
    - Create `src/components/thinking/ThinkingEnhanced.tsx` based on existing Thoughts component
    - Preserve existing ThinkingCard data structure and content
    - Add hover effects: translateY(-8px), glow with accent color, content reveal
    - Implement animated gradient border on hover
    - Increase backdrop blur on hover: blur(12px) → blur(16px)
    - Add staggered entrance animations (50ms delay between cards)
    - Configure animation timing: 300ms lift, 200ms glow, ease-out-expo easing
    - _Requirements: 3.1, 3.2, 10.1_

  - [ ] 5.13 Write property test for hover state transition timing
    - **Property 7: Hover State Transition Timing**
    - **Validates: Requirements 3.1**

  - [ ] 5.14 Write unit tests for ThinkingEnhanced
    - Test hover effects trigger correctly
    - Test animation timing values
    - Test content reveal on hover
    - Test existing content preservation
    - _Requirements: 3.1, 3.2, 10.1_

- [ ] 6. Checkpoint - Verify content sections implementation
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Footer enhancement and glassmorphism utilities
  - [ ] 7.1 Create glassmorphism utility functions
    - Create `src/utils/glassmorphism.ts` with glassmorphism style generator
    - Implement configurable blur, opacity, border opacity, and shadow intensity
    - Create Tailwind CSS utility classes for common glassmorphism patterns
    - _Requirements: 2.2_

  - [ ] 7.2 Write property test for glassmorphism effect completeness
    - **Property 5: Glassmorphism Effect Completeness**
    - **Validates: Requirements 2.2**

  - [ ] 7.3 Implement FooterEnhanced component
    - Create `src/components/footer/FooterEnhanced.tsx` with FooterEnhancedProps interface
    - Preserve existing footer content structure (sections, links, social, affiliations)
    - Add animated divider with gradient shimmer effect at top
    - Implement link hover animation: underline from left to right
    - Add social icon hover effects: scale + color change
    - Implement affiliation badges with glassmorphism and hover glow
    - Add fade-in animation on scroll into view
    - Improve layout: 3 columns desktop, 1 column mobile with better spacing
    - Add optional "Back to Top" button with smooth scroll
    - _Requirements: 6.1, 6.2, 10.1_

  - [ ] 7.4 Write property test for link validity and attributes
    - **Property 12: Link Validity and Attributes**
    - **Validates: Requirements 6.1, 10.3**

  - [ ] 7.5 Write unit tests for FooterEnhanced
    - Test link rendering and attributes (rel, target)
    - Test responsive layout
    - Test hover animations
    - Test social icon rendering
    - Test affiliation badge rendering
    - Test existing content preservation
    - _Requirements: 6.1, 6.2, 10.1_

- [ ] 8. Integration and wiring - Connect all components in Home page
  - [ ] 8.1 Update Home component with new sections
    - Update `src/pages/Home.tsx` to include HeroEnhanced, BuilderLab, ThinkingEnhanced, Philosophy, FooterEnhanced
    - Preserve existing sections: About, VibecodedApps, ToolsIThinkWith, WhyVibecoding, Writing, Signals, Conclusion
    - Maintain correct section order and spacing
    - Ensure proper z-index layering with background Scene
    - _Requirements: 10.1, 10.2_

  - [ ] 8.2 Write property test for existing section preservation
    - **Property 17: Existing Section Preservation**
    - **Validates: Requirements 10.1**

  - [ ] 8.3 Implement responsive layout system
    - Create `src/utils/responsive.ts` with breakpoint utilities
    - Define breakpoints: mobile <640px, tablet 640-1024px, desktop >1024px
    - Implement responsive hooks for component behavior
    - Add viewport width detection and resize handling
    - _Requirements: 8.1_

  - [ ] 8.4 Write property test for responsive layout breakpoint consistency
    - **Property 11: Responsive Layout Breakpoint Consistency**
    - **Validates: Requirements 1.4, 3.2, 5.2, 8.1**

  - [ ] 8.5 Write property test for content overflow prevention
    - **Property 14: Content Overflow Prevention**
    - **Validates: Requirements 8.2**

  - [ ] 8.6 Write integration tests for Home page
    - Test all sections render in correct order
    - Test scroll behavior across sections
    - Test navigation between sections
    - Test existing functionality preserved
    - _Requirements: 10.1, 10.2_

- [ ] 9. Checkpoint - Verify integration and responsive behavior
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Performance optimization
  - [ ] 10.1 Implement code splitting for heavy components
    - Lazy load Rotating3DObject component with React.lazy
    - Lazy load ParticleSystem component with React.lazy
    - Add loading fallbacks for lazy-loaded components
    - Configure Vite code splitting for optimal chunk sizes
    - _Requirements: 9.1_

  - [ ] 10.2 Optimize asset loading
    - Implement lazy loading for images with loading="lazy" attribute
    - Add alt text to all images for accessibility
    - Preload critical fonts (Inter or SF Pro)
    - Configure font-display: swap for web fonts
    - _Requirements: 9.3_

  - [ ] 10.3 Write property test for image lazy loading
    - **Property 16: Image Lazy Loading**
    - **Validates: Requirements 9.3**

  - [ ] 10.4 Optimize animation performance
    - Ensure all animations use CSS transforms (GPU-accelerated)
    - Add will-change property to animated elements
    - Implement throttling for scroll event handlers
    - Use Framer Motion's m components for smaller bundle size
    - _Requirements: 9.2_

  - [ ] 10.5 Implement performance monitoring
    - Add performance.now() timing for frame rate monitoring
    - Implement automatic particle count reduction if FPS drops below 30
    - Add console warnings for performance issues in development
    - Configure Vite build optimization settings
    - _Requirements: 9.2_

  - [ ] 10.6 Run Lighthouse performance tests
    - Test FCP <1.5s, LCP <2.5s, TTI <3.5s, CLS <0.1, FID <100ms
    - Test on throttled network (3G, 4G)
    - Test with CPU throttling (4x slowdown)
    - _Requirements: 9.2_

- [ ] 11. Accessibility compliance
  - [ ] 11.1 Implement keyboard navigation
    - Ensure all interactive elements are focusable
    - Add visible focus indicators with proper contrast
    - Implement logical tab order across all sections
    - Add skip-to-content link at page top
    - _Requirements: 8.3_

  - [ ] 11.2 Add ARIA attributes and semantic HTML
    - Use semantic HTML elements (nav, main, section, article, footer)
    - Add ARIA labels to icon buttons
    - Implement ARIA live regions for dynamic content
    - Add role attributes where needed
    - _Requirements: 8.3_

  - [ ] 11.3 Write property test for touch target minimum size
    - **Property 15: Touch Target Minimum Size**
    - **Validates: Requirements 8.3**

  - [ ] 11.4 Run accessibility audit with jest-axe
    - Test all components for WCAG 2.1 AA compliance
    - Test color contrast ratios (4.5:1 for text)
    - Test keyboard navigation
    - Test screen reader compatibility
    - _Requirements: 8.3_

  - [ ] 11.5 Implement reduced motion support across all components
    - Test prefers-reduced-motion in all animated components
    - Disable or simplify animations when reduced motion is preferred
    - Ensure core functionality works without animations
    - _Requirements: 7.1_

- [ ] 12. Testing and refinement
  - [ ] 12.1 Complete property-based test suite
    - Run all 18 property tests with 100+ iterations each
    - Verify all properties pass consistently
    - Document any edge cases discovered
    - _Requirements: All correctness properties_

  - [ ] 12.2 Run visual regression tests
    - Set up Chromatic or Percy for visual diffs
    - Test at multiple viewport sizes (320px, 768px, 1024px, 1920px)
    - Test hover and focus states
    - Test dark theme consistency
    - _Requirements: 2.1, 8.1_

  - [ ] 12.3 Cross-browser testing
    - Test on Chrome, Firefox, Safari (last 2 versions)
    - Test on Mobile Safari iOS 14+
    - Test on Chrome Android
    - Verify fallbacks work (glassmorphism, 3D graphics, animations)
    - _Requirements: Browser support_

  - [ ] 12.4 Fix any issues discovered during testing
    - Address failing tests
    - Fix visual regressions
    - Resolve browser compatibility issues
    - Optimize performance bottlenecks
    - _Requirements: All_

- [ ] 13. Checkpoint - Verify all tests pass and quality metrics met
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 14. Documentation and deployment preparation
  - [ ] 14.1 Create component documentation
    - Document all new components with usage examples
    - Document theme system and customization options
    - Document animation configuration
    - Add JSDoc comments to all public interfaces
    - _Requirements: Documentation_

  - [ ] 14.2 Update deployment configuration
    - Verify Vite production build configuration
    - Configure environment variables if needed
    - Set up error tracking (Sentry or similar)
    - Configure performance monitoring (Web Vitals)
    - _Requirements: Deployment_

  - [ ] 14.3 Create deployment checklist
    - Verify all tests pass
    - Verify bundle size is acceptable
    - Verify performance metrics meet targets
    - Verify accessibility compliance
    - Test production build locally
    - _Requirements: Deployment_

  - [ ] 14.4 Final QA pass
    - Test all user flows end-to-end
    - Verify all content is correct
    - Test on real devices (mobile, tablet, desktop)
    - Verify all links work
    - Check for console errors
    - _Requirements: All_

- [ ] 15. Final checkpoint - Ready for deployment
  - Ensure all tests pass, all documentation is complete, and the application is ready for production deployment.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements from the design document
- Checkpoints ensure incremental validation and user feedback opportunities
- Property tests validate universal correctness properties (18 total)
- Unit tests validate specific examples and edge cases
- The implementation preserves all existing content and functionality
- Performance target: 60fps animations, <2.5s LCP, <0.1 CLS
- Accessibility target: WCAG 2.1 AA compliance
- Browser support: Last 2 versions of Chrome, Firefox, Safari, plus mobile browsers
