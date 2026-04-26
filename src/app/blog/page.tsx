import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Qorvai — AI Automation Agency India",
  description:
    "In-depth guides on AI agent automation, web scraping, n8n workflows, and business automation for Indian startups, CA firms, e-commerce sellers, and visa agencies.",
  openGraph: {
    title: "Blog | Qorvai AI Automation",
    description:
      "Practical guides on AI automation, web scraping, and workflow automation for Indian businesses.",
    url: "https://qorvai.com/blog",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Web Scraping": "bg-blue-100 text-blue-700",
  "Case Studies": "bg-green-100 text-green-700",
  "AI Automation": "bg-purple-100 text-purple-700",
  "E-Commerce": "bg-orange-100 text-orange-700",
  Automation: "bg-yellow-100 text-yellow-700",
  "Social Media Automation": "bg-pink-100 text-pink-700",
  "Full-Stack Development": "bg-indigo-100 text-indigo-700",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4">
          02 — Knowledge Base
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Build smarter. Automate everything.
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Practical guides on AI agents, web scraping, n8n automation, and
          full-stack development — built for Indian businesses ready to scale.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              {/* Category + Read Time */}
              <div className="text-[0.65rem] font-bold tracking-widest text-[#8A857E] uppercase mb-4 flex items-center gap-2">
                 <span className="text-[#C8714A]">{post.category}</span>
                 <span className="w-1 h-1 rounded-full bg-[#4A4540]"></span>
                 <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F2EDE8] mb-3 group-hover:text-[#E8A882] transition-colors leading-[1.2]">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-[#8A857E] leading-relaxed mb-6 line-clamp-3">
                {post.description}
              </p>

              {/* Read article link */}
              <div className="text-sm font-bold text-[#F2EDE8] underline decoration-[#4A4540] group-hover:decoration-[#C8714A] underline-offset-4 transition-all">
                Read article
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
