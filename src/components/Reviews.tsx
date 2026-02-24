import React from "react";
import styles from "./Reviews.module.scss";

const reviews = [
  {
    name: "Анна К.",
    text: "Наконец-то появился порядок в задачах. Стало понятно, что делать каждый день, а не просто список дел без конца.",
    avatar: "/avatars/avatar-1.png",
  },
  {
    name: "Игорь М.",
    text: "Очень удобно, что это Google-таблица. Открыл с телефона, отметил прогресс, вечером посмотрел аналитику.",
    avatar: "/avatars/avatar-2.png",
  },
  {
    name: "Мария С.",
    text: "Использую как основной планер уже месяц. Ушло чувство хаоса, заметила, что появилось спокойствие.",
    avatar: "/avatars/avatar-3.png",
  },
  {
    name: "Дмитрий Л.",
    text: "Понравилась структура и визуализация прогресса. Реально мотивирует не бросать цели.",
    avatar: "/avatars/avatar-4.png",
  },
  {
    name: "Екатерина В.",
    text: "Планер помог навести порядок не только в задачах, но и в голове. Всё логично и без лишнего.",
    avatar: "/avatars/avatar-5.png",
  },
  {
    name: "Алексей Н.",
    text: "Начинаю день с этого планера — сразу понятно, куда направлять энергию. Очень зашло.",
    avatar: "/avatars/avatar-6.png",
  },
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className={styles.reviews}>
      <h2 className={styles.title}>Что говорят пользователи</h2>

      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <img
                src={review.avatar}
                alt={review.name}
                className={styles.avatar}
              />

              <div className={styles.meta}>
                <span className={styles.author}>{review.name}</span>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>

            <p className={styles.text}>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
