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
