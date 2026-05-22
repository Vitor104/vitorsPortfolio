import styles from "./ContactSection.module.css";
import { useI18n } from "../../i18n/I18nProvider";
import { FadeInUp } from "../ui/FadeInUp";
import { LinkButton } from "../ui/LinkButton";

const CONTACT = {
  email: "mailto:jv7554817@gmail.com",
  linkedin: "https://www.linkedin.com/in/jvvitor/",
  github: "https://github.com/madebyvitor",
} as const;

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden
      className={styles.icon}
    >
      <path
        d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Zm2 .8v.36L12 12l7-4.34V7.3l-7 4.34L5 7.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden
      className={styles.icon}
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.23-3.37-1.23-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1.01.07 1.54 1.05 1.54 1.05.9 1.55 2.36 1.1 2.93.84.09-.66.35-1.1.63-1.36-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.04-2.73-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.04A9.42 9.42 0 0 1 12 6.84a9.4 9.4 0 0 1 2.53.34c1.93-1.32 2.78-1.04 2.78-1.04.55 1.4.2 2.44.1 2.7.65.71 1.04 1.62 1.04 2.73 0 3.92-2.34 4.78-4.57 5.03.36.31.68.93.68 1.88v2.79c0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden
      className={styles.icon}
    >
      <path
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56V22H.22V8Zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v9.44H17.4v-8.37c0-2 0-4.56-2.78-4.56-2.78 0-3.21 2.17-3.21 4.42V22H7.72V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ContactSection() {
  const { messages } = useI18n();

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <FadeInUp>
          <p className={styles.kicker}>{messages.contact.kicker}</p>
        </FadeInUp>
        <div className={styles.layout}>
          <FadeInUp delay={0.06} className={styles.headlineReveal}>
            <h2 id="contact-title" className={styles.headline}>
              <span className={styles.headlineLine}>
                {messages.contact.headlineLine1}
              </span>
              <span className={styles.headlineMuted}>
                {messages.contact.headlineLine2Muted}
              </span>
              <span className={styles.headlineLine}>
                {messages.contact.headlineLine3}
              </span>
            </h2>
          </FadeInUp>
          <div className={styles.actions}>
            <FadeInUp delay={0.12}>
              <ul className={styles.linkList}>
                <li>
                  <a className={styles.contactLink} href={CONTACT.email}>
                    <MailIcon />
                    <span>{messages.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.contactLink}
                    href={CONTACT.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon />
                    <span>{messages.contact.github}</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.contactLink}
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinIcon />
                    <span>{messages.contact.linkedin}</span>
                  </a>
                </li>
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.18} className={styles.ctaWrap}>
              <LinkButton
                href={CONTACT.email}
                variant="dark"
                className={styles.cta}
              >
                <span>{messages.contact.cta}</span>
                <span aria-hidden className={styles.ctaArrow}>
                  ↗
                </span>
              </LinkButton>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
