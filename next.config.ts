 import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// const isProd: boolean = process.env.NODE_ENV === 'production';

// const nextConfig = {
//   output: 'export',
//   basePath: isProd ? '/portfolio' : '',
//   assetPrefix: isProd ? '/portfolio/' : '',
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;
const nextConfig: NextConfig = {
  output: "export", // ✅ Required for static export
  images: {
    unoptimized: true, // ✅ Needed for GitHub Pages
  },
};

export default nextConfig;


