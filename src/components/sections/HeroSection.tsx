import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { LinkButton } from "../ui/LinkButton";
import styles from "./HeroSection.module.css";

const INTRO_MS = 1600;

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
        <motion.div
          className={styles.copy}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
        >
          <p className={styles.kicker}>{messages.hero.kicker}</p>
          <h1 id="hero-title" className={styles.title}>
            {messages.hero.title}
          </h1>
          <p className={styles.subtitle}>{messages.hero.subtitle}</p>
          <div className={styles.actions}>
            <LinkButton href="#showcase" variant="primary">
              {messages.hero.ctaPrimary}
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">
              {messages.hero.ctaSecondary}
            </LinkButton>
          </div>
        </motion.div>
        <motion.div
          className={styles.visual}
          aria-hidden
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            delay: reduceMotion ? 0 : 0.05,
          }}
        >
          <div className={styles.mosaic}>
            <span className={styles.tile} />
            <span className={styles.tileAccent} />
            <span className={styles.tileMuted} />
            <span className={styles.tileDeep} />
          </div>
        </motion.div>
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
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
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
