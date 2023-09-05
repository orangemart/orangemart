// next.config.mjs
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: { className: ["anchor"] },
        },
        { behaviour: "wrap" },
      ],
      rehypeHighlight,
      rehypeCodeTitles,
    ],
  },
});

export default withMDX(nextConfig);
