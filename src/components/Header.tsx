import React, { useState } from 'react';
import { ActivePage } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('blog')}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 cursor-pointer focus:outline-none transition-opacity hover:opacity-85 select-none"
        >
          silent
        </button>

        {/* Desktop Navigation matching the screenshot */}
        <nav className="hidden sm:flex items-center space-x-6 sm:space-x-8 text-sm font-medium">
          <button
            onClick={() => handleNav('blog')}
            className={`cursor-pointer transition-colors pb-1 border-b-2 ${
              activePage === 'blog' || activePage === 'story'
                ? 'text-slate-900 border-slate-900 font-semibold'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => handleNav('contact')}
            className={`cursor-pointer transition-colors pb-1 border-b-2 ${
              activePage === 'contact'
                ? 'text-slate-900 border-slate-900 font-semibold'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => handleNav('terms')}
            className={`cursor-pointer transition-colors pb-1 border-b-2 ${
              activePage === 'terms'
                ? 'text-slate-900 border-slate-900 font-semibold'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            Terms and Conditions
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-lg">
          <button
            onClick={() => handleNav('blog')}
            className={`block w-full text-left py-2 text-base ${
              activePage === 'blog' || activePage === 'story'
                ? 'text-slate-950 font-bold'
                : 'text-slate-600 font-medium'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => handleNav('contact')}
            className={`block w-full text-left py-2 text-base ${
              activePage === 'contact'
                ? 'text-slate-950 font-bold'
                : 'text-slate-600 font-medium'
            }`}
          >
            Contact Us
          </button>
          <button
            onClick={() => handleNav('terms')}
            className={`block w-full text-left py-2 text-base ${
              activePage === 'terms'
                ? 'text-slate-950 font-bold'
                : 'text-slate-600 font-medium'
            }`}
          >
            Terms and Conditions
          </button>
          <button
            onClick={() => handleNav('privacy')}
            className={`block w-full text-left py-2 text-base ${
              activePage === 'privacy'
                ? 'text-slate-950 font-bold'
                : 'text-slate-600 font-medium'
            }`}
          >
            Privacy Policy
          </button>
        </div>
      )}
    </header>
  );
};
