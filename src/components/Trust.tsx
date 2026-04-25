"use client";
import React from 'react';
import { motion } from 'framer-motion';

const logos = ["OpenAI", "Anthropic", "n8n", "Zapier", "Next.js", "Stripe", "Make"];

export const Trust = () => {
    return (
        <section className="py-20 border-y border-[#2A2925]">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto border-b border-[#2A2925] pb-12">
                    <div className="text-center">
                        <h3 className="font-display text-4xl md:text-5xl font-extrabold text-[#E8A882] mb-2">500+</h3>
                        <p className="text-[#8A857E] font-medium tracking-wide">Automations Built</p>
                    </div>
                    <div className="text-center md:border-x md:border-[#2A2925]">
                        <h3 className="font-display text-4xl md:text-5xl font-extrabold text-[#E8A882] mb-2">50+</h3>
                        <p className="text-[#8A857E] font-medium tracking-wide">Enterprises & SMBs</p>
                    </div>
                    <div className="text-center">
                        <h3 className="font-display text-4xl md:text-5xl font-extrabold text-[#E8A882] mb-2">98%</h3>
                        <p className="text-[#8A857E] font-medium tracking-wide">Client Satisfaction</p>
                    </div>
                </div>

                <p className="text-[0.7rem] tracking-[0.3em] text-[#4A4540] font-bold mb-12 uppercase">
                    Our Elite Tech Stack
                </p>
                
                <div className="flex overflow-hidden group select-none">
                    <motion.div 
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex min-w-full justify-around items-center gap-16 pr-16"
                    >
                        {logos.map((logo, i) => (
                            <span key={i} className="font-display font-extrabold text-2xl text-[#4A4540] opacity-50 hover:opacity-100 transition-opacity">
                                {logo}
                            </span>
                        ))}
                    </motion.div>
                    <motion.div 
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex min-w-full justify-around items-center gap-16 pr-16"
                    >
                        {logos.map((logo, i) => (
                            <span key={i + logos.length} className="font-display font-extrabold text-2xl text-[#4A4540] opacity-50 hover:opacity-100 transition-opacity">
                                {logo}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
