/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  swcMinify: true,
  trailingSlash: true,
  // basePath: process.env.NODE_ENV === "PRODUCTION" ? "/political-universe" : "",
  // assetPrefix:
  //   process.env.NODE_ENV === "PRODUCTION" ? "/political-universe" : "/",
  basePath: "/political-universe",
  assetPrefix: "/political-universe",
  images: {
    unoptimized: true
  },
  env: {
    BASE_PATH: "/political-universe",
    HOST: "https://wevisdemo.github.io",
    SECURE_HOST: "https://wevisdemo.github.io",

    NETLIFY_NEXT_PLUGIN_SKIP: true
  }
};

module.exports = nextConfig;
