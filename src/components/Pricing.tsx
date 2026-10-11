'use client';

import { useEffect, useRef, useState } from 'react';

const payhipCheckoutUrl =
  process.env.NEXT_PUBLIC_PAYHIP_CHECKOUT_URL ?? 'https://payhip.com/b/gLYS1';

const regularPricePerKey = 17;

const packages = [
  { devices: 1, price: 15, checkoutUrl: payhipCheckoutUrl },
  { devices: 2, price: 25, checkoutUrl: process.env.NEXT_PUBLIC_PAYHIP_CHECKOUT_URL_2_DEVICES },
  { devices: 4, price: 45, checkoutUrl: process.env.NEXT_PUBLIC_PAYHIP_CHECKOUT_URL_4_DEVICES },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Get started with essential features',
    features: [
      'File drop zone with AirDrop',
      'Clipboard history',
      'Calculator',
      'MacBook system status',
      'Keep Awake',
      'Forever free',
    ],
    cta: 'Download Free',
    href: 'https://cdn.notchdrop.com/NotchDrop-2.0.dmg?v=f86eb1042221',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$15',
    period: 'one-time',
    description: 'Unlock all premium features',
    features: [
      'Everything in Free',
      'Draw signatures & Screen Draw',
      'Todo & Calendar',
      'Cross-platform local file sharing',
      'Music controls & Camera',
      'Screen recording & NotchDrop Studio',
      'Notch Pet & Notch Terminal',
      'AI Chat & AI Notes',
      'Live wallpaper & custom themes',
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
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
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
                  {plan.highlighted && (
                    <span className="text-lg text-[var(--muted)] line-through">
                      ${selectedPackage.devices * regularPricePerKey}
                    </span>
                  )}
                  <span className="text-4xl font-bold">{plan.highlighted ? `$${selectedPackage.price}` : plan.price}</span>
                  {plan.period && (
                    <span className="text-[var(--muted)]">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-[var(--muted)] mt-2">
                  {plan.description}
                </p>
              </div>

              {plan.highlighted && (
                <fieldset className="mb-6">
                  <legend className="mb-3 text-sm font-medium">How many Macs?</legend>
                  <div className="space-y-2">
                    {packages.map((bundle) => {
                      const isSelected = selectedPackage.devices === bundle.devices;
                      const savings = bundle.devices * regularPricePerKey - bundle.price;

                      return (
                        <label
                          key={bundle.devices}
                          className={`flex min-h-20 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-[#101018] ${isSelected ? 'border-blue-400 bg-blue-500/10' : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]'}`}
                        >
                          <input
                            type="radio"
                            name="pro-device-package"
                            value={bundle.devices}
                            checked={isSelected}
                            onChange={() => setSelectedPackage(bundle)}
                            className="sr-only"
                          />
                          <span aria-hidden="true" className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${isSelected ? 'border-blue-400 bg-blue-400' : 'border-white/30'}`}>
                            {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-white">
                              {bundle.devices} {bundle.devices === 1 ? 'Mac' : 'Macs'}
                            </span>
                            <span className="mt-1 block text-xs text-[var(--muted)]">
                              {bundle.devices === 1 ? 'Just for you' : `$${(bundle.price / bundle.devices).toFixed(2)} per Mac`}
                            </span>
                          </span>
                          <span className="shrink-0 text-right">
                            <span className="flex items-baseline justify-end gap-2">
                              <span className="text-xs text-[var(--muted)] line-through">${bundle.devices * regularPricePerKey}</span>
                              <span className="text-lg font-semibold tabular-nums text-white">${bundle.price}</span>
                            </span>
                            <span className="mt-0.5 block text-xs text-emerald-400">Save ${savings}</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                    One key per Mac. All keys delivered together by email.
                  </p>
                </fieldset>
              )}

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
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg/1920px-Visa_Inc._logo_%282005%E2%80%932014%29.svg.png?20170118154621" alt="Visa" className="h-4 w-auto brightness-0 invert" />
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
            <h3 className="text-xl font-semibold mb-2">{selectedPackage.devices === 1 ? 'Choose Payment Method' : `Get Pro for ${selectedPackage.devices} devices`}</h3>
            <p className="text-sm text-[var(--muted)] mb-6">{selectedPackage.devices} {selectedPackage.devices === 1 ? 'key' : 'keys'} · ${selectedPackage.price} USD via Payhip · one-time payment</p>

            {/* Payment options */}
            <div className="space-y-3">
              {/* Payhip */}
              {selectedPackage.checkoutUrl ? <a
                href={selectedPackage.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-4 w-full p-4 rounded-xl border border-[#5C6AC4]/70 bg-[#5C6AC4]/10 ring-1 ring-[#5C6AC4]/20 hover:bg-[#5C6AC4]/15 hover:border-[#7c89db] transition-all group"
              >
                <span className="absolute -top-2.5 right-3 px-2.5 py-1 rounded-full bg-[#5C6AC4] text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg">
                  Recommended · Save ${selectedPackage.devices * regularPricePerKey - selectedPackage.price}
                </span>
                <img src="/payhip-icon.svg" alt="Payhip" className="w-12 h-12 rounded-xl" />
                <div className="flex-1 text-left">
                  <div className="font-medium group-hover:text-white transition-colors">Payhip</div>
                  <div className="text-sm">
                    <span className="text-[var(--muted)] line-through mr-2">${selectedPackage.devices * regularPricePerKey}</span>
                    <span className="font-semibold text-green-400">${selectedPackage.price} USD</span>
                    <span className="text-[var(--muted)]"> • International payments</span>
                  </div>
                </div>
                <svg className="w-5 h-5 text-[var(--muted)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a> : (
                <p role="status" className="rounded-xl border border-[var(--card-border)] p-4 text-sm text-[var(--muted)]">
                  This package is not available for purchase yet. Please check back soon.
                </p>
              )}

              {selectedPackage.devices === 1 && <>
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
                  <div className="text-sm text-[var(--muted)]">$17 USD • International payments</div>
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
                </div>
                <svg className="w-5 h-5 text-[var(--muted)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              </>}
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
