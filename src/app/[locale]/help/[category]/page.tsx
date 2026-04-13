import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Rocket,
  ShieldCheck,
  FileText,
  Plug,
  FolderCheck,
  Activity,
  AlertTriangle,
  Building,
  ClipboardCheck,
  Globe,
  Users,
  MessageSquareText,
} from "lucide-react";
import { getCategory, helpCategories } from "@/lib/help-content";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
  Plug: <Plug className="w-7 h-7" />,
  FolderCheck: <FolderCheck className="w-7 h-7" />,
  Activity: <Activity className="w-7 h-7" />,
  AlertTriangle: <AlertTriangle className="w-7 h-7" />,
  Building: <Building className="w-7 h-7" />,
  ClipboardCheck: <ClipboardCheck className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  MessageSquareText: <MessageSquareText className="w-7 h-7" />,
};

export async function generateStaticParams() {
  return helpCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not Found" };
  return {
    title: `${category.title} — Help Center`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />

        <div className="page-shell relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link
              href="/help"
              className="hover:text-white transition-colors"
            >
              Help Center
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{category.title}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-blue-300 flex-shrink-0">
              {iconMap[category.icon]}
            </div>
            <div>
              <h1 className="heading-xl text-white mb-2">{category.title}</h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-pad max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
          {category.articles.length}{" "}
          {category.articles.length === 1 ? "article" : "articles"}
        </h2>
        <div className="space-y-3">
          {category.articles.map((article) => (
            <Link
              key={article.slug}
              href={`/help/${category.slug}/${article.slug}`}
              className="group flex items-center justify-between p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all bg-white"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 truncate">
                  {article.summary}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all ml-4 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* Related Categories */}
      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
          Other Topics
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {helpCategories
            .filter((c) => c.slug !== category.slug)
            .slice(0, 6)
            .map((cat) => (
              <Link
                key={cat.slug}
                href={`/help/${cat.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all bg-white"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <span className="scale-75">{iconMap[cat.icon]}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors truncate">
                    {cat.title}
                  </p>
                  <p className="text-xs text-slate-400">
                    {cat.articles.length} articles
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
