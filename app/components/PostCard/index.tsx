import Image from "next/image";
import { IPostCard } from "@/app/types";

import styles from "./styles.module.css";

import { LinkBtn } from "@/app/components/Buttons";

export const PostCard = (props: IPostCard) => {
	const { title, description, pubDate, heroImage } = props;
	// TODO: replace with actual href
	const href = `/blog/article`;

	return (
		<div className={styles.postCard}>
			<div className={styles.postCardImage}>
				<Image
					className="cover"
					src={heroImage}
					alt={title}
					width={300}
					height={200}
					layout="responsive"
				/>
			</div>
			<div className={styles.postCardContent}>
				<h3>{title}</h3>
				<p>{description}</p>
				<LinkBtn id={href} href={href} label="Read More" hasDefaultTarget={true} />
			</div>
		</div>
	);
};

export default PostCard;
