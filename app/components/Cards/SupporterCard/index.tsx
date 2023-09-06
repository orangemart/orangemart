import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { ISupporter } from "@/app/types";
import Asset from "@/app/components/Asset";

export const SupporterCard = (props: ISupporter) => {
	const { id, avatar, name, description, links } = props;
	return (
		<div className={styles.supporterCard}>
			<div className={styles.supporterCardInfo}>
				<Image src={avatar} alt={name} width={60} height={60} />
				<div>
					<h4>{name}</h4>
					<div className={styles.supporterCardLinks}>
						{links?.length &&
							links.map((link, idx) => {
								const { id, href } = link;
								return (
									<Link
										key={`${id}-${idx}`}
										href={href}
										target="_blank"
										rel="noreferrer"
										aria-label={id}>
										<Asset name={id} size={22} color="var(--medium)" />
									</Link>
								);
							})}
					</div>
				</div>
			</div>
			<p>{description}</p>
		</div>
	);
};
