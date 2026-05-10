import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, DICTIONARIES, LOCALE_HTML_LANG } from "./dictionaries";
import type { Locale, Messages } from "./types";

type I18nValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (next: Locale) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

function syncDocument(locale: Locale, title: string) {
  document.documentElement.lang = LOCALE_HTML_LANG[locale];
  document.title = title;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  const messages = DICTIONARIES[locale];

  useLayoutEffect(() => {
    syncDocument(locale, messages.meta.siteTitle);
  }, [locale, messages.meta.siteTitle]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = useMemo<I18nValue>(() => {
    return { locale, messages, setLocale };
  }, [locale, messages, setLocale]);

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
