import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsMeta, getBlogPost } from "@/lib/blogData";

interface Props {
  params: Promise<{ slug: string }>;
}

// pages are statically generated at build time and cached for 1 hr
export const revalidate = 3600;
export const dynamicParams = true;

import { getAllSlugs } from "@/lib/blogData";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Qorvai Blog`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://qorvai.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: "https://qorvai.com/logo.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// Minimal markdown-to-JSX renderer (handles the subset we use)
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={key++} className="my-6">
          {lang && (
            <div className="text-xs font-mono text-neutral-500 bg-[#0d0d0d] border border-[#222] border-b-0 rounded-t-lg px-4 py-2">
              {lang}
            </div>
          )}
          <pre
            className={`bg-[#0d0d0d] border border-[#222] ${lang ? "rounded-b-lg" : "rounded-lg"} p-4 overflow-x-auto text-sm text-green-300 font-mono leading-relaxed`}
          >
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-bold text-white mt-12 mb-4 leading-tight"
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="text-lg font-semibold text-white mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // HR
    if (line.trim() === "---") {
      elements.push(
        <hr key={key++} className="border-[#1f1f1f] my-8" />
      );
      i++;
      continue;
    }

    // Table
    if (line.includes("|") && lines[i + 1]?.includes("---")) {
      const headers = line
        .split("|")
        .map((h) => h.trim())
        .filter(Boolean);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(
          lines[i]
            .split("|")
            .map((c) => c.trim())
            .filter(Boolean)
        );
        i++;
      }
      elements.push(
        <div key={key++} className="my-6 overflow-x-auto">
          <table className="w-full text-sm border border-[#1f1f1f] rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#111]">
                {headers.map((h, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-3 text-left text-xs font-semibold text-neutral-400 uppercase tracking-wider border-b border-[#1f1f1f]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-[#0d0d0d]" : "bg-[#111]"}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 text-neutral-300 border-b border-[#1a1a1a] last:border-b-0"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Bullet list
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [];
      while (
        i < lines.length &&
        (lines[i].startsWith("- ") || lines[i].startsWith("* "))
      ) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-4 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-neutral-300">
              <span className="text-blue-500 mt-1 shrink-0">→</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="my-4 space-y-2 counter-reset-list">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-neutral-300">
              <span className="text-blue-500 font-mono text-sm shrink-0 mt-0.5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    if (line.trim()) {
      const paraLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].startsWith("```") && !lines[i].startsWith("-") && !lines[i].startsWith("*") && !/^\d+\./.test(lines[i]) && !lines[i].includes("|") && lines[i] !== "---") {
        paraLines.push(lines[i]);
        i++;
      }
      const paraText = paraLines.join(" ");
      elements.push(
        <p
          key={key++}
          className="text-neutral-300 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: formatInline(paraText) }}
        />
      );
      continue;
    }

    i++;
  }

  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/`(.+?)`/g, '<code class="bg-[#1a1a1a] text-green-400 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\[(.+?)\]\((https?:\/\/.+?)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline underline-offset-2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline underline-offset-2">$1</a>');
}

const CATEGORY_COLORS: Record<string, string> = {
  "Web Scraping": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Case Studies": "bg-green-500/10 text-green-400 border-green-500/20",
  "AI Automation": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "E-Commerce": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Automation: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Social Media Automation": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Full-Stack Development": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getAllPostsMeta()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Qorvai",
      url: "https://qorvai.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Qorvai",
      url: "https://qorvai.com",
    },
    keywords: post.keywords.join(", "),
    url: `https://qorvai.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 pt-24 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mb-8"
          >
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                CATEGORY_COLORS[post.category] ??
                "bg-neutral-800/50 text-neutral-400 border-neutral-700"
              }`}
            >
              {post.category}
            </span>
            <span className="text-xs text-neutral-500">{post.readTime}</span>
            <span className="text-xs text-neutral-500">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-neutral-400 leading-relaxed">
            {post.description}
          </p>
        </section>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-6 pb-16">
          <div className="prose-qorvai">
            {renderContent(post.content)}
          </div>
        </article>

        {/* CTA Banner */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="bg-gradient-to-br from-blue-950/60 to-indigo-950/60 border border-blue-800/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Ready to automate your business?</h3>
            <p className="text-neutral-400 mb-6 text-sm">
              Qorvai builds custom AI agents, web scrapers, and automation systems for Indian businesses. Free 30-minute strategy call.
            </p>
            <a
              href="https://qorvai.com#cta"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-neutral-100 transition-colors text-sm"
            >
              Book Free Strategy Call →
            </a>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 pb-24">
            <h3 className="text-lg font-semibold mb-4 text-neutral-200">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((rpost) => (
                <Link
                  key={rpost.slug}
                  href={`/blog/${rpost.slug}`}
                  className="group block bg-[#111] border border-[#1f1f1f] rounded-xl p-5 hover:border-[#333] transition-all"
                >
                  <span className="text-xs text-neutral-500 block mb-2">
                    {rpost.readTime}
                  </span>
                  <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {rpost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
