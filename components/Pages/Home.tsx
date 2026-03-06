import React from 'react';
import { Hero } from '../Sections/Hero';
import { About } from '../Sections/About';
import { Writing } from '../Sections/Writing';
import { BuilderLab } from '../Sections/BuilderLab';
import { ToolsIThinkWith } from '../Sections/ToolsIThinkWith';
import { WhyVibecoding } from '../Sections/WhyVibecoding';
import { Philosophy } from '../Sections/Philosophy';
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
          <Writing />
          <BuilderLab />
          <ToolsIThinkWith />
          <WhyVibecoding />
          <Philosophy />
          <Signals />
          <Conclusion />
        </div>
        <Footer />
      </div>
    </>
  );
};