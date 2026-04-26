import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Reduce memory usage during static page generation
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
