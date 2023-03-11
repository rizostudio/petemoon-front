/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: false,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "petemoon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
