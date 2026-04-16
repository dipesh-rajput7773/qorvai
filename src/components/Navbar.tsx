"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['Services', 'Process', 'Results'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'py-4 bg-[#080807]/90 backdrop-blur-lg border-b border-[#2A2925]' : 'py-6 bg-transparent'
            }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="font-display font-extrabold text-2xl tracking-tighter relative z-50">
                    QORV<span className="text-[#C8714A]">AI</span>
                </Link>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
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

                {/* Mobile Hamburger */}
                <button 
                    className="md:hidden relative z-50 p-2 text-[#F2EDE8]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-[#080807] border-b border-[#2A2925] shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link 
                                    key={item} 
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-2xl font-display font-bold text-[#F2EDE8] hover:text-[#C8714A] transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-[#2A2925]">
                                <Link 
                                    href="#cta" 
                                    onClick={() => setMenuOpen(false)}
                                    className="bg-[#C8714A] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#E8A882] transition-all text-center block"
                                >
                                    Book Call
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
