import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services | Qorvai",
  description: "Automate repetitive workflows, save manual hours, and scale your operations with custom AI automation solutions by Qorvai.",
};

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen pt-32 px-6 max-w-[1200px] mx-auto text-[#F2EDE8]">
      <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-[#C8714A]">
        AI Automation Services
      </h1>
      <p className="text-xl text-[#8A857E] max-w-2xl leading-relaxed mb-12">
        Stop wasting time on manual tasks. We build intelligent workflows using n8n, Zapier, and custom Python/Node.js scripts to automate everything from lead follow-ups to data extraction. 
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111110] border border-[#2A2925] p-8 rounded-2xl">
           <h3 className="font-display text-2xl font-bold mb-4">Zero-Touch Workflows</h3>
           <p className="text-[#8A857E]">Eliminate manual data entry and let APIs handle your business logistics 24/7.</p>
        </div>
        <div className="bg-[#111110] border border-[#2A2925] p-8 rounded-2xl">
           <h3 className="font-display text-2xl font-bold mb-4">CRM Integration</h3>
           <p className="text-[#8A857E]">Sync leads automatically, enrich data, and trigger personalized campaigns silently.</p>
        </div>
      </div>
    </main>
  );
}
