"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import styles from "./styles.module.css";
import { ITagBtn } from "@/app/types";

export const TagBtn = (props: ITagBtn) => {
	const { tag } = useParams();
	const { label, href } = props;
	const isActive = tag && tag === label ? true : !tag && label === "all topics";
	const className = isActive ? styles.tagBtnActive : styles.tagBtn;

	return (
		<Link className={className} href={href} aria-label={label} target="_self" rel="noreferrer">
			{label}
		</Link>
	);
};

export default TagBtn;
