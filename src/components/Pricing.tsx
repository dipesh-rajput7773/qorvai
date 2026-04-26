"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    priceINR: "₹25,000",
    priceUSD: "$299",
    desc: "One automation, fast delivery",
    timeline: "Delivered in 1 week",
    features: [
      "Single workflow automation",
      "1 platform integration",
      "Error handling + retry logic",
      "30-day bug fix guarantee",
      "Handoff documentation",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    priceINR: "₹75,000",
    priceUSD: "$899",
    desc: "Full pipeline, multiple platforms",
    timeline: "Delivered in 2–3 weeks",
    features: [
      "Multi-platform automation",
      "AI document extraction or web scraping",
      "n8n workflow + dashboard",
      "WhatsApp/Instagram integration",
      "60-day support",
      "Weekly performance reports",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    priceINR: "Custom",
    priceUSD: "Custom",
    desc: "Full AI ecosystem build",
    timeline: "Delivered in 3–6 weeks",
    features: [
      "Everything in Growth",
      "Custom AI agent development",
      "Full-stack dashboard (Next.js)",
      "RAG / LLM pipeline",
      "Ongoing maintenance plan",
      "Priority support",
      "Monthly optimization calls",
    ],
    cta: "Book Audit Call",
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section
      className="py-32 bg-[#080807] border-y border-[#2A2925]"
      id="pricing"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
            TRANSPARENT PRICING
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter mb-4">
            Simple,{" "}
            <span className="text-[#E8A882] italic font-serif-editorial">
              Scoped
            </span>{" "}
            Pricing.
          </h2>
          <p className="text-[#8A857E] max-w-xl mx-auto mb-8 text-lg">
            Every project starts with a free 30-min audit. Exact cost scoped to
            your workflow. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-3xl relative border flex flex-col h-full ${
                tier.highlight
                  ? "border-[#C8714A] bg-[#C8714A]/5"
                  : "border-[#2A2925] bg-[#111110]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#C8714A] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-bold text-[#F2EDE8] mb-2">
                {tier.name}
              </h3>
              <p className="text-4xl font-display font-extrabold text-[#E8A882] mb-1">
                {tier.priceUSD}
              </p>
              <p className="text-sm text-[#8A857E] mb-1">{tier.desc}</p>
              <p className="text-xs font-mono text-[#4A4540] mb-8">
                {tier.timeline}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C8714A] flex-shrink-0" />
                    <span className="text-[#F2EDE8] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="#cta"
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all mt-auto text-center block ${
                  tier.highlight
                    ? "bg-[#C8714A] text-white hover:bg-[#E8A882]"
                    : "bg-[#181816] text-[#F2EDE8] border border-[#2A2925] hover:bg-[#2A2925]"
                }`}
              >
                {tier.highlight ? "Book Free Audit →" : `${tier.cta} →`}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[#4A4540] mt-8">
          All projects start with a free 30-min audit. No commitment required.
        </p>
      </div>
    </section>
  );
};
