/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'i.postimg.cc', protocol: 'https' }]
  }
};

export default nextConfig;
