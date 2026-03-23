"use client";

import Link from "next/link";
import React from "react";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>
          <span className={styles.accent}>Страница</span> потерялась
        </h1>
        <p className={styles.description}>
          Кажется, эта страница ушла планировать свою неделю и&nbsp;не
          вернулась. Зато главная&nbsp;&mdash; всегда на&nbsp;месте.
        </p>
        <Link href="/" className={styles.button}>
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}
