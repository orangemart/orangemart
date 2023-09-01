"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./styles.module.css";
import { ILink } from "@/app/types";
import { NAV_LINKS, SOCIAL_LINKS } from "@/app/utils/constants";

import Asset from "@/app/components/Asset";
import Logo from "@/app/components/Logo";

export const MenuBtn = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className={styles.menuBtn} onClick={openMenu}>
        <Asset name="menu" size={32} color="var(--darkest)" />
      </div>

      {showMenu && (
        <div className={styles.menuModal}>
          <div className={styles.menuModalContent}>
            <div className={styles.menuModalHead}>
              <Logo />
              <div className={styles.menuBtn} onClick={closeMenu}>
                <Asset name="close" size={32} color="var(--darkest)" />
              </div>
            </div>
            <div className={styles.menuModalBody}>
              <div className={styles.menuModalLinks}>
                {NAV_LINKS.map((link: ILink) => {
                  const { id, href, label, hasDefaultTarget } = link;
                  const isActive = pathname === href;
                  const className = hasDefaultTarget
                    ? isActive
                      ? styles.menuActiveLink
                      : styles.menuLink
                    : styles.menuExternalLink;
                  const target = hasDefaultTarget ? "_self" : "_blank";

                  return (
                    <Link
                      href={href}
                      key={id}
                      className={className}
                      target={target}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
              <div className={styles.menuModalSocial}>
                {SOCIAL_LINKS.map((link: ILink) => {
                  const { id, href } = link;

                  return (
                    <Link href={href} key={id}>
                      <Asset name={id} size={28} color="var(--medium)" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBtn;
