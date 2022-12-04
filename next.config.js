/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  distDir: "build",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
