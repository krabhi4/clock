/**
 * Site-wide SEO defaults and types.
 * Override per-page via Layout props.
 */

export const SITE = {
  name: "Clock",
  title: "Clock — Live time in analog clock grids",
  description:
    "A creative clock that displays the current time using grids of small analog clocks. Each digit is formed by 24 clocks—hour and minute hands spell out the time in real time. Light and dark theme, responsive.",
  tagline: "Live time in analog clock grids",
  /** Production URL. Set in astro.config.mjs `site` for canonical and OG URLs. */
  origin: "https://clock.krabhi4.in",
  /** Default social image path (relative to origin). Use 1200×630 for OG. */
  defaultOgImage: "/og-image.png",
  twitterHandle: "",
  locale: "en_US",
  localeAlternates: [] as string[],
  author: "Kumar Abhishek",
  /** CC, ©, etc. Leave empty if not needed. */
  copyright: "",
  /** e.g. "index, follow" or "noindex, nofollow" for staging. */
  robots: "index, follow",
  keywords: [
    "clock",
    "analog clock",
    "live time",
    "time display",
    "creative clock",
    "clock grid",
    "real-time clock",
    "12-hour clock",
    "AM PM",
  ],
} as const;

export interface PageSEO {
  /** Page title (used in &lt;title&gt;, og:title, twitter:title). */
  title?: string;
  /** Meta description (og:description, twitter:description). */
  description?: string;
  /** Absolute or path for og:image / twitter:image (default: SITE.defaultOgImage). */
  image?: string;
  /** e.g. "article" or "website". */
  ogType?: "website" | "article";
  /** Override robots for this page. */
  robots?: string;
  /** Canonical path (if different from current URL path). */
  canonicalPath?: string;
  /** No index (convenience for robots). */
  noindex?: boolean;
  /** JSON-LD structured data objects (WebPage, etc.). Merged with layout defaults. */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  /** Extra meta tags: { name: value } or { property: value }. */
  extraMeta?: Record<string, string>;
}

export function buildCanonicalUrl(path: string, origin: string): string {
  const base = origin.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function buildAbsoluteImageUrl(imagePath: string, origin: string): string {
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const base = origin.replace(/\/$/, "");
  const p = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `${base}${p}`;
}
