import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Web Development Services | Qorvai',
  description: 'High-performance, SEO-optimized web development services designed to convert traffic into leads.',
}

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-[1200px] mx-auto text-[#F2EDE8]">
      <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
        Web Development Services
      </h1>
      <p className="text-xl text-[#8A857E] max-w-2xl leading-relaxed mb-12">
        A website should be a lead machine, not just a digital brochure. We build blazing fast Next.js applications engineered for high conversions and solid SEO performance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111110] border border-[#2A2925] p-8 rounded-2xl">
           <h3 className="font-display text-2xl font-bold mb-4">Conversion-Optimized UI</h3>
           <p className="text-[#8A857E]">Designs tailored strictly toward driving the user to book a call or submit their info.</p>
        </div>
        <div className="bg-[#111110] border border-[#2A2925] p-8 rounded-2xl">
           <h3 className="font-display text-2xl font-bold mb-4">Technical SEO Core</h3>
           <p className="text-[#8A857E]">Proper metadata, semantic HTML, and rapid load times structurally baked into the site.</p>
        </div>
      </div>
    </main>
  );
}
