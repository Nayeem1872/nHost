/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
  
    rewrites: () => {
      return [
        {
          source: "/api/:path*",
          destination: "https://sky-index-utilization-volvo.trycloudflare.com/api/:path*",
        
        },
      ];
    },
  };
  
  module.exports = nextConfig;