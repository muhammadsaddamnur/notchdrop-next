'use client';

import { useEffect, useRef, useState } from 'react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Get started with essential features',
    features: [
      'File drop zone',
      'Clipboard history',
      'Basic settings',
      'Forever free',
    ],
    cta: 'Download Free',
    href: '#download',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '~$15',
    period: 'one-time',
    description: 'Unlock all premium features',
    features: [
      'Everything in Free',
      'Music controls',
      'Screen recording with smart zoom',
      'Face cam overlay',
      'Local file sharing',
      'Quick todo list',
      'Priority support',
      'Lifetime updates',
    ],
    cta: 'Get Pro License',
    href: '#',
    highlighted: true,
  },
];

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple pricing,
            <br />
            <span className="gradient-text">no subscriptions.</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-xl mx-auto">
            Pay once, use forever. No recurring fees, no hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-500 opacity-0 ${isVisible ? 'animate-fade-in' : ''
                } ${plan.highlighted
                  ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30'
                  : 'bg-[var(--card-bg)] border-[var(--card-border)]'
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-[var(--muted)]">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-[var(--muted)] mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`w-5 h-5 ${plan.highlighted ? 'text-blue-400' : 'text-green-400'
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.highlighted && (
                <div className="flex items-center justify-center gap-4 mb-6 opacity-80 hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded h-6 px-1.5 flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/QRIS_logo.svg" alt="QRIS" className="h-4 w-auto" />
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 w-auto brightness-0 invert" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto" />
                </div>
              )}

              {plan.highlighted ? (
                <button
                  onClick={() => setShowPaymentDialog(true)}
                  className="block w-full py-3 text-center font-medium rounded-xl transition-all hover:scale-[1.02] bg-white text-black hover:bg-white/90"
                >
                  {plan.cta}
                </button>
              ) : (
                <a
                  href={plan.href}
                  className="block w-full py-3 text-center font-medium rounded-xl transition-all hover:scale-[1.02] border border-[var(--card-border)] hover:bg-[var(--card-bg)]"
                >
                  {plan.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Guarantee */}
        {/* <p className="text-center text-sm text-[var(--muted)] mt-8">
          30-day money-back guarantee. No questions asked.
        </p> */}
      </div>

      {/* Payment Dialog */}
      {showPaymentDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowPaymentDialog(false)}
        >
          <div
            className="relative w-full max-w-md p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowPaymentDialog(false)}
              className="absolute top-4 right-4 p-1 text-[var(--muted)] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Dialog header */}
            <h3 className="text-xl font-semibold mb-2">Choose Payment Method</h3>
            <p className="text-sm text-[var(--muted)] mb-6">Select your preferred payment gateway</p>

            {/* Payment options */}
            <div className="space-y-3">
              {/* Gumroad */}
              <a
                href="https://saddamnur.gumroad.com/l/notchdrop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 rounded-xl border border-[var(--card-border)] hover:bg-white/5 hover:border-white/20 transition-all group"
              >
                <img src="/gumroad-icon.svg" alt="Gumroad" className="w-12 h-12 rounded-xl" />
                <div className="flex-1 text-left">
                  <div className="font-medium group-hover:text-white transition-colors">Gumroad</div>
                  <div className="text-sm text-[var(--muted)]">$15 USD • International payments</div>
                </div>
                <svg className="w-5 h-5 text-[var(--muted)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Lynk.id */}
              <a
                href="https://lynk.id/saddamnur/g8epqpyp0ewe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-4 rounded-xl border border-[var(--card-border)] hover:bg-white/5 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <img src="/lynk-icon.webp" alt="Lynk.id" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium group-hover:text-white transition-colors">Lynk.id</div>
                  <div className="text-sm text-[var(--muted)]">250.000 IDR • QRIS, Bank Transfer</div>
                  <p className="text-xs text-[var(--muted)] text-left pt-1">
                    Processed securely via Indonesian payment gateway.
                  </p>
                  <p className="text-xs text-green-400 text-left pt-1">
                    <a href="https://www.producthunt.com/products/notchdrop" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-300">20% off! Get the code on Product Hunt</a>
                  </p>
                </div>
                <svg className="w-5 h-5 text-[var(--muted)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Exchange rate link */}
            <div className="mt-6 pt-4 border-t border-[var(--card-border)]">
              <a
                href="https://wise.com/id/currency-converter/usd-to-idr-rate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--muted)] hover:text-white transition-colors underline"
              >
                Check current USD to IDR rate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
