import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Resolve dependencies from the web app, even when launched from its parent.
    root: __dirname,
  },
};

export default nextConfig;
