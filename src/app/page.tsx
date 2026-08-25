import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Download from '@/components/Download';
import FAQ from '@/components/FAQ';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="max-w-6xl mx-auto mt-24 px-6" aria-hidden="true">
          <div className="relative flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute w-2 h-2 rotate-45 rounded-[2px] border border-white/25 bg-[var(--background)]" />
          </div>
        </div>
        <Features />
        <Pricing />
        <Download />
        <FAQ />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}
