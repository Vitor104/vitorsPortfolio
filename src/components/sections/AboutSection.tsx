import { motion, useReducedMotion } from "motion/react";
import { useI18n } from "../../i18n/I18nProvider";
import { FadeInUp } from "../ui/FadeInUp";
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
        <FadeInUp>
          <p className={styles.kicker}>{messages.about.kicker}</p>
        </FadeInUp>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <FadeInUp>
              <h2 id="about-title" className={styles.title}>
                {messages.about.title}
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.08}>
              <p className={styles.body}>{messages.about.body}</p>
            </FadeInUp>
          </div>
        </div>
        <ul className={styles.skills} aria-label={messages.about.kicker}>
          {messages.about.skills.map((skill, i) => (
            <motion.li
              key={skill}
              className={styles.skill}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.25 }}
              transition={{
                duration: reduce ? 0 : 0.45,
                delay: reduce ? 0 : 0.04 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className={styles.skillDot} aria-hidden />
              <span>{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
