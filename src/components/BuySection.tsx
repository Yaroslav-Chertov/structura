"use client";

import React from "react";
import styles from "./BuySection.module.scss";

const BuySection: React.FC = () => {
  return (
    <section id="buy" className={styles.buy}>
      <div className={styles.card}>
        <h2 className={styles.title}>Готовы навести порядок в целях?</h2>
        <p className={styles.subtitle}>
          Получите Structura и начните управлять своим фокусом уже сегодня
        </p>

        <div className={styles.price}>
          <span className={styles.current}>790 ₽</span>
          <span className={styles.old}>1 290 ₽</span>
        </div>

        <div className={styles.features}>
          <h3>Что входит в ваш планер</h3>
          <ul>
            <li>Система постановки целей</li>
            <li>Подцели и чек-листы</li>
            <li>Планирование по дням</li>
            <li>Таймлайн и сроки</li>
            <li>Графики прогресса</li>
            <li>Трекер привычек</li>
            <li>Дневник состояния</li>
            <li>Аналитика недели</li>
            <li>Автоматические расчёты</li>
            <li>Работа на ПК и телефоне</li>
          </ul>
        </div>

        <button className={styles.button}>Перейти к покупке</button>

        <p className={styles.note}>
          Доступ сразу после оплаты • Работает в Google Таблицах
        </p>
      </div>
    </section>
  );
};

export default BuySection;
