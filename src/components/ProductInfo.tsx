"use client";

import React from "react";
import styles from "./ProductInfo.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ProductInfo: React.FC = () => {
  return (
    <section id="product" className={styles.product}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Всё, что нужно для движения к&nbsp;результату&nbsp;&mdash;
          в&nbsp;одном месте
        </h2>
        <p className={styles.text}>
          Structura&nbsp;&mdash; это простая система планирования
          в&nbsp;Google-таблице. Она собирает цели, задачи и&nbsp;приоритеты
          в&nbsp;одну структуру, показывает прогресс и&nbsp;помогает понимать,
          на&nbsp;что уходит ваше время. Без хаоса, без перегруза&nbsp;&mdash;
          вы&nbsp;всегда видите, что вам важно именно сейчас и&nbsp;как шаг
          за&nbsp;шагом приближаетесь к&nbsp;результату.
        </p>
      </div>

      <div className={styles.main}>
        <div className={styles.slider}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            loop
          >
            <SwiperSlide>
              <img src="/screens/screen-1.png" alt="Скриншот планер" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/screens/screen-2.png" alt="Скриншот планер" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/screens/screen-3.png" alt="Скриншот планер" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/screens/screen-4.png" alt="Скриншот планер" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/screens/screen-5.png" alt="Скриншот планер" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.features}>
          <h3>Что есть внутри планера</h3>
          <ul>
            <li>Цели на неделю с понятными чек-листами</li>
            <li>Задачи по дням, чтобы всегда знать, что делать сегодня</li>
            <li>Наглядный прогресс дня и недели (диаграммы)</li>
            <li>Трекер привычек и продуктивности</li>
            <li>Аналитика недели и средний прогресс</li>
            <li>Дневник состояния и мыслей</li>
            <li>
              Автоматические расчёты и графики — ничего не нужно считать вручную
            </li>
            <li className={styles.bonus}>Бонус: Финансовый планер &#x1F4B0;</li>
          </ul>

          <div className={styles.price}>
            <span className={styles.current}>490 ₽</span>
            <span className={styles.old}>1 090 ₽</span>
          </div>

          <button className={styles.buyButton}>Купить планер</button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
