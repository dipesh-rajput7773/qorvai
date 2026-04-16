import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[#080807] text-[#F2EDE8]">
            <Navbar />
            <div className="max-w-[800px] mx-auto px-6 py-32 md:py-40">
                <p className="text-[#C8714A] font-bold tracking-widest text-sm uppercase mb-4">Legal Agreement</p>
                <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-12">Terms of Service</h1>
                
                <div className="space-y-12 text-[#8A857E] text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-[#F2EDE8] mb-4 font-display">1. Agreement to Terms</h2>
                        <p>By accessing or using QorvAI's platform and services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service. These terms constitute a legally binding agreement between you and QorvAI.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#F2EDE8] mb-4 font-display">2. Intellectual Property & Automation Rights</h2>
                        <p>Upon full payment of project invoices, clients retain full ownership of the intellectual property associated directly with their custom frontend dashboards and data. Core infrastructural code, proprietary RAG pipelines, and generalized Playwright engines remain the underlying IP of QorvAI licensed for your business use.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-[#F2EDE8] mb-4 font-display">3. Limitations of Liability</h2>
                        <p>QorvAI engineers systems integrating with third-party web portals, APIs (like OpenAI, Meta, WhatsApp), and software. We are not liable for external changes to third-party endpoints, service outages, or modifications made securely on your behalf within external platforms.</p>
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
