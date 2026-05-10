import styles from "./Footer.module.css";
import { useI18n } from "../../i18n/I18nProvider";
import { FadeInUp } from "../ui/FadeInUp";

export function Footer() {
  const { messages } = useI18n();
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <FadeInUp viewportAmount={0.5} y={12}>
          <p className={styles.text}>{messages.footer.rights}</p>
        </FadeInUp>
      </div>
    </footer>
  );
}
