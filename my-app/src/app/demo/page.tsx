"use client";

import { NavigationBar } from "@/src/components/dashboard/navigation-bar";

export default function DemoPage() {
    return (
        <main>
            <NavigationBar />
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Demo</h1>
                <p className="text-slate-500 text-lg">
                    See ADRO in action — no signup required.
                </p>
            </div>
        </main>
    );
}
