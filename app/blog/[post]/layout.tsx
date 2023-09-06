import type { Metadata, ResolvingMetadata } from "next";
import { getFileFromPath } from "@/app/utils/functions";

type Props = {
	params: { post: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const post = params.post;
	const blogPost = await getFileFromPath(post);
	const { frontmatter } = blogPost;

	if (frontmatter) {
		const { title, description, heroImage } = frontmatter;
		const previousImages = (await parent).openGraph?.images || [];

		return {
			title: title || "Post",
			description: description || "",
			openGraph: {
				images: [heroImage, ...previousImages],
			},
		};
	} else {
		return {
			title: "Post",
			description: "",
			openGraph: {
				images: [],
			},
		};
	}
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
