import React from "react";
import styles from "./Advantages.module.scss";

const Advantages: React.FC = () => {
  return (
    <section className={styles.advantages}>
      <h2 className={styles.sectionTitle}>Кому подойдёт планер Structura</h2>
      <p className={styles.sectionSubtitle}>
        Если вам важно держать фокус, видеть прогресс и&nbsp;не&nbsp;теряться
        в&nbsp;задачах &mdash; вы&nbsp;точно узнаете себя в&nbsp;одном
        из&nbsp;этих сценариев
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.tag}>Цели</span>
          <h3 className={styles.title}>Для целей и повседневных задач</h3>
          <p className={styles.text}>
            Когда нужно держать под контролем и&nbsp;большие цели на&nbsp;год
            или квартал, и&nbsp;ежедневные дела. Structura помогает разложить
            всё по&nbsp;полочкам, отслеживать прогресс, видеть реальную картину
            в&nbsp;цифрах и&nbsp;графиках &mdash; без ощущения перегруза
            и&nbsp;хаоса.
          </p>
          <img
            src="/advantages/goals.jpg"
            alt="Планирование целей и задач"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <span className={styles.tag}>Обучение</span>
          <h3 className={styles.title}>Для обучения и развития навыков</h3>
          <p className={styles.text}>
            Если вы&nbsp;изучаете иностранный язык, программирование, дизайн или
            любую новую сферу. Планер помогает выстроить системный процесс:
            ставить цели, фиксировать занятия, видеть регулярность и&nbsp;не
            забрасывать обучение через пару недель.
          </p>
          <img
            src="/advantages/education.jpg"
            alt="Обучение и развитие"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <span className={styles.tag}>Работа и жизнь</span>
          <h3 className={styles.title}>Для занятых людей и фрилансеров</h3>
          <p className={styles.text}>
            Когда много задач, идей и&nbsp;ответственности&nbsp;&mdash; работа,
            проекты, встречи, задачи, финансы, личные дела. Structura становится
            вашим помошником, где всё структурировано, понятно и&nbsp;всегда под
            рукой&nbsp;&mdash; на телефоне и&nbsp;на&nbsp;компьютере.
          </p>
          <img
            src="/advantages/freelancing.jpg"
            alt="Удобно для занятых людей"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
