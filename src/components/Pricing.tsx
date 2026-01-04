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
    price: '$20',
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
    href: 'https://notchdrop.lemonsqueezy.com/',
    highlighted: true,
  },
];

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
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
              className={`relative p-8 rounded-2xl border transition-all duration-500 opacity-0 ${
                isVisible ? 'animate-fade-in' : ''
              } ${
                plan.highlighted
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
                      className={`w-5 h-5 ${
                        plan.highlighted ? 'text-blue-400' : 'text-green-400'
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

              <a
                href={plan.href}
                className={`block w-full py-3 text-center font-medium rounded-xl transition-all hover:scale-[1.02] ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'border border-[var(--card-border)] hover:bg-[var(--card-bg)]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        {/* <p className="text-center text-sm text-[var(--muted)] mt-8">
          30-day money-back guarantee. No questions asked.
        </p> */}
      </div>
    </section>
  );
}
