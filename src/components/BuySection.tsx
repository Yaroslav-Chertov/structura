"use client";

import React, { useState } from "react";
import styles from "./BuySection.module.scss";

const BuySection: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/pay", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Что-то пошло не так. Попробуйте ещё раз.");
      }
    } catch {
      alert("Ошибка соединения. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="buy" className={styles.buy}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>Начните прямо сегодня</h2>

          <p className={styles.subtitle}>
            Планируйте день, отмечайте прогресс и&nbsp;наблюдайте результаты
            своих действий
          </p>
        </div>

        <div className={styles.card}>
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
              <li className={styles.bonus}>Бонус: Финансовый планер 💰</li>
            </ul>

            <div className={styles.price}>
              <span className={styles.current}>490 ₽</span>
              <span className={styles.old}>1 090 ₽</span>
            </div>

            <button
              className={styles.button}
              onClick={handleBuy}
              disabled={loading}
            >
              {loading ? "Загружаем..." : "Перейти к покупке"}
            </button>

            <p className={styles.note}>
              Доступ сразу после оплаты • Работает в Google Таблицах
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
