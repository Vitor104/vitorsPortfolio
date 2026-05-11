import { LOCALES, type Locale } from "../../i18n/types";
import { useI18n } from "../../i18n/I18nProvider";
import styles from "./LanguageSwitcher.module.css";

const LABELS: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const { locale, setLocale, messages } = useI18n();

  return (
    <div className={styles.root}>
      <p className={styles.caption}>{messages.meta.languageMenu}</p>
      <div
        className={styles.group}
        role="group"
        aria-label={messages.meta.languageMenu}
      >
        {LOCALES.map((code) => (
          <button
            key={code}
            type="button"
            className={code === locale ? styles.toggleOn : styles.toggle}
            aria-pressed={code === locale}
            onClick={() => setLocale(code)}
          >
            {LABELS[code]}
          </button>
        ))}
      </div>
    </div>
  );
}
