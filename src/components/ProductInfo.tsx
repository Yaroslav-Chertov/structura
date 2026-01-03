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
          Всё для фокуса и&nbsp;результата&nbsp;&mdash; в&nbsp;одном месте
        </h2>
        <p className={styles.text}>
          Structura&nbsp;&mdash; это ваша личная система в&nbsp;формате
          Google-таблицы: все цели, сроки и&nbsp;прогресс в&nbsp;одном месте,
          с&nbsp;наглядными графиками и&nbsp;полным ощущением контроля над
          результатом.
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
              <img src="/screens/screen-1.png" alt="Цели и чеклисты" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/screens/screen-2.png" alt="Прогресс и аналитика" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/screens/screen-3.png" alt="Дневник и привычки" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.features}>
          <h3>Что входит в планер</h3>
          <ul>
            <li>Цели недели с чек-листами и приоритетами</li>
            <li>Ежедневные задачи по дням</li>
            <li>Прогресс дня и недели (диаграммы)</li>
            <li>Трекер привычек и продуктивности</li>
            <li>Аналитика недели и средний прогресс</li>
            <li>Дневник состояния и мыслей</li>
            <li>Автоматические расчёты и графики</li>
          </ul>
        </div>
      </div>

      <div className={styles.price}>
        <span className={styles.current}>790 ₽</span>
        <span className={styles.old}>1 290 ₽</span>
      </div>

      <button className={styles.buyButton}>Купить планер</button>
    </section>
  );
};

export default ProductInfo;
