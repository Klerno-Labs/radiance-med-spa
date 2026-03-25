/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true,
  // Reduce bundle size
  compress: true,
}

export default nextConfig