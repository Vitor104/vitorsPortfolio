import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { I18nProvider } from "./i18n/I18nProvider";
import { ThemeProvider } from "./theme/ThemeProvider";
import { AppShell } from "./AppShell";

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <I18nProvider>
          <AppShell />
        </I18nProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
