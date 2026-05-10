import styles from "./AppShell.module.css";
import "./styles/document.module.css";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { LanguageSwitcher } from "./components/i18n/LanguageSwitcher";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ShowcaseSection } from "./components/sections/ShowcaseSection";

export function AppShell() {
  return (
    <div className={styles.root}>
      <LanguageSwitcher />
      <div className={styles.main}>
        <Header />
        <main>
          <HeroSection />
          <ShowcaseSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
