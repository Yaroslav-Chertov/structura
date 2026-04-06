"use client";

import React from "react";
import styles from "./Hero.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface HeroProps {
  onBuyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBuyClick }) => {
  const contentRef = useScrollAnimation<HTMLDivElement>();
  const videoRef = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section className={styles.hero}>
      <div className={styles.visualSection}>
        <div className={styles.banner}>
          <div ref={contentRef} data-animate className={styles.content}>
            <h1 className={styles.title}>
              <span className={styles.white}>Недельный</span> планер
            </h1>
            <div className={styles.descriptionBlock}>
              <p className={styles.description}>
                Наводит порядок в&nbsp;задачах, снижает тревогу и&nbsp;даёт
                ощущение реального движения вперёд к&nbsp;вашим целям
              </p>
            </div>
            <div className={styles.videoWrapperMobile}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <video className={styles.video} autoPlay muted loop playsInline>
                <source src="/video/demo.webm" type="video/webm" />
              </video>
            </div>
            <div className={styles.price}>
              <span className={styles.current}>790&nbsp;₽</span>
              <span className={styles.old}>1&nbsp;790&nbsp;₽</span>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.button} onClick={onBuyClick}>
                Получить планер
              </button>
              <a href="#product" className={styles.buttonOutline}>
                О&nbsp;планере
              </a>
            </div>
            <p className={styles.note}>
              Доступ сразу после оплаты&nbsp;•&nbsp;Работает в Google Таблицах
            </p>
          </div>

          <div
            ref={videoRef}
            data-animate
            data-delay="2"
            className={styles.videoWrapper}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <video className={styles.video} autoPlay muted loop playsInline>
              <source src="/video/demo.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
