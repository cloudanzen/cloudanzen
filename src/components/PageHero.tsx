import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  centered?: boolean;
}

export default function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  centered = true,
}: PageHeroProps) {
  return (
    <section className="relative gradient-hero overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-20 left-1/3 h-80 w-80 rounded-full bg-amber-200/35 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

      <div
        className={`page-shell relative ${
          centered ? "text-center" : ""
        }`}
      >
        {badge && (
          <span className="mb-5 inline-block rounded-full border border-fuchsia-100 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
            {badge}
          </span>
        )}
        <h1 className="heading-display mx-auto mb-6 max-w-4xl text-slate-950">
          {title}{" "}
          {titleHighlight && (
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          )}
        </h1>
        <p
          className={`mb-10 text-xl leading-relaxed text-slate-600 ${
            centered ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
        {(ctaPrimary || ctaSecondary) && (
          <div
            className={`flex flex-col sm:flex-row gap-4 ${centered ? "justify-center" : ""}`}
          >
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-base font-semibold text-white transition-all shadow-lg shadow-slate-900/10 hover:bg-slate-800"
              >
                {ctaPrimary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-white"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
