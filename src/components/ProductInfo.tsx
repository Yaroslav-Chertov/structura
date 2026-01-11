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
          Всё для достижения вашего результата в&nbsp;одном месте
        </h2>
        <p className={styles.text}>
          Structura&nbsp;&mdash; это личная система планирования в&nbsp;формате
          Google-таблицы, которая превращает хаос задач в&nbsp;чёткий план
          действий. Все цели, приоритеты и&nbsp;прогресс собраны в&nbsp;одном
          месте, автоматически считаются и&nbsp;отображаются в&nbsp;наглядных
          графиках. Вы&nbsp;в&nbsp;любой момент видите, куда уходит время, что
          действительно важно сейчас и&nbsp;как вы&nbsp;двигаетесь
          к&nbsp;результату&nbsp;&mdash; спокойно, структурно и&nbsp;под полным
          контролем.
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
          </Swiper>
        </div>

        <div className={styles.features}>
          <h3>Что входит в планер</h3>
          <ul>
            <li>Цели недели с чек-листами</li>
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
        <span className={styles.current}>590 ₽</span>
        <span className={styles.old}>1 090 ₽</span>
      </div>

      <button className={styles.buyButton}>Купить планер</button>
    </section>
  );
};

export default ProductInfo;
