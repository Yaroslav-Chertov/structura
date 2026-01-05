import React from "react";
import styles from "./Reviews.module.scss";

const reviews = [
  {
    name: "Анна К.",
    text: "Наконец-то появился порядок в задачах. Стало понятно, что делать каждый день, а не просто список дел без конца.",
  },
  {
    name: "Игорь М.",
    text: "Очень удобно, что это Google-таблица. Открыл с телефона — отметил прогресс, вечером посмотрел аналитику.",
  },
  {
    name: "Мария С.",
    text: "Использую как основной планер уже месяц. Ушло чувство хаоса, появилось спокойствие и фокус.",
  },
  {
    name: "Дмитрий Л.",
    text: "Понравилась структура и визуализация прогресса. Реально мотивирует не бросать цели.",
  },
  {
    name: "Екатерина В.",
    text: "Планер помог навести порядок не только в задачах, но и в голове. Всё логично и без лишнего.",
  },
  {
    name: "Алексей Н.",
    text: "Начинаю день с Structura — сразу понятно, куда направлять энергию. Очень зашло.",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Что говорят пользователи</h2>

      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.stars}>{"★★★★★"}</div>
            <p className={styles.text}>{review.text}</p>
            <span className={styles.author}>{review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
