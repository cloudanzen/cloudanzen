import type { Metadata } from "next";
import Link from "next/link";
import {
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
  ArrowRight,
  BookOpen,
  Mail,
  Lightbulb,
} from "lucide-react";
import { helpCategories } from "@/lib/help-content";
import HelpSearch from "@/components/HelpSearch";

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Find answers, guides, and resources to get the most out of CloudAnzen's GRC platform.",
};

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Plug: <Plug className="w-6 h-6" />,
  FolderCheck: <FolderCheck className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  Building: <Building className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  MessageSquareText: <MessageSquareText className="w-6 h-6" />,
};

const quickLinks = [
  {
    title: "Getting Started Guide",
    href: "/help/getting-started/welcome-to-cloudanzen",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Quick Start Checklist",
    href: "/help/getting-started/quick-start-checklist",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: "Connect Your First Integration",
    href: "/help/integrations/connecting-integrations",
    icon: <Plug className="w-5 h-5" />,
  },
  {
    title: "Prepare for Your Audit",
    href: "/help/audit-readiness/preparing-for-audit",
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
  {
    title: "Set Up Continuous Monitoring",
    href: "/help/continuous-monitoring/how-monitoring-works",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    title: "Contact Support",
    href: "/contact",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function HelpCenterPage() {
  return (
    <>
      {/* Hero with search */}
      <section className="relative gradient-hero overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-20 left-1/3 h-80 w-80 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="page-shell relative text-center">
          <span className="mb-5 inline-block rounded-full border border-fuchsia-100 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
            Help Center
          </span>
          <h1 className="heading-display mb-4 max-w-3xl mx-auto text-slate-950">
            How can we{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
              help you?
            </span>
          </h1>
          <p className="mb-10 max-w-2xl mx-auto text-xl leading-relaxed text-slate-600">
            Find answers, guides, and resources to get the most out of
            CloudAnzen.
          </p>
          <HelpSearch />
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative -mt-8 z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Popular Resources
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center rounded-xl p-3 text-center transition-colors hover:bg-fuchsia-50"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-50 text-fuchsia-600 transition-colors group-hover:bg-fuchsia-100">
                  {link.icon}
                </div>
                <span className="text-xs font-medium leading-tight text-slate-700 group-hover:text-fuchsia-700">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="section-pad page-shell">
        <div className="text-center mb-12">
          <h2 className="heading-xl text-slate-900 mb-3">Browse by Topic</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Explore our knowledge base organized by feature area.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {helpCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/help/${category.slug}`}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-fuchsia-200 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-50 to-emerald-50 text-fuchsia-600 transition-colors group-hover:from-fuchsia-100 group-hover:to-emerald-100">
                {iconMap[category.icon]}
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-slate-900 transition-colors group-hover:text-fuchsia-700">
                {category.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {category.articles.length}{" "}
                  {category.articles.length === 1 ? "article" : "articles"}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-fuchsia-600" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-4 text-slate-900">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="mb-8 text-lg text-slate-600">
            Our support team is here to help. Reach out and we&apos;ll get back
            to you within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-base font-semibold text-white transition-all shadow-lg shadow-slate-900/10 hover:bg-slate-800"
            >
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/85 px-7 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-white"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
