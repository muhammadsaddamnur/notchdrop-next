'use client';

export default function Feedback() {
    return (
        <section id="feedback" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden bg-[var(--card-bg)] rounded-3xl border border-[var(--card-border)] p-8 md:p-12 text-center group">
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-colors duration-500"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Help us make
                            <br />
                            <span className="gradient-text">NotchDrop better</span>
                        </h2>

                        <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10">
                            Found a bug or have a great idea for a new feature?
                            <br className="hidden md:block" />
                            Join our community on GitHub and help shape the future of NotchDrop.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/muhammadsaddamnur/notchdrop-issues/issues/new?labels=bug&template=bug_report.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium border border-[var(--card-border)] rounded-xl hover:bg-[var(--card-bg)] hover:border-red-500/50 transition-all hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Report an Issue
                            </a>

                            <a
                                href="https://github.com/muhammadsaddamnur/notchdrop-issues/issues/new?labels=enhancement&template=feature_request.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium bg-white text-black rounded-xl hover:bg-white/90 transition-all hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                Request Feature
                            </a>
                        </div>

                        <p className="mt-8 text-sm text-[var(--muted)]">
                            Follow progress on{' '}
                            <a
                                href="https://github.com/muhammadsaddamnur/notchdrop-issues/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
