import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { dictionaries } from './dictionaries';
import { LOCALE_STORAGE_KEY, type AppLocale } from './types';
import { translate } from './translate';

function readInitialLocale(): AppLocale {
  if (typeof window === 'undefined') return 'uk';
  const fromQuery = new URLSearchParams(window.location.search).get('lang');
  if (fromQuery === 'en' || fromQuery === 'uk') return fromQuery;
  const s = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (s === 'en' || s === 'uk') return s;
  return navigator.language.toLowerCase().startsWith('uk') ? 'uk' : 'en';
}

type I18nValue = {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<AppLocale>(readInitialLocale);

  const setLocale = useCallback((next: AppLocale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState({}, '', url);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'uk' ? 'uk' : 'en';
  }, [locale]);

  const t = useCallback(
    (path: string, vars?: Record<string, string | number>) =>
      translate(dictionaries[locale], path, vars),
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
