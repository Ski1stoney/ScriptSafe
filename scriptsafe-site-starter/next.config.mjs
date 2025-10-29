/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export' // ensures "next export" writes to /out for Netlify
};
export default nextConfig;
