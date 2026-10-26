import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsViewProps {
  onBackToBlog: () => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onBackToBlog }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <button
        onClick={onBackToBlog}
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-1.5" />
        Back to Stories Feed
      </button>

      <div className="border-b border-slate-100 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Terms and Conditions
        </h1>
        <p className="text-slate-400 text-sm">
          Last revised: October 2026 • Effective immediately
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
          <p>
            By accessing or using the website operated by <strong>silent</strong> (&quot;the Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">2. Intellectual Property and Content</h2>
          <p>
            All original content, fictional narrative stories, features, analysis, and website styling presented on silent are protected by international copyright, trademark, and other intellectual property laws. You may read, share links to, and discuss these stories for personal, non-commercial purposes.
          </p>
          <p className="mt-2">
            You may not republish, distribute, sell, or license any written work from this publication in bulk without prior written authorization from the editorial management.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">3. Fictional & Entertainment Disclaimer</h2>
          <p>
            The dramatic narratives, dialogue, and character interactions showcased on this website are creative works of storytelling intended for entertainment, dramatic reading, and reflective discussion. Any resemblance to real persons, living or deceased, or actual events is purely coincidental.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">4. Third-Party Advertisements & Links</h2>
          <p>
            Our publication displays advertisements and may provide links to third-party websites or services that are not owned or controlled by silent. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party advertising networks or external websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">5. User Conduct and Restrictions</h2>
          <p>When using silent, you agree not to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Engage in automated data scraping, harvesting, or denial-of-service attempts.</li>
            <li>Use the website in any manner that impairs its functionality or security.</li>
            <li>Submit fraudulent, abusive, or harmful inquiries through our contact facilities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">6. Limitation of Liability</h2>
          <p>
            In no event shall silent, its editors, writers, or partners be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">7. Changes to These Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Material changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">8. Contact Information</h2>
          <p>
            For questions regarding these Terms and Conditions, please contact us via our contact form or by writing to <strong>legal@silentstories.org</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};
