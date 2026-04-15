"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

export const LeadForm = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <div className="bg-[#111110] border border-[#2A2925] p-8 md:p-12 rounded-[32px] shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
                {status !== 'success' ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h3 className="font-display text-3xl font-extrabold mb-8">Start Your <span className="text-[#C8714A]">Audit</span></h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[0.7rem] font-bold text-[#4A4540] tracking-widest uppercase">Full Name</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full bg-[#080807] border border-[#2A2925] rounded-xl px-4 py-4 text-[#F2EDE8] focus:border-[#C8714A] focus:outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[0.7rem] font-bold text-[#4A4540] tracking-widest uppercase">Work Email</label>
                                    <input 
                                        required
                                        type="email" 
                                        className="w-full bg-[#080807] border border-[#2A2925] rounded-xl px-4 py-4 text-[#F2EDE8] focus:border-[#C8714A] focus:outline-none transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-1">
                                <label className="text-[0.7rem] font-bold text-[#4A4540] tracking-widest uppercase">Current Monthly Volume</label>
                                <select className="w-full bg-[#080807] border border-[#2A2925] rounded-xl px-4 py-4 text-[#F2EDE8] focus:border-[#C8714A] focus:outline-none transition-all appearance-none cursor-pointer">
                                    <option>Less than 100 leads /mo</option>
                                    <option>100 - 500 leads /mo</option>
                                    <option>500 - 2,000 leads /mo</option>
                                    <option>2,000+ leads /mo</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[0.7rem] font-bold text-[#4A4540] tracking-widest uppercase">Biggest Growth Bottleneck</label>
                                <textarea 
                                    className="w-full bg-[#080807] border border-[#2A2925] rounded-xl px-4 py-4 text-[#F2EDE8] focus:border-[#C8714A] focus:outline-none transition-all h-32 resize-none"
                                    placeholder="e.g. Manual follow-ups are killing our conversion..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'submitting'}
                                className="w-full bg-[#C8714A] text-white py-5 rounded-xl font-display font-bold text-lg tracking-wide shadow-xl shadow-[#C8714A]/20 flex items-center justify-center gap-3 transition-all"
                            >
                                {status === 'submitting' ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <><Send className="w-5 h-5" /> Analyze My Business</>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="w-20 h-20 bg-[#C8714A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-10 h-10 text-[#C8714A]" />
                        </div>
                        <h3 className="font-display text-4xl font-extrabold mb-4">You're in.</h3>
                        <p className="text-[#8A857E] text-lg max-w-sm mx-auto">
                            We've received your data. A senior automation engineer will contact you within 24 hours to schedule your audit.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative background visual */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8714A]/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
    );
};
