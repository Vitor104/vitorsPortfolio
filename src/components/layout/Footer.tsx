import styles from "./Footer.module.css";
import { useI18n } from "../../i18n/I18nProvider";

export function Footer() {
  const { messages } = useI18n();
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <p className={styles.text}>{messages.footer.rights}</p>
      </div>
    </footer>
  );
}
