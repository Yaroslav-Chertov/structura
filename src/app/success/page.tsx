"use client";

import Link from "next/link";
import React, { useEffect, useState, Suspense } from "react";
import styles from "./Success.module.scss";

type State = "loading" | "valid" | "invalid";

const SuccessContent = () => {
  const [state, setState] = useState<State>("loading");
  const [plannerUrl, setPlannerUrl] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("planner_token");
    if (!token) {
      setState("invalid");
      return;
    }

    let attempt = 0;
    const poll = async () => {
      attempt++;
      try {
        const res = await fetch(`/api/verify-token?token=${token}`);
        const data = await res.json();
        if (data.valid && data.plannerUrl) {
          setPlannerUrl(data.plannerUrl);
          setState("valid");
          return;
        }
      } catch {
        /* продолжаем */
      }
      if (attempt < 10) setTimeout(poll, 2000);
      else setState("invalid");
    };
    poll();
  }, []);

  if (state === "loading")
    return (
      <section className={styles.success}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <span className={styles.white}>Проверяем</span> оплату...
            </h1>
            <p className={styles.description}>Подождите пару секунд</p>
            <div className={styles.loader} />
          </div>
        </div>
      </section>
    );

  if (state === "invalid")
    return (
      <section className={styles.success}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h1 className={styles.title}>Что&#8209;то пошло не&nbsp;так</h1>
            <p className={styles.description}>
              Если вы оплатили — напишите нам, разберёмся быстро.
            </p>
            <div className={styles.buttonGroup}>
              <a
                href="mailto:structura.planer@yandex.com"
                className={styles.button}
              >
                Написать на почту
              </a>
              <Link href="/" className={styles.buttonOutline}>
                На главную
              </Link>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className={styles.success}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.white}>Спасибо</span> за&nbsp;покупку 🎉
          </h1>
          <p className={styles.description}>Ваш планер уже готов.</p>
          <div className={styles.steps}>
            <p>1. Откройте планер</p>
            <p>2. Нажмите «Файл → Создать копию»</p>
            <p>3. Работайте в&nbsp;своей версии</p>
            <p>
              4. Добавьте ссылку в&nbsp;закладки, чтобы не&nbsp;потерять доступ
            </p>
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
            <Link href="/" className={styles.buttonOutline}>
              На главную
            </Link>
          </div>
          <p className={styles.note}>
            Если что-то пойдет не&nbsp;так —{" "}
            <a
              href="mailto:structura.planer@yandex.com"
              className={styles.email}
            >
              structura.planer@yandex.com
            </a>
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/cat.jpg" alt="Котик" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
