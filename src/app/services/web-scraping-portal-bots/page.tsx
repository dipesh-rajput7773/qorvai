import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Web Scraping & Portal Bots for Visa Agencies | Qorvai",
  description: "Stop manual data entry. We build custom Playwright web scrapers and portal bots for Visa/OCI agencies and data-heavy businesses in India.",
  keywords: ["web scraping services india", "playwright web scraping", "visa portal automation", "oci application automation", "portal bots"],
};

export default function WebScrapingPage() {
    return (
        <main className="min-h-screen bg-[#080807] text-[#F2EDE8]">
            <Navbar />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Web Scraping & Portal Bots",
                    "provider": {
                      "@type": "Organization",
                      "name": "Qorvai"
                    },
                    "areaServed": "IN",
                    "description": "Custom Playwright web scrapers and portal bots for Visa/OCI agencies and data-heavy businesses."
                  })
                }}
            />
            <div className="pt-32 pb-16 px-6 max-w-[1200px] mx-auto border-b border-[#2A2925]">
                <p className="text-[#C8714A] font-bold tracking-widest text-sm uppercase mb-4">Core Service</p>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                    Untraceable <span className="text-[#E8A882] italic font-serif-editorial">Portal Bots</span> <br/>
                    & Web Scrapers.
                </h1>
                <p className="text-xl text-[#8A857E] max-w-2xl">
                    Manual form filling and copy-pasting is costing your agency thousands. We code headless browser bots that auto-fill government portals, scrape competitor data, and sync seamlessly in seconds.
                </p>
            </div>

            <section className="py-24 px-6 max-w-[1200px] mx-auto">
                <div className="bg-[#111110] border border-[#2A2925] p-8 md:p-12 text-center rounded-3xl mb-24">
                    <h2 className="font-display text-3xl font-bold mb-6 text-[#E8A882]">The Ultimate Edge for Visa & Immigration Agencies</h2>
                    <p className="text-lg text-[#8A857E] max-w-3xl mx-auto mb-12">
                        Entering OCI and Passport details manually for hours? Our bots take data directly from your Google Sheets or CRM, log securely into the portals, and automate the entire submission process error-free.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                        <div className="p-6 border border-[#2A2925] rounded-xl bg-[#080807]">
                            <h3 className="font-bold text-[#F2EDE8] mb-2 text-xl">100% Reliable</h3>
                            <p className="text-[#8A857E] text-sm">Built on Playwright and Puppeteer to bypass anti-bot mechanisms safely.</p>
                        </div>
                        <div className="p-6 border border-[#2A2925] rounded-xl bg-[#080807]">
                            <h3 className="font-bold text-[#F2EDE8] mb-2 text-xl">High Volume</h3>
                            <p className="text-[#8A857E] text-sm">Scale from 10 to 1,000 applications a month without hiring extra data entry staff.</p>
                        </div>
                        <div className="p-6 border border-[#2A2925] rounded-xl bg-[#080807]">
                            <h3 className="font-bold text-[#F2EDE8] mb-2 text-xl">Fully Auditable</h3>
                            <p className="text-[#8A857E] text-sm">Get Telegram or Slack alerts with screenshots for every successful submission.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <CTA />
            <Footer />
        </main>
    );
}
