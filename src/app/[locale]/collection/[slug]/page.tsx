import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  getArticlesByCollection,
  getCollection,
  resourceCollections,
  resourceTypes,
} from "@/lib/resources-content";

export async function generateStaticParams() {
  return resourceCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    return { title: "Not Found" };
  }

  return {
    title: `${collection.title} Collection`,
    description: collection.summary,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) notFound();

  const articles = getArticlesByCollection(collection.slug);

  return (
    <div>
      <section className="relative gradient-hero overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link
              href="/resources"
              className="hover:text-white transition-colors"
            >
              Resources
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{collection.title} collection</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold text-blue-300 uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20">
              Compliance Collection
            </span>
            <h1 className="heading-display text-white mb-5">
              {collection.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <div>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em] mb-4">
              What this collection helps you do
            </p>
            <div className="grid gap-4">
              {collection.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-2xl border border-slate-200 p-5 bg-slate-50"
                >
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.18em] mb-3">
              Best for
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {collection.audience}
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              Talk to CloudAnzen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.18em] mb-3">
                Collection Articles
              </p>
              <h2 className="heading-lg text-slate-900">Browse the full set</h2>
            </div>
            <p className="text-sm text-slate-500">
              {articles.length} resources in this collection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.type}/${article.slug}`}
                className="rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                    {
                      resourceTypes.find((type) => type.slug === article.type)
                        ?.title
                    }
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
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  Open resource <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
