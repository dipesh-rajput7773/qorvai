"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  Clock,
  IndianRupee,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    label: "Visa / Immigration Agency",
    hourlyRate: 300,
    defaultHours: 40,
    defaultTasks: 500,
  },
  {
    label: "CA / Finance Firm",
    hourlyRate: 400,
    defaultHours: 35,
    defaultTasks: 800,
  },
  {
    label: "E-Commerce (Flipkart/Meesho)",
    hourlyRate: 250,
    defaultHours: 30,
    defaultTasks: 200,
  },
  {
    label: "Restaurant / Food Chain",
    hourlyRate: 200,
    defaultHours: 20,
    defaultTasks: 150,
  },
  {
    label: "Real Estate Agency",
    hourlyRate: 350,
    defaultHours: 25,
    defaultTasks: 100,
  },
  {
    label: "SaaS / Tech Startup",
    hourlyRate: 500,
    defaultHours: 30,
    defaultTasks: 300,
  },
  { label: "Other", hourlyRate: 300, defaultHours: 25, defaultTasks: 200 },
];

export const ROICalculator = () => {
  const [industry, setIndustry] = useState(0);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [staffCount, setStaffCount] = useState(2);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedIndustry = industries[industry];

  // Calculations
  const hourlyRate = selectedIndustry.hourlyRate;
  const weeklyManualCost = hoursPerWeek * staffCount * hourlyRate;
  const monthlyManualCost = weeklyManualCost * 4;
  const yearlyManualCost = monthlyManualCost * 12;

  // After automation: 90% reduction
  const automationEfficiency = 0.9;
  const hoursAfterAutomation = Math.round(
    hoursPerWeek * (1 - automationEfficiency)
  );
  const monthlySavings = Math.round(monthlyManualCost * automationEfficiency);
  const yearlySavings = Math.round(yearlyManualCost * automationEfficiency);
  const hoursSavedPerWeek = Math.round(hoursPerWeek * automationEfficiency);

  // ROI multiplier (assuming ₹75K average project cost)
  const avgProjectCost = 75000;
  const roiMultiplier = Math.round((yearlySavings / avgProjectCost) * 10) / 10;
  const paybackDays = Math.round(
    avgProjectCost / (monthlySavings / 30)
  );

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `ROI Calculator Lead — ${selectedIndustry.label}`,
          email,
          volume: `${hoursPerWeek}hrs/week, ${staffCount} staff`,
          bottleneck: `Projected savings: ₹${yearlySavings.toLocaleString("en-IN")}/year, ROI: ${roiMultiplier}x`,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setSubmitted(true);
  };

  const formatINR = (n: number) => {
    if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
    if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
    return `₹${n.toLocaleString("en-IN")}`;
  };

  return (
    <section className="py-24 bg-[#080807] relative overflow-hidden" id="roi-calculator">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(200,113,74,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8714A]/10 border border-[#C8714A]/20 text-[#C8714A] text-[0.65rem] font-bold tracking-widest uppercase mb-6">
            <Calculator className="w-3 h-3" /> Free ROI Calculator
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            How much is manual work{" "}
            <span className="text-[#C8714A]">costing you?</span>
          </h2>
          <p className="text-[#8A857E] max-w-2xl mx-auto text-lg">
            Calculate your exact savings from AI automation in 30 seconds. No
            email required.
          </p>
        </motion.div>

        <div className="bg-[#111110] border border-[#2A2925] rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="calculator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="space-y-8">
                  {/* Industry Select */}
                  <div>
                    <label className="text-[0.7rem] font-bold text-[#4A4540] tracking-widest uppercase block mb-3">
                      Your Industry
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {industries.map((ind, i) => (
                        <button
                          key={ind.label}
                          onClick={() => {
                            setIndustry(i);
                            setHoursPerWeek(ind.defaultHours);
                          }}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all border ${
                            industry === i
                              ? "bg-[#C8714A]/10 border-[#C8714A] text-[#E8A882]"
                              : "bg-[#181816] border-[#2A2925] text-[#8A857E] hover:border-[#4A4540]"
                          }`}
                        >
                          {ind.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hours Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-[0.7rem] font-bold text-[#4A4540] tracking-widest uppercase">
                        Hours spent on manual tasks / week
                      </label>
                      <span className="font-display text-2xl font-extrabold text-[#E8A882]">
                        {hoursPerWeek}hrs
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="80"
                      value={hoursPerWeek}
                      onChange={(e) =>
                        setHoursPerWeek(parseInt(e.target.value))
                      }
                      className="w-full appearance-none h-2 bg-[#2A2925] rounded-full outline-none cursor-pointer accent-[#C8714A]"
                      style={{
                        background: `linear-gradient(to right, #C8714A 0%, #C8714A ${((hoursPerWeek - 5) / 75) * 100}%, #2A2925 ${((hoursPerWeek - 5) / 75) * 100}%, #2A2925 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-[0.65rem] text-[#4A4540] mt-1">
                      <span>5 hrs</span>
                      <span>80 hrs</span>
                    </div>
                  </div>

                  {/* Staff Count */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-[0.7rem] font-bold text-[#4A4540] tracking-widest uppercase">
                        Staff involved in these tasks
                      </label>
                      <span className="font-display text-2xl font-extrabold text-[#E8A882]">
                        {staffCount}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={staffCount}
                      onChange={(e) =>
                        setStaffCount(parseInt(e.target.value))
                      }
                      className="w-full appearance-none h-2 bg-[#2A2925] rounded-full outline-none cursor-pointer accent-[#C8714A]"
                      style={{
                        background: `linear-gradient(to right, #C8714A 0%, #C8714A ${((staffCount - 1) / 9) * 100}%, #2A2925 ${((staffCount - 1) / 9) * 100}%, #2A2925 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-[0.65rem] text-[#4A4540] mt-1">
                      <span>1 person</span>
                      <span>10 people</span>
                    </div>
                  </div>

                  {/* Live Preview */}
                  <div className="bg-[#181816] border border-[#2A2925] rounded-2xl p-6">
                    <p className="text-[0.7rem] font-bold text-[#4A4540] tracking-widest uppercase mb-4">
                      Live Cost Preview
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="font-display text-xl md:text-2xl font-extrabold text-[#F2EDE8]">
                          {formatINR(weeklyManualCost)}
                        </div>
                        <div className="text-[0.65rem] text-[#4A4540] mt-1">
                          Weekly Cost
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-xl md:text-2xl font-extrabold text-[#E8A882]">
                          {formatINR(monthlyManualCost)}
                        </div>
                        <div className="text-[0.65rem] text-[#4A4540] mt-1">
                          Monthly Cost
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-xl md:text-2xl font-extrabold text-[#C8714A]">
                          {formatINR(yearlyManualCost)}
                        </div>
                        <div className="text-[0.65rem] text-[#4A4540] mt-1">
                          Yearly Cost
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calculate Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCalculate}
                    className="w-full bg-[#C8714A] text-white py-5 rounded-xl font-display font-bold text-lg tracking-wide shadow-xl shadow-[#C8714A]/20 flex items-center justify-center gap-3 transition-all"
                  >
                    <TrendingUp className="w-5 h-5" /> Calculate My Savings
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {/* Results Dashboard */}
                <div className="text-center mb-8">
                  <h3 className="font-display text-3xl font-extrabold text-[#F2EDE8] mb-2">
                    Your Automation ROI
                  </h3>
                  <p className="text-[#8A857E] text-sm">
                    Based on {selectedIndustry.label} · {hoursPerWeek}hrs/week ·{" "}
                    {staffCount} staff
                  </p>
                </div>

                {/* Big Numbers */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-[#181816] border border-[#2A2925] rounded-2xl p-5 text-center">
                    <IndianRupee className="w-5 h-5 text-[#C8714A] mx-auto mb-2" />
                    <div className="font-display text-2xl md:text-3xl font-extrabold text-[#E8A882]">
                      {formatINR(yearlySavings)}
                    </div>
                    <div className="text-[0.65rem] text-[#4A4540] mt-1 uppercase tracking-wider font-bold">
                      Yearly Savings
                    </div>
                  </div>
                  <div className="bg-[#181816] border border-[#2A2925] rounded-2xl p-5 text-center">
                    <Clock className="w-5 h-5 text-[#C8714A] mx-auto mb-2" />
                    <div className="font-display text-2xl md:text-3xl font-extrabold text-[#E8A882]">
                      {hoursSavedPerWeek}hrs
                    </div>
                    <div className="text-[0.65rem] text-[#4A4540] mt-1 uppercase tracking-wider font-bold">
                      Saved / Week
                    </div>
                  </div>
                  <div className="bg-[#181816] border border-[#2A2925] rounded-2xl p-5 text-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mx-auto mb-2" />
                    <div className="font-display text-2xl md:text-3xl font-extrabold text-green-400">
                      {roiMultiplier}x
                    </div>
                    <div className="text-[0.65rem] text-[#4A4540] mt-1 uppercase tracking-wider font-bold">
                      ROI in Year 1
                    </div>
                  </div>
                  <div className="bg-[#181816] border border-[#2A2925] rounded-2xl p-5 text-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto mb-2" />
                    <div className="font-display text-2xl md:text-3xl font-extrabold text-green-400">
                      {paybackDays}d
                    </div>
                    <div className="text-[0.65rem] text-[#4A4540] mt-1 uppercase tracking-wider font-bold">
                      Payback Period
                    </div>
                  </div>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
                    <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                      ❌ Without Automation
                    </div>
                    <div className="space-y-2 text-sm text-[#8A857E]">
                      <div>
                        {hoursPerWeek} hrs/week manual work
                      </div>
                      <div>
                        {staffCount} staff on repetitive tasks
                      </div>
                      <div>
                        {formatINR(monthlyManualCost)}/month labor cost
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-5">
                    <div className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">
                      ✅ With Qorvai Automation
                    </div>
                    <div className="space-y-2 text-sm text-[#8A857E]">
                      <div>
                        {hoursAfterAutomation} hrs/week (monitoring only)
                      </div>
                      <div>Staff freed for revenue work</div>
                      <div>
                        {formatINR(monthlySavings)}/month saved
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lead Capture */}
                {!submitted ? (
                  <div className="bg-[#C8714A]/5 border border-[#C8714A]/20 rounded-2xl p-6">
                    <h4 className="font-display font-bold text-lg mb-2 text-[#E8A882]">
                      Get your custom automation blueprint
                    </h4>
                    <p className="text-sm text-[#8A857E] mb-4">
                      We&apos;ll send you a detailed breakdown of exactly which tasks
                      we can automate in your {selectedIndustry.label.toLowerCase()}{" "}
                      workflow.
                    </p>
                    <form
                      onSubmit={handleLeadSubmit}
                      className="flex flex-col sm:flex-row gap-3"
                    >
                      <input
                        type="email"
                        placeholder="founder@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-[#111110] border border-[#2A2925] p-3 rounded-xl text-white text-sm outline-none focus:border-[#C8714A]"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-[#C8714A] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#E8A882] transition-colors whitespace-nowrap flex items-center gap-2"
                      >
                        Send Blueprint <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <p className="font-display font-bold text-lg text-[#F2EDE8]">
                      Blueprint sent!
                    </p>
                    <p className="text-[#8A857E] text-sm">
                      Check your inbox. We&apos;ll reach out within 24 hours.
                    </p>
                  </div>
                )}

                {/* Recalculate */}
                <button
                  onClick={() => setShowResults(false)}
                  className="text-[#C8714A] font-bold text-xs uppercase tracking-widest hover:text-[#E8A882] transition-colors mt-6 block mx-auto"
                >
                  ← Recalculate
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
