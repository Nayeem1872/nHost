/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
  
    rewrites: () => {
      return [
        {
          source: "/api/:path*",
          destination: "https://latino-wax-unfortunately-recognised.trycloudflare.com/api/:path*",
        
        },
      ];
    },
  };
  
  module.exports = nextConfig;