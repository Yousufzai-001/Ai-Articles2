import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactViewProps {
  onBackToBlog: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBackToBlog }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate swift network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Contact Us
        </h1>
        <p className="text-slate-500 text-base sm:text-lg">
          Have a story tip, advertising query, or copyright question? Reach out to our editorial team below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Info Column */}
        <div className="space-y-6 md:border-r md:border-slate-100 md:pr-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Editorial Inquiries
            </h3>
            <p className="text-sm text-slate-600 mb-1">
              For story tips, feedback, and pitches:
            </p>
            <a
              href="mailto:contact@silentstories.org"
              className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              contact@silentstories.org
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Advertising & Partnerships
            </h3>
            <p className="text-sm text-slate-600 mb-1">
              For direct advertising, native integrations, and media buys:
            </p>
            <a
              href="mailto:ads@silentstories.org"
              className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              ads@silentstories.org
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Response Time
            </h3>
            <p className="text-sm text-slate-600">
              Our editorial and publishing team typically responds within 24–48 business hours.
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-2">
          {submitted ? (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Thank You for Reaching Out
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Your message has been received by our editorial desk. We will review your inquiry promptly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                }}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors mr-3 cursor-pointer"
              >
                Send Another Message
              </button>
              <button
                onClick={onBackToBlog}
                className="px-5 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Return to Stories
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Subject / Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm text-slate-900 bg-white"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Story Feedback & Tips">Story Feedback & Tips</option>
                  <option value="Advertising & Sponsorship">Advertising & Sponsorship</option>
                  <option value="DMCA & Copyright">DMCA & Copyright Notice</option>
                  <option value="Technical Support">Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm text-slate-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
