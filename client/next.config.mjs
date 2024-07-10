import path from "path";

const __dirname = path.dirname("./src/styles/*");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};

export default nextConfig;
