import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  BookOpen,
  CheckSquare,
  FileText,
  Layers3,
  Library,
  Newspaper,
} from "lucide-react";
import {
  resourceCollections,
  resourceTypes,
  type ResourceTypeSlug,
} from "@/lib/resources-content";
import {
  getArticleIndex,
  getFeaturedArticleMetas,
  getLatestArticleMetas,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "CloudAnzen guides, checklists, templates, glossary entries, and compliance collections for modern GRC teams.",
};

const typeIcons: Record<ResourceTypeSlug, typeof Newspaper> = {
  blog: Newspaper,
  guides: BookOpen,
  templates: FileText,
  glossary: Library,
  checklists: CheckSquare,
};

const typeColors: Record<ResourceTypeSlug, string> = {
  blog: "bg-fuchsia-50 text-fuchsia-700",
  guides: "bg-violet-50 text-violet-700",
  templates: "bg-emerald-50 text-emerald-700",
  glossary: "bg-sky-50 text-sky-700",
  checklists: "bg-emerald-50 text-emerald-700",
};

export default function ResourcesPage() {
  const featuredResources = getFeaturedArticleMetas();
  const latestResources = getLatestArticleMetas(8);
  const totalResources = getArticleIndex().length;

  return (
    <div>
      <PageHero
        badge="Resources"
        title="Resources built for"
        titleHighlight="modern compliance operators"
        subtitle="Browse practical content for SOC 2, ISO 27001, GDPR, HIPAA, vendor risk, trust centers, and day-to-day audit readiness work."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "Explore help center", href: "/help" }}
      />

      <section className="section-pad bg-white border-b border-slate-200">
        <div className="page-shell">
          <div className="flex items-center justify-between gap-6 mb-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                Resource Types
              </p>
              <h2 className="heading-lg text-slate-900">Browse by format</h2>
            </div>
            <Link
              href="/resources/guides"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-700"
            >
              Start with guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
            {resourceTypes.map((type) => {
              const Icon = typeIcons[type.slug];
              return (
                <Link
                  key={type.slug}
                  href={`/resources/${type.slug}`}
                  className="rounded-2xl border border-slate-200 p-5 transition-all hover:border-fuchsia-200 hover:shadow-sm"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${typeColors[type.slug]}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {type.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50 border-b border-slate-200">
        <div className="page-shell">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Layers3 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em] mb-1">
                Compliance Collections
              </p>
              <h2 className="heading-lg text-slate-900">
                Follow a full topic, not just a single article
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {resourceCollections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/collection/${collection.slug}`}
                className="group rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${collection.accent}`} />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors group-hover:text-fuchsia-700">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {collection.summary}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
                    Best for
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-5">
                    {collection.audience}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600">
                    View collection <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-b border-slate-200">
        <div className="page-shell">
          <div className="flex items-center justify-between gap-6 mb-10">
            <div>
               <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                Featured
              </p>
              <h2 className="heading-lg text-slate-900">
                Popular starting points
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredResources.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.type}/${article.slug}`}
                className="rounded-2xl border border-slate-200 p-6 transition-all hover:border-fuchsia-200 hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">
                  <span>{article.category}</span>
                  <span className="text-slate-300">/</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {article.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600">
                  Read resource <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="flex items-center justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em] mb-3">
                All Resources
              </p>
              <h2 className="heading-lg text-slate-900">
                Latest articles and downloads
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              {totalResources} resources live
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {latestResources.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.type}/${article.slug}`}
                className="rounded-2xl border border-slate-200 p-6 transition-all hover:border-fuchsia-200 hover:shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                    {
                      resourceTypes.find((type) => type.slug === article.type)
                        ?.title
                    }
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-fuchsia-50 text-fuchsia-700 font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {article.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
