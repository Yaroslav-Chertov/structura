import React from "react";
import styles from "./Hero.module.scss";
import logo from "../public/logo.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/hero-logo.png"
        alt="Structura Logo"
        width={120}
        height={120}
        className={styles.logo}
        priority={true}
      />
      <h1 className={styles.title}>Structura</h1>
      <h2 className={styles.subtitle}>Из хаоса — в систему</h2>
      <p className={styles.description}>
        Планер, который помогает разложить цели по&nbsp;шагам, отслеживать
        прогресс и&nbsp;каждый день ясно понимать, на&nbsp;чём стоит
        сфокусироваться сейчас.
      </p>
      <div className={styles.buttonGroup}>
        <button className={styles.button}>Купить</button>
        <a href="#product" className={styles.buttonOutline}>
          Подробнее
        </a>
      </div>
      <div className={styles.videoWrapper}>
        <video src="/video/demo.mp4" controls className={styles.video} />
      </div>
    </section>
  );
};

export default Hero;
