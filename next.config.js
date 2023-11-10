/** @type {import('next').NextConfig} */
const SecurityHeaders=[
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin'
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
    }
  ]
  
  module.exports={
    async headers(){
      return[
        {
          source:'/sc/:path*',
          headers:SecurityHeaders
        }
      ]
    }
  }
  
  
  const nextConfig = {
    reactStrictMode: true,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }

module.exports = nextConfig
