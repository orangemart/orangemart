import styles from "./styles.module.css";

import TableSection from "@/app/components/TableSection";

import { ITableOfContents } from "@/app/types";

export default function TableOfContents(props: ITableOfContents) {
	const { headings, path } = props;

	return (
		<div className={styles.tableOfContents}>
			<div className={styles.tableOfContentsWrapper}>
				<div className={styles.tableOfContentsTitle}>Table of contents</div>
				{headings.map((heading) => (
					<TableSection key={heading.id} heading={heading} path={path} />
				))}
			</div>
		</div>
	);
}
