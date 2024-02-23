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
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
	},
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
		];
	},
};

module.exports = withMDX(nextConfig);
