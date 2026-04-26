import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Trust } from '@/components/Trust';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { Services } from '@/components/Services';
import { Showcase } from '@/components/Showcase';
import { Testimonials } from '@/components/Testimonials';
import { InteractiveAudit } from '@/components/InteractiveAudit';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { Results } from '@/components/Results';
import { FAQ } from '@/components/FAQ';
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
        <Solution />
        <Services />
        <Showcase />
        <Testimonials />
        <InteractiveAudit />
        <Process />
        <Pricing />
        <Results />
        <FAQ />
        <CTA />
      </div>
      
      <Footer />
    </main>
  );
}
