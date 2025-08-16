import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tailwind-cheatsheet",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
