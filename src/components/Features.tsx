'use client';

import { useEffect, useRef, useState } from 'react';

/* ===========================
   VIDEO MAP (title → webm)
=========================== */
const videoMap: Record<string, string> = {
  'Draw Signature': '/video/signature.webm',
  'NotchDrop Studio': '/video/screenrecord_and_screeneditor.webm',
  'Calendar': '/video/calender.webm',
  'Keep Awake': '/video/stayawake.webm',
  'Live Wallpaper': '/video/livewallpaper.webm',
  'Calculator': '/video/calculator.webm',
  'MacBook Status': '/video/stats.webm',
  'Custom Themes': '/video/theme.webm',
  'AI Chat': '/video/ai.webm',
  'AI Notes': '/video/note.webm',
  'File Drop Zone': '/video/files.webm',
  'Clipboard History': '/video/clip.webm',
  'Music Controls': '/video/music.webm',
  'Screen Recording': '/video/screenrecord_and_screeneditor.webm',
  'Camera': '/video/camera.webm',
  'Local File Sharing': '/video/share.webm',
  'Quick Todo': '/video/todo.webm',
  'Notch Pet': '/video/pet.webm',
  'Notch Terminal': '/video/terminal.webm',
  'Screenshot': '/video/screenshot.webm',
  'Screen Draw': '/video/screendraw.webm',
};

/* ===========================
   FEATURES (AS IS)
=========================== */
const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 19c3-5 5-7 8-7 2.5 0 3.5 2 5.5 2 1 0 1.8-.4 2.5-1M5 16l-1 4 4-1M14.5 4.5l5 5M13 6l3-3 5 5-3 3-5-5z" />
      </svg>
    ),
    title: 'Draw Signature',
    description: 'Draw your signature directly from the notch, then copy or export it whenever a document needs signing.',
    color: 'from-sky-500 to-blue-600',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4 3-4 3V9zm8-1v8m-2-2h4" />
      </svg>
    ),
    title: 'NotchDrop Studio',
    description: 'Edit, trim, and polish screen recordings right after capture in NotchDrop Studio.',
    color: 'from-red-500 to-fuchsia-600',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="16" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 3v4m8-4v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
      </svg>
    ),
    title: 'Calendar',
    description: 'See your schedule and upcoming events at a glance, right inside the notch.',
    color: 'from-orange-500 to-rose-500',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m6.36.64-1.42 1.42M21 12h-2M5 12H3m4.06-4.94L5.64 5.64M8 16a5.5 5.5 0 118 0m-8 0h8v3H8v-3z" />
      </svg>
    ),
    title: 'Keep Awake',
    description: 'Keep your Mac awake during downloads, presentations, or long-running tasks with one click.',
    color: 'from-amber-400 to-yellow-600',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="3" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15l5-5 4 4 3-3 6 6M16 8h.01" />
      </svg>
    ),
    title: 'Live Wallpaper',
    description: 'Bring the notch to life with animated wallpapers designed to blend beautifully into your desktop.',
    color: 'from-cyan-400 to-violet-600',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
      </svg>
    ),
    title: 'Calculator',
    description: 'Handle quick calculations without breaking focus or opening another app.',
    color: 'from-emerald-500 to-green-600',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5h16v11H4V5zm5 15h6m-3-4v4M7 12l2-2 2 1 3-4 3 3" />
      </svg>
    ),
    title: 'MacBook Status',
    description: 'Monitor battery, charging, memory, and system status from one compact notch view.',
    color: 'from-lime-500 to-emerald-600',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3a9 9 0 100 18h1.5a1.5 1.5 0 000-3H12a1.5 1.5 0 010-3h3a6 6 0 000-12h-3zM7.5 10h.01M9 6.5h.01M14 6.5h.01" />
      </svg>
    ),
    title: 'Custom Themes',
    description: 'Personalize colors, appearance, and details so the notch feels at home on your Mac.',
    color: 'from-purple-500 to-pink-600',
    badge: 'Updated',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'AI Chat',
    description: 'Chat with AI directly from your notch to get instant answers and brainstorm ideas without leaving your workflow. Supports your own API key for full privacy and control.',
    color: 'from-violet-500 to-purple-600',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 3v4a1 1 0 001 1h4" />
      </svg>
    ),
    title: 'AI Notes',
    description: 'Write notes and record voice in one place, with AI-powered transcription and smart summaries. Works with your own API key for maximum privacy.',
    color: 'from-emerald-500 to-teal-600',
    badge: 'New',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    title: 'File Drop Zone',
    description: 'Drag files to your notch for instant access, then open them or share them directly with AirDrop.',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Updated',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Clipboard History',
    description: 'Never lose copied content again. Access your clipboard history with a simple hover.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Music Controls',
    description: 'Control your music right from the notch. See what\'s playing and skip tracks effortlessly.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Screen Recording',
    description: 'Record your screen with smart zoom that follows your cursor. Perfect for tutorials.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Camera',
    description: 'Capture photos instantly and save them directly into your workspace.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: 'Local File Sharing',
    description: 'Share files instantly across devices on the same network no cloud or internet required. Works with macOS, Windows, Linux, iOS, and Android.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Quick Todo',
    description: 'Jot down tasks on the fly. Your todo list is always just a hover away.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 14c-2.5 0-4 1.5-4 3.5S9.5 21 12 21s4-1.5 4-3.5S14.5 14 12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm11 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7-2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Notch Pet',
    description: 'A cute little pet living in your notch. It reacts to your activity, sleeps when idle, and keeps you company while you work.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 6h16M4 12h16M4 18h16M9 9l3 3-3 3" />
      </svg>
    ),
    title: 'Notch Terminal',
    description: 'A redesigned terminal in your notch. Run commands, trigger scripts, manage servers, and automate tasks without changing windows.',
    color: 'from-slate-500 to-zinc-700',
    badge: 'Updated',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v12H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 20h8" />
      </svg>
    ),
    title: 'Screenshot',
    description: 'Capture any part of your screen instantly and save it for later or sharing.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 21H4" />
      </svg>
    ),
    title: 'Screen Draw',
    description: 'Draw, highlight, and annotate directly on your screen in real time.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Native & Blazing Fast',
    description: 'Built with Swift for maximum performance. No Electron, no web views, pure native.',
    color: 'from-pink-500 to-rose-500',
  },
];

