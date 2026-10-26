import React, { useState } from 'react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
  onSelectStory: (story: Story) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onSelectStory }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onSelectStory(story)}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer"
    >
      {/* Thumbnail Area */}
      <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-slate-100 animate-pulse" />
        )}
        {!imageError ? (
          <img
            src={story.image}
            alt={story.imageAlt || story.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-6 text-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              {story.category}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Date */}
        <time className="text-xs font-normal text-slate-400 mb-2.5 block">
          {story.date}
        </time>

        {/* Title */}
        <h2 className="text-slate-900 font-bold text-lg sm:text-[19px] leading-snug tracking-tight mb-4 flex-1 line-clamp-4 group-hover:text-blue-600 transition-colors">
          {story.title}
        </h2>

        {/* Action Link */}
        <div className="mt-auto pt-2">
          <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
            Read Article
            <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </article>
  );
};
