export interface Story {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt?: string;
  summary: string;
  content: string[];
  author: string;
}

export type ActivePage = 'blog' | 'contact' | 'terms' | 'privacy' | 'story';
