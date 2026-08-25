'use client';

import { useRef, useState } from 'react';

const heroTaglines = [
  ['Everything you need.', 'Nothing you don\'t.'],
  ['Built for real work.', 'Not feature overload.'],
  ['Tools you\'ll actually use.', 'No clutter attached.'],
  ['More capability.', 'Less noise.'],
  ['Your workflow.', 'Not their checklist.'],
];

export default function Hero() {
  const [showStudioDemo, setShowStudioDemo] = useState(false);
  const showcaseVideoRef = useRef<HTMLVideoElement>(null);

  const openShowcaseFullscreen = async () => {
    const video = showcaseVideoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      await video.requestFullscreen();
      return;
    }

    const safariVideo = video as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };
    safariVideo.webkitEnterFullscreen?.();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      {/* Badge */}
      <div
        className="mb-8 opacity-0 animate-fade-in"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/20 bg-purple-400/10 text-sm text-purple-100">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
          <span className="font-medium">New</span>
          <span className="text-purple-300/50">·</span>
          NotchDrop Studio is here
        </span>
      </div>

      {/* Title */}
      <h1
        aria-label="Everything you need. Nothing you don't."
        className="relative w-full max-w-6xl min-h-40 md:min-h-44 lg:min-h-36 text-5xl md:text-7xl font-bold text-center mb-6 opacity-0 animate-fade-in stagger-1"
      >
        {heroTaglines.map(([firstLine, secondLine], index) => (
          <span
            key={firstLine}
            aria-hidden="true"
            className="absolute inset-0 flex flex-col items-center justify-center animate-tagline-cycle"
            style={{ animationDelay: `${index * 4.2 - 0.525}s` }}
          >
            <span className="gradient-text">{firstLine}</span>
            <span className="text-white">{secondLine}</span>
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      <p
        className="text-lg md:text-xl text-[var(--muted)] text-center max-w-2xl mb-12 opacity-0 animate-fade-in stagger-2"
      >
        More than a notch app. Sign, edit in NotchDrop Studio, run commands, and share via
        AirDrop or across Android, Windows, iOS, and Linux all from your Mac.
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fade-in stagger-3"
      >
        <a
          href="https://cdn.notchdrop.com/NotchDrop-2.0.dmg?v=f86eb1042221"
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

      {/* Product Hunt Badge */}
      <div
        className="mb-16 opacity-0 animate-fade-in stagger-3"
      >
        <a
          href="https://www.producthunt.com/products/notchdrop?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-notchdrop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1064578&theme=light&t=1768756129884"
            alt="NotchDrop - Turn your MacBook notch into a powerful productivity hub. | Product Hunt"
            width="250"
            height="54"
          />
        </a>
      </div>

      {/* App Previews */}
      <div className="w-full max-w-4xl space-y-12 opacity-0 animate-slide-up stagger-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 pointer-events-none" />
          <button
            type="button"
            onClick={openShowcaseFullscreen}
            aria-label="Open NotchDrop showcase in fullscreen"
            className="group relative block w-full rounded-2xl overflow-hidden shadow-2xl border border-[var(--card-border)] cursor-zoom-in"
          >
            <video
              ref={showcaseVideoRef}
              src="/video/showcase.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
            <span className="absolute right-4 bottom-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black/65 border border-white/10 text-xs text-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 3H3v5m13-5h5v5M8 21H3v-5m18 0v5h-5" />
              </svg>
              View fullscreen
            </span>
          </button>
        </div>

        <div className="relative flex items-center justify-center" aria-hidden="true">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute w-2 h-2 rotate-45 rounded-[2px] border border-white/25 bg-[var(--background)]" />
        </div>

        <div className="relative pt-6 text-center">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-purple-400/20 bg-purple-400/10 text-xs font-semibold uppercase tracking-[0.18em] text-purple-300">
            New from NotchDrop
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Try <span className="gradient-text">NotchDrop Studio</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-[var(--muted)]">
            Turn raw screen recordings into polished videos with the new editor built into NotchDrop.
          </p>

          {!showStudioDemo ? (
            <button
              type="button"
              onClick={() => setShowStudioDemo(true)}
              className="group mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-all hover:scale-105"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black text-white">
                <svg className="w-3.5 h-3.5 translate-x-px" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch NotchDrop Studio demo
            </button>
          ) : (
            <div className="relative mt-8 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-orange-500/15 blur-3xl -z-10 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--card-border)]">
                <video
                  src="/video/showcase_screen_editor.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto"
                />
              </div>
              <button
                type="button"
                onClick={() => setShowStudioDemo(false)}
                className="mt-4 text-sm text-[var(--muted)] hover:text-white transition-colors"
              >
                Hide demo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
