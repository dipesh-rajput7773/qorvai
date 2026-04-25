"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How long does it take to build an AI automation?",
        answer: "Most custom automations (like portal scrapers or CRM syncs) take 2-4 weeks from discovery to deployment. Simpler workflows using n8n or Zapier can often be deployed within 1 week."
    },
    {
        question: "Do I need technical knowledge to use the AI agents?",
        answer: "Not at all. We build fully \"done-for-you\" systems. You'll get a simple dashboard or WhatsApp interface to trigger your agents, while the complex logic runs invisibly in the background."
    },
    {
        question: "Is web scraping legal in India?",
        answer: "We adhere strictly to data privacy laws and terms of service. We focus on public data extraction and authorized API integrations ensuring 100% compliance and zero ban-risk for your accounts."
    },
    {
        question: "What is your pricing structure?",
        answer: "We operate on a transparent 3-tier model: A low-cost Discovery Roadmap, a fixed-fee Build phase, and an optional monthly Retainer for ongoing support and hosting. No hidden fees."
    },
    {
        question: "How do you compare to hiring a traditional agency or developer?",
        answer: "We don't just write code; we understand business ROI. A developer needs exact specs. We look at your bottleneck (e.g. Visa data entry) and architect an autonomous agent that directly reduces your operating costs, faster and cheaper than an employee."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <section className="py-24 bg-[#111110] border-t border-[#2A2925]" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-[800px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
                        Frequently Asked <span className="font-serif-editorial italic font-light text-[#C8714A]">Questions</span>
                    </h2>
                    <p className="text-[#8A857E] text-lg">Everything you need to know about our automation process.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`border border-[#2A2925] rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'bg-[#181816]' : 'bg-transparent hover:bg-[#181816]'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8714A]"
                            >
                                <span className="font-display font-bold text-[#F2EDE8] pr-8">{faq.question}</span>
                                <span className="flex-shrink-0 text-[#C8714A]">
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-[#8A857E] leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
