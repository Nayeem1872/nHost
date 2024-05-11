/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
  
    rewrites: () => {
      return [
        {
          source: "/api/:path*",
          destination: "http://192.168.0.110:4001/api/:path*",
        //   destination:"http://nerim.aloitconsultants.com/api/:path*"
        },
      ];
    },
  };
  
  module.exports = nextConfig;