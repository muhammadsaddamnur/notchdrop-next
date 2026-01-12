'use client';

import { useEffect, useRef, useState } from 'react';

/* ===========================
   VIDEO MAP (title → webm)
=========================== */
const videoMap: Record<string, string> = {
  'File Drop Zone': '/files.webm',
  'Clipboard History': '/clipboard.webm',
  'Music Controls': '/music.webm',
  'Screen Recording': '/record.webm',
  'Camera': '/camera.webm',
  'Local File Sharing': '/share.webm',
  'Quick Todo': '/todo.webm',
  'Notch Pet': '/pet.webm',
  'Command shortcut': '/term.webm',
  'Screenshot': '/screenshot.webm',
  'Screen Draw': '/screendraw.webm',
  // 'Native & Blazing Fast': '/screendraw.webm',
};

/* ===========================
   FEATURES (AS IS)
=========================== */
const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    title: 'File Drop Zone',
    description: 'Drag files to your notch for instant access. Your files stay ready for quick sharing or opening.',
    color: 'from-blue-500 to-cyan-500',
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
    description: 'Share files between devices on your network instantly. No internet required. Cross-platform compatible (macOS, Windows, Linux, iOS, Android).',
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
    title: 'Command shortcut',
    description: 'Run terminal commands straight from the notch. Trigger scripts, manage servers, or automate tasks without opening Terminal.',
    color: 'from-slate-500 to-zinc-700',
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
      className={`cursor-pointer group relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-white/20 transition-all duration-500 hover:scale-[1.02] opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition blur-xl`} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                onClick={() => setActiveVideo(videoMap[feature.title])}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
