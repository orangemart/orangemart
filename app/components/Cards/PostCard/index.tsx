import Image from "next/image";
import { IPostCard } from "@/app/types";

import styles from "./styles.module.css";

import { LinkBtn } from "@/app/components/Buttons";

export const PostCard = (props: IPostCard) => {
	const { title, description, heroImage, slug } = props;
	const href = `/blog/${slug}`;

	return (
		<div className={styles.postCard}>
			<div className={styles.postCardContent}>
				<h3>{title}</h3>
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
