/** @type {import('next').NextConfig} */

const nextConfig = {
  // swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  distDir: "build",
  images: {
    // loader: "akamai",
    path: "/_next/image",
  },
};

module.exports = nextConfig;
