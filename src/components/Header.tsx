'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-[var(--card-border)]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/icon.png" alt="NotchDrop" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-semibold group-hover:text-white/80 transition-colors">
              NotchDrop
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex items-center gap-3">
            <span className="hidden sm:block text-xs text-[var(--muted)] px-2 py-1 rounded-full border border-[var(--card-border)]">
              v1.0
            </span>
            <Link
              href="#download"
              className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-white/90 transition-colors"
            >
              Download
            </Link>
          </div> */}
        </nav>
      </div>
    </header>
  );
}
