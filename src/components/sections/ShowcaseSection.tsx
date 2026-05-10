import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PROJECTS } from "../../data/projects";
import { useI18n } from "../../i18n/I18nProvider";
import type { Project } from "../../data/projects";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { LinkButton } from "../ui/LinkButton";
import { Modal } from "../ui/Modal";
import styles from "./ShowcaseSection.module.css";

export function ShowcaseSection() {
  const { locale, messages } = useI18n();
  const reduceMotion = useReducedMotion() === true;
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<Project | null>(null);

  const total = PROJECTS.length;
  const current = PROJECTS[index];
  const copy = useMemo(
    () => current.copy[locale],
    [current, locale],
  );

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, active]);

  return (
    <section
      id="showcase"
      className={styles.section}
      aria-labelledby="showcase-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="showcase-title" className={styles.title}>
            {messages.showcase.title}
          </h2>
          <p className={styles.subtitle}>{messages.showcase.subtitle}</p>
        </header>

        <div className={styles.carousel}>
          <Button
            type="button"
            variant="ghost"
            className={styles.navBtn}
            aria-label={messages.showcase.prev}
            onClick={() => go(-1)}
          >
            ‹
          </Button>

          <div className={styles.stage}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={current.id}
                className={styles.slide}
                initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: reduceMotion ? 0 : 0.28 }}
              >
                <Card className={styles.card}>
                  <p className={styles.tag}>{copy.tagline}</p>
                  <h3 className={styles.cardTitle}>{copy.title}</h3>
                  <p className={styles.cardBody}>{copy.description}</p>
                  <div className={styles.cardFooter}>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setActive(current)}
                    >
                      {messages.showcase.openDetails}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            type="button"
            variant="ghost"
            className={styles.navBtn}
            aria-label={messages.showcase.next}
            onClick={() => go(1)}
          >
            ›
          </Button>
        </div>

        <div className={styles.dots} aria-hidden>
          {PROJECTS.map((p, i) => (
            <span
              key={p.id}
              className={i === index ? styles.dotActive : styles.dot}
            />
          ))}
        </div>
      </div>

      <Modal
        open={active !== null}
        title={active ? active.copy[locale].title : ""}
        closeLabel={messages.showcase.closeModal}
        onClose={() => setActive(null)}
      >
        {active ? (
          <div className={styles.modalBody}>
            <p className={styles.modalTagline}>
              {active.copy[locale].tagline}
            </p>
            <p className={styles.modalDesc}>
              {active.copy[locale].description}
            </p>
            <div className={styles.stackBlock}>
              <p className={styles.stackLabel}>{messages.showcase.stackLabel}</p>
              <ul className={styles.stackList}>
                {active.stack.map((tag) => (
                  <li key={tag} className={styles.stackItem}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <LinkButton
              href={active.url}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className={styles.visit}
            >
              {messages.showcase.visit}
            </LinkButton>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
