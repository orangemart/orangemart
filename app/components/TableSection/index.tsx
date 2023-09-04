import styles from "./styles.module.css";
import { ITableSection } from "@/app/types";

export default function TableSection(props: ITableSection) {
	const { heading, path } = props;

	return (
		<div className={`${styles.tableSection}`}>
			<li value={heading.level}>
				<a target="_self">{heading.text}</a>
			</li>
		</div>
	);
}
