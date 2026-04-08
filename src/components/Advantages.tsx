"use client";

import React from "react";
import styles from "./Advantages.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Advantages: React.FC = () => {
  const headRef = useScrollAnimation<HTMLDivElement>();
  const card1Ref = useScrollAnimation<HTMLDivElement>(0.08);
  const card2Ref = useScrollAnimation<HTMLDivElement>(0.08);
  const card3Ref = useScrollAnimation<HTMLDivElement>(0.08);

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
        <div ref={card1Ref} data-animate data-delay="1" className={styles.card}>
          <span className={styles.tag}>Цели</span>
          <h3 className={styles.title}>Цели и повседневные задачи</h3>
          <p className={styles.text}>
            Когда нужно держать под контролем большие цели и&nbsp;рутину. Планер
            помогает разложить всё по&nbsp;полочкам, видеть приоритеты
            и&nbsp;отслеживать прогресс в&nbsp;цифрах и&nbsp;графиках без
            перегруза и&nbsp;хаоса.
          </p>
          <img
            src="/advantages/goals.webp"
            alt="Планирование целей и задач"
            className={styles.image}
          />
        </div>

        <div ref={card2Ref} data-animate data-delay="2" className={styles.card}>
          <span className={styles.tag}>Обучение и развитие</span>
          <h3 className={styles.title}>Для обучения и развития навыков</h3>
          <p className={styles.text}>
            Если вы&nbsp;учите язык, осваиваете новую профессию или прокачиваете
            навык. Планер помогает выстроить системный процесс: ставить цели,
            фиксировать занятия, видеть регулярность и&nbsp;не&nbsp;бросать
            через пару недель.
          </p>
          <img
            src="/advantages/education.webp"
            alt="Обучение и развитие"
            className={styles.image}
          />
        </div>

        <div ref={card3Ref} data-animate data-delay="3" className={styles.card}>
          <span className={styles.tag}>Работа, проекты и жизнь</span>
          <h3 className={styles.title}>Для занятых людей и фрилансеров</h3>
          <p className={styles.text}>
            Для занятых людей и&nbsp;фрилансеров, у&nbsp;которых &laquo;слишком
            много всего&raquo;. Все задачи, проекты и&nbsp;личные дела собраны
            в&nbsp;одной системе&nbsp;&mdash; удобно под рукой на&nbsp;телефоне
            и&nbsp;компьютере, без стресса и&nbsp;ощущения постоянной гонки.
          </p>
          <img
            src="/advantages/freelancing.webp"
            alt="Удобно для занятых людей"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
