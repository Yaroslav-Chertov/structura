"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./OrderModal.module.scss";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ContactType = "email" | "telegram";
type Status = "idle" | "loading" | "success" | "error";

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [contactType, setContactType] = useState<ContactType>("email");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const validate = (): string => {
    const val = contact.trim();
    if (!val) return "Заполните это поле";
    if (contactType === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
        return "Введите корректный email";
    }
    if (contactType === "telegram") {
      const cleaned = val.replace(/^@/, "");
      if (!/^[a-zA-Z0-9_]{3,32}$/.test(cleaned))
        return "Введите корректный username (например, @username)";
    }
    return "";
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: contact.trim(), contactType }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Что-то пошло не так. Попробуйте ещё раз.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Нет соединения. Попробуйте ещё раз.");
      setStatus("error");
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleTypeChange = (type: ContactType) => {
    setContactType(type);
    setContact("");
    setErrorMsg("");
    setTimeout(() => inputRef.current?.focus(), 40);
  };

  const handleClose = () => {
    onClose();
    // Reset after close animation
    setTimeout(() => {
      setStatus("idle");
      setContact("");
      setErrorMsg("");
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Форма заказа планера"
    >
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Закрыть"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M14 4L4 14M4 4l10 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === "success" ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle
                  cx="24"
                  cy="24"
                  r="24"
                  fill="#d4f06b"
                  fillOpacity="0.12"
                />
                <path
                  d="M14 24l7 7 13-13"
                  stroke="#d4f06b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={styles.successTitle}>Заявка принята!</h3>
            <p className={styles.successText}>
              Мы получили ваш контакт и в ближайшее время отправим ссылку на
              оплату. После подтверждения — пришлём доступ к планеру.
            </p>
            <p className={styles.successNote}>
              Если не получите ответ в течение нескольких часов — напишите на{" "}
              <a href="mailto:structura.planer@yandex.com">
                structura.planer@yandex.com
              </a>
            </p>
            <button className={styles.successBtn} onClick={handleClose}>
              Отлично, жду!
            </button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <h3 className={styles.title}>Получить планер</h3>
              <p className={styles.subtitle}>
                Оставьте контакт — мы пришлём ссылку на оплату, а после
                подтверждения&nbsp;— доступ к&nbsp;планеру
              </p>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.price}>490&nbsp;₽</span>
              <span className={styles.priceOld}>1&nbsp;090&nbsp;₽</span>
              <span className={styles.priceBadge}>−55%</span>
            </div>

            <div className={styles.tabs} role="tablist">
              <button
                role="tab"
                aria-selected={contactType === "email"}
                className={`${styles.tab} ${
                  contactType === "email" ? styles.tabActive : ""
                }`}
                onClick={() => handleTypeChange("email")}
              >
                Email
              </button>
              <button
                role="tab"
                aria-selected={contactType === "telegram"}
                className={`${styles.tab} ${
                  contactType === "telegram" ? styles.tabActive : ""
                }`}
                onClick={() => handleTypeChange("telegram")}
              >
                Telegram
              </button>
            </div>

            <div className={styles.inputWrapper}>
              <input
                ref={inputRef}
                className={`${styles.input} ${
                  errorMsg ? styles.inputError : ""
                }`}
                type={contactType === "email" ? "email" : "text"}
                maxLength={contactType === "email" ? 120 : 33}
                placeholder={
                  contactType === "email" ? "your@email.com" : "@username"
                }
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (errorMsg) setErrorMsg("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                autoComplete={contactType === "email" ? "email" : "off"}
                inputMode={contactType === "email" ? "email" : "text"}
                disabled={status === "loading"}
                aria-invalid={!!errorMsg}
                aria-describedby={errorMsg ? "contact-error" : undefined}
              />
              {errorMsg && (
                <p id="contact-error" className={styles.errorMsg} role="alert">
                  {errorMsg}
                </p>
              )}
            </div>

            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <span className={styles.spinner} aria-hidden="true" />
              ) : (
                "Отправить заявку"
              )}
            </button>

            <p className={styles.hint}>
              Работает в Google Таблицах&nbsp;·&nbsp;Доступ навсегда
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
