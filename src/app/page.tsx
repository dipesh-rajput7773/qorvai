import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Trust } from '@/components/Trust';
import { Problem } from '@/components/Problem';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Results } from '@/components/Results';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="noise-bg min-h-screen">
      <div className="grid-overlay"></div>
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Trust />
        <Problem />
        <Services />
        <Process />
        <Results />
        <CTA />
      </div>
      
      <Footer />
    </main>
  );
}
