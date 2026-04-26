"use client";
import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { val: "50+", label: "AI Systems Deployed" },
  { val: "40hrs", label: "Avg. Saved Per Client/Week" },
  { val: "2 Weeks", label: "Average Delivery Time" },
  { val: "100%", label: "Manual Work Eliminated" },
];

export const Results = () => {
  return (
    <section className="py-20" id="results">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#181816] to-[#111110] border border-[#2A2925] rounded-[40px] p-12 md:p-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C8714A] blur-[180px] opacity-10 pointer-events-none" />

          {metrics.map((m, i) => (
            <div key={i} className="relative z-10">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="block font-display text-5xl md:text-7xl font-extrabold text-[#E8A882] mb-4 tracking-tighter"
              >
                {m.val}
              </motion.span>
              <span className="font-display text-[0.7rem] tracking-[0.15em] text-[#4A4540] font-bold uppercase">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
