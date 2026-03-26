"use client";

import React, { useState } from "react";
import styles from "./BuySection.module.scss";

type PaymentState = "idle" | "loading" | "waiting" | "success" | "fail";

const BuySection: React.FC = () => {
  const [state, setState] = useState<PaymentState>("idle");
  const [plannerUrl, setPlannerUrl] = useState("");

  const startPolling = (paymentId: string) => {
    let attempts = 0;

    const poll = async (): Promise<void> => {
      attempts++;
      try {
        const r = await fetch(`/api/verify-token?paymentId=${paymentId}`);
        const result = await r.json();
        if (result.valid && result.plannerUrl) {
          if (result.token)
            sessionStorage.setItem("planner_token", result.token);
          setPlannerUrl(result.plannerUrl);
          setState("success");
          return;
        }
      } catch {}

      if (attempts < 30) {
        setTimeout(poll, 2000);
      } else {
        setState("fail");
      }
    };

    poll();
  };

  const handleBuy = async () => {
    setState("loading");
    try {
      const res = await fetch("/api/pay", { method: "POST" });
      const data = await res.json();

      if (!data.paymentUrl || !data.paymentId) {
        setState("fail");
        return;
      }

      window.open(data.paymentUrl, "_blank");
      setState("waiting");
      startPolling(data.paymentId);
    } catch {
      setState("fail");
    }
  };

  if (state === "success") {
    return (
      <section id="buy" className={styles.buy}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 className={styles.title}>Планер уже ваш! 🎉</h2>
            <p className={styles.subtitle}>
              Нажмите кнопку ниже, чтобы открыть его
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.features}>
              <div className={styles.successHint}>
                <p>1. Нажмите «Открыть планер»</p>
                <p>2. Файл → Создать копию</p>
                <p>3. Работайте в своей версии</p>
                <p>4. Добавьте в закладки, чтобы не потерять</p>
              </div>
              <a
                href={plannerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Открыть планер
              </a>
              <p className={styles.note}>
                Доступ навсегда • Работает в Google Таблицах
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (state === "waiting") {
    return (
      <section id="buy" className={styles.buy}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 className={styles.title}>Ожидаем оплату...</h2>
            <p className={styles.subtitle}>
              Страница оплаты открыта в&nbsp;новой вкладке. После оплаты планер
              появится здесь автоматически&nbsp;&mdash; не&nbsp;закрывайте эту
              страницу.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.features}>
              <div className={styles.waitingBlock}>
                <div className={styles.spinner} />
                <p className={styles.waitingText}>
                  Проверяем статус оплаты&nbsp;&mdash; обычно это занимает
                  меньше минуты
                </p>
              </div>
              <p className={styles.note}>
                Уже оплатили, но&nbsp;ничего не&nbsp;происходит?{" "}
                <a
                  href="mailto:structura.planer@yandex.com"
                  className={styles.noteLink}
                >
                  Напишите нам
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (state === "fail") {
    return (
      <section id="buy" className={styles.buy}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 className={styles.titleError}>Что&#8209;то пошло не так</h2>
            <p className={styles.subtitle}>
              Если деньги списались&nbsp;&mdash; напишите нам, разберёмся
              в&nbsp;течение часа.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.features}>
              <div className={styles.buttonRow}>
                <button
                  className={styles.button}
                  onClick={() => setState("idle")}
                >
                  Попробовать снова
                </button>
                <a
                  href="mailto:structura.planer@yandex.com"
                  className={styles.buttonOutlineWide}
                >
                  Написать нам
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="buy" className={styles.buy}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>Начните прямо сегодня</h2>
          <p className={styles.subtitle}>
            Планируйте день, отмечайте прогресс и&nbsp;наблюдайте результаты
            своих действий
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.features}>
            <h3>Что ждет внутри планера</h3>
            <ul>
              <li>Цели на неделю с чек-листами</li>
              <li>Задачи по дням</li>
              <li>Наглядный прогресс дня и недели</li>
              <li>Трекер привычек и продуктивности</li>
              <li>Аналитика недели и средний прогресс</li>
              <li>Дневник состояния и мыслей</li>
              <li>Автоматические расчёты и графики</li>
              <li>Работа на ПК и телефоне</li>
              <li className={styles.bonus}>Бонус: Финансовый планер</li>
            </ul>
            <div className={styles.price}>
              <span className={styles.current}>490 ₽</span>
              <span className={styles.old}>1 090 ₽</span>
            </div>
            <button
              className={styles.button}
              onClick={handleBuy}
              disabled={state === "loading"}
            >
              {state === "loading" ? "Загружаем..." : "Перейти к покупке"}
            </button>
            <p className={styles.note}>
              Доступ сразу после оплаты • Работает в Google Таблицах
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
