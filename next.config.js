/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["static.foxbusiness.com", "a57.foxnews.com"],
  },
};

module.exports = nextConfig;
