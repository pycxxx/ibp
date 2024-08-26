/** @type {import('next').NextConfig} */

const siteUrl = new URL(process.env.SITE_URL);

const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
    domains: [siteUrl.hostname],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
};

export default nextConfig;
