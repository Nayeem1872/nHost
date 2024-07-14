/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
  
    rewrites: () => {
      return [
        {
          source: "/api/:path*",
          destination: "https://remote-connection.onrender.com/api/:path*",
        
        },
      ];
    },
  };
  
  module.exports = nextConfig;