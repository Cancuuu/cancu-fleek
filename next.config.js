/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com", "media.cdn.adultswim.com"],
  },
};

module.exports = nextConfig;
