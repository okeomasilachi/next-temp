/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['via.placeholder.com', 'dummyimage.com'],
    },
    experimental: {
      serverActions: {
        allowedOrigins: ['localhost:3000', 'potential-barnacle-x5w47x5w559c6q65-3000.app.github.dev']
      },
      optimizePackageImports: ["@chakra-ui/react"],
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["via.placeholder.com", "dummyimage.com"],
    },
  };
  
export default nextConfig;
