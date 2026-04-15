"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-[#2A2925]' : 'py-6 bg-transparent'
            }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="font-display font-extrabold text-2xl tracking-tighter">
                    QORV<span className="text-[#C8714A]">AI</span>
                </Link>
                
                <div className="hidden md:flex items-center gap-12">
                    {['Services', 'Process', 'Results'].map((item) => (
                        <Link 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            className="text-[0.85rem] font-medium text-[#8A857E] hover:text-[#F2EDE8] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link 
                        href="#cta" 
                        className="bg-[#C8714A] text-white px-5 py-2 rounded-[4px] text-[0.8rem] font-bold hover:bg-[#E8A882] transition-all hover:scale-105"
                    >
                        Book Call
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};
