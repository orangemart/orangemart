import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { IPostCard, IHeading } from "../types";

export async function getAllPosts() {
	try {
		const files = fs.readdirSync(path.join(process.cwd(), "app/data/"));

		return files.reduce((files: any, file: string) => {
			const source = fs.readFileSync(path.join(process.cwd(), "app/data/", file), "utf-8");
			const { data } = matter(source);

			return [
				{
					...data,
					slug: file.replace(".md", ""),
					readingTime: readingTime(source).text,
				},
				...files,
			];
		}, []);
	} catch (error) {
		console.error(error);
		return [];
	}
}

export function sortPostsByDate(posts: IPostCard[]) {
	return posts.sort((a: IPostCard, b: IPostCard) => {
		const aDate = new Date(a.pubDate).getTime();
		const bDate = new Date(b.pubDate).getTime();
		return bDate - aDate;
	});
}

export async function getFileFromPath(filePath: string) {
	try {
		const fileDir = path.join(process.cwd(), "app/data", `${filePath}.md`);
		const source = fs.readFileSync(fileDir);
		const { content, data } = matter(source);

		return {
			content,
			frontmatter: {
				title: data.title,
				topics: data.topics,
				author: data.author,
				description: data.description,
				pubDate: data.pubDate,
				heroImage: data.heroImage,
				readingTime: readingTime(source as any).text,
				...data,
			},
		};
	} catch (error) {
		console.error(error);

		return {
			content: "",
			frontmatter: null,
		};
	}
}

export async function getHeadings(source: any) {
	const headingLines = source.split("\n").filter((line: any) => line.match(/^###*\s/));
	const headings = headingLines.map((raw: any) => {
		const text = raw.replace(/^###*\s/, "").trim();
		const level = raw.slice(0, 3).replace(/[^#]/g, "").length;
		return { text, level } as IHeading;
	});

	return headings;
}

export async function getMdxSource(content: string) {
	try {
		const source = await serialize(content, {
			mdxOptions: {
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
		return source;
	} catch (error) {
		console.error(error);
		return null;
	}
}
