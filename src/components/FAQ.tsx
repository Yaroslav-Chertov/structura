"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const faqs = [
  {
    question: "Как быстро я получу доступ к планеру?",
    answer:
      "Сразу после оплаты — прямо на странице сайта появится кнопка «Открыть планер». Никаких писем ждать не нужно. Нажмите кнопку, выберите «Файл → Создать копию» и можно сразу приступать.",
  },
  {
    question: "Нужно ли устанавливать что-то дополнительно?",
    answer:
      "Нет, планер работает прямо в браузере. Всё, что требуется — Google-аккаунт (если у вас есть Gmail или YouTube, значит аккаунт уже есть).",
  },
  {
    question: "Можно ли пользоваться на телефоне?",
    answer:
      "Да, планер полностью совместим с мобильным приложением Google Таблицы. Добавляйте задачи и отмечайте прогресс прямо с телефона. Для первой настройки удобнее использовать компьютер.",
  },
  {
    question: "Оплатил, но кнопка с планером не появилась — что делать?",
    answer:
      "Не закрывайте главную страницу — иногда подтверждение оплаты занимает до минуты. Если кнопка «Открыть планер» так и не появилась, напишите нам на structura.planer@yandex.com. Укажите примерное время оплаты и мы быстро разберёмся.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <h2 className={styles.title}>Частые вопросы</h2>
      <div className={styles.list} role="list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const id = `faq-answer-${index}`;
          return (
            <div
              key={index}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              role="listitem"
            >
              <button
                className={styles.question}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={id}
              >
                <span>{item.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={id}
                className={styles.answerWrapper}
                style={{ maxHeight: isOpen ? "500px" : "0px" }}
                role="region"
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
