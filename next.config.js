/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: [
        'https://pocketbook.binderlab.io',
        'http://localhost:3000',
        'http://0.0.0.0:3000',
        '0.0.0.0:3000',
        'pocketbook.binderlab.io'
      ]
    }
  }
}

module.exports = nextConfig
