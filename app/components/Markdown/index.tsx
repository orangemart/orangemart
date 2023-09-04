import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import TableOfContents from "@/app/components/TableOfContents";

import { IAuthor } from "@/app/types";
import { getFileFromPath, getHeadings } from "@/app/utils/functions";
import { AUTHORS } from "@/app/utils/constants";

const Markdown = async ({ post }: { post: string }) => {
	const { content, frontmatter } = await getFileFromPath(post);
	const headings = await getHeadings(content);
	const author = AUTHORS.find((author: IAuthor) => author.id === frontmatter?.author);

	return (
		<section className={styles.markdown}>
			<div className={styles.markdownContent}>
				<h1>{frontmatter?.title}</h1>
				<div className={styles.markdownDetails}>
					{author?.avatar && <Image src={author?.avatar} alt="author" width={48} height={48} />}
					<div>
						<div className={styles.markdownName}>{author?.name}</div>
						<div className={styles.markdownInfo}>
							<div>{frontmatter?.pubDate}</div>
							<div>·</div>
							<div>{frontmatter?.readingTime}</div>
						</div>
					</div>
				</div>
				<div className={styles.markdownHeroImage}>
					{frontmatter?.heroImage && (
						<Image
							className="cover"
							src={frontmatter?.heroImage}
							alt={frontmatter?.title}
							width={720}
							height={360}
							blurDataURL={frontmatter?.heroImage}
							placeholder="blur"
						/>
					)}
				</div>
				<hr></hr>
				<div className={styles.markdownContentMDX}>
					<MDXRemote source={content} />
				</div>
				<div className={styles.markdownTags}>
					{frontmatter?.topics &&
						frontmatter.topics.map((topic: string, idx: number) => (
							<Link
								key={idx}
								className={styles.markdownTag}
								href={{
									pathname: "/blog",
									query: {
										topic: topic,
									},
								}}
								aria-label={topic}
								target="_self"
								rel="noreferrer">
								{topic}
							</Link>
						))}
				</div>
			</div>
			<div className={styles.markdownAside}>
				<TableOfContents headings={headings} path={post} />
			</div>
		</section>
	);
};

export default Markdown;
