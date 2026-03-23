"use client";

import Link from "next/link";
import React from "react";
import styles from "./error.module.scss";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.code}>500</p>
        <h1 className={styles.title}>
          Что&#8209;то пошло <span className={styles.accent}>не&nbsp;так</span>
        </h1>
        <p className={styles.description}>
          На нашей стороне что&#8209;то сломалось. Уже исправляем. Попробуйте
          обновить страницу или вернитесь чуть позже.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={reset}>
            Попробовать снова
          </button>
          <Link href="/" className={styles.buttonOutline}>
            На главную
          </Link>
        </div>
        <p className={styles.note}>
          Если ошибка повторяется&nbsp;&mdash; напишите нам:{" "}
          <a href="mailto:structura.planer@yandex.com" className={styles.link}>
            structura.planer@yandex.com
          </a>
        </p>
      </div>
    </section>
  );
}
