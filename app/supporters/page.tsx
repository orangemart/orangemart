import styles from "./page.module.css";
import { ContributorCard, SupporterCard } from "@/app/components/Cards";
import { GEYSER_SUPPORTERS, SUPPORTERS } from "@/app/utils/constants";
import { LinkBtn } from "@/app/components/Buttons";
import { ISupporter } from "@/app/types";

const SupportersPage = () => {
	return (
		<div className={styles.supportersPage}>
			<div className="wrapper">
				<section className={styles.supportersPageHead}>
					<div className={styles.supportersPageMsg}>
						<h1>Thank you!</h1>
						<p>
							Orange is a community project. We are grateful for all the support we received from
							our community.
						</p>
						<LinkBtn
							id="contribute"
							href="https://geyser.fund/project/orange"
							label="Contribute to the project"
							hasDefaultTarget={false}
						/>
					</div>
					<div className={styles.supportersPageList}>
						{GEYSER_SUPPORTERS.map((supporter: any) => (
							<ContributorCard key={supporter.id} {...supporter} />
						))}
					</div>
				</section>
				<hr></hr>
				<section className={styles.supportersPageBody}>
					{SUPPORTERS.map((supporter: ISupporter) => (
						<SupporterCard key={supporter.id} {...supporter} />
					))}
				</section>
			</div>
		</div>
	);
};

export default SupportersPage;
