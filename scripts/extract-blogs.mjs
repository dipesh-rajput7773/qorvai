// Script to extract blog posts from blogData.ts into separate markdown files
// Run: node scripts/extract-blogs.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const contentDir = join(rootDir, 'content', 'blog');

// Create content directory
mkdirSync(contentDir, { recursive: true });

// Read the blogData.ts file
const blogDataPath = join(rootDir, 'src', 'lib', 'blogData.ts');
const raw = readFileSync(blogDataPath, 'utf-8');

// Extract each blog post object using regex
// Match pattern: { slug: "...", title: "...", ... content: `...` }
const postRegex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*readTime:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*keywords:\s*\[([^\]]+)\],\s*content:\s*`([\s\S]*?)`\s*\}/g;

let match;
let count = 0;

while ((match = postRegex.exec(raw)) !== null) {
  const [, slug, title, description, date, readTime, category, keywordsRaw, content] = match;
  
  // Parse keywords
  const keywords = keywordsRaw.split(',').map(k => k.trim().replace(/^"|"$/g, ''));
  
  // Create frontmatter + content markdown file
  const md = `---
title: "${title}"
description: "${description}"
date: "${date}"
readTime: "${readTime}"
category: "${category}"
keywords: [${keywords.map(k => `"${k}"`).join(', ')}]
---

${content.trim()}
`;

  const filePath = join(contentDir, `${slug}.md`);
  writeFileSync(filePath, md, 'utf-8');
  count++;
  console.log(`✅ Extracted: ${slug}`);
}

console.log(`\nDone! Extracted ${count} blog posts to content/blog/`);
