import Markdown from "@/app/components/Markdown";

const PostPage = ({ params: { post } }: { params: { post: string } }) => {
	return <Markdown post={post} />;
};

export default PostPage;
