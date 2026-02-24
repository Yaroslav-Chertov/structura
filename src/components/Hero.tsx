"use client";

import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.visualSection}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h1 className={styles.title}>Из хаоса — в систему</h1>

            <div className={styles.descriptionBlock}>
              <p className={styles.description}>
                Недельный планер, который наводит порядок в&nbsp;задачах,
                снижает тревогу и&nbsp;даёт ощущение реального движения вперёд к
                вашим целям
              </p>
            </div>

            <div className={styles.videoWrapperMobile}>
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
                О планере
              </a>
            </div>
          </div>

          <div className={styles.videoWrapper}>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
