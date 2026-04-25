import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Agent Automation for CA Firms & Real Estate | Qorvai",
  description: "Custom AI agents for lead qualification, data entry, and document extraction. Stop hiring for manual tasks. Built for Indian businesses.",
  keywords: ["ai agent development india", "custom ai agents india", "ca firm automation", "real estate ai chatbot"],
};

export default function AIAgentAutomation() {
    return (
        <main className="min-h-screen bg-[#080807] text-[#F2EDE8]">
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "AI Agent Automation",
                    "provider": {
                      "@type": "Organization",
                      "name": "Qorvai"
                    },
                    "areaServed": "IN",
                    "description": "Custom AI agents for lead qualification, data entry, and document extraction."
                  })
                }}
            />
            <div className="pt-32 pb-16 px-6 max-w-[1200px] mx-auto border-b border-[#2A2925]">
                <p className="text-[#C8714A] font-bold tracking-widest text-sm uppercase mb-4">Core Service</p>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                    Autonomous <span className="text-[#E8A882] italic font-serif-editorial">AI Agents</span> <br/>
                    That Actually Work.
                </h1>
                <p className="text-xl text-[#8A857E] max-w-2xl">
                    Stop letting repetitive tasks bottleneck your growth. We build sophisticated AI agents that qualify leads, process documents, and handle customer support—24/7, without mistakes.
                </p>
            </div>

            <section className="py-24 px-6 max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-display text-3xl font-bold mb-6">Why Indian Businesses Need AI Agents Now</h2>
                        <div className="space-y-6 text-[#8A857E]">
                            <p>
                                Whether you run a CA firm handling hundreds of GST filings, a real estate agency capturing leads on Instagram, or an e-commerce brand scaling on Flipkart, human error and response times are costing you money.
                            </p>
                            <p>
                                An LLM-powered AI agent doesn't just "reply" like a dumb chatbot. It connects to your CRM, pulls live data, executes logic, and actually gets work done. 
                            </p>
                        </div>
                        
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-[#C8714A] mt-1">✓</span>
                                <div><strong className="text-[#F2EDE8]">Lead Qualification:</strong> Instantly engages WhatsApp/IG leads, asks qualifying questions, and logs them in Notion/Airtable.</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#C8714A] mt-1">✓</span>
                                <div><strong className="text-[#F2EDE8]">Document Processing:</strong> RAG-enabled agents that extract numbers from 100s of invoices and structure them into Excel.</div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="bg-[#111110] p-8 border border-[#2A2925] rounded-2xl">
                        <h3 className="font-display text-2xl font-bold mb-6 text-[#E8A882]">The Qorvai Difference</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-[#F2EDE8] mb-2">No Hallucinations</h4>
                                <p className="text-sm text-[#8A857E]">We use strict prompt engineering and function calling to ensure your agent stays on script.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#F2EDE8] mb-2">Native Tool Integrations</h4>
                                <p className="text-sm text-[#8A857E]">Connected deeply with Make, n8n, Stripe, and your existing tools.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#F2EDE8] mb-2">Fully Managed</h4>
                                <p className="text-sm text-[#8A857E]">You don't touch code. We monitor the agent, fix bugs, and optimize prompts monthly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <CTA />
            <Footer />
        </main>
    );
}
