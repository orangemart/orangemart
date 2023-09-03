import styles from "../page.module.css";
import { getAllPosts, sortPostsByDate } from "@/app/utils/functions";

import { TagBtn } from "@/app/components/Buttons";
import { BLOG_TAGS } from "@/app/utils/constants";

import PostList from "@/app/components/PostList";

const BlogTagPage = async () => {
	const posts = await getAllPosts();
	const sortedPosts = sortPostsByDate(posts);

	return (
		<div className="wrapper">
			<div className={styles.blogPage}>
				<h1>Posts</h1>
				<div className={styles.blogPageTopics}>
					{BLOG_TAGS.map((tag: string) => {
						const href = tag === "all topics" ? "/blog" : `/blog/${tag}`;
						return <TagBtn key={tag} href={href} label={tag} />;
					})}
				</div>
				<PostList posts={sortedPosts} />
			</div>
		</div>
	);
};

export default BlogTagPage;
