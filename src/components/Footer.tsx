"use client";

import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
<footer className={styles.footer}>
  <div className={styles.top}>
    <div className={styles.info}>
      <p className={styles.heading}>Реквизиты</p>
      <p>Самозанятая Чертова Г. В.</p>
      <p>ИНН 720415928447</p>
      <p>г. Санкт-Петербург</p>
      <p>
        <a href="mailto:structura.planer@yandex.com">
          structura.planer@yandex.com
        </a>
      </p>
    </div>

    <div className={styles.links}>
      <p className={styles.heading}>Документы</p>
      <a href="/offer" target="_blank" rel="noopener noreferrer">
        Публичная оферта
      </a>
      <a href="/privacy" target="_blank" rel="noopener noreferrer">
        Политика конфиденциальности
      </a>
      <a href="/consent" target="_blank" rel="noopener noreferrer">
        Согласие на обработку персональных данных
      </a>
    </div>
  </div>

  <div className={styles.bottom}>
    <div className={styles.copy}>
      © {new Date().getFullYear()} Все права защищены
    </div>

    <div className={styles.developer}>
      Разработка —
      <a
        href="https://github.com/Yaroslav-Chertov"
        target="_blank"
        rel="noopener noreferrer"
      >
        Yaroslav Chertov
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
