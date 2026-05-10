import { ErrorBoundary } from "./components/layout/ErrorBoundary";
import { I18nProvider } from "./i18n/I18nProvider";
import { AppShell } from "./AppShell";

export function App() {
  return (
    <ErrorBoundary>
      <I18nProvider>
        <AppShell />
      </I18nProvider>
    </ErrorBoundary>
  );
}
