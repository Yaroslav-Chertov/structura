"use client";

import React from "react";
import styles from "./BuySection.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface BuySectionProps {
  onBuyClick: () => void;
}

const BuySection: React.FC<BuySectionProps> = ({ onBuyClick }) => {
  const headRef = useScrollAnimation<HTMLDivElement>();
  const cardRef = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="buy" className={styles.buy}>
      <div className={styles.container}>
        <div ref={headRef} data-animate className={styles.head}>
          <h2 className={styles.title}>Начните сегодня</h2>
          <p className={styles.subtitle}>
            На сайте вы смотрите интерактивное демо, а после покупки получаете
            полноценный планер в Google Таблицах.
          </p>
        </div>

        <div ref={cardRef} data-animate data-delay="1" className={styles.card}>
          <div className={styles.columns}>
            <div className={styles.featuresCol}>
              <h3>Что ждёт внутри планера</h3>
              <ul>
                <li>Цели на неделю с чек-листами</li>
                <li>Задачи по дням с чекбоксами</li>
                <li>Прогресс дня, недели и месяца</li>
                <li>Трекер привычек с % выполнения</li>
                <li>Дневник состояния и мыслей</li>
                <li className={styles.bonus}>Бонус: Финансовый планер</li>
              </ul>
            </div>

            <div className={styles.buyCol}>
              <div className={styles.price}>
                <span className={styles.current}>490&nbsp;₽</span>
                <span className={styles.old}>1&nbsp;090&nbsp;₽</span>
              </div>
              <button className={styles.button} onClick={onBuyClick}>
                Получить планер
              </button>
              <p className={styles.note}>
                Оставьте контакт — пришлём ссылку на оплату и сам планер в
                Google Таблицах&nbsp;•&nbsp;Доступ навсегда
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
