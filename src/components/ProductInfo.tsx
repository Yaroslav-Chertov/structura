"use client";

import React from "react";
import styles from "./ProductInfo.module.scss";

const ProductInfo: React.FC = () => {
  return (
    <section id="product" className={styles.product}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.white}> Всё, что нужно </span> &mdash;
          в&nbsp;одном месте
        </h2>
        <p className={styles.text}>
          Простая система в&nbsp;Google-таблице. Собирает цели, задачи
          и&nbsp;приоритеты в&nbsp;одну структуру, показывает прогресс
          и&nbsp;помогает понимать, на&nbsp;что уходит ваше время.
        </p>
      </div>

      <div className={styles.main}>
        <div className={styles.slider}>
          <img src="/screens/screen.png" alt="Скриншот планера" />
        </div>

        <div className={styles.features}>
          <h3>Что внутри планера</h3>
          <ul>
            <li>Цели на неделю с понятными чек-листами</li>
            <li>Задачи по дням, чтобы всегда знать, что делать сегодня</li>
            <li>Наглядный прогресс дня и недели (диаграммы)</li>
            <li>Трекер привычек и дневник состояния</li>
            <li className={styles.bonus}>Бонус: Финансовый планер &#x1F4B0;</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
