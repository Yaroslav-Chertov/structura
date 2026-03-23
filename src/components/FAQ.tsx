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
      "Не закрывайте Главную страницу — иногда подтверждение оплаты занимает до минуты. Если кнопка «Открыть планер» так и не появилась, напишите нам на structura.planer@yandex.com. Укажите примерное время оплаты и/или приложите чек из вашего приложения банка и мы быстро разберёмся.",
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
      <div className={styles.list}>
        {faqs.map((item, index) => (
          <div key={index} className={styles.item}>
            <button className={styles.question} onClick={() => toggle(index)}>
              {item.question} <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={styles.answerWrapper}
              style={{
                maxHeight: openIndex === index ? "500px" : "0px",
              }}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
