"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.scss";

const faqs = [
  {
    question: "Как быстро я получу доступ к планеру?",
    answer:
      "После оплаты на вашу почту придёт письмо со ссылкой на Google Таблицу. Откройте её и выберите «Создать копию» — можно сразу начинать работу. Внутри вы найдёте понятную инструкцию, как работать в планере.",
  },
  {
    question: "Нужно ли что-то устанавливать?",
    answer:
      "Таблица работает прямо в браузере. Для работы нужен только Google-аккаунт (если у вас есть Gmail или YouTube, то значит Google-аккаунт у вас уже есть).",
  },
  {
    question: "Можно пользоваться на телефоне?",
    answer:
      "Шаблон полностью совместим с мобильным приложением Google Таблиц. Вносите данные и отслеживайте прогресс где угодно. Для первой настройки удобнее использовать компьютер.",
  },
  {
    question: "Что делать, если письмо с таблицей не пришло?",
    answer:
      "Проверьте папки «Спам» и «Промоакции». Если письма нет, пожалуйста, напишите нам на structura.planer@yandex.com, указав e-mail, который использовался при оплате — мы поможем оперативно.",
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
