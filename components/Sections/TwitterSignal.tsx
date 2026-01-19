import React from 'react';
import { motion } from 'framer-motion';
import { Tweet } from '../../types';
import { MessageSquare } from 'lucide-react';

const mockTweets: Tweet[] = [
  {
    id: '1',
    content: "The interface is the protocol. If users can't navigate it without fear, the underlying tech doesn't matter. Simplify the curve.",
    date: "2d ago",
    likes: 42,
    retweets: 12
  },
  {
    id: '2',
    content: "Exploring gentle computing. How can we make software that feels like furniture? Quiet, reliable, and there when you need it.",
    date: "5d ago",
    likes: 89,
    retweets: 24
  }
];

const TweetCard: React.FC<{ tweet: Tweet; index: number }> = ({ tweet, index }) => (
  <motion.a
    href="https://twitter.com/surojitpvt"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="block group border-l-2 border-white/10 pl-6 py-2 hover:border-white/40 transition-colors duration-300"
  >
    <p className="text-sm md:text-base text-primary/80 group-hover:text-white transition-colors duration-300 font-light mb-3 leading-relaxed">
      "{tweet.content}"
    </p>
    <div className="flex items-center gap-4 text-[10px] font-mono text-secondary/60 uppercase tracking-widest">
      <span>@surojitpvt</span>
      <span>{tweet.date}</span>
    </div>
  </motion.a>
);

export const TwitterSignal: React.FC = () => {
  return (
    <section className="py-20">
      <div className="mb-12 flex items-center justify-between">
        <span className="block text-xs font-mono text-secondary tracking-widest uppercase">
          03 / Signal
        </span>
        <MessageSquare size={14} className="text-secondary/50" />
      </div>
      
      <div className="space-y-8">
        {mockTweets.map((t, i) => (
          <TweetCard key={t.id} tweet={t} index={i} />
        ))}
      </div>
    </section>
  );
};