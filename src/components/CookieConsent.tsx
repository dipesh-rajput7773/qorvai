"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user already consented
        const consent = localStorage.getItem('qorvai_cookie_consent');
        if (!consent) {
            // Slight delay so it doesn't instantly jump scare them on load
            setTimeout(() => setIsVisible(true), 1500);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('qorvai_cookie_consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
                >
                    <div className="max-w-[1200px] mx-auto bg-[#181816]/95 backdrop-blur-xl border border-[#2A2925] p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl pointer-events-auto">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#C8714A]/10 p-2 rounded-lg shrink-0 mt-1">
                                <ShieldAlert className="w-5 h-5 text-[#C8714A]" />
                            </div>
                            <p className="text-[#8A857E] text-sm leading-relaxed max-w-3xl">
                                We use cookies and similar technologies to ensure a seamless experience, analyze site traffic, and comply with international GDPR/CCPA regulations. By continuing to use our platform, you consent to our <Link href="/privacy" className="text-[#C8714A] hover:underline font-medium">Privacy Policy</Link> and <Link href="/terms" className="text-[#C8714A] hover:underline font-medium">Terms of Service</Link>.
                            </p>
                        </div>
                        <div className="flex gap-4 shrink-0 w-full md:w-auto">
                            <button 
                                onClick={acceptCookies}
                                className="w-full md:w-auto bg-[#C8714A] text-white px-8 py-3 rounded-xl font-display font-bold text-sm tracking-wide hover:bg-[#E8A882] transition-colors shadow-lg shadow-[#C8714A]/10"
                            >
                                Accept & Continue
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
