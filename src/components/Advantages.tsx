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
            Таблиц&nbsp;&mdash; проверяйте задачи, отмечайте прогресс
            и&nbsp;держите цели под контролем где угодно: в&nbsp;дороге,
            на&nbsp;встрече или между делами.
          </p>
          <img
            src="/advantages/mobile.png"
            alt="Удобно на телефоне"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <h3 className={styles.title}>Начинайте день с ясности</h3>
          <p className={styles.text}>
            Откройте планер на&nbsp;компьютере или ноутбуке и&nbsp;сразу видьте
            приоритеты дня. Чёткая структура помогает планировать без стресса и
            фокусироваться на&nbsp;действительно важных задачах.
          </p>
          <img
            src="/advantages/desktop.png"
            alt="Удобно на компьютере"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <h3 className={styles.title}>Порядок вместо перегруза</h3>
          <p className={styles.text}>
            Держите разум и&nbsp;цифровое пространство чистыми. Ставьте цели на
            месяц, квартал или год, отслеживайте движение к&nbsp;результату
            и&nbsp;больше не&nbsp;теряйтесь в&nbsp;хаосе задач.
          </p>
          <img
            src="/advantages/focus.png"
            alt="Порядок и фокус"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
