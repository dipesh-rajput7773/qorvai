import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Flipkart & Meesho Seller Automation | Qorvai",
  description: "Automate E-commerce inventory, order sync, and customer support for Flipkart and Meesho sellers in India.",
  keywords: ["flipkart seller automation", "meesho automation tool", "ecommerce automation india", "seller multic-channel sync"],
};

export default function EcommerceSellersPage() {
    return (
        <main className="min-h-screen bg-[#080807] text-[#F2EDE8]">
            <Navbar />
            <div className="pt-32 pb-16 px-6 max-w-[1200px] mx-auto border-b border-[#2A2925]">
                <p className="text-[#C8714A] font-bold tracking-widest text-sm uppercase mb-4">Industry Solutions</p>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                    Dominate <span className="text-[#E8A882] italic font-serif-editorial">Flipkart & Meesho</span> <br/>
                    On Autopilot.
                </h1>
                <p className="text-xl text-[#8A857E] max-w-2xl">
                    Sync orders, manage multi-platform inventory, and extract competitor pricing data instantly. We build workflows that do the heavy lifting of running an e-commerce empire.
                </p>
            </div>
            
            <CTA />
            <Footer />
        </main>
    );
}
