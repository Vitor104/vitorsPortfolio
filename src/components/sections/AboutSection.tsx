import { motion, useReducedMotion } from "motion/react";
import { useI18n } from "../../i18n/I18nProvider";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  const { messages } = useI18n();
  const reduce = useReducedMotion() === true;

  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-title"
    >
      <div className={styles.inner}>
        <p className={styles.kicker}>{messages.about.kicker}</p>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <motion.h2
              id="about-title"
              className={styles.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduce ? 0 : 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {messages.about.title}
            </motion.h2>
            <motion.p
              className={styles.body}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduce ? 0 : 0.5,
                delay: reduce ? 0 : 0.15,
              }}
            >
              {messages.about.body}
            </motion.p>
          </div>
        </div>
        <ul className={styles.skills} aria-label={messages.about.kicker}>
          {messages.about.skills.map((skill) => (
            <li key={skill} className={styles.skill}>
              <span className={styles.skillDot} aria-hidden />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
