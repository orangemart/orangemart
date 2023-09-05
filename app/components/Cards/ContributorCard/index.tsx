import styles from "./styles.module.css";
import { intlNumFormat } from "@/app/utils/functions";
import { IContributor } from "@/app/types";
import Asset from "@/app/components/Asset";

export const ContributorCard = (props: IContributor) => {
	const { id, handle, value } = props;
	const color = `hsla(34, 100%, ${id + 53}%, 1)`;

	return (
		<div className={styles.contributor}>
			<div className={styles.contributorImage}>
				<Asset name="tangerine" size={24} color={color} />
				<div className={styles.contributorRank}>{id}</div>
			</div>
			<div className={styles.contributorInfo}>
				<div className={styles.contributorHandle}>{handle}</div>
				{value > 0 && <div className={styles.contributorValue}>{intlNumFormat(value)}</div>}
			</div>
		</div>
	);
};
