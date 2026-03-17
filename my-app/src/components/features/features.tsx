"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    MessageSquare,
    LayoutDashboard,
    BarChart3,
    Zap,
    Upload,
    Download,
    TrendingUp,
    Check
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { GlowingEffect } from "../ui/glowing-effect";

const featuresData = [
    {
        icon: Brain,
        title: "AI-Powered Data Analysis",
        description: "ADRO automatically analyzes your dataset and detects patterns, trends, and relationships using advanced AI models. Instead of manual exploration, users can instantly uncover insights and understand their data with minimal effort."
    },
    {
        icon: MessageSquare,
        title: "Natural Language Queries",
        description: "Ask questions about your data in plain English. Examples: “Show revenue trends over time”, “Which region performed best?”. ADRO processes natural language queries and generates insights, charts, and dashboards instantly."
    },
    {
        icon: LayoutDashboard,
        title: "Automatic Dashboard Generation",
        description: "ADRO converts raw datasets into interactive dashboards automatically. Users can generate charts, KPIs, and visual reports without manual setup."
    },
    {
        icon: BarChart3,
        title: "Interactive Charts and Visualizations",
        description: "Explore your data through dynamic charts and visualizations. Filter data, compare metrics, and drill down into trends."
    },
    {
        icon: Zap,
        title: "Instant Data Insights",
        description: "ADRO identifies trends, anomalies, and key metrics within your dataset."
    },
    {
        icon: Upload,
        title: "Easy Dataset Upload",
        description: "CSV files, Excel files. ADRO processes data instantly."
    },
    {
        icon: Download,
        title: "Export and Share Reports",
        description: "PNG, JPG, Excel, PDF."
    },
    {
        icon: TrendingUp,
        title: "Fast and Scalable Analytics",
        description: "Built for speed and performance. Works for both small teams and enterprises."
    }
];

const targetUsers = [
    "Startups",
    "Analysts",
    "Product Teams",
    "Marketing Teams",
    "Enterprise Organizations"
];

const Features = () => {
    return (
        <div className="flex flex-col w-full bg-background overflow-hidden font-sans">
            {/* 1. Hero Section - Bold and High Impact */}
            <section className="w-full pt-28 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 relative overflow-hidden text-center bg-white dark:bg-neutral-950">
                {/* Visual Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
                    <div className="absolute top-[-10%] left-[10%] w-[30%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[20%] right-[10%] w-[25%] h-[35%] bg-purple-500/5 blur-[100px] rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8 md:space-y-10"
                    >
                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1.1] md:leading-[0.95] bg-gradient-to-b from-black via-neutral-800 to-neutral-500 bg-clip-text text-transparent dark:from-white dark:to-neutral-500">
                                AI Data Analytics <br className="hidden md:block" /> Features
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 font-medium tracking-tight">
                                Powerful Features for Modern Data Analytics
                            </p>
                        </div>

                        {/* Intro Paragraphs with breathing room - Verbatim Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-neutral-600 dark:text-neutral-300 text-base md:text-xl text-left border-t border-border/50 pt-8 md:pt-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="space-y-4"
                            >
                                <p className="leading-relaxed font-light">
                                    ADRO is an AI-powered data analytics platform designed to help teams analyze datasets, generate dashboards, and uncover insights instantly.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="space-y-4"
                            >
                                <p className="leading-relaxed font-light">
                                    Upload your data, ask questions in natural language, and create charts, dashboards, and analytics without complex BI tools or technical setup.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Features Grid - Spacious and Interactive */}
            <section className="py-20 md:py-32 px-4 relative bg-neutral-50 dark:bg-neutral-900 border-y border-border/50">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {featuresData.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group relative list-none"
                            >
                                <div className="relative h-full rounded-[2rem] border-[0.75px] border-border p-2 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.02]">
                                    <GlowingEffect
                                        spread={60}
                                        glow={true}
                                        disabled={false}
                                        proximity={80}
                                        inactiveZone={0.01}
                                        borderWidth={3}
                                    />
                                    <div className="relative flex h-full flex-col justify-start gap-6 md:gap-8 overflow-hidden rounded-[1.75rem] border bg-background p-6 md:p-8 shadow-sm">
                                        <div className="w-fit rounded-2xl border border-border bg-muted/50 p-3 md:p-4 group-hover:bg-primary/5 transition-colors">
                                            <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight min-h-[auto] md:min-h-[5rem] flex items-start">{feature.title}</h3>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why ADRO Stands Out - Light Theme Redesign */}
            <section className="py-20 md:py-32 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[40%] h-[100%] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-[-10%] w-[40%] h-[100%] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-6xl px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center space-y-8 md:space-y-12"
                        >
                            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight">
                                    Why ADRO <br className="hidden md:block" /> Stands Out
                                </h2>
                                <p className="text-lg md:text-2xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                                    Unlike traditional BI tools, ADRO focuses on simplicity and speed.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4">
                                {[
                                    "No SQL required",
                                    "No manual dashboard creation",
                                    "No complex setup",
                                    "Instant insights"
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="flex items-center gap-4 md:gap-5 group"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center transition-all group-hover:bg-primary group-hover:scale-110 shadow-sm">
                                            <Check className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-lg md:text-xl font-medium tracking-tight text-neutral-800 dark:text-neutral-100 group-hover:text-primary transition-colors">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <div className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 backdrop-blur-2xl shadow-xl relative">
                                {/* Visual Accent */}
                                <div className="absolute top-8 right-12 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-neutral-300 dark:border-white/20 rounded-tr-3xl" />

                                <div className="space-y-8 md:space-y-10">
                                    <div className="space-y-2 text-center lg:text-left">
                                        <span className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Built for success</span>
                                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Every organization. <br /> Every team.</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
                                        {targetUsers.map((user, idx) => (
                                            <motion.div
                                                key={user}
                                                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.02)", borderColor: "rgba(0,0,0,0.1)" }}
                                                className="px-5 md:px-8 py-2 md:py-4 rounded-full border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 text-neutral-700 dark:text-white text-sm md:text-base font-semibold tracking-wide capitalize shadow-sm transition-all cursor-default"
                                            >
                                                {user}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. CTA Section - Light Theme Epic Look */}
            <section className="py-24 md:py-40 px-4 bg-neutral-50 dark:bg-neutral-900">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="rounded-[3rem] md:rounded-[5rem] bg-white dark:bg-neutral-950 border-border border p-12 md:p-32 text-center space-y-10 md:space-y-14 relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] dark:shadow-none"
                    >
                        {/* Dramatic Radial Gradient */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,102,255,0.03)_0%,transparent_70%)] pointer-events-none" />

                        <div className="relative z-10 space-y-6 md:space-y-8">
                            <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-4">
                                AI Powered Analytics
                            </div>
                            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight bg-gradient-to-b from-black to-neutral-400 bg-clip-text text-transparent dark:from-white dark:to-neutral-600">
                                Start Analyzing Your <br className="hidden md:block" /> Data Today
                            </h2>
                            <p className="text-xl md:text-3xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
                                Experience the power of AI-driven analytics with ADRO.
                            </p>
                        </div>

                        <div className="relative z-10 pt-4 md:pt-6">
                            <Link href="/login">
                                <Button size="lg" className="rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 md:hover:scale-110 hover:shadow-primary/20 transition-all duration-500 px-10 md:px-16 h-14 md:h-20 text-lg md:text-2xl font-black shadow-2xl">
                                    Start Analyzing Data
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Features;
