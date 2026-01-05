"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./VisualBlock.module.scss";

const VisualBlock: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(
          Math.max((windowHeight - top) / windowHeight, 0),
          1
        );
        setOffset(scrollProgress * 30);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.visualBlock} ref={ref}>
      <h2 className={styles.title}>
        Все ваши цели под контролем и&nbsp;в&nbsp;одной системе&nbsp;&mdash;
        забудьте про тревогу
      </h2>
      <div
        className={styles.imageWrapper}
        style={{
          transform: `translateY(${50 - offset}px) scale(${
            0.95 + offset * 0.03
          })`,
        }}
      >
        <img src="/laptop.jpg" alt="Structura планер" />
      </div>
    </section>
  );
};

export default VisualBlock;
