import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  getArticlesByType,
  getResourceType,
  resourceTypes,
} from "@/lib/resources-content";

export async function generateStaticParams() {
  return resourceTypes.map((type) => ({ type: type.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const resourceType = getResourceType(type);

  if (!resourceType) {
    return { title: "Not Found" };
  }

  return {
    title: `${resourceType.title} Resources`,
    description: resourceType.description,
  };
}

export default async function ResourceTypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const resourceType = getResourceType(type);

  if (!resourceType) notFound();

  const articles = getArticlesByType(resourceType.slug);

  return (
    <div>
      <PageHero
        badge={`Resources · ${resourceType.title}`}
        title={resourceType.title}
        titleHighlight="for GRC teams"
        subtitle={resourceType.description}
        ctaPrimary={{ label: "See all resources", href: "/resources" }}
      />

      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link
              href="/resources"
              className="hover:text-slate-700 transition-colors"
            >
              Resources
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700">{resourceType.title}</span>
          </nav>

          <div className="space-y-5">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.type}/${article.slug}`}
                className="block rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {article.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
