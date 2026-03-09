"use client";

import React, { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoText}>Structura</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="#product">О планере</Link>
          <Link href="#reviews">Отзывы</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Задать вопрос</Link>
        </nav>

        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.openLine1 : ""} />
          <span className={menuOpen ? styles.openLine2 : ""} />
          <span className={menuOpen ? styles.openLine3 : ""} />
        </button>
      </div>

      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <Link href="#product" onClick={() => setMenuOpen(false)}>
          О планере
        </Link>
        <Link href="#reviews" onClick={() => setMenuOpen(false)}>
          Отзывы
        </Link>
        <Link href="#faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </Link>
        <Link href="#contact" onClick={() => setMenuOpen(false)}>
          Задать вопрос
        </Link>
      </nav>
    </header>
  );
};

export default Header;
