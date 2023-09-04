import styles from "./page.module.css";
import Markdown from "@/app/components/Markdown";

const PostPage = ({ params: { post } }: { params: { post: string } }) => {
	return (
		<div className={styles.postPage}>
			<div className="wrapper">
				<Markdown post={post} />
			</div>
		</div>
	);
};

export default PostPage;
