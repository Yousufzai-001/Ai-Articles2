/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ActivePage, Story } from './types';
import { STORIES } from './data/stories';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StoryGrid } from './components/StoryGrid';
import { ArticleView } from './components/ArticleView';
import { ContactView } from './components/ContactView';
import { TermsView } from './components/TermsView';
import { PrivacyView } from './components/PrivacyView';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('blog');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  // Sync with browser URL hash for direct links and browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/story/')) {
        const idOrSlug = hash.replace('#/story/', '');
        const found = STORIES.find(
          (s) => s.id === idOrSlug || s.slug === idOrSlug
        );
        if (found) {
          setSelectedStory(found);
          setActivePage('story');
          return;
        }
      }

      if (hash === '#/contact') {
        setActivePage('contact');
        setSelectedStory(null);
      } else if (hash === '#/terms') {
        setActivePage('terms');
        setSelectedStory(null);
      } else if (hash === '#/privacy') {
        setActivePage('privacy');
        setSelectedStory(null);
      } else {
        setActivePage('blog');
        setSelectedStory(null);
      }
    };

    // Run on initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: ActivePage) => {
    setActivePage(page);
    if (page === 'blog') {
      setSelectedStory(null);
      window.location.hash = '';
    } else if (page === 'contact') {
      setSelectedStory(null);
      window.location.hash = '#/contact';
    } else if (page === 'terms') {
      setSelectedStory(null);
      window.location.hash = '#/terms';
    } else if (page === 'privacy') {
      setSelectedStory(null);
      window.location.hash = '#/privacy';
    }
  };

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
    setActivePage('story');
    window.location.hash = `#/story/${story.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    navigateTo('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Header matching screenshot */}
      <Header activePage={activePage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <div className="flex-1">
        {activePage === 'blog' && (
          <StoryGrid stories={STORIES} onSelectStory={handleSelectStory} />
        )}

        {activePage === 'story' && selectedStory && (
          <ArticleView
            story={selectedStory}
            allStories={STORIES}
            onBack={handleBackToBlog}
            onSelectStory={handleSelectStory}
          />
        )}

        {activePage === 'contact' && (
          <ContactView onBackToBlog={handleBackToBlog} />
        )}

        {activePage === 'terms' && (
          <TermsView onBackToBlog={handleBackToBlog} />
        )}

        {activePage === 'privacy' && (
          <PrivacyView onBackToBlog={handleBackToBlog} />
        )}
      </div>

      {/* Footer matching screenshot */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
