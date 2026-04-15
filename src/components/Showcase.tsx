"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';

const projects = [
    {
        title: "FinTech Lead Engine",
        client: "VentureScale",
        metric: "+240% Conv Rate",
        image: "bg-[#181816]",
        tags: ["AI Chatbot", "Typeform Sync"]
    },
    {
        title: "SaaS Workflow 2.0",
        client: "CloudOps",
        metric: "-18h Work/Week",
        image: "bg-[#111110]",
        tags: ["Zapier", "OpenAI API"]
    }
];

export const Showcase = () => {
    return (
        <section className="py-32" id="showcase">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-4">
                            CASE STUDIES
                        </p>
                        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter">
                            Proven results for <br />
                            <span className="font-serif-editorial italic text-[#E8A882] font-light">ambitious founders.</span>
                        </h2>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#8A857E] max-w-sm text-right hidden md:block"
                    >
                        We don't just build scripts. We engineer revenue-generating ecosystems that integrate deeply with your current stack.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-[4/3] rounded-[32px] ${p.image} border border-[#2A2925] mb-8 relative overflow-hidden transition-all group-hover:border-[#C8714A]/40`}>
                                <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                                    <div className="flex gap-2">
                                        {p.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/5 rounded-full text-[0.6rem] font-bold tracking-widest text-[#F2EDE8]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#C8714A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-white">
                                        <ExternalLink className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="absolute top-8 right-8 bg-[#C8714A]/10 border border-[#C8714A]/20 px-4 py-2 rounded-full flex items-center gap-2">
                                    <TrendingUp className="w-3 h-3 text-[#C8714A]" />
                                    <span className="text-[0.65rem] font-extrabold text-[#E8A882] uppercase tracking-tighter">{p.metric}</span>
                                </div>
                            </div>
                            <p className="text-[#8A857E] font-bold text-xs uppercase tracking-widest mb-2">{p.client}</p>
                            <h4 className="font-display text-2xl font-extrabold group-hover:text-[#C8714A] transition-colors">
                                {p.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
