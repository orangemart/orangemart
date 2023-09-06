import Image from "next/image";

import { IPostCard } from "@/app/types";
import { intlDateFormat } from "@/app/utils/functions";
import styles from "./styles.module.css";

import { LinkBtn } from "@/app/components/Buttons";

export const PostCard = (props: IPostCard) => {
	const { title, description, heroImage, slug, pubDate, readingTime } = props;
	const href = `/blog/${slug}`;
	const date = intlDateFormat(new Date(pubDate)) || "";

	return (
		<div className={styles.postCard}>
			<div className={styles.postCardContent}>
				<div>
					<h3>{title}</h3>
					<div className={styles.postCardInfo}>
						<div>{date}</div>
						<div>·</div>
						<div>{readingTime}</div>
					</div>
				</div>
				<p>{description}</p>
				<LinkBtn id={href} href={href} label="Read post" hasDefaultTarget={true} />
			</div>
			<div className={styles.postCardImage}>
				<Image
					className="cover"
					src={heroImage}
					alt={title}
					width={720}
					height={360}
					blurDataURL={heroImage}
					placeholder="blur"
				/>
			</div>
		</div>
	);
};
