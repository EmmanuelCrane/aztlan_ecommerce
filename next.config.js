/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname: 'res.cloudinary.com',
        port: '',
        // pathname: '/assets/uploads/**'
      }
    ]
  }
}

module.exports = nextConfig
