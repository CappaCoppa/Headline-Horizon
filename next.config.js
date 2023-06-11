/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["static.foxbusiness.com", "a57.foxnews.com"],
	},
	reactStrictMode: true,
	webpack: (config, { defaultLoaders }) => {
		config.module.rules.push({
			test: /\.css$/,
			use: [
				defaultLoaders.babel,
				{
					loader: require.resolve("css-loader"),
					options: {
						importLoaders: 1,
						modules: {
							auto: true,
						},
					},
				},
				{
					loader: require.resolve("postcss-loader"),
					options: {
						postcssOptions: {
							plugins: ["tailwindcss", "autoprefixer"],
						},
					},
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
