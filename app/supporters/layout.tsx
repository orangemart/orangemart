import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Supporters",
	description: "",
};

export default function SupportersLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
