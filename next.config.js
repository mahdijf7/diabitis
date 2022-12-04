/** @type {import('next').NextConfig} */

const nextConfig = {
  // swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  distDir: "build",
  images: {
    path: "/_next/image",
    unoptimized: true,
  },
};

module.exports = nextConfig;
