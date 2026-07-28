export const SITE_URL = "https://www.cloudanzen.ai";

/**
 * Locale-aware canonical + hreflang alternates for a page.
 *
 * Each page must self-reference its own locale as the canonical (English pages
 * canonical to the bare path, Japanese pages to the /ja-prefixed path) and
 * declare both language variants plus an x-default. Passing the same `path`
 * (with no locale prefix, e.g. "/platform" or "" for the homepage) from any
 * locale produces a consistent, correct hreflang cluster.
 */
export function localeAlternates(locale: string, path: string) {
  const en = `${SITE_URL}${path}`;
  const ja = `${SITE_URL}/ja${path}`;
  return {
    canonical: locale === "ja" ? ja : en,
    languages: {
      en,
      ja,
      "x-default": en,
    },
  };
}
