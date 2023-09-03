import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description: "",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return <main className="main">{children}</main>;
}
