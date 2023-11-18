/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "api.seacart.id",
      "http://api.seacart.id/uploads/",
    ],
  },
};

module.exports = nextConfig;