const featureGroups = [
  {
    eyebrow: 'Workflow 01',
    title: 'Office & Productivity',
    description: 'Capture ideas, organize work, sign documents, and move files without breaking focus.',
    color: 'text-blue-300',
    borderColor: 'border-blue-400/20',
    titles: [
      'Draw Signature',
      'Calendar',
      'Calculator',
      'AI Chat',
      'AI Notes',
      'File Drop Zone',
      'Clipboard History',
      'Quick Todo',
      'Local File Sharing',
    ],
  },
  {
    eyebrow: 'Workflow 02',
    title: 'Multimedia & Creation',
    description: 'Record, edit, capture, annotate, and control media from one creative toolkit.',
    color: 'text-pink-300',
    borderColor: 'border-pink-400/20',
    titles: [
      'NotchDrop Studio',
      'Screen Recording',
      'Camera',
      'Screenshot',
      'Screen Draw',
      'Music Controls',
    ],
  },
  {
    eyebrow: 'Workflow 03',
    title: 'System & Utilities',
    description: 'Monitor your Mac, stay awake, and run commands with native performance.',
    color: 'text-emerald-300',
    borderColor: 'border-emerald-400/20',
    titles: [
      'Keep Awake',
      'MacBook Status',
      'Notch Terminal',
      'Native & Blazing Fast',
    ],
  },
  {
    eyebrow: 'Workflow 04',
    title: 'Personalization & Fun',
    description: 'Make the notch look, move, and feel unmistakably yours.',
    color: 'text-purple-300',
    borderColor: 'border-purple-400/20',
    titles: ['Live Wallpaper', 'Custom Themes', 'Notch Pet'],
  },
];

/* ===========================
   FEATURE CARD (unchanged UI + click)
=========================== */
function FeatureCard({
  feature,
  index,
  onClick,
}: {
  feature: typeof features[0];
  index: number;
  onClick: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-white/20 transition-all duration-500 hover:scale-[1.02] opacity-0 ${videoMap[feature.title] ? 'cursor-pointer' : ''} ${isVisible ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition blur-xl`} />
      {'badge' in feature && feature.badge && (
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r ${feature.color} text-white`}>
            {feature.badge}
          </span>
        </div>
      )}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white mb-4`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed">{feature.description}</p>
    </div>
  );
}

/* ===========================
   MAIN
=========================== */
export default function Features() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      {/* Video Overlay (small & classy) */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black/80 rounded-2xl p-3 shadow-2xl"
          >
            <video
              src={activeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[500px] md:w-[720px] rounded-xl"
            />
          </div>
        </div>
      )}

      <section id="features" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-blue-400/20 bg-blue-400/10 text-xs font-medium text-blue-300">
              New features &amp; a refreshed design
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              More power, right from
              <br />
              <span className="gradient-text">your notch.</span>
            </h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Sign, edit, calculate, stay on schedule, and keep an eye on your Mac without leaving your workflow.
            </p>
          </div>

          <div className="space-y-20">
            {featureGroups.map((group) => {
              const groupedFeatures = group.titles
                .map((title) => features.find((feature) => feature.title === title))
                .filter((feature): feature is (typeof features)[number] => Boolean(feature));

              return (
                <div key={group.title}>
                  <div className={`mb-7 border-l-2 ${group.borderColor} pl-5 md:flex md:items-end md:justify-between md:gap-8`}>
                    <div>
                      <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${group.color}`}>
                        {group.eyebrow}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{group.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm md:text-base text-[var(--muted)]">
                        {group.description}
                      </p>
                    </div>
                    <span className="hidden md:block shrink-0 text-xs text-[var(--muted)]">
                      {groupedFeatures.length} tools
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {groupedFeatures.map((feature, index) => (
                      <FeatureCard
                        key={feature.title}
                        feature={feature}
                        index={index}
                        onClick={() => {
                          const video = videoMap[feature.title];
                          if (video) setActiveVideo(video);
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
