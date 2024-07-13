/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
  
    rewrites: () => {
      return [
        {
          source: "/api/:path*",
          destination: "https://not-notify-fishing-borough.trycloudflare.com/api/:path*",
        
        },
      ];
    },
  };
  
  module.exports = nextConfig;