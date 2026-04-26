"use client";

import React from "react";
import PlannerDemo from "@/components/PlannerDemo/PlannerDemo";
import styles from "./Hero.module.scss";

interface HeroProps {
  onBuyClick: () => void;
}

export default function Hero({ onBuyClick }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>
          <span className={styles.white}>Недельный</span> планер
        </h1>
        <p className={styles.description}>
          Планер в Google Таблицах, который помогает держать задачи, привычки и
          цели в одном понятном ритме без перегруза.
        </p>
        <div className={styles.rightCol}>
          <div className={styles.price}>
            <span className={styles.current}>490 ₽</span>
            <span className={styles.old}>1 090 ₽</span>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.button} onClick={onBuyClick}>
              Получить планер
            </button>
            <a href="#product" className={styles.buttonOutline}>
              О планере
            </a>
          </div>
        </div>
      </div>

      <div className={styles.demoBlock}>
        <div className={styles.demoLabel}>✦ Интерактивное демо</div>
        <div className={styles.demoViewport}>
          <PlannerDemo />
        </div>
      </div>
    </section>
  );
}
