import styles from "./AppShell.module.css";
import "./styles/document.module.css";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { LanguageSwitcher } from "./components/i18n/LanguageSwitcher";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { WorkSection } from "./components/sections/WorkSection";

export function AppShell() {
  return (
    <div className={styles.root}>
      <LanguageSwitcher />
      <div className={styles.main}>
        <Header />
        <main>
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
