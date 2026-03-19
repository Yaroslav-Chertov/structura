"use client";

import Link from "next/link";
import React from "react";
import styles from "./Success.module.scss";

const SuccessPage = () => {
  return (
    <section className={styles.success}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.white}>Спасибо</span> за&nbsp;покупку 🎉
          </h1>

          <p className={styles.description}>Ваш планер уже готов.</p>

          <div className={styles.steps}>
            <p>1. Откройте планер</p>
            <p>2. Нажмите &laquo;Файл &rarr; Создать копию&raquo;</p>
            <p>3. Работайте в&nbsp;своей версии</p>
            <p>
              4. Добавьте ссылку с&nbsp;планером в&nbsp;закладки, чтобы
              не&nbsp;потерять доступ
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <a
              href="https://docs.google.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Открыть планер
            </a>

            <Link href="/" className={styles.buttonOutline}>
              На главную
            </Link>
          </div>

          <p className={styles.note}>
            Если что-то пойдет не&nbsp;так, просто напишите нам на&nbsp;почту.
            Наш сотрудник (на&nbsp;фото) поможет вам.{" "}
            <a
              href="mailto:structura.planer@yandex.com"
              className={styles.email}
            >
              structura.planer@yandex.com
            </a>
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/cat.jpg" alt="Котик" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
