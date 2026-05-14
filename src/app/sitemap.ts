import type { MetadataRoute } from "next";
import { resourceTypes } from "@/lib/resources-content";
import { getArticleIndex } from "@/lib/articles";
import { helpCategories } from "@/lib/help-content";

const BASE_URL = "https://www.cloudanzen.com";

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
  "/platform/integrations",
  "/solutions/startups",
  "/solutions/scaleups",
  "/solutions/enterprise",
  "/solutions/security-teams",
  "/solutions/grc-teams",
  "/solutions/saas",
  "/frameworks/soc2",
  "/frameworks/iso27001",
  "/frameworks/gdpr",
  "/frameworks/hipaa",
  "/frameworks/pci-dss",
  "/frameworks/nist-csf",
  "/frameworks/custom",
  "/pricing",
  "/customers",
  "/resources",
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
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static routes — both locales
  for (const route of staticRoutes) {
    const enUrl = `${BASE_URL}${route}`;
    const jaUrl = `${BASE_URL}/ja${route}`;
    entries.push(
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: enUrl,
            ja: jaUrl,
          },
        },
      },
      {
        url: jaUrl,
        lastModified: now,
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: enUrl,
            ja: jaUrl,
          },
        },
      }
    );
  }

  // Resource type index pages
  for (const type of resourceTypes) {
    const enUrl = `${BASE_URL}/resources/${type.slug}`;
    const jaUrl = `${BASE_URL}/ja/resources/${type.slug}`;
    entries.push(
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: { languages: { en: enUrl, ja: jaUrl } },
      },
      {
        url: jaUrl,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: { languages: { en: enUrl, ja: jaUrl } },
      }
    );
  }

  // Resource articles
  for (const article of getArticleIndex()) {
    const enUrl = `${BASE_URL}/resources/${article.type}/${article.slug}`;
    const jaUrl = `${BASE_URL}/ja/resources/${article.type}/${article.slug}`;
    entries.push(
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: { en: enUrl, ja: jaUrl } },
      },
      {
        url: jaUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: { en: enUrl, ja: jaUrl } },
      }
    );
  }

  // Help category pages
  for (const category of helpCategories) {
    const enUrl = `${BASE_URL}/help/${category.slug}`;
    const jaUrl = `${BASE_URL}/ja/help/${category.slug}`;
    entries.push(
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: { en: enUrl, ja: jaUrl } },
      },
      {
        url: jaUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: { en: enUrl, ja: jaUrl } },
      }
    );

    // Help articles
    for (const article of category.articles) {
      const enArticleUrl = `${BASE_URL}/help/${category.slug}/${article.slug}`;
      const jaArticleUrl = `${BASE_URL}/ja/help/${category.slug}/${article.slug}`;
      entries.push(
        {
          url: enArticleUrl,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.5,
          alternates: { languages: { en: enArticleUrl, ja: jaArticleUrl } },
        },
        {
          url: jaArticleUrl,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.5,
          alternates: { languages: { en: enArticleUrl, ja: jaArticleUrl } },
        }
      );
    }
  }

  return entries;
}
