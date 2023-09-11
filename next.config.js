const nextConfig = {
    images: {
        domains: ["s3.tebi.io"],
    },
    compiler: {
        removeConsole: true,
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
