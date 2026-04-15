"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { n: "01", title: "Audit", desc: "We map your current workflows and identify the biggest time sinks and revenue gaps." },
    { n: "02", title: "Strategy", desc: "A custom blueprint for your AI ecosystem, focused on ROI and seamless integration." },
    { n: "03", title: "Build", desc: "Our engineers deploy your custom systems. Fast, secure, and production-ready." },
    { n: "04", title: "Scale", desc: "Ongoing optimization and support as your business reaches new heights." }
];

export const Process = () => {
    return (
        <section className="py-32" id="process">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
                        HOW WE WORK
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter">
                        The Road to Automation
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="relative group pt-12"
                        >
                            <span className="absolute top-0 right-4 font-display text-7xl font-extrabold text-[#C8714A]/10 transition-colors group-hover:text-[#C8714A]/20">
                                {step.n}
                            </span>
                            <div className="bg-[#181816] border border-[#2A2925] p-8 rounded-2xl relative z-10 h-full group-hover:border-[#C8714A] transition-all">
                                <h4 className="font-display text-xl font-bold mb-4 text-[#F2EDE8]">
                                    {step.title}
                                </h4>
                                <p className="text-[#8A857E] text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
