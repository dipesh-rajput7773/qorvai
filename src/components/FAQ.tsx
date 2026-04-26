"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What exactly does Qorvai build?",
    answer:
      'We build custom AI systems: Playwright bots that automate complex portals, AI document extraction pipelines for finance firms, Instagram-to-DM lead engines for retail chains, n8n workflow automations for e-commerce, and full-stack dashboards. Everything is custom-coded for your exact business — no templates.',
  },
  {
    question: "How long does a project take?",
    answer:
      "Most automations are live in 1–3 weeks. A full-stack dashboard or complex multi-platform system takes 3–5 weeks. We start with a free 30-minute audit, scope the project in 3–5 days, then build.",
  },
  {
    question: "Do you build solutions globally?",
    answer:
      "Yes. We actively work with clients in the USA, UK, Australia, and the Middle East. Our custom agents are designed to scale globally, ensuring reliable infrastructure no matter where your operations sit.",
  },
  {
    question: "What's your pricing?",
    answer:
      "Projects start at $299 for simple automations (single workflow, single platform). Complex systems (multi-platform scraping, full RAG pipelines, dashboards) range from $899+. We scope exact costs after the free audit call so there are zero surprises.",
  },
  {
    question: "Will the automation break if the website changes?",
    answer:
      "We build with resilience in mind — error handling, retry logic, and alerts when something breaks. We also offer ongoing maintenance plans so your systems keep running without you worrying about it.",
  },
  {
    question: "Is web scraping compliant?",
    answer:
      "We adhere strictly to data privacy laws and terms of service. We focus on public data extraction and authorized API integrations ensuring 100% compliance and zero ban-risk for your accounts.",
  },
  {
    question: "Can you automate our WhatsApp / Instagram leads?",
    answer:
      "Yes. We build official Meta API integrations (not third-party bots that get banned). Comment-to-DM automation, WhatsApp AI bots, and full lead qualification pipelines — all using platforms that comply with Meta's terms.",
  },
  {
    question: "How do you compare to hiring a developer or traditional agency?",
    answer:
      "We don't just write code; we understand business ROI. A developer needs exact specs. We look at your operational bottlenecks and architect an autonomous agent that directly reduces your operating costs, faster and cheaper than a full-time hire.",
  },
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
    <section
      className="py-24 bg-[#111110] border-t border-[#2A2925]"
      id="faq"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-display text-[0.75rem] tracking-[0.2em] text-[#C8714A] font-bold mb-6">
            GOT QUESTIONS?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Frequently Asked{" "}
            <span className="font-serif-editorial italic font-light text-[#C8714A]">
              Questions
            </span>
          </h2>
          <p className="text-[#8A857E] text-lg">
            Everything you need to know about our automation process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#2A2925] rounded-2xl overflow-hidden transition-colors duration-300 ${
                openIndex === index
                  ? "bg-[#181816]"
                  : "bg-transparent hover:bg-[#181816]"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8714A]"
              >
                <span className="font-display font-bold text-[#F2EDE8] pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-[#C8714A]">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
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
