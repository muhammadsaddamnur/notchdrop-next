'use client';

import { useEffect, useRef, useState } from 'react';

export default function Download() {
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
    <section id="download" className="py-32 px-6" ref={ref}>
      <div
        className={`max-w-4xl mx-auto text-center opacity-0 ${isVisible ? 'animate-fade-in' : ''
          }`}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 max-w-4xl mx-auto pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10"></div>
        </div>

        <div className="relative p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)]">
          {/* macOS icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your notch?
          </h2>
          <p className="text-lg text-[var(--muted)] mb-8 max-w-xl mx-auto">
            Download NotchDrop for free and start using your MacBook&apos;s notch like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/drive/folders/1TQ-qOLHSZDiIFVvXBe9TxlDrEOA8tN_n?usp=sharing"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-medium bg-white text-black rounded-xl hover:bg-white/90 transition-all hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download for macOS
            </a>
          </div>

          <p className="text-sm text-[var(--muted)] mt-6">
            Requires macOS 15.0 or later • Apple Silicon
          </p>
        </div>
      </div>
    </section>
  );
}
