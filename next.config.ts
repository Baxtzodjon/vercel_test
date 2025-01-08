import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "plus.unsplash.com",
        port: ''
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
        port: ''
      },
      {
        protocol: 'https',
        hostname: "via.placeholder.com",
        port: ''
      }
    ]
  }
};

export default nextConfig;
