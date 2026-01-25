import React from 'react';
import { Hero } from '../Sections/Hero';
import { About } from '../Sections/About';
import { VibecodedApps } from '../Sections/VibecodedApps';
import { ToolsIThinkWith } from '../Sections/ToolsIThinkWith';
import { WhyVibecoding } from '../Sections/WhyVibecoding';
import { Writing } from '../Sections/Writing';
import { Signals } from '../Sections/Signals';
import { Conclusion } from '../Sections/Conclusion';
import { Footer } from '../Sections/Footer';
import { Navigation } from '../UI/Navigation';

export const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="w-full">
        <Hero />
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full space-y-0">
          <About />
          <VibecodedApps />
          <ToolsIThinkWith />
          <WhyVibecoding />
          <Writing />
          <Signals />
          <Conclusion />
        </div>
        <Footer />
      </div>
    </>
  );
};