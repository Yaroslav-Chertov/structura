"use client";

import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const handleBuy = async () => {
    const res = await fetch("/api/pay", {
      method: "POST",
    });

    const data = await res.json();

    window.location.href = data.confirmation.confirmation_url;
  };

  return (
    <section className={styles.hero}>
      <div className={styles.visualSection}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <span className={styles.white}>Недельный</span> планер
            </h1>

            <div className={styles.descriptionBlock}>
              <p className={styles.description}>
                Наводит порядок в&nbsp;задачах, снижает тревогу и&nbsp;даёт
                ощущение реального движения вперёд к вашим целям
              </p>
            </div>

            <div className={styles.videoWrapperMobile}>
              <img
                src="/video/demo.gif"
                alt="Демо планера"
                className={styles.video}
              />
            </div>

            <div className={styles.price}>
              <span className={styles.current}>490 ₽</span>
              <span className={styles.old}>1 090 ₽</span>
            </div>

            <p className={styles.note}>
              Доступ сразу после оплаты &bull; Работает в&nbsp;Google Таблицах
            </p>

            <div className={styles.buttonGroup}>
              <button className={styles.button} onClick={handleBuy}>
                Получить планер
              </button>
              <a href="#product" className={styles.buttonOutline}>
                О планере
              </a>
            </div>
          </div>

          <div className={styles.videoWrapper}>
            <img
              src="/video/demo.gif"
              alt="Демо планера"
              className={styles.video}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
