import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import {
  getArticlesByType,
  getCollection,
  getResourceArticle,
  resourceArticles,
} from "@/lib/resources-content";
import { markdownToHtml } from "@/lib/markdown-to-html";

export async function generateStaticParams() {
  return resourceArticles.map((article) => ({
    type: article.type,
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string; slug: string }>;
}): Promise<Metadata> {
  const { type, slug } = await params;
  const article = getResourceArticle(type, slug);

  if (!article) {
    return { title: "Not Found" };
  }

  return {
    title: `${article.title} | CloudAnzen Resources`,
    description: article.summary,
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ type: string; slug: string }>;
}) {
  const { type, slug } = await params;
  const article = getResourceArticle(type, slug);

  if (!article) notFound();

  const typeArticles = getArticlesByType(article.type);
  const articleIndex = typeArticles.findIndex(
    (entry) => entry.slug === article.slug,
  );
  const prevArticle = articleIndex > 0 ? typeArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < typeArticles.length - 1
      ? typeArticles[articleIndex + 1]
      : null;
  const collection = article.collection
    ? getCollection(article.collection)
    : null;
  const contentHtml = markdownToHtml(article.content);

  return (
    <>
      <section className="relative gradient-hero overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8">
            <Link
              href="/resources"
              className="transition-colors hover:text-slate-800"
            >
              Resources
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href={`/resources/${article.type}`}
              className="transition-colors hover:text-slate-800"
            >
              {article.type === "blog"
                ? "Blog"
                : article.type === "guides"
                  ? "Guides"
                  : article.type === "templates"
                    ? "Templates"
                    : article.type === "glossary"
                      ? "Glossary"
                      : "Compliance Checklists"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="max-w-[280px] truncate text-slate-900">
              {article.title}
            </span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="rounded-full border border-slate-200 bg-white/85 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm">
              {article.category}
            </span>
            <span className="rounded-full border border-slate-200 bg-white/85 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm">
              {article.readTime}
            </span>
            {collection ? (
              <Link
                href={`/collection/${collection.slug}`}
                className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-2.5 py-1 text-xs text-fuchsia-700 transition-colors hover:bg-fuchsia-100"
              >
                {collection.title} collection
              </Link>
            ) : null}
          </div>

          <h1 className="heading-xl mb-3 text-slate-950">{article.title}</h1>
          <p className="max-w-2xl text-lg text-slate-600">{article.summary}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>

      <section className="pb-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 lg:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
            Keep the momentum
          </p>
          <h2 className="text-2xl font-bold text-white mb-3">
            Turn this guidance into a working program
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            CloudAnzen helps teams connect evidence, review failing controls,
            manage risk, and stay audit-ready across frameworks from one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Book a demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/platform/compliance-automation"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white border border-white/15 font-semibold hover:bg-white/15 transition-colors"
            >
              See compliance automation
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-8">
          <div className="flex items-center justify-between gap-4">
            {prevArticle ? (
              <Link
                href={`/resources/${prevArticle.type}/${prevArticle.slug}`}
                className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 p-4 transition-all hover:border-fuchsia-200 hover:shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0 text-slate-400 transition-all group-hover:text-fuchsia-600" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Previous</p>
                  <p className="truncate text-sm font-semibold text-slate-800 group-hover:text-fuchsia-700">
                    {prevArticle.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle ? (
              <Link
                href={`/resources/${nextArticle.type}/${nextArticle.slug}`}
                className="group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-xl border border-slate-200 p-4 text-right transition-all hover:border-fuchsia-200 hover:shadow-sm"
              >
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Next</p>
                  <p className="truncate text-sm font-semibold text-slate-800 group-hover:text-fuchsia-700">
                    {nextArticle.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 text-slate-400 transition-all group-hover:text-fuchsia-600" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/resources/${article.type}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-600 transition-colors hover:text-fuchsia-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to {article.type}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
