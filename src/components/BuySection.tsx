"use client";

import React from "react";
import styles from "./BuySection.module.scss";

const BuySection: React.FC = () => {
  return (
    <section id="buy" className={styles.buy}>
      <div className={styles.card}>
        <h2 className={styles.title}>Начните достигать цели</h2>
        <p className={styles.subtitle}>
          Планируйте день, отмечайте прогресс и&nbsp;наблюдайте результаты своих
          действий
        </p>

        <div className={styles.features}>
          <h3>Что ждет внутри планера</h3>
          <ul>
            <li>Цели на неделю с чек-листами</li>
            <li>Задачи по дням</li>
            <li>Наглядный прогресс дня и недели</li>
            <li>Трекер привычек и продуктивности</li>
            <li>Аналитика недели и средний прогресс</li>
            <li>Дневник состояния и мыслей</li>
            <li>Автоматические расчёты и графики</li>
            <li>Работа на ПК и телефоне</li>
            <li className={styles.bonus}>Бонус: Финансовый планер &#x1F4B0;</li>
          </ul>

          <div className={styles.price}>
            <span className={styles.current}>490 ₽</span>
            <span className={styles.old}>1 090 ₽</span>
          </div>

          <button className={styles.button}>Перейти к покупке</button>

          <p className={styles.note}>
            Доступ сразу после оплаты &bull; Работает в&nbsp;Google Таблицах
            <img
              src="/google-sheets.png"
              alt="Google Sheets"
              className={styles.googleIcon}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
