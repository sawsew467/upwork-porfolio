import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  images: {
    domains: ["localhost"],
    unoptimized: false,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  output: "standalone",
};

module.exports = nextConfig;
