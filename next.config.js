const withCSS = require("@zeit/next-css");

const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["static.foxbusiness.com", "a57.foxnews.com"],
	},
};

module.exports = withCSS(nextConfig);
