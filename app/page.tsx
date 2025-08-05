import Image from "next/image";
import styles from "./page.module.css";
import { PlayBtn, LinkBtn } from "./components/Buttons";
import { PostCard } from "@/app/components/Cards";
import { IPostCard } from "./types";
import { getAllPosts, sortPostsByDate } from "@/app/utils/functions";

const HomePage = async () => {
	const data = await getAllPosts();
	const posts = sortPostsByDate(data).slice(0, 3);

	return (
		<>
			{/* HERO section full-width */}
			<section className={styles.heroSection}>
				<div className={styles.heroBackground}>
					<Image
						src="/img/hero.png"
						alt="background"
						className="cover"
						blurDataURL="/img/hero.png"
						placeholder="blur"
						fill
						priority
					/>
				</div>
				<div className="wrapper">
					<div className={styles.heroContent}>
						<div>Play and Earn</div>
						<div>
							<h1>Your journey starts here</h1>
							<p>
								Learn about financial freedom in a fun and engaging way by playing your favorite
								game RUST and earning real Bitcoin
							</p>
							<PlayBtn />
						</div>
					</div>
				</div>
			</section>

			{/* All other content wrapped in layout container */}
			<div className="w-full max-w-[1280px] mx-auto px-4">
				<section className={styles.aboutSection}>
					<div className="wrapper">
						<div className={styles.aboutWrapper}>
							<div className={styles.aboutContent}>
								<h2>We are Orange</h2>
								<p>
									Our objective is simple - we want to help people learn to survive and thrive with
									Bitcoin. We recognize that Bitcoin is an essential tool for survival and believe a
									great way to learn about it is by playing with it. Join our community to get
									started.
								</p>
								<LinkBtn
									id="join"
									href="https://dsc.gg/orangemart"
									label="Join community"
									hasDefaultTarget={false}
								/>
							</div>
							<div className={styles.aboutImage}>
								<Image src="/img/flag.png" alt="flag" className="cover" width={400} height={225} />
							</div>
						</div>
					</div>
				</section>
				<section className={styles.postsSection}>
					<div className="wrapper">
						<div className={styles.postsWrapper}>
							<div className={styles.postsHead}>
								<h2>Latest posts</h2>
								<LinkBtn id="posts" href="/blog" label="View all" hasDefaultTarget={true} />
							</div>
							<div className={styles.postsBody}>
								{posts.map((post: IPostCard) => {
									return <PostCard key={post.slug} {...post} />;
								})}
							</div>
						</div>
					</div>
				</section>
				<section className={styles.videoSection}>
					<div className="wrapper">
						<div className={styles.videoWrapper}>
							<div className={styles.videoContent}>
								<h2>
									At <span>Orange</span>
									<span></span> anyone can play and earn Bitcoin
								</h2>
								<p>
									Join the server and take the Bitcoin Repopulation Unit Survival Test (B.R.U.S.T)
								</p>
								<PlayBtn />
							</div>
							<div className={styles.videoImage}>
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/m3I9CWMRf4Y?si=mE7chiHzeWEcZCNy?controls=0&rel=0&iv_load_policy=0"
									title="Welcome to Orange"
									allowFullScreen></iframe>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default HomePage;
