import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#080807] text-[#F2EDE8]">
            <Navbar />
            <div className="max-w-[800px] mx-auto px-6 py-32 md:py-40">
                <p className="text-[#C8714A] font-bold tracking-widest text-sm uppercase mb-4">Legal Compliance</p>
                <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-12">Privacy Policy</h1>
                
                <div className="space-y-12 text-[#8A857E] text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-[#F2EDE8] mb-4 font-display">1. Introduction</h2>
                        <p>QorvAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services, complying strictly with GDPR, CCPA, and international data protection standards.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#F2EDE8] mb-4 font-display">2. Information We Collect</h2>
                        <p className="mb-4">We collect information you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name and contact information submitted via our forms.</li>
                            <li>Business intelligence data provided for the purpose of automation audits.</li>
                            <li>Automated technical data (cookies, IP addresses) necessary for site security and analytics.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#F2EDE8] mb-4 font-display">3. How We Use Your Information</h2>
                        <p>We use the collected data strictly to deliver and improve our automation services, communicate securely with you regarding project proposals, and maintain the security of our platforms. We do not sell your personal data to third-party data brokers.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-xl font-bold text-[#F2EDE8] mb-4 font-display">4. Your Data Rights</h2>
                        <p>Under international frameworks like the GDPR and UK Data Protection Act, you possess the right to request access to, correction of, or deletion of your personal data stored on our servers. To exercise these rights, please reach out to our team directly.</p>
                    </section>

                    <p className="pt-8 border-t border-[#2A2925] mt-12">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
