/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
  
    rewrites: () => {
      return [
        {
          source: "/api/:path*",
          destination: "https://disappointed-store-glory-broadband.trycloudflare.com/api/:path*",
        
        },
      ];
    },
  };
  
  module.exports = nextConfig;