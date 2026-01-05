import React from "react";
import styles from "./Advantages.module.scss";

const Advantages: React.FC = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.title}>Всегда под рукой</h3>
          <p className={styles.text}>
            Планер работает в&nbsp;мобильном приложении Google
            Таблиц&nbsp;&mdash; держите цели под контролем где угодно.
          </p>
          <img
            src="/advantages/mobile.jpg"
            alt="Удобно на телефоне"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <h3 className={styles.title}>Начинайте день с ясности</h3>
          <p className={styles.text}>
            Чёткая структура помогает планировать без стресса и фокусироваться
            на&nbsp;действительно важных задачах.
          </p>
          <img
            src="/advantages/desktop.jpg"
            alt="Удобно на компьютере"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <h3 className={styles.title}>Порядок вместо перегруза</h3>
          <p className={styles.text}>
            Ставьте цели на месяц, квартал или год, отслеживайте движение
            к&nbsp;результату и&nbsp;больше не&nbsp;теряйтесь в&nbsp;хаосе
            задач.
          </p>
          <img
            src="/advantages/focus.jpg"
            alt="Порядок и фокус"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
