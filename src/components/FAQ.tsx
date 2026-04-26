"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Как быстро я получу доступ к планеру?",
    answer:
      "После того как вы оставите контакт, мы пришлём ссылку на оплату. Как только получим подтверждение оплаты — сразу отправим ссылку на Google Таблицу. Обычно это занимает не больше нескольких часов.",
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
    question: "Как происходит оплата?",
    answer:
      "Вы оставляете email или Telegram, мы присылаем персональную ссылку на оплату через ЮКассу. После подтверждения оплаты вы получаете ссылку на планер. Всё просто и безопасно.",
  },
  {
    question: "Что если я не получил ссылку на планер?",
    answer:
      "Проверьте папки «Спам» и «Промоакции», если ждёте письмо. Если доступ так и не пришёл — напишите нам на structura.planer@yandex.com, указав способ связи и примерное время оплаты. Мы разберёмся быстро.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const headRef = useScrollAnimation<HTMLDivElement>();
  const listRef = useScrollAnimation<HTMLDivElement>(0.05);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div ref={headRef} data-animate>
        <h2 className={styles.title}>Частые вопросы</h2>
      </div>
      <div
        ref={listRef}
        data-animate
        data-delay="1"
        className={styles.list}
        role="list"
      >
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
