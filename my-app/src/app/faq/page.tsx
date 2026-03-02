"use client";

import { NavigationBar } from "@/src/components/dashboard/navigation-bar";
import { FAQ } from "@/src/components/Faq/Faq";
import Footer from "@/src/components/footer/footer";

export default function FaqPage() {
    return (
        <main>
            <NavigationBar />
            <div className="max-w-4xl mx-auto px-6 py-16">
                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
