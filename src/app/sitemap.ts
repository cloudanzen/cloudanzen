import type { MetadataRoute } from "next";
import { resourceTypes } from "@/lib/resources-content";
import { getArticleIndex } from "@/lib/articles";
import { helpCategories } from "@/lib/help-content";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

type SitemapEntry = MetadataRoute.Sitemap[number];

// hreflang cluster for a path, matching the on-page <link rel="alternate"> tags.
function languages(path: string) {
  const en = `${BASE_URL}${path}`;
  const ja = `${BASE_URL}/ja${path}`;
  return { en, ja, "x-default": en };
}

// Emit the en + /ja pair for a path. lastModified is only set when we have a
// real date — a per-request "now" on every URL trains Google to distrust it.
function localePair(
  path: string,
  opts: {
    changeFrequency?: SitemapEntry["changeFrequency"];
    priority?: number;
    lastModified?: Date;
  },
): SitemapEntry[] {
  const langs = languages(path);
  const base: Omit<SitemapEntry, "url"> = {
    ...(opts.lastModified ? { lastModified: opts.lastModified } : {}),
    ...(opts.changeFrequency ? { changeFrequency: opts.changeFrequency } : {}),
    ...(opts.priority !== undefined ? { priority: opts.priority } : {}),
    alternates: { languages: langs },
  };
  return [
    { url: langs.en, ...base },
    { url: langs.ja, ...base },
  ];
}

// Static routes (English has no prefix, Japanese gets /ja/)
const staticRoutes = [
  "",
  "/platform",
  "/platform/compliance-automation",
  "/platform/continuous-monitoring",
  "/platform/risk-management",
  "/platform/vendor-risk",
  "/platform/policy-management",
  "/platform/audit-readiness",
  "/platform/trust-center",
  "/platform/questionnaire-automation",
  "/platform/ai-governance",
  "/platform/integrations",
  "/solutions/startups",
  "/solutions/ai-startups",
  "/solutions/scaleups",
  "/solutions/enterprise",
  "/solutions/security-teams",
  "/solutions/grc-teams",
  "/solutions/saas",
  "/frameworks/iso42001",
  "/frameworks/soc2",
  "/frameworks/iso27001",
  "/frameworks/gdpr",
  "/frameworks/hipaa",
  "/frameworks/pci-dss",
  "/frameworks/nist-csf",
  "/frameworks/custom",
  "/pricing",
  "/customers",
  "/compare/vanta-drata",
  "/resources",
  "/resources/ai-security-questionnaire-pack",
  "/resources/ai-trust-center-checklist",
  "/resources/ai-vendor-model-register-template",
  "/demo-videos",
  "/demo",
  "/company/about",
  "/company/careers",
  "/company/partners",
  "/contact",
  "/privacy",
  "/terms",
  "/security",
  "/help",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static routes — no lastModified (nothing reliable to report).
  for (const route of staticRoutes) {
    entries.push(
      ...localePair(route, {
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
      }),
    );
  }

  // Resource type index pages
  for (const type of resourceTypes) {
    entries.push(
      ...localePair(`/resources/${type.slug}`, {
        changeFrequency: "weekly",
        priority: 0.7,
      }),
    );
  }

  // Resource articles — real publishedAt where present.
  for (const article of getArticleIndex()) {
    entries.push(
      ...localePair(`/resources/${article.type}/${article.slug}`, {
        changeFrequency: "monthly",
        priority: 0.6,
        lastModified: article.publishedAt
          ? new Date(article.publishedAt)
          : undefined,
      }),
    );
  }

  // Help category pages + articles
  for (const category of helpCategories) {
    entries.push(
      ...localePair(`/help/${category.slug}`, {
        changeFrequency: "monthly",
        priority: 0.6,
      }),
    );

    for (const article of category.articles) {
      entries.push(
        ...localePair(`/help/${category.slug}/${article.slug}`, {
          changeFrequency: "monthly",
          priority: 0.5,
        }),
      );
    }
  }

  return entries;
}
