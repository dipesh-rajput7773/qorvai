import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  content: string;
}

// Lightweight metadata — no content loaded here
interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Parse frontmatter from a markdown file
 */
function parseFrontmatter(raw: string): { meta: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const frontmatter = match[1];
  const content = match[2];
  const meta: Record<string, string | string[]> = {};

  for (const line of frontmatter.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove surrounding quotes
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    // Parse array values like ["a", "b"]
    if (value.startsWith("[") && value.endsWith("]")) {
      meta[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^"|"$/g, ""));
    } else {
      meta[key] = value;
    }
  }

  return { meta, content };
}

/**
 * Get all blog slugs (just filenames, very lightweight)
 */
export function getAllSlugs(): string[] {
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(".md", ""));
  } catch {
    return [];
  }
}

/**
 * Get metadata for all posts (no content loaded — light on memory)
 */
export function getAllPostsMeta(): BlogMeta[] {
  const slugs = getAllSlugs();
  const metas: BlogMeta[] = [];

  for (const slug of slugs) {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { meta } = parseFrontmatter(raw);

    metas.push({
      slug,
      title: (meta.title as string) || slug,
      description: (meta.description as string) || "",
      date: (meta.date as string) || "",
      readTime: (meta.readTime as string) || "",
      category: (meta.category as string) || "",
      keywords: (meta.keywords as string[]) || [],
    });
  }

  return metas;
}

/**
 * Get a single blog post by slug (loads only 1 file)
 */
export function getBlogPost(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { meta, content } = parseFrontmatter(raw);

    return {
      slug,
      title: (meta.title as string) || slug,
      description: (meta.description as string) || "",
      date: (meta.date as string) || "",
      readTime: (meta.readTime as string) || "",
      category: (meta.category as string) || "",
      keywords: (meta.keywords as string[]) || [],
      content,
    };
  } catch {
    return undefined;
  }
}

/**
 * Legacy compatibility — returns all posts with content
 * Used by blog listing page. Only loads metadata, not content.
 */
export const blogPosts: BlogMeta[] = (() => {
  try {
    return getAllPostsMeta();
  } catch {
    return [];
  }
})();
