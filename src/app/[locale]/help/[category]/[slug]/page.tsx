import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getArticle, getCategory, helpCategories } from "@/lib/help-content";
import { markdownToHtml } from "@/lib/markdown-to-html";

export async function generateStaticParams() {
  return helpCategories.flatMap((cat) =>
    cat.articles.map((article) => ({
      category: cat.slug,
      slug: article.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} — Help Center`,
    description: article.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: catSlug, slug } = await params;
  const article = getArticle(catSlug, slug);
  if (!article) notFound();

  const category = getCategory(catSlug)!;
  const articleIndex = category.articles.findIndex((a) => a.slug === slug);
  const prevArticle =
    articleIndex > 0 ? category.articles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < category.articles.length - 1
      ? category.articles[articleIndex + 1]
      : null;

  const contentHtml = markdownToHtml(article.content);

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/help" className="hover:text-white transition-colors">
              Help Center
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href={`/help/${category.slug}`}
              className="hover:text-white transition-colors"
            >
              {category.title}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white truncate max-w-[200px]">
              {article.title}
            </span>
          </nav>

          <h1 className="heading-xl text-white mb-3">{article.title}</h1>
          <p className="text-lg text-slate-300 max-w-2xl">{article.summary}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>

      {/* Prev / Next Navigation */}
      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 pt-8">
          <div className="flex items-center justify-between gap-4">
            {prevArticle ? (
              <Link
                href={`/help/${category.slug}/${prevArticle.slug}`}
                className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 p-4 transition-all hover:border-fuchsia-200 hover:shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0 text-slate-400 transition-all group-hover:-translate-x-0.5 group-hover:text-fuchsia-600" />
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
                href={`/help/${category.slug}/${nextArticle.slug}`}
                className="group flex min-w-0 flex-1 items-center justify-end gap-3 rounded-xl border border-slate-200 p-4 text-right transition-all hover:border-fuchsia-200 hover:shadow-sm"
              >
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Next</p>
                  <p className="truncate text-sm font-semibold text-slate-800 group-hover:text-fuchsia-700">
                    {nextArticle.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-fuchsia-600" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Back to category */}
        <div className="mt-8 text-center">
          <Link
            href={`/help/${category.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-600 transition-colors hover:text-fuchsia-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All {category.title} articles
          </Link>
        </div>
      </section>
    </>
  );
}
