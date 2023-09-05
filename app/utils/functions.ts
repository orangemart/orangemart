import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

import { IPostCard } from "@/app/types";

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
			content: content,
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
