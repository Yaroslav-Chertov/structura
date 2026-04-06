"use client";

import React from "react";
import styles from "./Steps.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StepsProps {
  onBuyClick: () => void;
}

const Steps: React.FC<StepsProps> = ({ onBuyClick }) => {
  const headRef = useScrollAnimation<HTMLDivElement>();
  const card1Ref = useScrollAnimation<HTMLDivElement>(0.1);
  const card2Ref = useScrollAnimation<HTMLDivElement>(0.1);
  const card3Ref = useScrollAnimation<HTMLDivElement>(0.1);
  const ctaRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.steps}>
      <div ref={headRef} data-animate>
        <h2 className={styles.title}>Всего 3&nbsp;шага</h2>
        <p className={styles.subtitle}>
          Без сложных настроек и лишних инструментов
        </p>
      </div>

      <div className={styles.grid}>
        <div ref={card1Ref} data-animate data-delay="1" className={styles.card}>
          <span className={styles.step}>01</span>
          <h3>Оставьте контакт</h3>
          <p>
            Укажите email или Telegram — мы пришлём ссылку на оплату
            в&nbsp;течение нескольких минут.
          </p>
        </div>

        <div ref={card2Ref} data-animate data-delay="2" className={styles.card}>
          <span className={styles.step}>02</span>
          <h3>Оплатите планер</h3>
          <p>
            Оплатите по ссылке — и мы сразу пришлём вам доступ
            к&nbsp;Google-таблице.
          </p>
        </div>

        <div ref={card3Ref} data-animate data-delay="3" className={styles.card}>
          <span className={styles.step}>03</span>
          <h3>Следуйте системе</h3>
          <p>
            Отмечайте выполненное и&nbsp;смотрите, как растёт прогресс. Тревога
            и&nbsp;хаос уходят, а&nbsp;фокус остаётся.
          </p>
        </div>
      </div>

      <div ref={ctaRef} data-animate className={styles.cta}>
        <button className={styles.button} onClick={onBuyClick}>
          Начать
        </button>
      </div>
    </section>
  );
};

export default Steps;
