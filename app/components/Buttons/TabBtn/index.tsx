"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import { ITabBtn } from "@/app/types";

export const TabBtn = (props: ITabBtn) => {
	const searchParams = useSearchParams();
	const search = searchParams.get("topic");
	const { label, href } = props;
	const isActive = search && search === label ? true : !search && label === "all topics";
	const className = isActive ? styles.tagBtnActive : styles.tabBtn;

	return (
		<Link className={className} href={href} aria-label={label} target="_self" rel="noreferrer">
			{label}
		</Link>
	);
};

export default TabBtn;
