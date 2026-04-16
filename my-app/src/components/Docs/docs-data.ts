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

export const docsData: DocSection[] = [
    {
        id: "getting-started",
        title: "Getting Started",
        subSections: [
            {
                id: "register-account",
                title: "Register an Account",
                badge: "Getting Started",
                mainImage: "/signup.png",
                content: [
                    {
                        type: "paragraph",
                        text: "To begin using ADRO, you need to create an account. The registration process is straightforward and designed to get you up and running quickly.",
                    },
                ],
                steps: [
                    {
                        title: "Visit Website",
                        description: "Go to the ADRO official website and click on Sign Up.",
                        image: "/signup-pic.png"
                    },
                    {
                        title: "Fill Details",
                        description: "Complete the registration form with your business email.",
                        image: "/signup-pic-2.png"
                    },
                    {
                        title: "Submit Request",
                        description: "Submit your request for account approval by the admin team.",
                        image: "/signup-pic.png"
                    }
                ]
            },
            {
                id: "login-credits",
                title: "Login & Initial Credits",
                badge: "Authentication",
                content: [
                    {
                        type: "paragraph",
                        text: "After your account is approved and you log in for the first time, you're ready to start exploring ADRO's capabilities immediately.",
                    },
                    {
                        type: "heading",
                        text: "Complimentary Credits",
                    },
                    {
                        type: "list",
                        items: [
                            "You will receive 10 complimentary credits upon first login",

                            "Credits are consumed based on platform usage",
                        ],
                    },
                    {
                        type: "callout",
                        variant: "tip",
                        text: "These initial credits allow you to immediately explore ADRO's AI-powered dashboard capabilities without any upfront cost.",
                    },
                ],
                steps: [
                    {
                        title: "Visit Login Page",
                        description: "Head to the login portal to access your ADRO account.",
                        image: "/login-pic-1.png"
                    },
                    {
                        title: "Enter Credentials",
                        description: "Provide your registered email and password to sign in.",
                        image: "/login-pic-2.png"
                    },
                    {
                        title: "Explore Dashboard",
                        description: "Start analyzing your data with your complimentary credits.",
                        image: "/upload.png"
                    }
                ]
            },
        ],
    },
    {
        id: "uploading-data",
        title: "Uploading Your Data",
        subSections: [
            {
                id: "how-to-upload",
                title: "How to Upload Files",
                badge: "Data Management",
                mainImage: "/upload-pic-1.png",
                content: [
                    {
                        type: "paragraph",
                        text: "Uploading your data to ADRO is a simple, guided process that takes just a few clicks.",
                    }
                ],
                steps: [
                    {
                        title: "Open Dashboard",
                        description: "Click the Upload button inside your main dashboard panel.",
                        image: "/upload.png"
                    },
                    {
                        title: "Select File",
                        description: "Choose a CSV or Excel file from your local system.",
                        image: "/upload-pic-2.png"
                    },
                    {
                        title: "Process Data",
                        description: "Wait for ADRO to analyze and structure your data automatically.",
                        image: "/upload-pic-3.png"
                    }
                ]
            },
            {
                id: "supported-formats",
                title: "Supported Formats",
                badge: "Specifications",
                content: [
                    {
                        type: "paragraph",
                        text: "ADRO supports structured datasets to ensure compatibility with a wide range of business data sources.",
                    },
                    {
                        type: "heading",
                        text: "Accepted File Types",
                    },
                    {
                        type: "list",
                        items: [
                            "CSV (.csv) — Comma-separated values",
                            "Excel (.xlsx) — Microsoft Excel workbooks",
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "asking-questions",
        title: "Asking Questions",
        subSections: [
            {
                id: "natural-language",
                title: "Natural Language Queries",
                badge: "AI Interaction",
                content: [
                    {
                        type: "paragraph",
                        text: "After selecting your dataset, you can begin asking questions in natural, everyday English. No SQL, no formulas, and no technical configuration required.",
                    },
                    {
                        type: "heading",
                        text: "Example Queries",
                    },
                    {
                        type: "list",
                        items: [
                            "\"Show revenue trends over time.\"",
                            "\"Which region performed best?\"",
                            "\"Compare monthly sales performance.\"",
                            "\"Plot a sales Dashboard\"",
                            "\"Show me Product Performance\"",
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "dashboard-generation",
        title: "Dashboard Generation",
        subSections: [
            {
                id: "auto-dashboards",
                title: "Automatic Dashboards",
                badge: "Visualization",
                mainImage: "/dashboard-pic.png",
                content: [
                    {
                        type: "paragraph",
                        text: "ADRO automatically creates rich, interactive dashboards from your data — no manual configuration needed.",
                    },
                    {
                        type: "list",
                        items: [
                            "KPI cards — Key performance indicators at a glance",
                            "Interactive charts — Bar, line, pie, and more",
                            "Comparative visualizations — Side-by-side analysis",
                            "AI-generated summaries — Narrative insights from your data",
                        ],
                    },
                ],
                steps: [
                    {
                        title: "Generate Insights",
                        description: "Witness ADRO turning your raw data into actionable insights.",
                        image: "/dashboard-pic.png"
                    },
                    {
                        title: "Interact & Explore",
                        description: "Drill down into specific metrics and trends with dynamic charts.",
                        image: "/pic-2.jpg"
                    }
                ]
            },
        ],
    },
    {
        id: "exporting-dashboards",
        title: "Exporting Dashboards",
        subSections: [
            {
                id: "export-formats",
                title: "Export Formats",
                badge: "Reporting",
                mainImage: "/export-pic.png",
                content: [
                    {
                        type: "paragraph",
                        text: "ADRO allows you to export your generated dashboards in multiple formats, making it easy to share and present your insights.",
                    },
                    {
                        type: "list",
                        items: [
                            "PNG — High-resolution image export",
                            "Excel — Spreadsheet with underlying data",
                            "PDF — Print-ready document format",
                            "JPG — Image format for easy sharing",

                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "usecase-stories",
        title: "Usecase Stories",
        subSections: [
            {
                id: "growing-fast",
                title: "1. Who is actually growing the fastest?",
                content: [
                    { type: "paragraph", text: "One simple question: \"Which company has the highest revenue growth trend over time?\"" },
                    { type: "paragraph", text: "Insight:" },
                    { type: "list", items: [
                        "Amazon dominates with ~75,400% growth",
                        "Netflix shows massive % growth due to a low starting base",
                        "Google shows the most consistent long-term growth",
                        "Facebook grows steadily but over a shorter timeline"
                    ]},
                    { type: "paragraph", text: "Conclusion: Amazon isn’t just growing — it’s scaling at a completely different level." },
                    { type: "paragraph", text: "Source:" }
                ],
            },
            {
                id: "anomaly-detection",
                title: "2. When things go wrong (Anomaly Detection)",
                content: [
                    { type: "paragraph", text: "I asked: \"Detect sudden drops in performance\"" },
                    { type: "paragraph", text: "What ADRO found instantly:" },
                    { type: "list", items: [
                        "Facebook had its biggest crash during the Cambridge Analytica scandal",
                        "Amazon drops were tied to earnings misses",
                        "Netflix dips aligned with subscriber loss concerns",
                        "Google drops reflected market pressure and revenue concerns"
                    ]},
                    { type: "paragraph", text: "This is powerful because: You’re not just seeing data — you’re seeing real-world events reflected in it" },
                    { type: "paragraph", text: "Source:" }
                ],
            },
            {
                id: "drives-growth",
                title: "3. What actually drives growth?",
                content: [
                    { type: "paragraph", text: "Instead of guessing, I asked: \"Explain the main drivers of growth for each company\"" },
                    { type: "paragraph", text: "Clear breakdown:" },
                    { type: "list", items: [
                        "Amazon → E-commerce + AWS (Cloud dominance)",
                        "Google → Search Ads + YouTube + Cloud",
                        "Facebook → Mobile Ads + Instagram ecosystem",
                        "Netflix → Streaming + Original content"
                    ]},
                    { type: "paragraph", text: "Insight: Every company scaled by owning a core engine + expanding smartly" }
                ],
            },
            {
                id: "efficiency",
                title: "4. Efficiency: Who uses their growth best?",
                content: [
                    { type: "paragraph", text: "I asked: \"Compare profit efficiency across companies\"" },
                    { type: "paragraph", text: "Result:" },
                    { type: "list", items: [
                        "Amazon → Highest return efficiency",
                        "Netflix → High growth but volatile",
                        "Facebook → Stable but moderate",
                        "Google → Most stable, but lowest return margin"
                    ]},
                    { type: "paragraph", text: "Insight: High growth ≠ efficiency. Amazon manages to do both." }
                ],
            },
            {
                id: "profit-cost",
                title: "5. Profit vs Cost — What changed over time?",
                content: [
                    { type: "paragraph", text: "Another question: \"Compare profit vs expenses\"" },
                    { type: "paragraph", text: "Key finding:" },
                    { type: "list", items: [
                        "All companies saw massive cost (valuation) growth",
                        "Profit margins were small and volatile for years",
                        "2020 was a breakout year for everyone (digital boom)"
                    ]},
                    { type: "paragraph", text: "Insight: External events (like COVID) can reshape entire industries overnight" }
                ],
            },
            {
                id: "scalability",
                title: "6. Scalability — Who wins long term?",
                content: [
                    { type: "paragraph", text: "Final question: \"Which company is most scalable?\"" },
                    { type: "paragraph", text: "Clear winner:" },
                    { type: "list", items: [
                        "Amazon → ~1030x growth",
                        "Netflix → ~645x",
                        "Google → ~22x",
                        "Facebook → ~10x"
                    ]},
                    { type: "paragraph", text: "Insight: Amazon’s ability to expand into multiple industries (AWS, logistics, streaming) makes it the most scalable." }
                ],
            },
            {
                id: "data-sources",
                title: "Data Sources",
                content: [
                    { type: "paragraph", text: "Public historical stock data (1997–2020)" },
                    { type: "paragraph", text: "Yahoo Finance, NASDAQ, Google Finance" },
                    { type: "paragraph", text: "Stock Price Dataset Repository" }
                ],
            },
            {
                id: "final-thoughts",
                title: "Final Thoughts",
                content: [
                    { type: "paragraph", text: "Traditional tools require data modeling, dashboards, and complex formulas. With ADRO, you ask questions and get insights directly." }
                ],
            }
        ],
    },

];

