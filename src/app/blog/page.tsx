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
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#333] transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Category + Read Time */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    CATEGORY_COLORS[post.category] ??
                    "bg-neutral-800 text-neutral-300"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-xs text-neutral-500">{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                {post.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-600">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span className="text-xs font-medium text-blue-500 group-hover:text-blue-400">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
