import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import styles from "./HeroSection.module.css";

const INTRO_MS = 1400;

type Phase = "boot" | "live";

export function HeroSection() {
  const { messages } = useI18n();
  const reduceMotion = useReducedMotion() === true;
  const [phase, setPhase] = useState<Phase>("boot");

  useEffect(() => {
    if (reduceMotion) {
      setPhase("live");
      return;
    }
    const t = window.setTimeout(() => setPhase("live"), INTRO_MS);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  return (
    <section id="hero" className={styles.section} aria-labelledby="hero-title">
      <div className={styles.shell}>
        <p className={styles.kicker}>{messages.hero.kicker}</p>
        <div className={styles.titleRow}>
          <motion.h1
            id="hero-title"
            className={styles.title}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.titleLine}>{messages.hero.nameSolid}</span>
            <span className={styles.titleLineMuted}>
              {messages.hero.nameMuted}
            </span>
          </motion.h1>
          <motion.p
            className={styles.description}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.2,
            }}
          >
            {messages.hero.description}
          </motion.p>
        </div>
      </div>

      <AnimatePresence>
        {phase === "boot" ? (
          <motion.div
            key="hero-loader"
            className={styles.loader}
            role="status"
            aria-live="polite"
            aria-label={messages.hero.loadingLabel}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <div className={styles.loaderInner}>
              <motion.span
                className={styles.loaderOrb}
                animate={reduceMotion ? {} : { rotate: 360 }}
                transition={{
                  repeat: reduceMotion ? 0 : Infinity,
                  duration: 1.2,
                  ease: "linear",
                }}
                aria-hidden
              />
              <p className={styles.loaderText}>{messages.hero.loadingLabel}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
