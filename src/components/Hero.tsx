import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/hero-logo.png"
          alt="Structura Logo"
          width={120}
          height={120}
          className={styles.logo}
          priority={true}
        />
      </Link>
      <h1 className={styles.title}>Structura</h1>
      <h2 className={styles.subtitle}>Из хаоса — в систему</h2>
      <p className={styles.description}>
        Ваш персональный планер на неделю, который превращает цели в&nbsp;чёткий
        план действий: разбивает задачи на&nbsp;шаги, отслеживает прогресс
        и&nbsp;каждый день показывает, на&nbsp;чём действительно стоит
        сосредоточиться, чтобы достигать результатов без стресса.
      </p>

      <div className={styles.price}>
        <span className={styles.current}>590 ₽</span>
        <span className={styles.old}>1 090 ₽</span>
      </div>

      <p className={styles.note}>
        Доступ сразу после оплаты • Работает в Google Таблицах
        <img
          src="/google-sheets.png"
          alt="Google Sheets"
          className={styles.googleIcon}
        />
      </p>

      <div className={styles.buttonGroup}>
        <button className={styles.button}>Купить</button>
        <a href="#product" className={styles.buttonOutline}>
          Подробнее
        </a>
      </div>
      <div className={styles.videoSection}>
        <video
          src="/video/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={styles.video}
        />
      </div>
    </section>
  );
};

export default Hero;
