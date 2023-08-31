import styles from "./styles.module.css";
import { ILink } from "@/app/types";

export const FundBtn = (props: ILink) => {
  const { id, href, label } = props;

  return (
    <a
      key={id}
      className={styles.fundBtn}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
};

export default FundBtn;
