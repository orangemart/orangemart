import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

export const Logo = () => {
	return (
		<Link href="/" className={styles.logo}>
			<Image src="/img/tangerine.png" alt="logo" width={32} height={32} />
			<div>
				<span>orange</span>
				<span>mart</span>
			</div>
		</Link>
	);
};

export default Logo;
