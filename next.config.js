/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
			},
		],
	},
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

module.exports = withMDX(nextConfig);
