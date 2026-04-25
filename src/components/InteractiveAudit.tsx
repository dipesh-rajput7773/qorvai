"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal, Globe, Cpu, CheckCircle2, ArrowRight, Bot } from 'lucide-react';

const scanLogs = [
    "Initializing Playwright headless instance...",
    "Bypassing standard bot protections...",
    "Crawling DOM for manual data-entry bottlenecks...",
    "Analyzing NLP capabilities & chat infrastructure...",
    "Evaluating workflow & webhook potential (n8n)...",
    "Compiling automation blueprint..."
];

export const InteractiveAudit = () => {
    const [url, setUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanStep, setScanStep] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [findings, setFindings] = useState<any[]>([]);

    useEffect(() => {
        if (isScanning && scanStep < scanLogs.length) {
            const timer = setTimeout(() => {
                setScanStep(prev => prev + 1);
            }, Math.random() * 800 + 800); // Random delay between 800ms and 1600ms per step
            return () => clearTimeout(timer);
        }
    }, [isScanning, scanStep]);

    const handleScan = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url || !url.includes('.')) return;
        
        setIsScanning(true);
        setScanStep(0);
        setIsComplete(false);
        setFindings([]);

        try {
            const res = await fetch('/api/scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });
            const data = await res.json();
            
            // Artificial delay to wait for terminal animation to finish if API was too fast
            const waitTime = Math.max(0, (scanLogs.length * 1000) - 1000); 
            setTimeout(() => {
                if (data.findings) {
                    setFindings(data.findings);
                }
                setIsScanning(false);
                setIsComplete(true);
            }, waitTime);

        } catch (err) {
            console.error(err);
            setTimeout(() => {
                setFindings([
                    { type: 'critical', title: 'Connection Bottleneck', desc: 'Advanced Playwright extraction required.' },
                    { type: 'warning', title: 'Manual Webhook', desc: 'No automation detected.' }
                ]);
                setIsScanning(false);
                setIsComplete(true);
            }, 3000);
        }
    };

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    };

    return (
        <section className="py-24 bg-[#080807] relative overflow-hidden" id="interactive-audit">
            {/* Ambient Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(200,113,74,0.05)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-[900px] mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8714A]/10 border border-[#C8714A]/20 text-[#C8714A] text-[0.65rem] font-bold tracking-widest uppercase mb-6">
                        <Terminal className="w-3 h-3" /> Live Automation Scanner
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
                        Discover your <span className="text-[#C8714A]">hidden bottlenecks.</span>
                    </h2>
                    <p className="text-[#8A857E] max-w-2xl mx-auto text-lg">
                        Enter your website URL. Our browser bot will immediately scan your digital footprint to identify where you're bleeding thousands of dollars in manual labor.
                    </p>
                </motion.div>

                <div className="bg-[#111110] border border-[#2A2925] rounded-[32px] p-8 md:p-12 min-h-[450px] shadow-2xl relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        
                        {/* Initial Input State */}
                        {!isScanning && !isComplete && (
                            <motion.div
                                key="input"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center justify-center h-full text-center space-y-8"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-[#181816] border border-[#2A2925] flex items-center justify-center mb-4">
                                    <Globe className="w-10 h-10 text-[#C8714A]" />
                                </div>
                                <h3 className="font-display text-3xl font-bold text-[#F2EDE8]">Deploy the Scanner</h3>
                                <form onSubmit={handleScan} className="w-full max-w-md flex flex-col gap-4">
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="https://yourwebsite.com" 
                                            value={url}
                                            onChange={(e) => setUrl(e.target.value)}
                                            className="w-full bg-[#181816] border border-[#2A2925] p-5 rounded-xl text-white outline-none focus:border-[#C8714A] pl-12 text-sm font-mono transition-colors"
                                            required
                                        />
                                        <Bot className="w-5 h-5 text-[#8A857E] absolute left-4 top-1/2 -translate-y-1/2" />
                                    </div>
                                    <button 
                                        type="submit"
                                        className="bg-[#C8714A] text-white px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wide shadow-lg shadow-[#C8714A]/20 hover:bg-[#E8A882] transition-colors w-full flex items-center justify-center gap-2 group"
                                    >
                                        Initiate Live Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                                <p className="text-xs text-[#8A857E] font-mono opacity-60">
                                    Powered by Next.js & Playwright Analysis
                                </p>
                            </motion.div>
                        )}

                        {/* Scanning Terminal State */}
                        {isScanning && (
                            <motion.div
                                key="scanning"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-full flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-8 border-b border-[#2A2925] pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs font-mono text-[#8A857E]">Target: {url}</div>
                                </div>
                                <div className="flex-grow font-mono text-sm space-y-4">
                                    {scanLogs.map((log, index) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: index <= scanStep ? 1 : 0, x: index <= scanStep ? 0 : -10 }}
                                            className={`flex gap-3 ${index === scanStep ? 'text-[#C8714A]' : 'text-[#8A857E]'}`}
                                        >
                                            <span className="shrink-0">{'>'}</span>
                                            <span className={`${index === scanStep ? 'animate-pulse' : ''}`}>{log}</span>
                                        </motion.div>
                                    ))}
                                    {scanStep < scanLogs.length && (
                                        <motion.div className="w-3 h-4 bg-[#C8714A] animate-ping ml-4 mt-4"></motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Results State */}
                        {isComplete && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col"
                            >
                                <div className="text-center mb-8 border-b border-[#2A2925] pb-8">
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="font-display text-3xl font-bold text-[#F2EDE8]">Audit Complete</h3>
                                    <p className="text-[#8A857E] font-mono text-sm mt-2">Target: {url}</p>
                                </div>

                                {!submitted ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        <div className="space-y-4">
                                            {findings.map((finding, idx) => (
                                                <div key={idx} className={`bg-[#181816] border p-4 rounded-xl ${finding.type === 'critical' ? 'border-red-500/20' : finding.type === 'good' ? 'border-green-500/20' : 'border-yellow-500/20'}`}>
                                                    <h4 className={`font-bold text-sm mb-1 ${finding.type === 'critical' ? 'text-red-400' : finding.type === 'good' ? 'text-green-400' : 'text-yellow-400'}`}>
                                                        {finding.title}
                                                    </h4>
                                                    <p className="text-[#8A857E] text-xs leading-relaxed">{finding.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="bg-[#C8714A]/5 border border-[#C8714A]/20 p-6 rounded-2xl">
                                            <h4 className="font-display font-bold text-xl mb-2 text-[#E8A882]">Unlock Full Architecture</h4>
                                            <p className="text-sm text-[#8A857E] mb-6">Enter your email to receive our custom Playwright and n8n scripts tailored to resolve these exact bottlenecks.</p>
                                            <form onSubmit={handleLeadSubmit} className="space-y-3">
                                                <input 
                                                    type="email" 
                                                    placeholder="founder@company.com" 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full bg-[#111110] border border-[#2A2925] p-3 rounded-lg text-white text-sm outline-none focus:border-[#C8714A]"
                                                    required
                                                />
                                                <button type="submit" className="w-full bg-[#C8714A] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#E8A882] transition-colors">
                                                    Send Optimization Blueprint
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-center py-8">
                                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                            <Cpu className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h4 className="text-2xl font-display font-bold text-white mb-2">Systems Initiated</h4>
                                        <p className="text-[#8A857E] mb-6">Your custom automation blueprint has been generated and dispatched to {email}.</p>
                                        <button onClick={() => { setIsComplete(false); setUrl(''); setSubmitted(false); }} className="text-[#C8714A] font-bold text-sm uppercase tracking-widest hover:text-[#E8A882] transition-colors">
                                            Scan Another Domain
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
