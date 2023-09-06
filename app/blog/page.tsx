import styles from "./page.module.css";
import { getAllPosts, sortPostsByDate } from "@/app/utils/functions";

import { TabBtn } from "@/app/components/Buttons";
import { BLOG_TOPICS, DEFAULT_TOPIC } from "@/app/utils/constants";

import PostList from "@/app/components/PostList";

const BlogPage = async ({ searchParams }: { searchParams: any }) => {
	const posts = await getAllPosts();
	const sortedPosts = sortPostsByDate(posts);
	const activeTab = searchParams?.topic ? searchParams?.topic : DEFAULT_TOPIC;

	return (
		<div className="wrapper">
			<div className={styles.blogPage}>
				<h1>Posts</h1>
				<div className={styles.blogPageTopics}>
					{BLOG_TOPICS.map((tab: string) => {
						const query = tab === DEFAULT_TOPIC ? {} : { topic: tab };
						const isActive = Boolean(tab === activeTab);
						const href = {
							pathname: "/blog",
							query: query,
						};
						return <TabBtn key={tab} href={href} label={tab} isActive={isActive} />;
					})}
				</div>
				<PostList posts={sortedPosts} activeTab={activeTab} />
			</div>
		</div>
	);
};

export default BlogPage;
