import styles from "./styles.module.css";
import { PlayBtn } from "@/app/components/Buttons";

export const PromoCard = () => {
	return (
		<div className={styles.promoCard}>
			<div>
				<span>Love playing RUST?</span>
				<p>Join the Orange server and play your favorite game</p>
			</div>
			<PlayBtn />
		</div>
	);
};

export default PromoCard;
