import Image from "next/image";
import styles from "./page.module.css";
import { PlayBtn, LinkBtn } from "./components/Buttons";
import PostCard from "./components/PostCard";

import { IPostCard } from "./types";

export default function Home() {
	// TODO: replace dummy data with real data
	const posts: IPostCard[] = [
		{
			id: "1",
			title: "Compete to earn Bitcoin on the Orange Rust server",
			topics: ["rust", "orange", "bitcoin"],
			authors: "orangemart",
			description:
				"Find Blood in locked crates on the Orange Rust server and trade in for bitcoin at the Blood Bank.",
			pubDate: "May 11 2023",
			heroImage: "/img/orangewantsyou.jpg",
		},
		{
			id: "1s",
			title: "Orange Rust server is live",
			topics: ["rust", "orange", "bitcoin"],
			authors: "orangemart",
			description:
				"The Orange Rust server is live. Join the server and take the Bitcoin Repopulation Unit Survival Test (B.R.U.S.T)",
			pubDate: "May 11 2023",
			heroImage: "/img/twitchdrops.jpg",
		},
		{
			id: "1f",
			title: "Orange Rust server is live",
			topics: ["rust", "orange", "bitcoin"],
			authors: "orangemart",
			description:
				"The Orange Rust server is live. Join the server and take the Bitcoin Repopulation Unit Survival Test (B.R.U.S.T)",
			pubDate: "May 11 2023",
			heroImage: "/img/orangemap.jpg",
		},
	];

	return (
		<div className="container">
			<section className={styles.heroSection}>
				<div className={styles.heroBackground}>
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
				</div>
			</section>
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
							<Image
								src="/assets/flag.png"
								alt="flag"
								className="cover"
								width={400}
								height={225}
								priority
							/>
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
								return <PostCard key={post.id} {...post} />;
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
								title="YouTube video player"
								allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
