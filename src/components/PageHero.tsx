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
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-20 left-1/3 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

      <div
        className={`page-shell relative ${
          centered ? "text-center" : ""
        }`}
      >
        {badge && (
          <span className="inline-block text-xs font-semibold text-blue-300 uppercase tracking-widest mb-5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/20">
            {badge}
          </span>
        )}
        <h1 className="heading-display text-white mb-6 max-w-4xl mx-auto">
          {title}{" "}
          {titleHighlight && (
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          )}
        </h1>
        <p
          className={`text-xl text-slate-300 leading-relaxed mb-10 ${
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg"
              >
                {ctaPrimary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
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
