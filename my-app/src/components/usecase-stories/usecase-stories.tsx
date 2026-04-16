"use client";

import { useState, useEffect } from "react";
import DocsSidebar from "../Docs/docs-sidebar";
import DocsContent from "../Docs/docs-content";
import { usecaseStoriesData } from "./usecase-stories-data";
import "../Docs/docs.css";
import { NavigationBar } from "../dashboard/navigation-bar";
import Footer from "../footer/footer";
import { Button } from "@/src/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function UsecaseStories() {
    const [activeSubSection, setActiveSubSection] = useState(
        usecaseStoriesData[0]?.subSections[0]?.id || ""
    );

    useEffect(() => {
        const handler = (e: Event) => {
            const customEvent = e as CustomEvent<string>;
            setActiveSubSection(customEvent.detail);
        };
        window.addEventListener("docs-navigate", handler);
        return () => window.removeEventListener("docs-navigate", handler);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <NavigationBar />

            <div className="flex flex-1 relative docs-page">
                <DocsSidebar
                    sections={usecaseStoriesData}
                    activeSubSection={activeSubSection}
                    onSubSectionClick={setActiveSubSection}
                />
                <div className="flex-1 flex flex-col">
                    <div className="px-4 md:px-8 lg:px-12 py-4 border-b">
                        <Button variant="outline" asChild>
                            <Link href="/">
                                <ArrowLeft className="mr-2 size-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                    <DocsContent sections={usecaseStoriesData} activeSubSection={activeSubSection} />
                </div>
            </div>

            <Footer />
        </div>
    );
}
