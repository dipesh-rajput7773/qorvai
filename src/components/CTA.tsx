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

            {/* WhatsApp alternative CTA */}
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/917428461651?text=Hi+Qorvai%2C+I+want+to+automate+my+business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#2A2925] text-[#F2EDE8] rounded-xl px-6 py-3 text-sm font-medium hover:border-[#25D366] hover:text-[#25D366] transition-colors w-fit group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-[#25D366] group-hover:scale-110 transition-transform"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Or chat on WhatsApp
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
