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
  const screenRef = useScrollAnimation<HTMLDivElement>(0.08);

  return (
    <section id="buy" className={styles.buy}>
      <div className={styles.container}>
        <div ref={headRef} data-animate className={styles.head}>
          <h2 className={styles.title}>Начните прямо сегодня</h2>
          <p className={styles.subtitle}>
            Планируйте день, отмечайте прогресс и&nbsp;наблюдайте результаты
            своих действий
          </p>
        </div>

        <div className={styles.main}>
          <div
            ref={cardRef}
            data-animate
            data-delay="1"
            className={styles.card}
          >
            <div className={styles.features}>
              <h3>Что ждёт внутри планера</h3>
              <ul>
                <li>Цели на неделю с чек-листами</li>
                <li>Задачи по дням с чекбоксами</li>
                <li>Прогресс дня, недели и месяца</li>
                <li>Трекер привычек с % выполнения</li>
                <li>Дневник состояния и мыслей</li>
                <li className={styles.bonus}>Бонус: Финансовый планер 💰</li>
              </ul>
              <div className={styles.price}>
                <span className={styles.current}>790&nbsp;₽</span>
                <span className={styles.old}>1&nbsp;790&nbsp;₽</span>
              </div>
              <button className={styles.button} onClick={onBuyClick}>
                Получить планер
              </button>
              <p className={styles.note}>
                Оставьте контакт — пришлём ссылку на оплату&nbsp;•&nbsp;Доступ
                навсегда
              </p>
            </div>
          </div>

          <div
            ref={screenRef}
            data-animate
            data-delay="2"
            className={styles.screenWrapper}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/screen.png"
              alt="Скриншот планера Structura"
              className={styles.screenImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
