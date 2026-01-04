'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      {/* Badge */}
      <div
        className={`mb-8 opacity-0 ${mounted ? 'animate-fade-in' : ''}`}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Now available for macOS
        </span>
      </div>

      {/* Title */}
      <h1
        className={`text-5xl md:text-7xl font-bold text-center mb-6 opacity-0 ${
          mounted ? 'animate-fade-in stagger-1' : ''
        }`}
      >
        <span className="gradient-text">Drop files.</span>
        <br />
        <span className="text-white">Right from your notch.</span>
      </h1>

      {/* Subtitle */}
      <p
        className={`text-lg md:text-xl text-[var(--muted)] text-center max-w-2xl mb-12 opacity-0 ${
          mounted ? 'animate-fade-in stagger-2' : ''
        }`}
      >
        Transform your MacBook&apos;s notch into a powerful hub for files, clipboard,
        music, screen recording, and more.
      </p>

      {/* CTA Buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-4 mb-16 opacity-0 ${
          mounted ? 'animate-fade-in stagger-3' : ''
        }`}
      >
        <a
          href="#download"
          className="px-8 py-4 text-lg font-medium bg-white text-black rounded-xl hover:bg-white/90 transition-all hover:scale-105"
        >
          Download Free
        </a>
        <a
          href="#pricing"
          className="px-8 py-4 text-lg font-medium border border-[var(--card-border)] rounded-xl hover:bg-[var(--card-bg)] transition-all hover:scale-105"
        >
          Get Pro License
        </a>
      </div>

      {/* App Preview */}
      <div
        className={`relative w-full max-w-4xl opacity-0 ${
          mounted ? 'animate-slide-up stagger-4' : ''
        }`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"></div>

        {/* Screen Recording */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--card-border)]">
          {mounted && (
            <video
              src="/screenrecord.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          )}
        </div>

        {/* Interactive hint */}
        <p className="text-center mt-6 text-sm text-[var(--muted)]">
          ✨ Drag & drop files to your notch for quick access
        </p>
      </div>
    </section>
  );
}
