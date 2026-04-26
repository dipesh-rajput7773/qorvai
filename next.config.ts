import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Reduce memory usage during static page generation
    workerThreads: false,
    cpus: 1,
  },
  outputFileTracingIncludes: {
    '/blog/[slug]': ['./content/blog/**/*.md'],
    // Trace it for the related posts listing as well
    '/blog': ['./content/blog/**/*.md'],
  },
};

export default nextConfig;
