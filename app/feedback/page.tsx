'use client';

import { useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'general',
    message: '',
    pacSuggestion: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Initialize EmailJS with public key
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name || 'Anonymous',
        from_email: formData.email || 'No email provided',
        feedback_type: formData.feedbackType,
        message: formData.message,
        pac_suggestion: formData.pacSuggestion || 'N/A',
        to_email: 'gsnyder1090@gmail.com',
      };

      // Send email
      await emailjs.send(serviceId, templateId, templateParams);

      setIsSubmitted(true);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send feedback. Please try again or contact us directly at gsnyder1090@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm text-center">
          <div className="mb-4">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Thank You!</h2>
          <p className="text-gray-700 mb-6">
            Your feedback has been received. We appreciate you taking the time to help improve CivicMatch!
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Feedback & Suggestions</h1>
        <p className="text-gray-700">
          We'd love to hear from you! Share your feedback, suggestions, or suggest a PAC to add to our database.
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-blue-600 mb-2">
            Name (optional)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-blue-600 mb-2">
            Email (optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="feedbackType" className="block text-sm font-medium text-blue-600 mb-2">
            Type of Feedback <span className="text-red-600">*</span>
          </label>
          <select
            id="feedbackType"
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          >
            <option value="general">General Feedback</option>
            <option value="pac_suggestion">Suggest a PAC</option>
            <option value="bug_report">Report a Bug</option>
            <option value="feature_request">Feature Request</option>
            <option value="other">Other</option>
          </select>
        </div>

        {formData.feedbackType === 'pac_suggestion' && (
          <div>
            <label htmlFor="pacSuggestion" className="block text-sm font-medium text-blue-600 mb-2">
              PAC Name & Details <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="pacSuggestion"
              name="pacSuggestion"
              value={formData.pacSuggestion}
              onChange={handleChange}
              required={formData.feedbackType === 'pac_suggestion'}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="PAC name, website, and any relevant details"
            />
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-blue-600 mb-2">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            placeholder="Tell us what's on your mind..."
          />
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
          <Link
            href="/"
            className="flex-1 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors text-center"
          >
            Cancel
          </Link>
        </div>
      </form>

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="text-blue-600 hover:text-red-600 underline font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

