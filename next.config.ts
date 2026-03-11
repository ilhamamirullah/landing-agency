import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "img-prod-cms-rt-microsoft-com.akamaized.net" },
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "a.slack-edge.com" },
      { protocol: "https", hostname: "assets-global.website-files.com" },
      { protocol: "https", hostname: "www.yamaha-motor.co.id" },
      { protocol: "https", hostname: "www.djarumsuper.com" },
      { protocol: "https", hostname: "danone.co.id" },
      { protocol: "https", hostname: "www.mxa.id" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "d1a39lp0neyni6.cloudfront.net" },
      { protocol: "https", hostname: "blue.kumparan.com" },
    ],
  },
};

export default nextConfig;
