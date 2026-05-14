import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  getCollection,
  resourceCollections,
  resourceTypes,
} from "@/lib/resources-content";
import { getArticleMetasByCollection } from "@/lib/articles";

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

  const articles = getArticleMetasByCollection(collection.slug);

  return (
    <div>
      <section className="relative gradient-hero overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="page-shell relative">
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
            <span className="mb-5 inline-block rounded-full border border-fuchsia-100 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
              Compliance Collection
            </span>
            <h1 className="heading-display mb-5 text-slate-950">
              {collection.title}
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              {collection.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white border-b border-slate-200">
        <div className="page-shell grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-700"
            >
              Talk to CloudAnzen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="flex items-center justify-between gap-6 mb-10">
            <div>
               <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
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
                className="rounded-2xl border border-slate-200 p-6 transition-all hover:border-fuchsia-200 hover:shadow-sm"
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
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600">
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
