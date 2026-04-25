import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Automation for Visa & Immigration Agencies | Qorvai",
  description: "Automate OCI applications, visa data entry, and lead generation. Stop manual typing and scale your consultancy safely.",
  keywords: ["visa portal automation", "oci application automation", "immigration agency software", "visa processing automation"],
};

export default function VisaAgenciesPage() {
    return (
        <main className="min-h-screen bg-[#080807] text-[#F2EDE8]">
            <Navbar />
            <div className="pt-32 pb-16 px-6 max-w-[1200px] mx-auto border-b border-[#2A2925]">
                <p className="text-[#C8714A] font-bold tracking-widest text-sm uppercase mb-4">Industry Solutions</p>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                    Scale Your <span className="text-[#E8A882] italic font-serif-editorial">Visa Agency</span> <br/>
                    Without More Staff.
                </h1>
                <p className="text-xl text-[#8A857E] max-w-2xl">
                    Replace manual data entry on government portals with custom automation bots. Process 10x more OCI applications, Passport renewals, and Visa forms automatically.
                </p>
            </div>
            
            <CTA />
            <Footer />
        </main>
    );
}
