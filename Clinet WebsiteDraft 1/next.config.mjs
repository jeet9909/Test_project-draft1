/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Test_project-draft1",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
