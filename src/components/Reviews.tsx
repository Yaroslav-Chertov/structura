"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Reviews.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Review = {
  name: string;
  text: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    name: "Анна К.",
    text: "«Наконец-то появился порядок в задачах. Стало понятно, что делать каждый день, а не просто список дел без конца :)»",
    avatar: "/avatars/avatar-1.webp",
  },
  {
    name: "Игорь М.",
    text: "«Очень удобно, что это Google-таблица. Открыл с телефона, отметил прогресс, вечером посмотрел аналитику.»",
    avatar: "/avatars/avatar-2.webp",
  },
  {
    name: "Мария С.",
    text: "«Использую планер уже месяц. Ушло чувство хаоса, заметила, что появилось спокойствие.»",
    avatar: "/avatars/avatar-3.webp",
  },
  {
    name: "Дмитрий Л.",
    text: "«Понравилась структура и визуализация прогресса. Реально мотивирует не бросать цели.»",
    avatar: "/avatars/avatar-4.webp",
  },
  {
    name: "Екатерина В.",
    text: "«Планер помог навести порядок в задачах. Всё логично и без лишнего.»",
    avatar: "/avatars/avatar-5.webp",
  },
  {
    name: "Алексей Н.",
    text: "«Начинаю день с этого планера, сразу понятно, куда направлять энергию. Пушка!»",
    avatar: "/avatars/avatar-6.webp",
  },
];

const AUTOPLAY_INTERVAL = 3500;
const SWIPE_THRESHOLD = 40;

const Reviews: React.FC = () => {
  const headRef = useScrollAnimation<HTMLDivElement>();
  const gridRef = useScrollAnimation<HTMLDivElement>(0.05);

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoplay]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    startAutoplay();
  };

  const prev = () => goTo((activeIndex - 1 + reviews.length) % reviews.length);
  const next = () => goTo((activeIndex + 1) % reviews.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="reviews" className={styles.reviews}>
      <div ref={headRef} data-animate>
        <h2 className={styles.title}>Что говорят пользователи</h2>
      </div>

      <div className={styles.mobileSlider}>
        <div className={styles.sliderRow}>
          <div
            className={styles.mobileTrackWrapper}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={styles.mobileTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className={styles.mobileSlide}>
                  <div className={styles.card}>
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div ref={gridRef} data-animate className={styles.grid}>
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
