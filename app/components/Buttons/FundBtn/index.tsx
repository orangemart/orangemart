import Link from "next/link";
import styles from "./styles.module.css";
import { ILink } from "@/app/types";

export const FundBtn = (props: ILink) => {
	const { href, label } = props;

	return (
		<Link
			className={styles.fundBtn}
			href={href}
			target="_blank"
			aria-label="contribute"
			rel="noreferrer">
			{label}
		</Link>
	);
};

export default FundBtn;
