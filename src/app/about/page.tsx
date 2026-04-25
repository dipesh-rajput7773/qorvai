import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Qorvai | AI Automation Agency',
  description: 'Learn about Qorvai, our mission, and how we are helping businesses scale using modern AI automation systems.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-[1200px] mx-auto text-[#F2EDE8]">
      <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
        About Qorvai
      </h1>
      <p className="text-xl text-[#8A857E] max-w-2xl leading-relaxed mb-8">
        We are an AI Automation Agency focused on one primary goal: converting your manual processes into automated, lead-generating machines. We don't just build software; we build robust operational systems that let founders reclaim their time.
      </p>
      <div className="border-t border-[#2A2925] pt-8">
         <h2 className="text-3xl font-display font-bold mb-4">Our Philosophy</h2>
         <p className="text-[#8A857E] max-w-2xl">Results over deliverables. We believe that technology should always map directly to revenue. If a system doesn't generate leads, cut costs, or save time, it's not worth building.</p>
      </div>
    </main>
  );
}
