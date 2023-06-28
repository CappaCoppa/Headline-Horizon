/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		topLevelAwait: true,
	},
	images: {
		domains: [
			"cdn.discordapp.com",
			"static.foxbusiness.com",
			"a57.foxnews.com",
		],
	},
};

module.exports = nextConfig;
