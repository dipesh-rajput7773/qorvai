"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Database, Zap, Webhook, MonitorCheck, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Bot className="w-8 h-8" />,
        title: "Web Scraping & Portal Bots",
        description: "Using Playwright, we build robust bots that automate routine data entry, navigate complex government portals (Visa/OCI), and reliably scrape analytics. We save your team hundreds of manual hours every month.",
        benefit: "FOR: VISA AGENCIES, E-COMMERCE"
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "AI Document Extraction (RAG)",
        description: "We deploy AI pipelines that instantly read messy, unstructured PDFs and invoices, extract critical financial or legal data, and automatically pipe it directly into your CRM or database.",
        benefit: "FOR: CA FIRMS, REAL ESTATE, LAW"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Social Media Lead Engines",
        description: "Custom Node.js integrations that transform Instagram engagements into autonomous sales funnels. We build intelligent comment-to-DM systems that capture and qualify leads while you sleep.",
        benefit: "FOR: RESTAURANTS, RETAIL BRANDS"
    },
    {
        icon: <MonitorCheck className="w-8 h-8" />,
        title: "Custom Dashboards & SaaS",
        description: "Enterprise-grade Full-Stack Development using MERN and Next.js. We replace clunky spreadsheets with blazing-fast, secure operational dashboards customized perfectly for your business workflow.",
        benefit: "FOR: B2B AGENCIES, STARTUPS"
    },
    {
        icon: <Webhook className="w-8 h-8" />,
        title: "Zero-Touch Automation (n8n)",
        description: "We seamlessly wire together your entire tech stack using n8n and custom webhooks. We fully automate client onboarding, lead assignment, and financial syncing across 50+ apps with zero human touch.",
        benefit: "FOR: SERVICE-BASED BUSINESSES"
    }
];

export const Services = () => {
    return (
        <section className="py-32 bg-[#0A0A0C]" id="services">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 max-w-2xl"
                >
                    <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
                        OUR WEAPONRY
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter text-[#F2EDE8]">
                        High-value friction. <br/>Solved autonomously.
                    </h2>
                    <p className="mt-6 text-[#8A857E] font-mono text-sm leading-relaxed max-w-lg">
                        We target businesses bleeding money from manual tasks. Visa agencies, Dubai Real Estate, CA firms, E-com brands, and Local Restaurants—we replace entire operations teams with intelligent code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-[#111114] border border-[#2A2925] p-10 rounded-2xl flex flex-col h-full hover:border-[#E8A882] transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E8A882] to-transparent opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500"/>
                            
                            <div className="bg-[#18181A] w-16 h-16 rounded-2xl flex items-center justify-center text-[#E8A882] mb-8 relative z-10 group-hover:scale-105 transition-transform border border-[#2A2925]">
                                {s.icon}
                            </div>
                            <h3 className="font-display text-2xl font-extrabold mb-4 text-[#F2EDE8] relative z-10">
                                {s.title}
                            </h3>
                            <p className="text-[#8A857E] text-[0.95rem] leading-relaxed flex-grow mb-8 relative z-10">
                                {s.description}
                            </p>
                            <div className="pt-6 border-t border-[#2A2925] font-mono text-[0.7rem] text-[#C8714A] tracking-wider font-bold relative z-10">
                                {s.benefit}
                            </div>
                        </motion.div>
                    ))}
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-br from-[#C8714A]/10 to-transparent border border-[#C8714A]/20 p-10 rounded-2xl flex flex-col items-center justify-center text-center h-full hover:border-[#C8714A]/50 transition-colors group"
                    >
                        <h3 className="font-display text-2xl font-extrabold mb-4 text-[#F2EDE8]">
                            Not listed?
                        </h3>
                        <p className="text-[#8A857E] text-[0.95rem] leading-relaxed mb-8">
                            If you have a manual workflow that software can solve, we can build it. Let's discuss your bottleneck.
                        </p>
                        <button className="flex items-center gap-2 text-[#E8A882] font-mono text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                            Discuss Your Project <ArrowRight className="w-4 h-4"/>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
