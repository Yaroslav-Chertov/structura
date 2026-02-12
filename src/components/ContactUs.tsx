"use client";

import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className={styles.contactUs}>
      <h2 className={styles.title}>Не нашли ответ?</h2>
      <p className={styles.subtitle}>
        Напишите нам, и мы поможем вам быстро разобраться с планером.
      </p>
      <div className={styles.cta}>
        <a href="mailto:structura.planer@yandex.com" className={styles.button}>
          Написать нам
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
