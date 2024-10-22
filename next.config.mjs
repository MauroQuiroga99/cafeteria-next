/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "iili.io",
      },
    ],
  },
};

export default nextConfig;
