"use client";
import React from 'react';
import { motion } from 'framer-motion';

const problems = [
    { num: "01", text: "Wasting 20+ hours a week on repetitive manual tasks." },
    { num: "02", text: "Missing high-intent leads because your response time is slow." },
    { num: "03", text: "Complex workflows that break every time you try to scale up." }
];

export const Problem = () => {
    return (
        <section className="py-32" id="problem">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
                        THE BOTTLENECK
                    </p>
                    <h2 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tighter">
                        Scaling shouldn't mean <br />
                        <span className="font-serif-editorial italic font-light text-[#E8A882]">suffering.</span>
                    </h2>
                    <p className="text-lg text-[#8A857E] leading-relaxed">
                        Manual processes are silent growth killers. Most businesses fail to scale not because of a lack of customers, but because their operations are built on human effort alone.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {problems.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="bg-[#111110] border border-[#2A2925] p-8 rounded-2xl flex gap-6 hover:border-[#C8714A] transition-all group"
                        >
                            <span className="font-display font-extrabold text-[#C8714A] group-hover:text-[#E8A882] transition-colors">
                                {p.num}
                            </span>
                            <p className="text-[#F2EDE8] font-medium leading-snug">
                                {p.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
