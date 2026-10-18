import { useRouterState } from "@tanstack/react-router";
import { en } from "@/lib/content/en";
import { th } from "@/lib/content/th";

/* English is the default locale at "/", Thai lives under "/th". */
export type Lang = "th" | "en";
export const DICTS = { th, en };

const SITE = "https://sxtech.me";

export function langFromPath(pathname: string): Lang {
  return pathname === "/th" || pathname.startsWith("/th/") ? "th" : "en";
}

/** "/services" → "/th/services" for Thai; unchanged for English. */
export function localePath(lang: Lang, path: string) {
  if (lang === "en") return path;
  return path === "/" ? "/th" : `/th${path}`;
}

/** "/th/services" → "/services" (the locale-neutral path). */
export function stripLocale(pathname: string) {
  if (pathname === "/th" || pathname === "/th/") return "/";
  if (pathname.startsWith("/th/")) return pathname.slice(3);
  return pathname || "/";
}

export function useLang(): Lang {
  return langFromPath(useRouterState({ select: (s) => s.location.pathname }));
}

export function useT() {
  return DICTS[useLang()];
}

/** Returns a function that localizes an internal path for the current language. */
export function useLocalePath() {
  const lang = useLang();
  return (path: string) => localePath(lang, path);
}

const PAGE_PATHS = {
  home: "/",
  services: "/services",
  fde: "/forward-deployed-ai",
  industries: "/industries",
  platforms: "/ventures",
  about: "/about",
  contact: "/contact",
} as const;

/** Per-page <head>: localized title/description, canonical and hreflang alternates. */
export function pageHead(lang: Lang, page: keyof typeof PAGE_PATHS) {
  const { title, description } = DICTS[lang].meta[page];
  const path = PAGE_PATHS[page];
  const url = SITE + localePath(lang, path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "th" ? "th_TH" : "en_US" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: SITE + path },
      { rel: "alternate", hrefLang: "th", href: SITE + localePath("th", path) },
      { rel: "alternate", hrefLang: "x-default", href: SITE + path },
    ],
  };
}
