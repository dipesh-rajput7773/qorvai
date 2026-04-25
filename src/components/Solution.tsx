"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap } from 'lucide-react';

export const Solution = () => {
    return (
        <section className="py-32" id="solution">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
                            THE SOLUTION
                        </p>
                        <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tighter">
                            <span className="font-serif-editorial italic font-light text-[#E8A882]">AI Chatbots</span> <br />
                            + Automation.
                        </h2>
                        <p className="text-lg text-[#8A857E] leading-relaxed mb-8">
                            Imagine a business that never sleeps. Our AI solutions seamlessly handle lead qualification, customer inquiries, and data entry, so you can focus exclusively on scaling your operations map without overhead delays.
                        </p>
                        
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-[#F2EDE8]">
                                <Bot className="w-5 h-5 text-[#C8714A]" /> Round-the-clock conversational lead capture
                            </li>
                            <li className="flex items-center gap-3 text-[#F2EDE8]">
                                <Zap className="w-5 h-5 text-[#C8714A]" /> Streamlined repetitive operations
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#2A2925] bg-[#111110] relative flex items-center justify-center p-8 group hidden lg:flex hover:border-[#C8714A]/50 transition-colors duration-500">
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#C8714A10,transparent)]"></div>
                             
                             {/* Abstract UI representation of an AI Chatbot & Dashboard handling leads */}
                             <div className="w-full h-full relative z-10 flex gap-4">
                                {/* Chat Interface */}
                                <div className="w-1/2 h-full bg-[#181816]/70 border border-[#2A2925] rounded-xl p-4 flex flex-col justify-end space-y-3">
                                    <div className="bg-[#2A2925] w-2/3 h-8 rounded-lg self-start"></div>
                                    <div className="bg-[#C8714A]/30 w-3/4 h-12 rounded-lg self-end border border-[#C8714A]/50"></div>
                                    <div className="bg-[#2A2925] w-1/2 h-8 rounded-lg self-start"></div>
                                </div>
                                
                                {/* Automation Graph */}
                                <div className="w-1/2 h-full flex flex-col gap-4">
                                    <div className="h-1/2 bg-[#181816]/70 border border-[#2A2925] rounded-xl p-4 flex items-center justify-center">
                                       <div className="h-8 w-8 rounded-full bg-[#E8A882]/40 animate-pulse"></div>
                                       <div className="h-1 w-16 bg-[#2A2925] mx-2"></div>
                                       <div className="h-8 w-8 rounded-md bg-[#C8714A]/60"></div>
                                    </div>
                                    <div className="h-1/2 bg-[#181816]/70 border border-[#2A2925] rounded-xl p-4 flex flex-col justify-end gap-2">
                                        <div className="w-full h-2 bg-[#2A2925] rounded-full"></div>
                                        <div className="w-full h-2 bg-[#2A2925] rounded-full"></div>
                                        <div className="w-3/4 h-2 bg-[#2A2925] rounded-full"></div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
