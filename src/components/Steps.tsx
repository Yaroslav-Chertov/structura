import React from "react";
import styles from "./Steps.module.scss";

const Steps: React.FC = () => {
  return (
    <section className={styles.steps}>
      <h2 className={styles.title}>
        Всего 3 шага — и цели перестают быть хаосом
      </h2>
      <p className={styles.subtitle}>
        Без сложных настроек и лишних инструментов
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.step}>01</span>
          <h3>Скопируйте планер</h3>
          <p>
            Получите готовую Google-таблицу и&nbsp;откройте
            её&nbsp;с&nbsp;любого устройства. Ничего устанавливать
            не&nbsp;нужно.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.step}>02</span>
          <h3>Запишите цели</h3>
          <p>
            Разложите задачи по&nbsp;дням и&nbsp;приоритетам&nbsp;&mdash;
            система уже продумана за вас. Без пустых листов и&nbsp;сомнений.
          </p>
        </div>

        <div className={styles.card}>
          <span className={styles.step}>03</span>
          <h3>Следуйте системе</h3>
          <p>
            Отмечайте выполненное и&nbsp;наблюдайте прогресс. Голова
            освобождается &mdash; фокус остаётся.
          </p>
        </div>
      </div>

      <div className={styles.cta}>
        <button className={styles.button}>Начать упорядочивать цели</button>
      </div>
    </section>
  );
};

export default Steps;
