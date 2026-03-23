"use client";

import React, { useState } from "react";
import styles from "./Hero.module.scss";

type PaymentState = "idle" | "loading" | "waiting" | "success" | "fail";

const Hero: React.FC = () => {
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
        console.error("Нет данных от API:", data);
        setState("fail");
        return;
      }

      window.open(data.paymentUrl, "_blank");
      setState("waiting");
      startPolling(data.paymentId);
    } catch (err) {
      console.error(err);
      setState("fail");
    }
  };

  if (state === "success") {
    return (
      <section className={styles.hero}>
        <div className={styles.visualSection}>
          <div className={styles.banner}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                <span className={styles.white}>Спасибо</span> за покупку 🎉
              </h1>
              <p className={styles.description}>
                Ваш планер уже готов — нажмите кнопку ниже.
              </p>
              <div className={styles.successHint}>
                <p>1. Нажмите «Открыть планер»</p>
                <p>2. Файл → Создать копию</p>
                <p>3. Работайте в своей версии</p>
                <p>4. Добавьте в закладки, чтобы не потерять</p>
              </div>
              <div className={styles.buttonGroup}>
                <a
                  href={plannerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Открыть планер
                </a>
              </div>
            </div>
            <div className={styles.videoWrapper}>
              <img
                src="/video/demo.gif"
                alt="Демо планера"
                className={styles.video}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (state === "waiting") {
    return (
      <section className={styles.hero}>
        <div className={styles.visualSection}>
          <div className={styles.banner}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                <span className={styles.white}>Ожидаем</span> оплату...
              </h1>
              <p className={styles.description}>
                Страница оплаты открыта в&nbsp;новой вкладке. После оплаты
                планер появится здесь автоматически&nbsp;&mdash;
                не&nbsp;закрывайте эту страницу.
              </p>
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
            <div className={styles.videoWrapper}>
              <img
                src="/video/demo.gif"
                alt="Демо планера"
                className={styles.video}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (state === "fail") {
    return (
      <section className={styles.hero}>
        <div className={styles.visualSection}>
          <div className={styles.banner}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Что&#8209;то пошло{" "}
                <span className={styles.errorText}>не так</span>
              </h1>
              <p className={styles.description}>
                Не&nbsp;удалось подтвердить оплату. Если деньги
                списались&nbsp;&mdash; напишите нам, разберёмся в&nbsp;течение
                часа.
              </p>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.button}
                  onClick={() => setState("idle")}
                >
                  Попробовать снова
                </button>
                <a
                  href="mailto:structura.planer@yandex.com"
                  className={styles.buttonOutline}
                >
                  Написать нам
                </a>
              </div>
            </div>
            <div className={styles.videoWrapper}>
              <img
                src="/video/demo.gif"
                alt="Демо планера"
                className={styles.video}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <div className={styles.visualSection}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <span className={styles.white}>Недельный</span> планер
            </h1>
            <div className={styles.descriptionBlock}>
              <p className={styles.description}>
                Наводит порядок в&nbsp;задачах, снижает тревогу и&nbsp;даёт
                ощущение реального движения вперёд к вашим целям
              </p>
            </div>
            <div className={styles.videoWrapperMobile}>
              <img
                src="/video/demo.gif"
                alt="Демо планера"
                className={styles.video}
              />
            </div>
            <div className={styles.price}>
              <span className={styles.current}>490 ₽</span>
              <span className={styles.old}>1 090 ₽</span>
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={styles.button}
                onClick={handleBuy}
                disabled={state === "loading"}
              >
                {state === "loading" ? "Загружаем..." : "Получить планер"}
              </button>
              <a href="#product" className={styles.buttonOutline}>
                О планере
              </a>
            </div>
            <p className={styles.note}>
              Доступ сразу после оплаты • Работает в Google Таблицах
            </p>
          </div>
          <div className={styles.videoWrapper}>
            <img
              src="/video/demo.gif"
              alt="Демо планера"
              className={styles.video}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
