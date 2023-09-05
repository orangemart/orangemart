"use client";

import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";

import { IPostCard, IPostList } from "@/app/types";
import { PostCard } from "@/app/components/Cards";

const PostList = (props: IPostList) => {
	const searchParams = useSearchParams();
	const search = searchParams.get("topic");
	const { posts } = props;

	const filteredPosts = posts.filter((post: IPostCard) => {
		if (search) {
			const hasTopic = post.topics.includes(search as string);
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
