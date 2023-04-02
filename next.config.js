/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: false,
  // },
  images: {
    domains: ["api.petemoon.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     domains: ["api.petemoon.com"],
    //     // hostname: "petemoon.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
