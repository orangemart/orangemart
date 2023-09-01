import Image from "next/image";
import styles from "./page.module.css";
import PlayBtn from "./components/Buttons/PlayBtn";
import LinkBtn from "./components/Buttons/LinkBtn";

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
      <section className={styles.aboutSection}>
        <div className="wrapper">
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutContent}>
              <h2>We are Orange</h2>
              <p>
                Our objective is simple - we want to help people learn to
                survive and thrive with Bitcoin. We recognize that Bitcoin is an
                essential tool for survival and believe a great way to learn
                about it is by playing with it. Join our community to get
                started.
              </p>
              <LinkBtn
                id="join"
                href="https://www.youtube.com/@orangemart"
                label="Join community"
                hasDefaultTarget={false}
              />
            </div>
            <div className={styles.aboutImage}>
              <Image
                src="/assets/flag.png"
                alt="flag"
                className="cover"
                width={400}
                height={225}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.videoSection}>
        <div className="wrapper">
          <div className={styles.videoWrapper}>
            <div className={styles.videoContent}>
              <h3>
                At <span>Orange</span>
                <span></span> anyone can play and earn Bitcoin
              </h3>
              <p>
                Join the server and take the Bitcoin Repopulation Unit Survival
                Test (B.R.U.S.T)
              </p>
              <PlayBtn />
            </div>
            <div className={styles.videoImage}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/m3I9CWMRf4Y?si=mE7chiHzeWEcZCNy?controls=0&rel=0&iv_load_policy=0"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
