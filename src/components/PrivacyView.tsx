import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyViewProps {
  onBackToBlog: () => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({ onBackToBlog }) => {
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
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-sm">
          Last revised: October 2026 • Compliant with GDPR & CCPA Guidelines
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview</h2>
          <p>
            At <strong>silent</strong>, accessible from our digital domain, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by silent and how we utilize it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">2. Log Files</h2>
          <p>
            silent follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose is for analyzing trends, administering the site, and gathering demographic information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, silent uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">4. Google DoubleClick DART Cookie & Ad Partners</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <span className="text-blue-600 font-mono text-xs">https://policies.google.com/technologies/ads</span>.
          </p>
          <p className="mt-2">
            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on silent. They automatically receive your IP address when this occurs.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">5. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California consumers have the right to request disclosure of categories and specific pieces of personal data collected, request deletion of collected personal data, and request that a business not sell their personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">6. GDPR Data Protection Rights</h2>
          <p>
            We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, rectification, erasure, restrict processing, object to processing, and data portability. If you make a request, we have one month to respond to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">7. Children&apos;s Information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. silent does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-2">8. Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>privacy@silentstories.org</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};
