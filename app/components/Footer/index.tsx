import Link from "next/link";
import styles from "./styles.module.css";
import { ILink } from "@/app/types";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/app/utils/constants";

import Logo from "@/app/components/Logo";
import Asset from "@/app/components/Asset";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopWrapper}>
          <Logo />
          <div className={styles.footerLinks}>
            {FOOTER_LINKS.map((link) => {
              const { id, title, links } = link;

              return (
                <div key={id} className={styles.footerLinker}>
                  <div className={styles.footerLinkTitle}>{title}</div>
                  <div>
                    {links.map((link: ILink, _) => {
                      const { id, href, label, hasDefaultTarget } = link;
                      const target = hasDefaultTarget ? "_self" : "_blank";
                      return (
                        <Link key={id} href={href} target={target}>
                          <div className={styles.footerLink}>{label}</div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBotWrapper}>
          <span>@2023 All rights reserved.</span>
          <div className={styles.footerSocial}>
            {SOCIAL_LINKS.map((link: ILink) => {
              const { id, href, hasDefaultTarget } = link;
              const target = hasDefaultTarget ? "_self" : "_blank";

              return (
                <Link key={id} href={href} target={target}>
                  <Asset name={id} size={28} color="var(--darkest)" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
