import styles from "./page.module.css";
import PlayBtn from "./components/Buttons/PlayBtn";

export default function Home() {
  return (
    <div className="container">
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className="wrapper">
            <div className={styles.heroContent}>
              <div>Play and Earn</div>
              <div>
                <h1>Your journey starts here</h1>
                <p>
                  Learn about financial freedom in a fun and engaging way by
                  playing your favorite game RUST and earning real Bitcoin
                </p>
                <PlayBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
