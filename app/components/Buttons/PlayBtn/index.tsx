import Link from "next/link";
import styles from "./styles.module.css";
import { RUST_SERVER_IP } from "@/app/utils/constants";

export const PlayBtn = () => {
  return (
    <Link
      className={styles.playBtn}
      href={`steam://connect/${RUST_SERVER_IP}`}
      target="_blank"
      rel="noreferrer"
    >
      Play now
    </Link>
  );
};

export default PlayBtn;
