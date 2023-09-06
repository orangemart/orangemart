import styles from "./styles.module.css";
import { LinkBtn } from "@/app/components/Buttons";

export const JoinCard = () => {
	return (
		<div className={styles.joinCard}>
			<h4>Want to learn more?</h4>
			<p>
				Join our Discord server to learn more about Bitcoin and how to survive and thrive with it.
			</p>
			<LinkBtn
				id="join"
				href="https://dsc.gg/orangemart"
				label="Join Discord"
				hasDefaultTarget={false}
			/>
		</div>
	);
};
