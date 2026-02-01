"use client";

import React from "react";
import styles from "./VisualBlock.module.scss";

const VisualBlock: React.FC = () => {
  return (
    <section className={styles.visualSection}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Все ваши цели под&nbsp;контролем
            <br />
            и&nbsp;в&nbsp;одной системе
          </h2>
          <p className={styles.text}>
            Structura помогает превратить хаос в&nbsp;понятный план
            и&nbsp;снизить тревожность уже с&nbsp;первой недели
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/icon.png" alt="Structura планер" />
        </div>
      </div>
    </section>
  );
};

export default VisualBlock;
