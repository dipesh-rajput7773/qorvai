"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
    {
        name: "Discovery Roadmap",
        price: "Fixed Fee",
        desc: "A low-risk foundational audit and blueprint design for your automation ecosystem.",
        features: [
            "Complete Workflow Audit (2 Hours)",
            "ROI Feasibility Analysis",
            "Tech-Stack Architecture Map",
            "Specific AI Prompt Frameworks",
            "Fixed-Price Build Proposal"
        ]
    },
    {
        name: "Custom Build",
        price: "One-Time Build",
        desc: "Full execution and deployment of your custom AI Agents or Workflow Automation.",
        features: [
            "Everything in Discovery",
            "Dedicated Development Sandbox",
            "API & System Integrations",
            "Quality Assurance & Edge Testing",
            "Staff Training & Handoff",
            "30-Day Bug Fix Guarantee"
        ]
    },
    {
        name: "Tech Partner",
        price: "Monthly Retainer",
        desc: "Ongoing support, scaling, and proactive prompt optimization for production systems.",
        features: [
            "Guaranteed Server Uptime & Hosting",
            "Monthly Prompt Optimization",
            "API Version Maintenance",
            "Priority Slack/WhatsApp Channel",
            "Quarterly Automation Scaling Reviews"
        ],
        highlight: true
    }
];

export const Pricing = () => {
    return (
        <section className="py-32 bg-[#080807] border-y border-[#2A2925]" id="pricing">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-20">
                    <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
                        TRANSPARENT ENGAGEMENT
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter mb-4">
                        Simple, <span className="text-[#E8A882] italic font-serif-editorial">Honest</span> Pricing.
                    </h2>
                    <p className="text-[#8A857E] max-w-xl mx-auto">No hidden costs. We map your needs, deliver the codebase, and optionally maintain it for you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`p-8 rounded-3xl relative border flex flex-col h-full ${tier.highlight ? 'border-[#C8714A] bg-[#C8714A]/5' : 'border-[#2A2925] bg-[#111110]'}`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#C8714A] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}
                            <h3 className="font-display text-2xl font-bold text-[#F2EDE8] mb-2">{tier.name}</h3>
                            <p className="text-sm font-bold tracking-wide text-[#E8A882] mb-4 uppercase">{tier.price}</p>
                            <p className="text-sm text-[#8A857E] mb-8 leading-relaxed flex-grow">{tier.desc}</p>
                            
                            <div className="space-y-4 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#C8714A] flex-shrink-0" />
                                        <span className="text-[#F2EDE8] text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all mt-auto ${tier.highlight ? 'bg-[#C8714A] text-white hover:bg-[#E8A882]' : 'bg-[#181816] text-[#F2EDE8] border border-[#2A2925] hover:bg-[#2A2925]'}`}>
                                Book Discovery Call
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
