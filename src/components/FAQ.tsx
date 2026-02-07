"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const faqs = [
  {
    question: "Как быстро я смогу начать работать с планером?",
    answer:
      "После оплаты на вашу почту придёт письмо с ссылкой на Google Таблицу. Просто откройте её и выберите «Создать копию» — можно сразу приступать к планированию. В таблице есть пошаговая инструкция для удобного старта.",
  },
  {
    question: "Нужно ли устанавливать что-то дополнительно?",
    answer:
      "Нет, планер работает прямо в браузере. Всё, что требуется — Google-аккаунт (если у вас есть Gmail или YouTube, аккаунт уже есть).",
  },
  {
    question: "Можно ли пользоваться на телефоне?",
    answer:
      "Да, шаблон полностью совместим с мобильным приложением Google Таблицы. Добавляйте задачи и отмечайте прогресс прямо с телефона. Для первой настройки удобнее использовать компьютер.",
  },
  {
    question: "Письмо с таблицей не пришло — что делать?",
    answer:
      "Проверьте папки «Спам» и «Промоакции». Если письма нет, пожалуйста, напишите нам на structura.planer@yandex.com, указав e-mail, который использовался при оплате. Мы быстро поможем решить вопрос.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>Часто задаваемые вопросы</h2>
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
