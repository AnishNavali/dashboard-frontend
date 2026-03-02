"use client";

import { NavigationBar } from "@/src/components/dashboard/navigation-bar";

export default function DocsPage() {
    return (
        <main>
            <NavigationBar />
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Documentation</h1>
                <p className="text-slate-500 text-lg">
                    Everything you need to get started with ADRO.
                </p>
            </div>
        </main>
    );
}
