import Image from "next/image";
import styles from "./page.module.css";
import { PromoCard } from "@/app/components/Cards";

const AboutPage = async () => {
	return (
		<div className="wrapper">
			<div className={styles.aboutPage}>
				<div className={styles.aboutPageContent}>
					<h1>We are Orange</h1>
					<p>
						Welcome to Orange, a place for learning about Bitcoin in a fun and engaging way! Our
						objective is simple - we want to help people learn to survive and thrive with{" "}
						<a href="https://bitcoin.org/bitcoin.pdf" target="_blank">
							Bitcoin
						</a>
						.
					</p>
					<p>
						We recognize that Bitcoin is an essential tool for survival and believe a great way to
						learn about it is by playing with it. That&apos;s why we&apos;re hosting an Orange game
						server where both bitcoiners and gamers without any bitcoin experience can interact with
						each other and form a strong community.
					</p>
					<p>
						Orange hosts a server in the popular game called{" "}
						<a href="https://rust.facepunch.com/" target="_blank">
							Rust
						</a>
						, where the premise is that you have woken up on an island and the only objective is to
						survive. Orange provides opportunities for people to earn Bitcoin by taking on
						challenging tasks and proving they have done work. We also encourage a culture of peer
						to peer commerce so that through trade everyone on the island can make progress.
						Finally, every month the island is wiped. This presents a new opportunity to start fresh
						and attempt to build a thriving community.
					</p>
					<p>
						Orange is also a 24/7 meetup space! Orange can be used as a platform for people to give
						presentations on Bitcoin-related topics, or to ask questions in a more casual fireside
						setting. We&apos;re committed to sharing the knowledge and excitement of Bitcoin with
						everyone, and we believe that Orange is the perfect place to do that.
					</p>
					<p>
						Finally, we plan to capture and broadcast the entertaining content that unfolds in
						Orange to the rest of the world. We want everyone to learn from our experience, and to
						see how Bitcoin can be used in a fun and engaging way.
					</p>
					<p>
						Everyone is welcome in Orange, whether you&apos;re new or a seasoned veteran, we welcome
						anyone who wants to learn about Bitcoin and have a great time doing it. So come{" "}
						<a href="https://dsc.gg/orangemart" target="_blank">
							join us
						</a>{" "}
						in Orange - let&apos;s survive, thrive, and learn together!
					</p>
				</div>
				<div className={styles.aboutPagePanel}>
					<Image
						className="cover"
						src="/assets/flag.png"
						alt="logo"
						width={300}
						height={200}
						layout="responsive"
						priority
					/>
					<PromoCard />
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
