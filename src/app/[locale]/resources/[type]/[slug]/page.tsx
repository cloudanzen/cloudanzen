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
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8">
            <Link
              href="/resources"
              className="hover:text-white transition-colors"
            >
              Resources
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href={`/resources/${article.type}`}
              className="hover:text-white transition-colors"
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
            <span className="text-white truncate max-w-[280px]">
              {article.title}
            </span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
              {article.category}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
              {article.readTime}
            </span>
            {collection ? (
              <Link
                href={`/collection/${collection.slug}`}
                className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-100 border border-blue-300/20 hover:bg-blue-500/30 transition-colors"
              >
                {collection.title} collection
              </Link>
            ) : null}
          </div>

          <h1 className="heading-xl text-white mb-3">{article.title}</h1>
          <p className="text-lg text-slate-300 max-w-2xl">{article.summary}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>

      <section className="pb-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 lg:p-10">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-[0.18em] mb-3">
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
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
                className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex-1 min-w-0"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-all flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Previous</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 truncate">
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
                className="group flex items-center justify-end gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex-1 min-w-0 text-right"
              >
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Next</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 truncate">
                    {nextArticle.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-all flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/resources/${article.type}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
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
