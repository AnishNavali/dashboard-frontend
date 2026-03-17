"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight,
  Search,
  Layout,
  PieChart,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const useCases = [
  {
    id: "sales",
    label: "Sales",
    title: "Sales Analytics",
    subtitle: "Track Revenue and Performance",
    description: "Analyze sales data to understand revenue trends, regional performance, and product growth. ADRO helps teams quickly identify top-performing products and sales opportunities using AI-generated dashboards.",
    benefits: [
      "Monitor revenue trends over time",
      "Compare regional and product performance",
      "Identify high-performing sales segments"
    ],
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: "marketing",
    label: "Marketing",
    title: "Marketing Analytics",
    subtitle: "Measure Campaign Performance",
    description: "Evaluate marketing campaigns, track conversions, and identify high-impact channels. ADRO enables marketing teams to understand customer engagement and optimize campaigns with AI-powered insights.",
    benefits: [
      "Track campaign performance and ROI",
      "Analyze customer engagement trends",
      "Identify top-performing channels"
    ],
    icon: <Target className="w-6 h-6" />
  },
  {
    id: "finance",
    label: "Financial",
    title: "Financial Analytics",
    subtitle: "Monitor Financial KPIs",
    description: "Analyze financial data to track revenue, expenses, and key performance indicators. ADRO helps teams generate financial dashboards and understand business performance quickly.",
    benefits: [
      "Track revenue and cost trends",
      "Monitor financial KPIs",
      "Analyze performance across time periods"
    ],
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    id: "ops",
    label: "Operations",
    title: "Operational Analytics",
    subtitle: "Improve Efficiency and Workflows",
    description: "Analyze operational data to identify inefficiencies and optimize processes. ADRO helps organizations improve productivity by uncovering patterns and bottlenecks.",
    benefits: [
      "Identify workflow inefficiencies",
      "Monitor operational performance",
      "Improve productivity and processes"
    ],
    icon: <Zap className="w-6 h-6" />
  }
];

export function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const activeCase = useCases.find((c) => c.id === activeTab) || useCases[0];

  return (
    <div className="relative bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-10"
        >
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] md:leading-[0.95] bg-gradient-to-b from-black via-neutral-800 to-neutral-500 bg-clip-text text-transparent">
              AI Analytics <br className="hidden md:block" /> Use Cases
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-medium tracking-tight opacity-70 max-w-2xl mx-auto">
              Powerful Use Cases for Modern Data Analytics
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. INTERACTIVE SWITCHER */}
      <section className="relative z-10 px-4 md:px-6 max-w-5xl mx-auto pb-16 md:pb-24">
        {/* Tab Buttons - Mobile Scrollable */}
        <div className="mb-12 md:mb-16 p-1.5 bg-slate-100 rounded-2xl w-full md:w-fit mx-auto overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap md:justify-center min-w-max md:min-w-0">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={cn(
                  "relative px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap",
                  activeTab === useCase.id
                    ? "text-black shadow-sm"
                    : "text-slate-500 hover:text-black"
                )}
              >
                {activeTab === useCase.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {useCase.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px] md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start py-8 md:py-12"
            >
              {/* Left Side: Description */}
              <div className="space-y-4 md:space-y-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-black flex items-center justify-center text-white shadow-xl shadow-black/10 mb-6 md:mb-8">
                  {React.cloneElement(activeCase.icon as any, { size: 24 })}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-2">
                  {activeCase.title}
                </h2>
                <p className="text-lg md:text-xl font-bold text-black tracking-tight mb-4 md:mb-6 italic opacity-60">
                  {activeCase.subtitle}
                </p>
                <p className="text-black font-medium leading-relaxed text-base md:text-lg opacity-80">
                  {activeCase.description}
                </p>
              </div>

              {/* Right Side: Key Benefits */}
              <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 flex flex-col justify-center min-h-[auto] md:min-h-[300px]">
                <div className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-6 md:mb-8">Key Benefits</div>
                <div className="space-y-4 md:space-y-6">
                  {activeCase.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4 group text-black">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={10} className="md:w-3 md:h-3" />
                      </div>
                      <div className="font-bold text-sm md:text-base tracking-tight leading-tight">{benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. WHY ADRO SECTION - Professional Horizontal Flow */}
      <section className="relative z-10 py-16 md:py-24 px-4 md:px-6 border-t border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="w-full md:w-1/3 text-black">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-6">
              Why Use ADRO for Analytics
            </h2>
            <p className="font-medium leading-relaxed opacity-70 text-sm md:text-base">
              ADRO simplifies data analytics by combining AI-powered analysis with natural language interaction.
            </p>
          </div>

          <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10">
            {[
              { title: "Explore Data Quickly", icon: <Search size={20} />, desc: "Ask questions in plain English and get instant answers without complex BI tools." },
              { title: "Automatic Dashboards", icon: <Layout size={20} />, desc: "Generate visualizations instantly from any dataset automatically." },
              { title: "Uncover Insights", icon: <PieChart size={20} />, desc: "Leverage AI to find patterns and anomalies you might have missed." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 text-black">
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <div className="text-base font-bold mb-1">{item.title}</div>
                  <div className="text-xs leading-relaxed font-medium opacity-60">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="relative z-10 py-24 md:py-32 px-4 md:px-6 text-center bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tighter mb-8 md:mb-10">
            Start Analyzing Your Data
          </h2>
          <Link href="/login">
            <Button className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-black hover:bg-zinc-800 text-white font-bold shadow-xl shadow-black/10 group text-sm md:text-base">
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
