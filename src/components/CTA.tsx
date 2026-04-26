"use client";
import React from "react";
import { motion } from "framer-motion";

import { LeadForm } from "./LeadForm";

export const CTA = () => {
  return (
    <section className="py-20 lg:py-40 relative overflow-hidden" id="cta">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,113,74,0.1)_0%,transparent_70%)] opacity-50" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8714A]/10 border border-[#C8714A]/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C8714A] animate-pulse" />
              <span className="text-xs font-medium text-[#E8A882]">
                Currently accepting 3 new clients — April 2026
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[0.95]">
              Ready to <br />
              <span className="font-serif-editorial italic text-[#E8A882] font-light">
                automate?
              </span>
            </h2>
            <p className="text-xl text-[#8A857E] max-w-md mb-12 leading-relaxed">
              Our systems are built for founders who value their time. We
              carefully partner with our clients to ensure premium delivery and
              maximum ROI.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-[#080807] bg-[#2A2925]"
                  />
                ))}
              </div>
              <p className="text-sm font-bold text-[#F2EDE8]">
                Trusted by modern founders
              </p>
            </div>

            {/* Email alternative CTA */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:business@qorvai.com"
                className="inline-flex items-center justify-center gap-2 border border-[#2A2925] text-[#F2EDE8] rounded-xl px-6 py-3 text-sm font-medium hover:border-[#C8714A] hover:text-[#C8714A] transition-colors w-fit group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Or email us directly
              </a>
            </div>
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8714A] blur-[150px] opacity-[0.05] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8A882] blur-[150px] opacity-[0.05] translate-x-1/2 translate-y-1/2 rounded-full" />
    </section>
  );
};
