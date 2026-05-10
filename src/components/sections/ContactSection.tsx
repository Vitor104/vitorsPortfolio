import styles from "./ContactSection.module.css";
import { useI18n } from "../../i18n/I18nProvider";
import { LinkButton } from "../ui/LinkButton";

const CONTACT = {
  email: "mailto:hello@vitor.dev",
  linkedin: "https://www.linkedin.com/in/vitor",
  github: "https://github.com/vitor",
} as const;

export function ContactSection() {
  const { messages } = useI18n();

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="contact-title" className={styles.title}>
            {messages.contact.title}
          </h2>
          <p className={styles.subtitle}>{messages.contact.subtitle}</p>
        </header>
        <div className={styles.actions}>
          <LinkButton href={CONTACT.email} variant="primary">
            {messages.contact.email}
          </LinkButton>
          <LinkButton href={CONTACT.linkedin} variant="secondary" target="_blank" rel="noreferrer">
            {messages.contact.linkedin}
          </LinkButton>
          <LinkButton href={CONTACT.github} variant="secondary" target="_blank" rel="noreferrer">
            {messages.contact.github}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
