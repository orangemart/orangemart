import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";

import { IPostCard } from "../types";

export async function getAllPosts() {
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
}

export function sortPostsByDate(posts: IPostCard[]) {
	return posts.sort((a: IPostCard, b: IPostCard) => {
		const aDate = new Date(a.pubDate).getTime();
		const bDate = new Date(b.pubDate).getTime();
		return bDate - aDate;
	});
}
