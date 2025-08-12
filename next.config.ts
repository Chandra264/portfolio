// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Required for static HTML export
  basePath: '/portfolio', // 👈 replace with your repo name
  images: {
    unoptimized: true, // GitHub Pages can't optimize images
  },
};

export default nextConfig;