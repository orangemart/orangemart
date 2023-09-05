import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Post",
	description: "",
};

export default function PostLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
