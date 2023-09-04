import styles from "./page.module.css";
import { getAllPosts, sortPostsByDate } from "@/app/utils/functions";

import { TabBtn } from "@/app/components/Buttons";
import { BLOG_TOPICS } from "@/app/utils/constants";

import PostList from "@/app/components/PostList";

const BlogPage = async () => {
	const posts = await getAllPosts();
	const sortedPosts = sortPostsByDate(posts);

	return (
		<div className="wrapper">
			<div className={styles.blogPage}>
				<h1>Posts</h1>
				<div className={styles.blogPageTopics}>
					{BLOG_TOPICS.map((tab: string) => {
						const query = tab === "all topics" ? {} : { topic: tab };
						const href = {
							pathname: "/blog",
							query: query,
						};
						return <TabBtn key={tab} href={href} label={tab} />;
					})}
				</div>
				<PostList posts={sortedPosts} />
			</div>
		</div>
	);
};

export default BlogPage;
