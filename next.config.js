/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  swcMinify: true,
  trailingSlash: true,
  basePath: "/political-universe",
  assetPrefix: "/political-universe/",
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
