import React from "react";
import styles from "./Steps.module.scss";

const Steps: React.FC = () => {
  return (
    <section className={styles.steps}>
      <h2 className={styles.title}>
        Всего 3&nbsp;шага&nbsp;&mdash; и&nbsp;хаос превращается в&nbsp;порядок
      </h2>
      <p className={styles.subtitle}>
        Без сложных настроек и лишних инструментов
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.step}>01</span>
          <h3>Скопируйте планер</h3>
          <p>
            Просто откройте готовую Google-таблицу на&nbsp;телефоне или
            компьютере. Ничего устанавливать не&nbsp;нужно.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.step}>02</span>
          <h3>Запишите цели</h3>
          <p>
            Разложите задачи по&nbsp;дням и&nbsp;приоритетам&nbsp;&mdash; всё
            уже готово, чтобы не&nbsp;тратить время на&nbsp;пустые листы
            и&nbsp;сомнения.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.step}>03</span>
          <h3>Следуйте системе</h3>
          <p>
            Отмечайте выполненное и&nbsp;смотрите, как растёт прогресс. Голова
            освобождается, а&nbsp;фокус остаётся.
          </p>
        </div>
      </div>

      <div className={styles.cta}>
        <button className={styles.button}>Начать</button>
      </div>
    </section>
  );
};

export default Steps;
