import Link from "next/link";
import styles from "./styles.module.css";
import { ILink } from "@/app/types";
import Asset from "@/app/components/Asset";

export const LinkBtn = (props: ILink) => {
	const { href, label, hasDefaultTarget } = props;
	const target = hasDefaultTarget ? "_self" : "_blank";

	return (
		<Link className={styles.linkBtn} href={href} target={target} rel="noreferrer">
			{label}
			<Asset name="arrow-right" size={20} color="var(--darkest)" />
		</Link>
	);
};

export default LinkBtn;
