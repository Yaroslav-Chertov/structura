"use client";

import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className={styles.contactUs}>
      <h2 className={styles.title}>Остались вопросы?</h2>
      <p className={styles.subtitle}>Напишите — поможем быстро.</p>
      <div className={styles.cta}>
        <a href="mailto:structura.planer@yandex.com" className={styles.button}>
          structura.planer@yandex.com
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
