export interface DocStep {
    title: string;
    description: string;
    image: string;
}

export interface DocSubSection {
    id: string;
    title: string;
    badge?: string;
    content: DocContentBlock[];
    steps?: DocStep[];
    mainImage?: string;
}

export interface DocContentBlock {
    type: "paragraph" | "list" | "heading" | "code" | "callout" | "divider" | "link";
    text?: string;
    items?: string[];
    variant?: "info" | "tip" | "warning";
    href?: string;
}

export interface DocSection {
    id: string;
    title: string;
    subSections: DocSubSection[];
}

export const usecaseStoriesData: DocSection[] = [
    {
        id: "overview",
        title: "Overview",
        subSections: [
            {
                id: "intro",
                title: "Comparative Study of Leading Tech Companies Using ADRO",
                badge: "Introduction",
                content: [
                    {
                        type: "paragraph",
                        text: "At Equilibrate.AI, we explored a simple idea: What if data analysis didn't require dashboards, formulas, or complex tools?",
                    },
                    {
                        type: "paragraph",
                        text: "To test this, we analyzed historical datasets of:",
                    },
                    {
                        type: "list",
                        items: [
                            "Amazon",
                            "Google",
                            "Facebook",
                            "Netflix",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Using ADRO, we asked business questions in natural language — and generated insights instantly.",
                    },
                ],
            },
        ],
    },
    {
        id: "growing-fast",
        title: "1. Who is actually growing the fastest?",
        subSections: [
            {
                id: "revenue-growth",
                title: "Revenue Growth Analysis",
                badge: "Growth",
                mainImage: "/signal-2026-03-30-172649_002.png",
                content: [
                    {
                        type: "paragraph",
                        text: "One simple question: \"Which company has the highest revenue growth trend over time?\"",
                    },
                    {
                        type: "heading",
                        text: "Insight",
                    },
                    {
                        type: "list",
                        items: [
                            "Amazon dominates with ~75,400% growth",
                            "Netflix shows massive % growth due to a low starting base",
                            "Google shows the most consistent long-term growth",
                            "Facebook grows steadily but over a shorter timeline",
                        ],
                    },
                    {
                        type: "callout",
                        variant: "info",
                        text: "Conclusion: Amazon isn't just growing — it's scaling at a completely different level.",
                    },
                ],
            },
        ],
    },
    {
        id: "anomaly-detection",
        title: "2. When things go wrong (Anomaly Detection)",
        subSections: [
            {
                id: "sudden-drops",
                title: "Detect Sudden Performance Drops",
                badge: "Anomalies",
                mainImage: "/anomaly-detection2.png",
                content: [
                    {
                        type: "paragraph",
                        text: "I asked: \"Detect sudden drops in performance\"",
                    },
                    {
                        type: "heading",
                        text: "What ADRO found instantly",
                    },
                    {
                        type: "list",
                        items: [
                            "Facebook had its biggest crash during the Cambridge Analytica scandal",
                            "Amazon drops were tied to earnings misses",
                            "Netflix dips aligned with subscriber loss concerns",
                            "Google drops reflected market pressure and revenue concerns",
                        ],
                    },
                    {
                        type: "callout",
                        variant: "tip",
                        text: "This is powerful because: You're not just seeing data — you're seeing real-world events reflected in it",
                    },
                ],
            },
        ],
    },
    {
        id: "drives-growth",
        title: "3. What actually drives growth?",
        subSections: [
            {
                id: "growth-drivers",
                title: "Main Drivers of Growth",
                mainImage: "/growth.png",
                badge: "Analysis",
                content: [
                    {
                        type: "paragraph",
                        text: "Instead of guessing, I asked: \"Explain the main drivers of growth for each company\"",
                    },
                    {
                        type: "heading",
                        text: "Clear breakdown",
                    },
                    {
                        type: "list",
                        items: [
                            "Amazon → E-commerce + AWS (Cloud dominance)",
                            "Google → Search Ads + YouTube + Cloud",
                            "Facebook → Mobile Ads + Instagram ecosystem",
                            "Netflix → Streaming + Original content",
                        ],
                    },
                    {
                        type: "callout",
                        variant: "info",
                        text: "Insight: Every company scaled by owning a core engine + expanding smartly",
                    },
                ],
            },
        ],
    },
    {
        id: "efficiency",
        title: "4. Efficiency: Who uses their growth best?",
        subSections: [
            {
                id: "profit-efficiency",
                title: "Profit Efficiency Comparison",
                mainImage: "/efficiency.png",
                badge: "Efficiency",
                content: [
                    {
                        type: "paragraph",
                        text: "I asked: \"Compare profit efficiency across companies\"",
                    },
                    {
                        type: "heading",
                        text: "Result",
                    },
                    {
                        type: "list",
                        items: [
                            "Amazon → Highest return efficiency",
                            "Netflix → High growth but volatile",
                            "Facebook → Stable but moderate",
                            "Google → Most stable, but lowest return margin",
                        ],
                    },
                    {
                        type: "callout",
                        variant: "info",
                        text: "Insight: High growth ≠ efficiency. Amazon manages to do both.",
                    },
                ],
            },
        ],
    },
    {
        id: "profit-cost",
        title: "5. Profit vs Cost — What changed over time?",
        subSections: [
            {
                id: "profit-vs-expenses",
                title: "Profit vs Expenses Over Time",
                mainImage: "/profit.png",
                badge: "Financial",
                content: [
                    {
                        type: "paragraph",
                        text: "Another question: \"Compare profit vs expenses\"",
                    },
                    {
                        type: "heading",
                        text: "Key finding",
                    },
                    {
                        type: "list",
                        items: [
                            "All companies saw massive cost (valuation) growth",
                            "Profit margins were small and volatile for years",
                            "2020 was a breakout year for everyone (digital boom)",
                        ],
                    },
                    {
                        type: "callout",
                        variant: "warning",
                        text: "Insight: External events (like COVID) can reshape entire industries overnight",
                    },
                ],
            },
        ],
    },
    {
        id: "scalability",
        title: "6. Scalability — Who wins long term?",
        subSections: [
            {
                id: "long-term-scalability",
                title: "Long-term Scalability Analysis",
                mainImage: "/scalability.png",
                badge: "Scalability",
                content: [
                    {
                        type: "paragraph",
                        text: "Final question: \"Which company is most scalable?\"",
                    },
                    {
                        type: "heading",
                        text: "Clear winner",
                    },
                    {
                        type: "list",
                        items: [
                            "Amazon → ~1030x growth",
                            "Netflix → ~645x",
                            "Google → ~22x",
                            "Facebook → ~10x",
                        ],
                    },
                    {
                        type: "callout",
                        variant: "info",
                        text: "Insight: Amazon's ability to expand into multiple industries (AWS, logistics, streaming) makes it the most scalable.",
                    },
                ],
            },
        ],
    },
    {
        id: "data-sources",
        title: "Data Sources",
        subSections: [
            {
                id: "sources",
                title: "Data Sources & References",
                badge: "Sources",
                content: [
                    {
                        type: "heading",
                        text: "Public Historical Data",
                    },
                    {
                        type: "list",
                        items: [
                            "Public historical stock data (1997–2020)",
                        ],
                    },
                    {
                        type: "heading",
                        text: "Financial Market Datasets",
                    },
                    {
                        type: "list",
                        items: [
                            "Yahoo Finance",
                            "NASDAQ",
                            "Google Finance",
                        ],
                    },
                    {
                        type: "heading",
                        text: "Practice Dataset Repository",
                    },
                    {
                        type: "link",
                        text: "Stock Price Dataset Repository",
                        href: "https://github.com/rohanmistry231/Practice-Datasets-for-Excel?utm_source=chatgpt.com",
                    },
                    {
                        type: "paragraph",
                        text: "Contains multiple Excel datasets designed for financial and market analysis practice, including stock price data used in this study.",
                    },
                ],
            },
        ],
    },
    {
        id: "final-thoughts",
        title: "Final Thoughts",
        subSections: [
            {
                id: "conclusion",
                title: "Conclusion",
                badge: "Summary",
                content: [
                    {
                        type: "heading",
                        text: "Traditional tools require",
                    },
                    {
                        type: "list",
                        items: [
                            "Data modeling",
                            "Dashboard creation",
                            "Complex formulas",
                        ],
                    },
                    {
                        type: "heading",
                        text: "With ADRO",
                    },
                    {
                        type: "list",
                        items: [
                            "Questions → Insights",
                            "No dashboards required",
                            "No technical barrier",
                        ],
                    },
                    {
                        type: "heading",
                        text: "The Real Difference",
                    },
                    {
                        type: "list",
                        items: [
                            "This is not just data visualization — This is AI-powered thinking",
                        ],
                    },
                    {
                        type: "callout",
                        variant: "tip",
                        text: "At Equilibrate.AI, we believe: Analytics should be both visual and conversational. ADRO brings both together — seamlessly.",
                    },
                ],
            },
        ],
    },
];
