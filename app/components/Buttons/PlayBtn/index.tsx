import styles from "./styles.module.css";
import { RUST_SERVER_IP } from "@/app/utils/constants";

export const PlayBtn = () => {
  return (
    <div className={styles.buttonContainer}>
      <a
        href="https://store.steampowered.com/app/252490/Rust/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.playBtn}
      >
        Install
      </a>

      <a
        href={`steam://connect/${RUST_SERVER_IP}`}
        className={styles.playBtn}
      >
        Connect
      </a>

      <a
        href="https://discord.gg/EcvrfUnScF"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.playBtn}
      >
        Contact
      </a>
    </div>
  );
};
