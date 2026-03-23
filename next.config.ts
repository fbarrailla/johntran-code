import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/johntran-code",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
