/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["s3.tebi.io"],
    },
    compiler: {
        removeConsole: true,
    },
};

module.exports = nextConfig;
