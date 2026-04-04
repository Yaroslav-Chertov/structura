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
            <li>Цели на неделю и день с чек-листами и отметкой выполнения</li>
            <li>
              Аналитика недели — выполнено задач, прогресс в %, диаграмма по
              дням
            </li>
            <li>
              Дневник состояния — сон, энергия, настроение, мысли и позитивные
              моменты
            </li>
            <li>
              Трекер привычек с автоматическим % выполнения за неделю и месяц
            </li>
            <li className={styles.bonus}>
              Бонус: Финансовый планер — считает дату достижения цели 💰
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
