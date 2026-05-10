import styles from "./Header.module.css";
import { useI18n } from "../../i18n/I18nProvider";

const links = [
  { href: "#hero", key: "hero" as const },
  { href: "#showcase", key: "showcase" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const { messages } = useI18n();

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden />
          <span className={styles.brandText}>Vitor&apos;s Portfolio</span>
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
