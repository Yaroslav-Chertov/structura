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
        Преврати хаос целей в ясный, управляемый план: подцели, чеклисты,
        таймлайн и прогресс, чтобы каждая задача была видимой, достижимой и ты
        всегда знал, что делать сегодня.
      </p>
      <button className={styles.button}>Подробнее</button>
      <div className={styles.videoWrapper}>
        <video src="/video/demo.mp4" controls className={styles.video} />
      </div>
    </section>
  );
};

export default Hero;
