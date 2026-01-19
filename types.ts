export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  year: string;
}

export interface VibecodedApp {
  id: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Tweet {
  id: string;
  content: string;
  date: string;
  likes: number;
  retweets: number;
}

export interface WritingPiece {
  id: string;
  title: string;
  description: string;
  category: 'Essay' | 'Thread' | 'Note' | 'Observation' | 'Experiment';
  tags: string[];
  link: string;
}