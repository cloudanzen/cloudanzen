import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { getArticle, getCategory, helpCategories } from "@/lib/help-content";

export async function generateStaticParams() {
  return helpCategories.flatMap((cat) =>
    cat.articles.map((article) => ({
      category: cat.slug,
      slug: article.slug,
    }))
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

function markdownToHtml(md: string): string {
  let html = md;

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-slate-900 mt-8 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-slate-900 mt-10 mb-4">$1</h2>');

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');

  // Inline code
  html = html.replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-100 text-sm font-mono text-slate-800">$1</code>');

  // Links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (match) => {
    const cells = match.split("|").filter((c) => c.trim());
    return `<tr>${cells.map((c) => `<td class="px-4 py-2.5 text-sm border-b border-slate-100">${c.trim()}</td>`).join("")}</tr>`;
  });
  html = html.replace(
    /(<tr>.*<\/tr>\n?)+/g,
    (match) => {
      // Remove separator rows (---)
      const rows = match.split("\n").filter((r) => r.trim() && !r.match(/^<tr>(<td[^>]*>\s*-+\s*<\/td>)+<\/tr>$/));
      if (rows.length === 0) return "";
      const [header, ...body] = rows;
      const theadRow = header.replace(/<td/g, "<th").replace(/<\/td>/g, "</th>");
      return `<div class="overflow-x-auto my-6"><table class="w-full border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-50 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">${theadRow}</thead><tbody class="divide-y divide-slate-100">${body.join("\n")}</tbody></table></div>`;
    }
  );

  // Checklists
  html = html.replace(/^- \[ \] (.+)$/gm, '<div class="flex items-start gap-3 py-1"><div class="w-4 h-4 mt-0.5 rounded border-2 border-slate-300 flex-shrink-0"></div><span class="text-sm text-slate-700">$1</span></div>');

  // Unordered lists with bold prefix
  html = html.replace(/^- (.+)$/gm, '<li class="text-sm text-slate-700 leading-relaxed">$1</li>');
  html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, (match) => `<ul class="space-y-2 my-4 ml-4 list-disc list-outside marker:text-slate-400">${match}</ul>`);

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="text-sm text-slate-700 leading-relaxed">$1</li>');

  // Paragraphs (lines that aren't already wrapped)
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      return `<p class="text-base text-slate-600 leading-relaxed my-4">${trimmed}</p>`;
    })
    .join("\n");

  return html;
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
  const prevArticle = articleIndex > 0 ? category.articles[articleIndex - 1] : null;
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
                className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex-1 min-w-0"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:-translate-x-0.5 transition-all flex-shrink-0" />
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
                href={`/help/${category.slug}/${nextArticle.slug}`}
                className="group flex items-center justify-end gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all flex-1 min-w-0 text-right"
              >
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 mb-0.5">Next</p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 truncate">
                    {nextArticle.title}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
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
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All {category.title} articles
          </Link>
        </div>
      </section>
    </>
  );
}
