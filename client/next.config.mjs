import path from "path";

const __dirname = path.dirname("./src/styles/*");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(graphql|gql)/,
			loader: "graphql-tag/loader",
		});

		return config;
	},
};

export default nextConfig;
