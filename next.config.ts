// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
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
/** @type {import('next').NextConfig} */
const isProd:boolean = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add this to handle static assets
  publicRuntimeConfig: {
    basePath: isProd ? '/portfolio' : '',
  },
};

module.exports = nextConfig;


