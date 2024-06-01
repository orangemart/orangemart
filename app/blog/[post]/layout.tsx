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
    const previousMetadata = await parent;

    return {
      title: title || "Post",
      description: description || "",
      openGraph: {
        title: title || "Post",
        description: description || "",
        images: heroImage ? [heroImage] : previousMetadata.openGraph?.images || [],
        url: `https://www.orangem.art/blog/${post}`,
      },
      twitter: {
        card: "summary_large_image",
        title: title || "Post",
        description: description || "",
        images: heroImage ? [heroImage] : previousMetadata.twitter?.images || [],
      },
    };
  } else {
    return {
      title: "Post",
      description: "",
      openGraph: {
        title: "Post",
        description: "",
        images: [],
      },
      twitter: {
        card: "summary_large_image",
        title: "Post",
        description: "",
        images: [],
      },
    };
  }
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
