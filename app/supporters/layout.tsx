import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Supporters",
	description: "Thank you! We are grateful for all the support we received from our community",
	keywords: "contribute, fund, orange, bitcoin",
};

export default function SupportersLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
