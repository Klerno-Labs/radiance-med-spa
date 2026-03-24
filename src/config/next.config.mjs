import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mfile.z.ai",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;