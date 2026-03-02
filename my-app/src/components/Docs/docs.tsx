"use client";

import { useState, useEffect } from "react";
import DocsSidebar from "./docs-sidebar";
import DocsContent from "./docs-content";
import { docsData } from "./docs-data";
import "./docs.css";

export default function Docs() {
    const [activeSubSection, setActiveSubSection] = useState(
        docsData[0]?.subSections[0]?.id || ""
    );

    // Listen for custom navigation events from the prev/next buttons
    useEffect(() => {
        const handler = (e: Event) => {
            const customEvent = e as CustomEvent<string>;
            setActiveSubSection(customEvent.detail);
        };
        window.addEventListener("docs-navigate", handler);
        return () => window.removeEventListener("docs-navigate", handler);
    }, []);

    return (
        <div className="docs-page">
            <DocsSidebar
                sections={docsData}
                activeSubSection={activeSubSection}
                onSubSectionClick={setActiveSubSection}
            />
            <DocsContent sections={docsData} activeSubSection={activeSubSection} />
        </div>
    );
}
