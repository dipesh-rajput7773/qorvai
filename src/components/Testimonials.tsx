"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Qorvai built us a Playwright bot that handles 500+ OCI applications a month. We went from 40 hours of data entry per week to 2 hours of monitoring. ROI in 3 weeks.",
    name: "Rahul M.",
    role: "Director, Immigration Agency",
    location: "Mumbai",
    metric: "40hrs → 2hrs/week",
  },
  {
    quote:
      "The Flipkart + Meesho sync they built means zero overselling, zero manual order updates. Our cancellation rate dropped from 15% to 2%. Incredible.",
    name: "Priya S.",
    role: "Founder, E-Commerce Brand",
    location: "Delhi",
    metric: "15% → 2% cancellations",
  },
  {
    quote:
      "Our Instagram DMs used to sit unanswered for hours. Now every comment gets a reply in 90 seconds. Our booking rate went up 67% in the first month.",
    name: "Chef Arjun K.",
    role: "Owner, Restaurant Chain",
    location: "Bangalore",
    metric: "+67% bookings",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 border-t border-[#2A2925]" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
            CLIENT RESULTS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter">
            What our clients{" "}
            <span className="font-serif-editorial italic font-light text-[#E8A882]">
              say.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#111110] border border-[#2A2925] rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-[#C8714A]/40 transition-all"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C8714A] blur-[100px] opacity-0 group-hover:opacity-[0.06] transition-opacity rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Metric badge */}
                <div className="text-[#C8714A] text-xs font-mono font-bold mb-6 bg-[#C8714A]/10 border border-[#C8714A]/20 rounded-full px-4 py-1.5 w-fit flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C8714A] rounded-full animate-pulse" />
                  {t.metric}
                </div>

                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#2A2925] mb-4" />

                {/* Quote text */}
                <p className="text-[#8A857E] text-sm leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="pt-6 border-t border-[#2A2925]">
                  <div className="font-display font-bold text-[#F2EDE8] text-sm">
                    {t.name}
                  </div>
                  <div className="text-[#4A4540] text-xs mt-1">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
