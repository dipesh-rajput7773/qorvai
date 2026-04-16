"use client";
import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="py-20 border-t border-[#2A2925]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
                    <div>
                        <Link href="/" className="font-display font-extrabold text-2xl tracking-tighter block mb-6">
                            QORV<span className="text-[#C8714A]">AI</span>
                        </Link>
                        <p className="text-[#8A857E] max-w-xs leading-relaxed">
                            Engineering the future of business intelligence. Helping founders reclaim their time through intentional automation.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h5 className="font-display text-sm font-bold text-[#F2EDE8]">Agency</h5>
                            <div className="flex flex-col gap-2">
                                {['Services', 'Process', 'Results', 'Contact'].map(item => (
                                    <Link key={item} href={`#${item.toLowerCase()}`} className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-display text-sm font-bold text-[#F2EDE8]">Connect</h5>
                            <div className="flex flex-col gap-2">
                                <Link target="_blank" href="https://www.instagram.com/qorvai/" className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors">Instagram</Link>
                                {/* Update this URL with your actual personal X handle */}
                                <Link target="_blank" href="https://x.com/dipeshsingh" className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors">X / Twitter</Link>
                                <Link target="_blank" href="https://linkedin.com/company/qorvai" className="text-[#4A4540] text-sm hover:text-[#C8714A] transition-colors">LinkedIn</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="pt-8 border-t border-[#2A2925] flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem] text-[#4A4540]">
                    <p>&copy; {new Date().getFullYear()} QorvAI Automation Agency. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-[#8A857E] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#8A857E] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
