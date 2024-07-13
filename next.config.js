/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
  
    rewrites: () => {
      return [
        {
          source: "/api/:path*",
          destination: "https://toolbar-dam-cafe-rip.trycloudflare.com/api/:path*",
        
        },
      ];
    },
  };
  
  module.exports = nextConfig;