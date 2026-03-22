"use client";

import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";

declare global {
  interface Window {
    YooMoneyCheckoutWidget: new (config: {
      confirmation_token: string;
      error_callback: (error: unknown) => void;
    }) => {
      on: (event: string, cb: () => void) => void;
      render: (containerId: string) => Promise<void>;
      destroy: () => void;
    };
  }
}

type PaymentState =
  | "idle"
  | "loading"
  | "widget"
  | "checking"
  | "success"
  | "fail";

const Hero: React.FC = () => {
  const [state, setState] = useState<PaymentState>("idle");
  const [plannerUrl, setPlannerUrl] = useState("");

  useEffect(() => {
    const existing = document.getElementById("yookassa-widget-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "yookassa-widget-script";
    script.src = "https://yookassa.ru/checkout-widget/v1/checkout-widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleBuy = async () => {
    setState("loading");
    try {
      const res = await fetch("/api/pay", { method: "POST" });
      const data = await res.json();

      if (!data.confirmationToken || !data.paymentId) {
        setState("fail");
        return;
      }

      setState("widget");

      const checkout = new window.YooMoneyCheckoutWidget({
        confirmation_token: data.confirmationToken,
        error_callback: (error) => {
          console.error("Ошибка виджета:", error);
          setState("fail");
        },
      });

      checkout.on("success", async () => {
        checkout.destroy();
        setState("checking");

        const paymentId = data.paymentId;
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

          if (attempts < 15) {
            setTimeout(poll, 2000);
          } else {
            setState("fail");
          }
        };

        await poll();
      });

      checkout.on("fail", () => {
        checkout.destroy();
        setState("idle");
      });

      await checkout.render("payment-form-hero");
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
              <p className={styles.note}>Ваш планер уже готов!</p>
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
              <p
                className={styles.note}
                style={{ marginTop: "1rem", fontSize: "0.85em", opacity: 0.7 }}
              >
                Сохраните ссылку в закладки — доступ навсегда
              </p>
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
            <p className={styles.note}>
              Доступ сразу после оплаты &bull; Работает в&nbsp;Google Таблицах
            </p>

            {state === "checking" && (
              <p className={styles.note} style={{ marginTop: "1rem" }}>
                Проверяем оплату...
              </p>
            )}
            {state === "fail" && (
              <p
                className={styles.note}
                style={{ marginTop: "1rem", color: "#e53e3e" }}
              >
                Что-то пошло не так.{" "}
                <a href="mailto:structura.planer@yandex.com">Напишите нам</a>
              </p>
            )}

            {state !== "widget" && state !== "checking" && (
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
            )}
          </div>

          <div className={styles.videoWrapper}>
            <img
              src="/video/demo.gif"
              alt="Демо планера"
              className={styles.video}
            />
          </div>
        </div>

        {state === "widget" && (
          <div
            id="payment-form-hero"
            style={{
              maxWidth: "600px",
              margin: "2rem auto",
              padding: "0 1rem",
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
