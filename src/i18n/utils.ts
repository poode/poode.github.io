import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Extract the active language from the current URL path. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'ar') return 'ar';
  return defaultLang;
}

/** Returns a translator bound to a language, with safe fallback to English. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export const dir = (lang: Lang): 'rtl' | 'ltr' => (lang === 'ar' ? 'rtl' : 'ltr');

/** The path of the "other" language for the current page (toggle target). */
export function alternateLangPath(url: URL, lang: Lang): string {
  if (lang === 'ar') {
    // ar -> en: strip leading /ar
    const rest = url.pathname.replace(/^\/ar/, '') || '/';
    return rest;
  }
  // en -> ar: prefix /ar
  return `/ar${url.pathname === '/' ? '/' : url.pathname}`;
}
