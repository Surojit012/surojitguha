import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export const Context: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col items-center py-24 px-6 md:px-12 bg-background relative z-10 font-sans">
      <div className="w-full max-w-2xl">
        <div className="mb-20">
          <Link 
            href="/"
            className="font-mono text-xs tracking-widest text-secondary/70 hover:text-white transition-colors uppercase cursor-pointer inline-block"
          >
            ← Index
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16">
            Context
          </h1>

          <div className="text-secondary font-light leading-relaxed text-lg space-y-8">
            <p>
              I build at the edge of infrastructure and interface because that’s where systems fail quietly.
            </p>
            <p>
              Most failures in complex systems don’t come from broken cryptography or missing primitives. They come from misunderstanding. From interfaces that hide assumptions. From incentives that are technically correct but humanly unreadable. Over time, I’ve become less interested in what systems can do and more interested in how they are actually experienced.
            </p>
            <p>
              That’s where my work lives.
            </p>

            <div className="h-4" />

            <p>
              I’ve been in web3 long enough to see patterns repeat.
            </p>
            <p>
              New protocols launch. New primitives emerge. Narratives cycle. What stays constant is that most systems are designed as if users will adapt to complexity, rather than the other way around. When they don’t, we blame education, onboarding, or “early days.”
            </p>
            <p>
              I don’t think that’s the real problem.
            </p>
            <p className="border-l-2 border-white/10 pl-6 italic">
              I think interfaces are protocol decisions.<br/>
              I think usability is infrastructure risk.<br/>
              And I think culture determines adoption long before tooling does.
            </p>
            <p>
              My background isn’t academic and it isn’t corporate. I learned by being close to communities by moderating, participating, watching incentives play out in real time. That proximity teaches you things documentation never will. You see how reputation forms. How trust leaks. How coordination fails. How small design decisions compound into large outcomes.
            </p>
            <p>
              Over time, that shaped how I approach building.
            </p>
            <p>
              I don’t start with grand roadmaps.<br/>
              I start with questions.
            </p>

            <div className="h-4" />

            <p>
              <strong className="text-white font-medium">Vibecoding</strong> is the method that lets me explore those questions honestly.
            </p>
            <p>
              Not because it’s fast (though speed matters) but because it removes excuses. When the cost of turning an idea into an artifact drops, taste becomes the bottleneck. You can’t hide behind planning. You have to decide what matters.
            </p>
            <p>
              AI, for me, is leverage. It collapses the distance between intent and execution. It allows me to prototype interfaces, tools, and systems early before ideas harden into ideology. Most of what I build starts as an experiment. Some of it breaks. Some of it earns refinement.
            </p>
            <p>
              That filtering process is intentional.
            </p>
            <p className="text-white font-normal text-xl">
              Speed first.<br/>
              Taste always.
            </p>

            <div className="h-4" />

            <p>
              I’m not interested in building products for everyone.
            </p>
            <p>
              I’m interested in building things that clarify ideas:
            </p>
            <ul className="list-none pl-0 space-y-4 my-6">
              <li className="pl-4 border-l border-white/20 text-primary/90">tools that surface signal instead of metrics</li>
              <li className="pl-4 border-l border-white/20 text-primary/90">systems that prioritize proof over performance</li>
              <li className="pl-4 border-l border-white/20 text-primary/90">interfaces that reduce cognitive load instead of adding features</li>
            </ul>
            <p>
              A lot of my work sits around reputation, identity, and trust, not as abstractions, but as lived experiences. How does credibility form without follower counts? How does identity exist without exposure? How do we design systems that don’t require constant attention to function?
            </p>
            <p>
              These questions don’t have clean answers. That’s why I keep returning to them.
            </p>

            <div className="h-4" />

            <p>
              Writing is part of the same process.
            </p>
            <p>
              I write publicly because it forces clarity. It exposes weak thinking quickly. Some ideas remain text. Some demand interfaces. Vibecoding collapses the distance between the two. A thread becomes a prototype. A prototype becomes a reference. Sometimes that’s where it ends. Sometimes it opens a new path.
            </p>
            <p>
              This site exists to index that exploration, not to summarize it.
            </p>

            <div className="h-4" />

            <p>
              I’m skeptical of performative complexity.<br/>
              I’m cautious of systems that require constant explanation.<br/>
              I’m uninterested in growth without understanding.
            </p>
            <p>
              I care about:
            </p>
            <ul className="list-none pl-0 space-y-2">
              <li className="pl-4 border-l border-white/10">calm software</li>
              <li className="pl-4 border-l border-white/10">explicit logic</li>
              <li className="pl-4 border-l border-white/10">systems that degrade gracefully</li>
              <li className="pl-4 border-l border-white/10">tools that earn trust quietly</li>
            </ul>
            <p>
              If something needs to shout, it’s probably compensating.
            </p>

            <div className="h-8" />

            <p className="text-sm font-mono text-secondary/80 uppercase tracking-widest mb-4">
              Context
            </p>
            <p>
              This page isn’t a manifesto and it isn’t a biography. It’s context.
            </p>
            <p>
              A snapshot of how I’m thinking right now, knowing that it will evolve. The work will change. The questions will sharpen. The direction will refine itself through use.
            </p>
            <p>
              That’s the point.
            </p>
            <p className="text-white text-xl mt-8">
              This site is not a destination.<br/>
              It’s a record of motion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};