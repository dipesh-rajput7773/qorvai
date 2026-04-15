"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, RefreshCw, Zap } from 'lucide-react';

const services = [
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "AI Automation Systems",
        description: "End-to-end workflows that manage your operations while you sleep. Real-time sync across all your tools.",
        benefit: "SAVE 20+ HOURS/WEEK"
    },
    {
        icon: <RefreshCw className="w-8 h-8" />,
        title: "Lead Generation Engines",
        description: "Automated prospecting and qualification systems that fill your pipeline with high-quality prospects daily.",
        benefit: "INCREASE LEADS BY 3X"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Intelligent AI Assistants",
        description: "Custom-trained chatbots that handle sales, support, and scheduling with human-like precision.",
        benefit: "24/7 AVAILABILITY"
    }
];

export const Services = () => {
    return (
        <section className="py-32 bg-[#111110]/50" id="services">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 max-w-2xl"
                >
                    <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
                        OUR ECOSYSTEM
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter">
                        Intelligence engineered for growth.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#181816] border border-[#2A2925] p-10 rounded-[24px] flex flex-col h-full hover:border-[#E8A882] transition-all group"
                        >
                            <div className="bg-[#080807] w-16 h-16 rounded-2xl flex items-center justify-center text-[#C8714A] mb-8 group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h3 className="font-display text-2xl font-extrabold mb-4 group-hover:text-[#F2EDE8]">
                                {s.title}
                            </h3>
                            <p className="text-[#8A857E] text-[0.95rem] leading-relaxed flex-grow mb-8">
                                {s.description}
                            </p>
                            <div className="pt-8 border-t border-[#2A2925] font-display font-extrabold text-[0.75rem] text-[#E8A882] tracking-wider">
                                {s.benefit}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
