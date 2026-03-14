import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, ArrowUpRight } from 'lucide-react';

interface LabProject {
  id: string;
  name: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: LabProject[] = [
  {
    id: '1',
    name: 'ProofOfBags',
    description: 'A playful web experiment exploring digital ownership and collectible culture. Users can mint and showcase unique “bags” as proof of participation in internet culture.',
    tech: ['Next.js', 'React', 'Vercel', 'Web3 Concepts'],
    link: 'https://proofofbags.vercel.app/'
  },
  {
    id: '2',
    name: 'Tapri – The Tea House',
    description: 'A modern landing page for a tea brand inspired by Indian street chai culture. Built to experiment with storytelling, UI aesthetics, and brand-first web design.',
    tech: ['Next.js', 'React', 'TailwindCSS', 'UI Design'],
    link: 'https://tapri-theteahouse.vercel.app/'
  },
  {
    id: '3',
    name: 'Work3Hub',
    description: 'A concept platform exploring decentralized workspaces where builders collaborate, share ideas, and coordinate projects in the Web3 ecosystem.',
    tech: ['Next.js', 'React', 'Web3', 'Community Tools'],
    link: 'https://work3hub.vercel.app/'
  },
  {
    id: '4',
    name: 'VibeIdeas',
    description: 'An idea generator designed for vibecoders and builders. It helps generate creative startup and product ideas using AI-assisted brainstorming.',
    tech: ['AI', 'Prompt Engineering', 'React', 'Rapid Prototyping'],
    link: 'https://vibeideas-blue.vercel.app/'
  },
  {
    id: '5',
    name: 'BuidlMyResumeAI',
    description: 'An AI-powered resume builder that helps developers and builders generate structured, professional resumes quickly using AI.',
    tech: ['AI Generation', 'Next.js', 'React', 'Developer Tools'],
    link: 'https://buidlmyresumeai.vercel.app/'
  },
  {
    id: '6',
    name: 'Nexora',
    description: 'A futuristic AI-native web interface exploring modern design systems, animated UI components, and immersive web experiences for next-generation applications.',
    tech: ['Next.js', 'React', 'Modern UI', 'Experimental Design'],
    link: 'https://nexora-seven-kappa.vercel.app/'
  },
  {
    id: '7',
    name: 'Nora Web',
    description: 'A sleek web presence focused on clean visuals, modern layout, and a crisp brand-forward experience.',
    tech: ['Next.js', 'React', 'UI Design', 'Vercel'],
    link: 'https://nora-web-one.vercel.app/'
  }
];

const LabCard: React.FC<{ project: LabProject; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    className="group relative glass glass-hover hover-glow rounded-xl p-5 sm:p-6 md:p-8 transition-all duration-700 flex flex-col min-h-[200px] noise-bg"
  >
    {/* Header */}
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
        <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-glow transition-colors duration-500">
          {project.name}
        </h3>
      </div>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-secondary/30 group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out"
      >
        <ArrowUpRight size={18} />
      </a>
    </div>

    {/* Description */}
    <p className="text-xs sm:text-sm text-secondary/70 font-light leading-relaxed mb-6 flex-1 relative z-10">
      {project.description}
    </p>

    {/* Tech Tags */}
    <div className="flex flex-wrap gap-2 mb-5 relative z-10">
      {project.tech.map(t => (
        <span
          key={t}
          className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-secondary/40 border border-white/5 px-2 py-0.5 rounded-full group-hover:border-white/10 group-hover:text-secondary/60 transition-all duration-500"
        >
          {t}
        </span>
      ))}
    </div>

    {/* View Project Button */}
    <div className="relative z-10">
      <a
        href={project.link}
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-secondary/50 group-hover:text-purple-300/80 transition-colors duration-500"
      >
        View Project ↗
      </a>
    </div>
  </motion.div>
);

export const BuilderLab: React.FC = () => {
  return (
    <section id="lab" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 sm:mb-16 max-w-xl"
      >
        <div className="flex items-center gap-3 mb-3 sm:mb-4 text-secondary/70">
          <FlaskConical size={14} />
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            03 / BUILDER LAB
          </span>
        </div>
        <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
          Experimental projects exploring AI tools, developer workflows, and modern web experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((project, i) => (
          <LabCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};
