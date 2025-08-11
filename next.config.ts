// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Static HTML export
  basePath: '/portfolio', // Repo name
  assetPrefix: '/portfolio/',
};

export default nextConfig;
