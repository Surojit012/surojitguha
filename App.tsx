import React, { Suspense, useState, useEffect } from 'react';
import { Route, Switch, Router } from 'wouter';
import { Scene } from './components/Canvas/Scene';
import { Home } from './components/Pages/Home';
import { Context } from './components/Pages/Context';
import { CommandMenu } from './components/UI/CommandMenu';
import { useScroll, useSpring, motion } from 'framer-motion';

// Custom hook for hash-based routing to avoid blob URL security issues
// This ensures the app works correctly in preview environments where pushState is restricted
const useHashLocation = () => {
  const [loc, setLoc] = useState(() => window.location.hash.replace(/^#/, "") || "/");
  
  useEffect(() => {
    const handler = () => setLoc(window.location.hash.replace(/^#/, "") || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };

  return [loc, navigate] as [string, (to: string) => void];
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router hook={useHashLocation}>
      <div className="relative w-full min-h-screen bg-background text-primary selection:bg-white selection:text-black">
        <CommandMenu />
        
        {/* WebGL Background Layer - Fixed */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[1px] bg-white z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Foreground Content Layer */}
        <main className="relative z-10 w-full">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/context" component={Context} />
            {/* Catch-all route for any other path */}
            <Route component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;