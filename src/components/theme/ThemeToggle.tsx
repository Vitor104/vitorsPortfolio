import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useI18n } from "../../i18n/I18nProvider";
import { useTheme } from "../../theme/ThemeProvider";
import styles from "./ThemeToggle.module.css";

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden
      className={styles.icon}
    >
      <path
        d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0 1.5a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V19a1 1 0 0 1 1-1Zm7.5-6a1 1 0 0 1 0-2H21a1 1 0 1 1 0 2h-1.5ZM3 13a1 1 0 0 1 0-2h1.5a1 1 0 1 1 0 2H3Zm14.66-7.07a1 1 0 0 1 1.41 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06ZM5.93 17.66a1 1 0 0 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41l1.06-1.06Zm12.73 1.41a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 1 1 1.41-1.41l1.06 1.06ZM6.34 6.34A1 1 0 1 1 4.93 7.75L3.87 6.7A1 1 0 1 1 5.28 5.28l1.06 1.06Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden
      className={styles.icon}
    >
      <path
        d="M20.74 14.86a8.5 8.5 0 1 1-10.6-10.6 1 1 0 0 1 1.22 1.27 6.5 6.5 0 0 0 8.11 8.11 1 1 0 0 1 1.27 1.22Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { messages } = useI18n();
  const reduce = useReducedMotion() === true;

  const isDark = theme === "dark";
  const label = isDark ? messages.theme.toggleLight : messages.theme.toggleDark;

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      <span className={styles.iconWrap} aria-hidden>
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={isDark ? "moon" : "sun"}
            className={styles.iconLayer}
            initial={reduce ? false : { opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
