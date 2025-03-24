/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true }, // Required for static export
    compress: true, // Enable gzip compression
    trailingSlash: true, // (Optional) Ensures static URLs end with /
    reactStrictMode: true, // (Optional) Improves debugging
  };
  
  export default nextConfig;
