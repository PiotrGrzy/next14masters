import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/organisms/Header";
import { Footer } from "@/ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "T-shirt Store",
	description: "E-commerce store for t-shirts.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={`${inter.className} flex h-screen flex-col justify-between`}>
				<Header />
				<main className="mx-auto h-full max-w-[100rem] px-2 py-8">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
