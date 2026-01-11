"use client";

import React from "react";
import styles from "./BuySection.module.scss";

const BuySection: React.FC = () => {
  return (
    <section id="buy" className={styles.buy}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          Превратите цели в результат уже сегодня
        </h2>
        <p className={styles.subtitle}>
          Планируйте день, отслеживайте прогресс и&nbsp;забудьте про хаос
        </p>

        <div className={styles.features}>
          <h3>Что входит в ваш планер</h3>
          <ul>
            <li>Система постановки целей и чек-листы</li>
            <li>Планирование по дням</li>
            <li>Графики прогресса</li>
            <li>Трекер привычек</li>
            <li>Дневник состояния</li>
            <li>Аналитика недели</li>
            <li>Автоматические расчёты</li>
            <li>Работа на ПК и телефоне</li>
          </ul>
        </div>

        <div className={styles.price}>
          <span className={styles.current}>590 ₽</span>
          <span className={styles.old}>1 090 ₽</span>
        </div>

        <button className={styles.button}>Перейти к покупке</button>

        <p className={styles.note}>
          Доступ сразу после оплаты • Работает в Google Таблицах
          <img
            src="/google-sheets.png"
            alt="Google Sheets"
            className={styles.googleIcon}
          />
        </p>
      </div>
    </section>
  );
};

export default BuySection;
