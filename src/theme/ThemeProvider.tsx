import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, type Theme } from "./types";

type ThemeValue = {
  theme: Theme;
  setTheme: (next: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeValue | null>(null);

function normalize(value: unknown): Theme {
  return value === "light" || value === "dark" ? value : DEFAULT_THEME;
}

function writeStored(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Silent fallback when storage is blocked (private mode, quota, etc.)
  }
}

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return DEFAULT_THEME;
  // The inline pre-React script in index.html already resolved the priority chain
  // (LocalStorage -> prefers-color-scheme -> DEFAULT_THEME) and set `data-theme`.
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" || attr === "dark" ? attr : DEFAULT_THEME;
}

function syncDocument(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme);

  useLayoutEffect(() => {
    syncDocument(theme);
    writeStored(theme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(normalize(next));
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo<ThemeValue>(() => {
    return { theme, setTheme, toggleTheme };
  }, [theme, setTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

export type { Theme };
