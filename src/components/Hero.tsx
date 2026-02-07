"use client";

import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cloudTransform = {
    transform: `translateY(${-scrollY * 0.25}px) scale(${1 + scrollY * 0.0003})`,
  };

  return (
    <section className={styles.hero}>
      <img
        src="/clouds.png"
        alt=""
        className={styles.clouds}
        style={cloudTransform}
        aria-hidden
      />

      <Link href="/" className={styles.logoLink}>
        <Image
          src="/hero-logo.png"
          alt="Structura Logo"
          width={120}
          height={120}
          className={styles.logo}
          priority
        />
      </Link>

      <h1 className={styles.title}>Structura</h1>
      <h2 className={styles.subtitle}>Из хаоса — в систему</h2>

      <p className={styles.description}>
        Недельный планер, который наводит порядок в&nbsp;задачах, снижает
        тревогу и&nbsp;даёт ощущение реального движения вперёд к вашим целям
      </p>

      <div className={styles.price}>
        <span className={styles.current}>490 ₽</span>
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
