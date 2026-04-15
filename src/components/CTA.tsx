"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const CTA = () => {
    return (
        <section className="py-40 relative overflow-hidden" id="cta">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-radial-gradient from-[#C8714A]/10 to-transparent opacity-50"></div>
            
            <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
                        Ready to <span className="font-serif-editorial italic text-[#E8A882] font-light">automate?</span>
                    </h2>
                    <p className="text-xl text-[#8A857E] max-w-2xl mx-auto mb-12 leading-relaxed">
                        Our systems are built for founders who value their time. We only take 5 clients per month to ensure premium delivery.
                    </p>
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#C8714A] text-white px-12 py-6 rounded-xl font-display font-bold text-lg tracking-wide shadow-2xl shadow-[#C8714A]/30 hover:bg-[#E8A882] transition-all"
                    >
                        Book a Free Strategy Call
                    </motion.button>
                    
                    <p className="mt-8 font-display text-[#C8714A] font-bold text-[0.85rem] tracking-widest uppercase">
                        2 spots remaining for May
                    </p>
                </motion.div>
            </div>
            
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8714A] blur-[150px] opacity-[0.05] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8A882] blur-[150px] opacity-[0.05] translate-x-1/2 translate-y-1/2 rounded-full"></div>
        </section>
    );
};
