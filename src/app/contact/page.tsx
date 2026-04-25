import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Qorvai',
  description: 'Book a free strategy session with Qorvai to discuss how we can automate your lead generation.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-[1200px] mx-auto text-[#F2EDE8]">
      <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-[#C8714A]">
        Contact Us
      </h1>
      <p className="text-xl text-[#8A857E] max-w-2xl leading-relaxed mb-12">
        Ready to scale and leave the manual tasks behind? Let's connect.<br/>
        Email us directly at <a href="mailto:business@qorvai.com" className="text-[#C8714A] hover:underline font-bold">business@qorvai.com</a> or use the form below.
      </p>
      
      <div className="bg-[#111110] border border-[#2A2925] p-8 rounded-2xl max-w-lg">
         <h3 className="font-display text-2xl font-bold mb-4">Book a Free AI Strategy Call</h3>
         <p className="text-[#8A857E] mb-6">Drop us a message, and we'll analyze your current workflows to identify automation opportunities.</p>
         
         <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="bg-[#18181A] border border-[#2A2925] p-3 rounded-lg text-white" />
            <input type="email" placeholder="Your Email" className="bg-[#18181A] border border-[#2A2925] p-3 rounded-lg text-white" />
            <textarea placeholder="Describe your current manual bottlenecks..." className="bg-[#18181A] border border-[#2A2925] p-3 rounded-lg text-white h-32"></textarea>
            <button className="bg-[#C8714A] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#E8A882] transition-colors">Submit Inquiry</button>
         </form>
      </div>
    </main>
  );
}
