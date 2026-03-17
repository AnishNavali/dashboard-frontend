"use client";

import { NavigationBar } from "@/src/components/dashboard/navigation-bar";
import Footer from "@/src/components/footer/footer";
import Features from "@/src/components/features/features";

export default function FeaturesPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <NavigationBar />
            <div className="flex-grow">
                <Features />
            </div>
            <Footer />
        </main>
    );
}