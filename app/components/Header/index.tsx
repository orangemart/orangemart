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
        <Logo />
        <MenuBtn />
        <div className={styles.navLinks}>
          {NAV_LINKS.map((link: ILink) => {
            const { id, href, label, hasDefaultTarget } = link;
            const isActive = pathname === href;

            if (hasDefaultTarget) {
              return (
                <Link
                  href={href}
                  key={id}
                  className={isActive ? styles.navActiveLink : styles.navLink}
                >
                  {label}
                </Link>
              );
            } else {
              return <FundBtn {...link} />;
            }
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
