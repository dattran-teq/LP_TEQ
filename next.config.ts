import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd18aju6n331gxy.cloudfront.net',
        port: '',
        pathname: '**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
