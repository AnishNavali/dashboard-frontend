import { Blog7 } from "../../components/blogs/blogs";
import { NavigationBar } from "../../components/dashboard/navigation-bar";
import Footer from "../../components/footer/footer";

const blogPosts = [
  {
    id: "post-1",
    title: "How to Analyze Data Using AI Without Coding",
    summary: "Modern businesses generate large volumes of data, but extracting meaningful insights often requires technical expertise.",
    label: "Tutorial",
    author: "ADRO Team",
    published: "18 Mar 2024",
    image: "/blog1.png",
  },
  {
    id: "post-2",
    title: "Best AI Data Analytics Tools in 2026",
    summary: "AI is transforming how businesses analyze data by enabling natural language exploration and automation.",
    label: "Guide",
    author: "ADRO Team",
    published: "18 Mar 2024",
    image: "/blog2.png",
  },
  {
    id: "post-3",
    title: "AI Analytics vs Traditional Analytics",
    summary: "Understanding the shift from manual reporting to automated, interactive insights.",
    label: "Comparison",
    author: "Equilibrate Team",
    published: "18 Mar 2024",
    image: "/blog3.png",
  },
  {
    id: "post-4",
    title: "How Businesses Can Use AI to Automate Operations",
    summary: "Streamline workflows and improve productivity through intelligent automation.",
    label: "Operations",
    author: "Equilibrate Team",
    published: "18 Mar 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: "post-5",
    title: "What Is an AI Platform and Why Your Business Needs One",
    summary: "A centralized AI system that unifies data, automation, and intelligence across your business.",
    label: "AI Platforms",
    author: "Equilibrate Team",
    published: "18 Mar 2024",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationBar />
      <main className="flex-1">
        <Blog7
          tagline="ADRO Insights"
          heading="Blogs"
          description="Stay updated with the latest trends in AI-driven data analytics and business intelligence."
          posts={blogPosts}
          buttonText="Back to Home"
          buttonUrl="/"
        />
      </main>
      <Footer />
    </div>
  );
}
