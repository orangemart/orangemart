"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";
import { ILink } from "@/app/types";
import { NAV_LINKS } from "@/app/utils/constants";

import Logo from "@/app/components/Logo";
import { FundBtn, MenuBtn } from "@/app/components/Buttons";

const Header = () => {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<nav>
				<div className={styles.headerLogo}>
					<Logo />
				</div>
				<div className={styles.headerLinks}>
					{NAV_LINKS.map((link: ILink) => {
						const { id, href, label, hasDefaultTarget } = link;
						const isActive = pathname === href;
						const className = isActive ? styles.navActiveLink : styles.navLink;

						if (hasDefaultTarget) {
							return (
								<Link key={id} href={href} className={className}>
									{label}
								</Link>
							);
						} else {
							return <FundBtn key={id} {...link} />;
						}
					})}
				</div>
				<MenuBtn />
			</nav>
		</header>
	);
};

export default Header;
