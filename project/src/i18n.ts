import { createContext, useContext } from 'react';

export type Lang = 'en' | 'th';

export type LocaleString = { en: string; th: string };

export interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

export const LangContext = createContext<LangContextValue | null>(null);

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

/** Resolve a LocaleString or plain string to the active language. */
export function tr(value: LocaleString | string, lang: Lang): string {
  if (typeof value === 'string') return value;
  return value[lang] ?? value.en;
}

export function trArray(values: LocaleString[] | string[], lang: Lang): string[] {
  return values.map((v) => tr(v, lang));
}
