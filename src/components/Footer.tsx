"use client";

import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.info}>
          <p>Самозанятая Чертова Г. В.</p>
          <p>ИНН 123456789100</p>
          <p>г. Санкт-Петербург</p>
          <p>
            Email:{" "}
            <a href="mailto:structura_planer@gmail.com">
              structura_planer@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.links}>
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
      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
