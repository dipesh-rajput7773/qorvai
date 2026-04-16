"use client";
import React from 'react';
import { motion } from 'framer-motion';

import { LeadForm } from './LeadForm';

export const CTA = () => {
    return (
        <section className="py-20 lg:py-40 relative overflow-hidden" id="cta">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,113,74,0.1)_0%,transparent_70%)] opacity-50"></div>
            
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[0.95]">
                            Ready to <br /><span className="font-serif-editorial italic text-[#E8A882] font-light">automate?</span>
                        </h2>
                        <p className="text-xl text-[#8A857E] max-w-md mb-12 leading-relaxed">
                            Our systems are built for founders who value their time. We carefully partner with our clients to ensure premium delivery and maximum ROI.
                        </p>
                        
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1,2,3].map(i => (
                                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#080807] bg-[#2A2925]`}></div>
                                ))}
                            </div>
                            <p className="text-sm font-bold text-[#F2EDE8]">Trusted by modern founders</p>
                        </div>

                        <p className="mt-12 font-display text-[#C8714A] font-bold text-[0.85rem] tracking-widest uppercase">
                            Currently accepting applications
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <LeadForm />
                    </motion.div>
                </div>
            </div>
            
            {/* Decorative Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8714A] blur-[150px] opacity-[0.05] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8A882] blur-[150px] opacity-[0.05] translate-x-1/2 translate-y-1/2 rounded-full"></div>
        </section>
    );
};
