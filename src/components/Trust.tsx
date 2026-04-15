"use client";
import React from 'react';
import { motion } from 'framer-motion';

const logos = ["LINEAR", "NOTION", "STRIPE", "APPLE", "VERCEL", "OPENAI"];

export const Trust = () => {
    return (
        <section className="py-20 border-y border-[#2A2925]">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <p className="text-[0.7rem] tracking-[0.3em] text-[#4A4540] font-bold mb-12">
                    TRUSTED BY FOUNDERS & GROWING BRANDS
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
