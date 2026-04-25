import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot Development Services | Qorvai",
  description: "Capture, qualify, and convert leads 24/7 with custom-bred AI Chatbots integrated into your website, WhatsApp, and social media.",
};

export default function AIChatbotsPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-[1200px] mx-auto text-[#F2EDE8]">
      <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-[#E8A882]">
        AI Chatbot Development
      </h1>
      <p className="text-xl text-[#8A857E] max-w-2xl leading-relaxed mb-12">
        Turn your traffic into booked calls. We develop high-converting conversational agents that act as your top sales reps—working around the clock without breaks.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111110] border border-[#2A2925] p-8 rounded-2xl">
           <h3 className="font-display text-2xl font-bold mb-4">Lead Qualification</h3>
           <p className="text-[#8A857E]">Promptly ask qualifying questions, gather contact details, and push them to your CRM seamlessly.</p>
        </div>
        <div className="bg-[#111110] border border-[#2A2925] p-8 rounded-2xl">
           <h3 className="font-display text-2xl font-bold mb-4">Omnichannel Support</h3>
           <p className="text-[#8A857E]">Deploy bots on your Site, WhatsApp, Instagram DMs, to engage users everywhere they are.</p>
        </div>
      </div>
    </main>
  );
}
