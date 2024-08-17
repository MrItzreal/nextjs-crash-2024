/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;

//  Removed the appDir prop from the experimental obj in next.config.mjs.This option is no longer needed.

// 1.) experimental: { serverComponentsExternalPackages: ["mongoose"] }: Treats Mongoose as external package for Server Components.
// 2.) images: { domains: ["lh3.googleusercontent.com"] }: Allows image optimization for Google-hosted images.
// 3.) webpack(config) { ... }:
// This section modifies the default Webpack configuration used by Next.js.
// 4.) config.experiments = { ...config.experiments, topLevelAwait: true }: Enables top-level await in JavaScript modules
// 5.) /** @type {import('next').NextConfig} */: Provides TypeScript type checking for the config object
