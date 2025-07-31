import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://orangem.art/"),
	title: "Orange",
	description:
		"Learn about financial freedom in a fun and engaging way by playing your favorite game RUST and earning real Bitcoin",
	keywords: "orange, rust, server, bitcoin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<main className="main">{children}</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
