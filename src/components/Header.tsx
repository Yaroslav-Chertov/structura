"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#product", label: "О планере" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Задать вопрос" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        role="banner"
      >
        <div className={styles.container}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="Structura — на главную"
          >
            <span className={styles.logoText}>Structura</span>
          </Link>

          <nav className={styles.nav} aria-label="Основная навигация">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={styles.navLink}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#buy" className={styles.ctaButton}>
            Купить — 490 ₽
          </a>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Мобильная навигация">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a href="#buy" className={styles.mobileCta} onClick={closeMenu}>
            Купить — 490 ₽
          </a>
        </nav>
      </div>

      {}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
