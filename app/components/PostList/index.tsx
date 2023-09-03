"use client";

import { useParams } from "next/navigation";
import styles from "./styles.module.css";

import { IPostCard, IPostList } from "@/app/types";
import { PostCard } from "@/app/components/Cards";

const PostList = (props: IPostList) => {
	const { tag } = useParams();
	const { posts } = props;

	const filteredPosts = posts.filter((post: IPostCard) => {
		if (tag) {
			const hasTopic = post.topics.includes(tag as string);
			if (hasTopic) {
				return post;
			}
		} else {
			return post;
		}
	});

	return (
		<div className={styles.postList}>
			{filteredPosts.length &&
				filteredPosts.map((post: IPostCard) => <PostCard key={post.slug} {...post} />)}
		</div>
	);
};

export default PostList;
