import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

interface SolutionPageProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  benefits: string[];
  useCases: { title: string; desc: string }[];
  testimonial?: { quote: string; name: string; role: string };
  accentColor?: string;
}

export default function SolutionPage({
  badge,
  title,
  titleHighlight,
  subtitle,
  description,
  benefits,
  useCases,
  testimonial,
  accentColor = "bg-[linear-gradient(135deg,#fdf4ff_0%,#fff7ed_50%,#ecfdf5_100%)] border border-white/80 shadow-[0_18px_40px_rgba(15,23,42,0.06)]",
}: SolutionPageProps) {
  return (
    <div>
      <PageHero
        badge={badge}
        title={title}
        titleHighlight={titleHighlight}
        subtitle={subtitle}
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "See the platform", href: "/platform" }}
      />

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="heading-lg text-slate-900 mb-4">Built for your team</h2>
              <p className="text-slate-500 leading-relaxed mb-8">{description}</p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-slate-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {useCases.map(({ title: t, desc }) => (
                <div key={t} className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 text-sm mb-1">{t}</p>
                  <p className="text-sm text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {testimonial && (
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 mb-16">
              <blockquote>
                <p className="text-xl text-slate-700 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-100 text-sm font-bold text-fuchsia-600">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          )}

          <div className={`${accentColor} rounded-3xl p-10 text-center`}>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">See CloudAnzen in action</h2>
            <p className="mx-auto mb-8 max-w-lg text-slate-600">
              Talk to our team and get a personalized demo tailored to your team&apos;s use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800">
                Book a demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-white">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
