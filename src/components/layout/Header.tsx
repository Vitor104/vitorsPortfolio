import styles from "./Header.module.css";
import { useI18n } from "../../i18n/I18nProvider";

const links = [
  { href: "#work", key: "work" as const },
  { href: "#about", key: "about" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const { messages } = useI18n();

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand} aria-label={messages.meta.siteTitle}>
          <span className={styles.brandMark}>V</span>
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.list}>
            {links.map((item) => (
              <li key={item.key}>
                <a href={item.href} className={styles.link}>
                  {messages.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
