import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	keywords: "blog, posts, articles",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
