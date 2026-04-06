"use client";

import React from "react";
import styles from "./ContactUs.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactUs: React.FC = () => {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className={styles.contactUs}>
      <div ref={ref} data-animate className={styles.inner}>
        <h2 className={styles.title}>Остались вопросы?</h2>
        <p className={styles.subtitle}>
          Напишите — ответим в течение нескольких часов.
        </p>
        <a href="mailto:structura.planer@yandex.com" className={styles.button}>
          structura.planer@yandex.com
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
