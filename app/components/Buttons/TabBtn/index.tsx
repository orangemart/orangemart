"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { ITabBtn } from "@/app/types";

export const TabBtn = (props: ITabBtn) => {
	const { label, href, isActive } = props;
	const className = isActive ? styles.tagBtnActive : styles.tabBtn;

	return (
		<Link className={className} href={href} aria-label={label} target="_self" rel="noreferrer">
			{label}
		</Link>
	);
};

export default TabBtn;
