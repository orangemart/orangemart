import styles from "./styles.module.css";

import { IPostCard, IPostList } from "@/app/types";
import { PostCard } from "@/app/components/Cards";
import { DEFAULT_TOPIC } from "@/app/utils/constants";

const PostList = (props: IPostList) => {
	const { posts, activeTab } = props;

	const filteredPosts = posts.filter((post: IPostCard) => {
		if (activeTab !== DEFAULT_TOPIC) {
			const hasTopic = post.topics.includes(activeTab);
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
