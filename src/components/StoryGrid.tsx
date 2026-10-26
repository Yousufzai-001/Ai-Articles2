import React from 'react';
import { Story } from '../types';
import { StoryCard } from './StoryCard';
import { AdSlot } from './AdSlot';

interface StoryGridProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

export const StoryGrid: React.FC<StoryGridProps> = ({ stories, onSelectStory }) => {
  return (
    <main className="w-full">
      {/* Hero Header Section */}
      <section className="pt-10 sm:pt-14 pb-8 sm:pb-12 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
          Recent Stories
        </h1>
        <p className="text-slate-500 text-base sm:text-lg font-normal">
          Latest updates, analysis, and insights from silent.
        </p>
      </section>

      {/* Stories Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, index) => (
            <React.Fragment key={story.id}>
              <StoryCard story={story} onSelectStory={onSelectStory} />
              {/* Optional in-feed ad spacer after row 2 for high ad yield */}
              {index === 5 && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 py-2">
                  <AdSlot format="banner" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};
