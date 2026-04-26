"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Calculator, ShoppingCart, Building2, Check, X, ArrowRight } from "lucide-react";

// Lucide icon components mapped to industries
const industries = [
  {
    id: "visa",
    name: "Visa Agencies",
    icon: Plane,
    headline: "Stop manually filling hundreds of portal forms.",
    subtitle: "We connect your WhatsApp leads, CRM, and government portals into one hands-free workflow.",
    before: [
      "Manual data entry (15 mins per application)",
      "Chasing clients for missing passport PDFs",
      "Login timeouts and portal crashes",
      "Zero visibility on application status"
    ],
    after: [
      "Playwright bot auto-fills portal forms",
      "AI Whatsapp bot collects missing docs",
      "Headless scraping bypasses IP blocks",
      "Live status dashboard for agents"
    ],
    metric: "100%",
    metricDesc: "elimination of manual typing",
    tools: ["Playwright", "n8n", "WhatsApp API"]
  },
  {
    id: "ca",
    name: "CA Firms",
    icon: Calculator,
    headline: "Stop sorting through messy physical invoices.",
    subtitle: "We build AI agents that extract GST data and sync it straight to your accounting software.",
    before: [
      "Sorting WhatsApp image invoices",
      "Manual GST data entry into Tally/Xero",
      "Client follow-ups for missing bills",
      "High human error rate in late nights"
    ],
    after: [
      "AI vision auto-reads blurry invoices",
      "Direct API sync to Tally/Xero/Zoho",
      "Auto-reminders sent to clients via WhatsApp",
      "Instant discrepancy flagging"
    ],
    metric: "40 hrs",
    metricDesc: "saved per week during tax season",
    tools: ["OpenAI Vision", "Make.com", "Tally API"]
  },
  {
    id: "ecom",
    name: "E-Commerce",
    icon: ShoppingCart,
    headline: "Stop reconciling Flipkart & Meesho returns manually.",
    subtitle: "We unify your fragmented marketplaces into a single, automated profit tracking engine.",
    before: [
      "Downloading CSVs from 5 different portals",
      "Manually matching returns to deductions",
      "No real-time profit tracking",
      "Delayed customer support replies"
    ],
    after: [
      "Automated CSV fetching & DB merging",
      "Anomaly detection for fake returns",
      "Real-time profit dashboard",
      "AI Instagram/WhatsApp support agent"
    ],
    metric: "15%",
    metricDesc: "recovered revenue from fake returns",
    tools: ["Python Scripts", "Supabase", "ChatGPT"]
  },
  {
    id: "realestate",
    name: "Dubai Brokers",
    icon: Building2,
    headline: "Stop scraping PropertyFinder by hand.",
    subtitle: "We build custom scrapers to pull fresh property listings before your competitors see them.",
    before: [
      "Refreshing property portals daily",
      "Manual copy-pasting to Google Sheets",
      "Slow response to new buyer inquiries",
      "Outdated listings shared with clients"
    ],
    after: [
      "Automated hourly scraping of new listings",
      "Instant WhatsApp alerts for hot properties",
      "AI auto-qualifies leads 24/7",
      "Automated PDF brochure generation"
    ],
    metric: "5x",
    metricDesc: "faster lead response time",
    tools: ["Puppeteer", "n8n", "WhatsApp Cloud"]
  }
];

export const IndustryWorkflows = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeIndustry = industries.find((i) => i.id === activeTab)!;

  return (
    <section className="py-32 bg-[#080807] relative border-t border-[#2A2925]" id="industries">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            We Know <span className="text-[#C8714A]">Your Industry</span>
          </h2>
          <p className="text-[#8A857E] max-w-2xl mx-auto text-lg mb-10">
            We don&apos;t do generic templates. We map your actual workflows first, then build the automation that fits correctly.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                    isActive
                      ? "bg-[#C8714A] text-white border-[#C8714A] shadow-lg shadow-[#C8714A]/20"
                      : "bg-[#111110] text-[#8A857E] border-[#2A2925] hover:border-[#4A4540] hover:text-[#F2EDE8]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#8A857E]"}`} />
                  {ind.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Card */}
        <div className="bg-[#111110] border border-[#2A2925] rounded-[2rem] overflow-hidden shadow-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-[#2A2925]"
            >
              
              {/* Left Column (Content) */}
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#F2EDE8] mb-3">
                    {activeIndustry.headline}
                  </h3>
                  <p className="text-[#8A857E] leading-relaxed">
                    {activeIndustry.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before */}
                  <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6">
                    <div className="text-[0.65rem] font-bold tracking-widest text-[#8A857E] uppercase mb-4">
                      Before
                    </div>
                    <ul className="space-y-4">
                      {activeIndustry.before.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-[#8A857E]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-6">
                    <div className="text-[0.65rem] font-bold tracking-widest text-[#8A857E] uppercase mb-4">
                      After (With Qorvai)
                    </div>
                    <ul className="space-y-4">
                      {activeIndustry.after.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-[#F2EDE8] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-[#2A2925] flex flex-col sm:flex-row items-center justify-between gap-6">
                   <p className="text-sm text-[#8A857E]">
                    See how we do this for {activeIndustry.name}?
                   </p>
                   <a 
                    href="#cta" 
                    className="flex items-center gap-2 text-sm font-bold text-[#C8714A] hover:text-[#E8A882] transition-colors group"
                   >
                     Get Your Free Workflow Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>

              {/* Right Column (Metrics & Tools) */}
              <div className="p-8 md:p-12 bg-[#080807] flex flex-col justify-center">
                <div className="mb-14">
                  <div className="font-display text-7xl font-extrabold text-[#E8A882] mb-4">
                    {activeIndustry.metric}
                  </div>
                  <div className="text-sm font-bold text-[#F2EDE8] uppercase tracking-wider mb-2">
                    {activeIndustry.metricDesc}
                  </div>
                  <div className="text-xs text-[#8A857E]">
                    avg. across our {activeIndustry.name.toLowerCase()} clients
                  </div>
                </div>

                <div>
                  <div className="text-[0.65rem] font-bold tracking-widest text-[#8A857E] uppercase mb-6">
                    Tools We Connect
                  </div>
                  <div className="flex flex-col gap-4">
                    {activeIndustry.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#181816] border border-[#2A2925] flex items-center justify-center shrink-0">
                          {/* Generic dot since we don't have tool logos saved */}
                           <div className="w-2 h-2 rounded-full bg-[#C8714A]"></div>
                        </div>
                        <span className="text-sm font-medium text-[#F2EDE8]">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
