import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  intlLocales,
  type Locale,
  type Messages,
  translations,
} from "./translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  messages: Messages;
  intlLocale: string;
};

const defaultLocale: Locale = "nl";
export type ThemeMode = "light" | "dark";

const defaultTheme: ThemeMode = "light";
const themeStorageKey = "brick-value-radar-theme";
const storageKey = "brick-value-radar-locale";

const I18nContext = createContext<I18nContextValue | null>(null);

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const storedLocale = window.localStorage.getItem(storageKey);
  return storedLocale === "en" || storedLocale === "nl" ? storedLocale : defaultLocale;
}

function readInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return defaultTheme;

  const storedTheme = window.localStorage.getItem(themeStorageKey);
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : defaultTheme;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);
  const [theme, setThemeState] = useState<ThemeMode>(readInitialTheme);

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      theme,
      toggleTheme: () =>
        setThemeState((currentTheme) => (currentTheme === "light" ? "dark" : "light")),
      messages: translations[locale],
      intlLocale: intlLocales[locale],
    }),
    [locale, theme],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
