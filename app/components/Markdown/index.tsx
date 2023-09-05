import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PromoCard, JoinCard } from "@/app/components/Cards";

import { ISupporter } from "@/app/types";
import { getFileFromPath } from "@/app/utils/functions";
import { SUPPORTERS } from "@/app/utils/constants";

const Markdown = async ({ post }: { post: string }) => {
	const { content, frontmatter } = await getFileFromPath(post);
	const author = SUPPORTERS.find((author: ISupporter) => author.id === frontmatter?.author);

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
				<hr></hr>
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
				<hr></hr>
			</div>
			<div className={styles.markdownPanel}>
				<JoinCard />
				<PromoCard />
			</div>
		</section>
	);
};

export default Markdown;
