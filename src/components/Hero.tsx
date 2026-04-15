"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
                        01 — AI AUTOMATION AGENCY
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tighter">
                        Automate Your Business. <br />
                        <span className="font-serif-editorial italic font-light text-[#E8A882]">Scale Without Hiring.</span>
                    </h1>
                    <p className="text-xl text-[#8A857E] max-w-xl mb-12 leading-relaxed">
                        We engineer custom AI systems that eliminate manual work, capture missing leads, and drive exponential growth.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#C8714A] text-white px-8 py-4 rounded-lg font-display font-bold text-sm tracking-wide shadow-lg shadow-[#C8714A]/20 hover:bg-[#E8A882] transition-colors"
                        >
                            Book a Free Strategy Call
                        </motion.button>
                        <motion.button
                            whileHover={{ borderColor: "#C8714A", color: "#F2EDE8" }}
                            className="border border-[#2A2925] text-[#8A857E] px-8 py-4 rounded-lg font-display font-bold text-sm tracking-wide flex items-center justify-center gap-2 group transition-all"
                        >
                            Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative group"
                >
                    <div className="relative aspect-square rounded-[32px] overflow-hidden border border-[#2A2925] bg-[#111110] shadow-2xl transition-all duration-500 group-hover:border-[#C8714A]/50">
                        {/* Generative CSS Visual */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#C8714A10,transparent)]"></div>
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div 
                                animate={{ 
                                    rotate: 360,
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-[50%] opacity-20"
                                style={{
                                    background: 'conic-gradient(from 0deg, transparent, #C8714A, transparent, #E8A882, transparent)'
                                }}
                            />
                        </div>
                        
                        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
                            <div className="w-[85%] h-[65%] glass rounded-3xl p-8 flex flex-col justify-between">
                                <div className="space-y-3">
                                    <div className="h-1.5 w-12 bg-[#C8714A] rounded-full"></div>
                                    <div className="h-1.5 w-full bg-[#2A2925] rounded-full"></div>
                                    <div className="h-1.5 w-[80%] bg-[#2A2925] rounded-full"></div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="space-y-2 w-1/2">
                                        <div className="h-1.5 w-full bg-[#2A2925] rounded-full"></div>
                                        <div className="h-1.5 w-2/3 bg-[#2A2925] rounded-full"></div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-[#C8714A]/30 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-[#C8714A] animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-3 mt-4">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="h-12 bg-[#181816]/50 border border-[#2A2925] rounded-xl"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Glowing effect */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C8714A] blur-[120px] opacity-[0.08] rounded-full z-0 group-hover:opacity-15 transition-opacity"></div>
                </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C8714A]/5 to-transparent pointer-events-none"></div>
        </section>
    );
};
