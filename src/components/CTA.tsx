"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock, FileText, Zap, Search } from "lucide-react";

import { LeadForm } from "./LeadForm";

export const CTA = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="cta">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,113,74,0.08)_0%,transparent_70%)] opacity-50" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8714A]/10 border border-[#C8714A]/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C8714A] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#E8A882] uppercase">
                Now booking for April · Free 30-min Audit
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tighter leading-[1.05] text-[#F2EDE8]">
              Get a Free Operations Audit <span className="text-[#C8714A]">Worth $997</span>
            </h2>
            
            <p className="text-lg text-[#8A857E] mb-10 leading-relaxed">
              In 30 minutes, we&apos;ll show you exactly where your business is bleeding time and money. We hand you a roadmap to fix it. <strong className="text-[#F2EDE8] font-medium">No sales pitch. No obligation.</strong>
            </p>

            <div className="space-y-8">
              {/* Deliverables */}
              <div>
                <h3 className="text-xs font-bold tracking-widest text-[#4A4540] uppercase mb-5">
                  What you get, completely free:
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: Search, text: "30-min deep-dive into your current operations" },
                    { icon: Zap, text: "Identify your top 3 time and money leaks" },
                    { icon: FileText, text: "Custom automation roadmap (yours to keep)" },
                    { icon: Clock, text: "Priority quick wins you can act on immediately" },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon className="w-5 h-5 text-[#C8714A] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[#F2EDE8]">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Guarantee */}
              <div className="bg-[#181816] border border-[#2A2925] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#E8A882]" />
                  <h4 className="font-bold text-[#F2EDE8]">Our Guarantee</h4>
                </div>
                <p className="text-sm text-[#8A857E] leading-relaxed">
                  If we can&apos;t identify at least <strong className="text-[#F2EDE8]">$10,000/year</strong> (or ₹10L/year) in recoverable time and cost, we&apos;ll tell you honestly and refer you elsewhere. Zero pressure.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t border-[#2A2925]">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080807] bg-[#2A2925]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#8A857E]">94% satisfaction rate</span>
                </div>
                <div className="text-xs font-medium text-[#8A857E] flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Results in 2-4 weeks
                </div>
                <div className="text-xs font-medium text-[#8A857E] flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> No lock-in contracts
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <div className="bg-[#111110] border border-[#2A2925] rounded-3xl p-2 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-[#C8714A] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg transform rotate-3">
                Value: $997
              </div>
              <LeadForm />
            </div>
            <p className="text-center text-xs text-[#4A4540] mt-6 flex justify-center items-center gap-2">
              <Clock className="w-3.5 h-3.5" /> 30 min · No commitment · We reply within 2 hours
            </p>
          </motion.div>
          
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8714A] blur-[200px] opacity-[0.03] translate-x-1/3 -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E8A882] blur-[200px] opacity-[0.03] -translate-x-1/3 translate-y-1/2 rounded-full pointer-events-none" />
    </section>
  );
};
