import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment, set basePath to your repository name
  // Example: if your repo is 'my-anniversary-site', set basePath: '/my-anniversary-site'
  // Leave as '/' if deploying to username.github.io repository root
  basePath: process.env.NODE_ENV === 'production' ? '/Wishing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Wishing' : '',
};

export default nextConfig;
