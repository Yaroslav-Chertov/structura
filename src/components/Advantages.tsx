"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Advantages.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    tag: "Цели",
    title: "Цели и повседневные задачи",
    text: "Когда нужно держать под контролем большие цели и\u00a0рутину. Планер помогает разложить всё по\u00a0полочкам, видеть приоритеты и\u00a0отслеживать прогресс в\u00a0цифрах и\u00a0графиках без перегруза и\u00a0хаоса.",
    img: "/advantages/goals.webp",
    alt: "Планирование целей и задач",
  },
  {
    tag: "Обучение и развитие",
    title: "Для обучения и развития навыков",
    text: "Если вы\u00a0учите язык, осваиваете новую профессию или прокачиваете навык. Планер помогает выстроить системный процесс: ставить цели, фиксировать занятия, видеть регулярность и\u00a0не\u00a0бросать через пару недель.",
    img: "/advantages/education.webp",
    alt: "Обучение и развитие",
  },
  {
    tag: "Работа, проекты и жизнь",
    title: "Для занятых людей и фрилансеров",
    text: "Для занятых людей и\u00a0фрилансеров, у\u00a0которых \u00abслишком много всего\u00bb. Все задачи, проекты и\u00a0личные дела собраны в\u00a0одной системе\u00a0\u2014 удобно под рукой на\u00a0телефоне и\u00a0компьютере, без стресса и\u00a0ощущения постоянной гонки.",
    img: "/advantages/freelancing.webp",
    alt: "Удобно для занятых людей",
  },
];

const AUTOPLAY_INTERVAL = 5500;
const SWIPE_THRESHOLD = 40;

const Advantages: React.FC = () => {
  const headRef = useScrollAnimation<HTMLDivElement>();
  const card1Ref = useScrollAnimation<HTMLDivElement>(0.08);
  const card2Ref = useScrollAnimation<HTMLDivElement>(0.08);
  const card3Ref = useScrollAnimation<HTMLDivElement>(0.08);

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
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

  const prev = () => goTo((activeIndex - 1 + cards.length) % cards.length);
  const next = () => goTo((activeIndex + 1) % cards.length);

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

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section id="advantages" className={styles.advantages}>
      <div ref={headRef} data-animate>
        <h2 className={styles.sectionTitle}>Кому подойдёт</h2>
        <p className={styles.sectionSubtitle}>
          Если вам важно держать фокус, видеть реальный прогресс
          и&nbsp;не&nbsp;тонуть в&nbsp;задачах&nbsp;&mdash; скорее всего,
          вы&nbsp;узнаете себя ниже.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div
            key={i}
            ref={cardRefs[i]}
            data-animate
            data-delay={String(i + 1)}
            className={styles.card}
          >
            <span className={styles.tag}>{card.tag}</span>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
            <img src={card.img} alt={card.alt} className={styles.image} />
          </div>
        ))}
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
              {cards.map((card, i) => (
                <div key={i} className={styles.mobileSlide}>
                  <div className={styles.card}>
                    <span className={styles.tag}>{card.tag}</span>
                    <h3 className={styles.title}>{card.title}</h3>
                    <p className={styles.text}>{card.text}</p>
                    <img
                      src={card.img}
                      alt={card.alt}
                      className={styles.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {cards.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
