"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Zap, Clock, TrendingUp, Sparkles } from 'lucide-react';

const steps = [
    {
        id: 'team',
        question: "How many people are in your team?",
        options: ["Solo Founder", "2-5 People", "5-20 People", "20+ People"],
        icon: <Zap className="w-6 h-6" />
    },
    {
        id: 'time',
        question: "How many hours/week do you spend on manual tasks?",
        options: ["< 10 hours", "10-20 hours", "20-40 hours", "40+ hours"],
        icon: <Clock className="w-6 h-6" />
    },
    {
        id: 'leads',
        question: "Current monthly lead volume?",
        options: ["< 50", "50-200", "200-1000", "1000+"],
        icon: <TrendingUp className="w-6 h-6" />
    }
];

export const InteractiveAudit = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [calculating, setCalculating] = useState(false);
    const [result, setResult] = useState(false);
    const [roiData, setRoiData] = useState({ reclaimed: '0', dollars: '0' });

    const calculateROI = (finalAnswers: Record<string, string>) => {
        let teamMul = 1;
        if (finalAnswers['team'] === "2-5 People") teamMul = 3;
        if (finalAnswers['team'] === "5-20 People") teamMul = 10;
        if (finalAnswers['team'] === "20+ People") teamMul = 25;

        let timeMul = 5;
        if (finalAnswers['time'] === "10-20 hours") timeMul = 15;
        if (finalAnswers['time'] === "20-40 hours") timeMul = 30;
        if (finalAnswers['time'] === "40+ hours") timeMul = 50;

        const hoursPerWeek = teamMul * timeMul;
        const hoursAnnually = hoursPerWeek * 52;
        const reclaimed = Math.floor(hoursAnnually * 0.6); // 60% time saved via automation
        const dollars = reclaimed * 40; // $40/hr average labor cost

        setRoiData({
            reclaimed: reclaimed.toLocaleString(),
            dollars: dollars.toLocaleString()
        });
    };

    const handleOption = (option: string) => {
        const nextAnswers = { ...answers, [steps[currentStep].id]: option };
        setAnswers(nextAnswers);
        
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCalculating(true);
            calculateROI(nextAnswers);
            setTimeout(() => {
                setCalculating(false);
                setResult(true);
            }, 2000);
        }
    };

    return (
        <section className="py-24 bg-[#080807]">
            <div className="max-w-[800px] mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8714A]/10 border border-[#C8714A]/20 text-[#C8714A] text-[0.65rem] font-bold tracking-widest uppercase mb-6">
                        <Sparkles className="w-3 h-3" /> Calculator
                    </div>
                    <h2 className="font-display text-4xl font-extrabold mb-4">Calculate Your <span className="text-[#C8714A]">Automation ROI</span></h2>
                    <p className="text-[#8A857E]">Tell us about your business and we'll show you how much time you can reclaim.</p>
                </motion.div>

                <div className="bg-[#111110] border border-[#2A2925] rounded-[32px] p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {!calculating && !result && (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#181816] border border-[#2A2925] flex items-center justify-center text-[#C8714A]">
                                        {steps[currentStep].icon}
                                    </div>
                                    <p className="text-xs font-bold text-[#4A4540] tracking-widest uppercase">Step {currentStep + 1} of {steps.length}</p>
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl font-extrabold">{steps[currentStep].question}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {steps[currentStep].options.map(option => (
                                        <button
                                            key={option}
                                            onClick={() => handleOption(option)}
                                            className="p-6 rounded-2xl bg-[#181816] border border-[#2A2925] text-left hover:border-[#C8714A] hover:bg-[#C8714A]/5 transition-all group"
                                        >
                                            <span className="text-[#8A857E] group-hover:text-[#F2EDE8] transition-colors">{option}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {calculating && (
                            <motion.div
                                key="calc"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center space-y-6"
                            >
                                <div className="w-16 h-16 border-4 border-[#C8714A]/20 border-t-[#C8714A] rounded-full animate-spin mx-auto"></div>
                                <h3 className="font-display text-2xl font-extrabold">Analyzing workflows...</h3>
                                <p className="text-[#4A4540] text-sm animate-pulse">Running efficiency simulations</p>
                            </motion.div>
                        )}

                        {result && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center space-y-8"
                            >
                                <div className="space-y-2">
                                    <p className="text-[0.7rem] font-bold text-[#C8714A] tracking-[0.3em] uppercase">Your Potential Impact</p>
                                    <h3 className="font-display text-5xl md:text-6xl font-extrabold text-[#E8A882]">{roiData.reclaimed} Hours</h3>
                                    <p className="text-[#8A857E] text-lg">Reclaimed annually through automation.</p>
                                </div>
                                
                                <div className="bg-[#181816] border border-[#2A2925] p-6 rounded-2xl inline-block max-w-sm">
                                    <p className="text-sm text-[#F2EDE8] leading-relaxed">
                                        "Based on your team size and volume, you're losing approximately <span className="text-[#C8714A] font-bold">${roiData.dollars}/yr</span> in productive labor."
                                    </p>
                                </div>

                                <div>
                                    <a href="#cta" className="inline-block bg-[#C8714A] text-white px-8 py-4 rounded-xl font-display font-bold hover:bg-[#E8A882] transition-colors">
                                        Get Your Full Blueprint →
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
