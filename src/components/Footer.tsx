"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-[#2A2925]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 font-display font-extrabold text-2xl tracking-tighter mb-6"
            >
              <img
                src="/logo.png"
                alt="Qorvai Logo"
                className="w-8 h-8 object-contain"
              />
              <span>
                QORV<span className="text-[#C8714A]">AI</span>
              </span>
            </Link>
            <p className="text-[#8A857E] max-w-xs leading-relaxed mb-6">
              India&apos;s niche AI automation agency. Custom AI agents, web
              scrapers &amp; workflow automation for high-friction industries.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#C8714A]/10 border border-[#C8714A]/20 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C8714A] animate-pulse" />
              <span className="text-xs font-medium text-[#E8A882]">
                Accepting new clients
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h5 className="font-display text-sm font-bold text-[#F2EDE8]">
                Agency
              </h5>
              <div className="flex flex-col gap-2">
                <Link
                  href="#services"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#process"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Process
                </Link>
                <Link
                  href="#results"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Results
                </Link>
                <Link
                  href="/blog"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="#faq"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-display text-sm font-bold text-[#F2EDE8]">
                Solutions
              </h5>
              <div className="flex flex-col gap-2">
                <Link
                  href="/services/ai-agent-automation"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  AI Agents
                </Link>
                <Link
                  href="/services/web-scraping-portal-bots"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Web Scraping Bots
                </Link>
                <Link
                  href="/services/ai-chatbots"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  AI Chatbots
                </Link>
                <Link
                  href="/services/web-development"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Web Development
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-display text-sm font-bold text-[#F2EDE8]">
                Industries
              </h5>
              <div className="flex flex-col gap-2">
                <Link
                  href="/industries/visa-immigration-agencies"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Visa Agencies
                </Link>
                <Link
                  href="/industries/ecommerce-flipkart-meesho"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Flipkart / Meesho
                </Link>
                <Link
                  href="#services"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  CA Firms
                </Link>
                <Link
                  href="#services"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Dubai Real Estate
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-display text-sm font-bold text-[#F2EDE8]">
                Connect
              </h5>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:business@qorvai.com"
                  className="text-[#C8714A] font-bold text-sm hover:text-[#E8A882] transition-colors mb-2"
                >
                  business@qorvai.com
                </a>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/qorvai/"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  href="https://x.com/dipeshsingh"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  X / Twitter
                </Link>
                <Link
                  target="_blank"
                  href="https://linkedin.com/company/qorvai"
                  className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2A2925] flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem] text-[#4A4540]">
          <p>
            &copy; {new Date().getFullYear()} QorvAI Automation Agency. All
            rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-[#8A857E] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#8A857E] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
