import React from 'react';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex items-center justify-between text-xs sm:text-sm text-slate-400">
        <button
          onClick={handlePrivacyClick}
          className="hover:text-slate-600 transition-colors focus:outline-none cursor-pointer"
        >
          Privacy
        </button>
        <button
          onClick={handleHomeClick}
          className="font-semibold text-slate-400 hover:text-slate-600 transition-colors focus:outline-none cursor-pointer"
        >
          silent
        </button>
      </div>
    </footer>
  );
};
