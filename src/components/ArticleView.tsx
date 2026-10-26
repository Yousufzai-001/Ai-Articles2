import React, { useState } from 'react';
import { Story } from '../types';
import { AdSlot } from './AdSlot';
import { ArrowLeft, Share2, Check, Clock, Calendar, User } from 'lucide-react';

interface ArticleViewProps {
  story: Story;
  allStories: Story[];
  onBack: () => void;
  onSelectStory: (story: Story) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  story,
  allStories,
  onBack,
  onSelectStory,
}) => {
  const [copied, setCopied] = useState(false);

  const relatedStories = allStories
    .filter((s) => s.id !== story.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: story.title,
          text: story.summary,
          url: window.location.href,
        });
        return;
      } catch {
        // User cancelled or not supported
      }
    }
    // Fallback: Copy link
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article className="w-full pb-20">
      {/* Top Navigation Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
          Back to all stories
        </button>
      </div>

      {/* Main Article Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Meta Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mb-3">
            <span className="inline-flex items-center gap-1 font-medium text-slate-600">
              <Calendar className="w-3.5 h-3.5" />
              {story.date}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {story.readTime}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {story.author}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-snug">
            {story.title}
          </h1>
        </div>

        {/* Action / Share Bar */}
        <div className="flex items-center justify-between border-y border-slate-100 py-3 mb-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
            {story.category}
          </span>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-600">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Story</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-8 border border-slate-100 shadow-sm">
          <img
            src={story.image}
            alt={story.imageAlt || story.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Ad Slot for High Ad Impression */}
        <AdSlot format="banner" className="mb-8" />

        {/* Summary Lead */}
        <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed mb-8 italic border-l-4 border-slate-900 pl-4 py-1">
          {story.summary}
        </p>

        {/* Story Paragraphs */}
        <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
          {story.content.slice(0, 4).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          {/* Mid-Article Ad Slot for Maximum Revenue */}
          <AdSlot format="rectangle" className="my-8" />

          {story.content.slice(4).map((p, idx) => (
            <p key={`rest-${idx}`}>{p}</p>
          ))}
        </div>

        {/* Bottom Article Banner */}
        <AdSlot format="banner" className="my-10" />

        {/* Bottom Back & Share */}
        <div className="border-t border-slate-100 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to Stories Feed
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            Share with friends
          </button>
        </div>

        {/* Recommended Stories */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-6">
            More Recent Stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedStories.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectStory(rel);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3 border border-slate-100">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[11px] text-slate-400 mb-1">{rel.date}</span>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 line-clamp-3 leading-snug">
                  {rel.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
