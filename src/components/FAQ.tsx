'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Does NotchDrop work on MacBooks without a notch?',
    answer:
      'Yes! NotchDrop works on all MacBooks. On models without a notch, it creates a virtual notch area at the top of your screen that provides the same functionality.',
  },
  {
    question: 'Is NotchDrop a subscription?',
    answer:
      'No, NotchDrop Pro is a one-time purchase. Pay once and get lifetime access to all features and future updates. No recurring fees.',
  },
  {
    question: 'What features are free?',
    answer:
      'The free version includes the file drop zone and clipboard history. Premium features like music controls, screen recording, face cam overlay, file sharing, and todo list require a Pro license.',
  },
  {
    question: 'Can I use my license on multiple Macs?',
    answer:
      'Each license is valid for one Mac at a time.',
  },
  {
    question: 'Does NotchDrop affect battery life?',
    answer:
      'NotchDrop is built with Swift and is highly optimized. It uses minimal resources and has negligible impact on battery life during normal use.',
  },
  {
    question: 'How do I get support?',
    answer:
      'You can reach us at muhammadsaddamnur2@gmail.com or on Threads @saddamnur. We typically respond within 24 hours.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--card-border)]">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium pr-8">{question}</span>
        <svg
          className={`w-5 h-5 text-[var(--muted)] transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-[var(--muted)] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently asked
            <br />
            <span className="gradient-text">questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>

        {/* Contact CTA */}
        <p className="text-center text-[var(--muted)] mt-8">
          Have more questions?{' '}
          <a
            href="mailto:muhammadsaddamnur2@gmail.com"
            className="text-white hover:underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
