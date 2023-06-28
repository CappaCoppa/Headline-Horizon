/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		topLevelAwait: true,
	},
	images: {
		domains: ["cdn.discordapp.com"],
	},
};

module.exports = nextConfig;
