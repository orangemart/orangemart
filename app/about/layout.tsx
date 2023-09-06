import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Welcome to Orange, a place for learning about Bitcoin in a fun and engaging way",
	keywords: "orange, rust, server, bitcoin",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
