/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: false,
  // },
  images: {
    // domains: ["petemoon.com"],
    remotePatterns: [
      {
        protocol: "https",
        // domains: ["api.petemoon.com"],
        hostname: "api.petemoon.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
