import Link from "next/link";
import { CheckCircle2, ArrowRight, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";

interface FrameworkPageProps {
  name: string;
  fullName: string;
  badge: string;
  description: string;
  whatIs: string;
  benefits: string[];
  modules: { title: string; desc: string }[];
  ctaLabel?: string;
  accentColor?: string;
}

export default function FrameworkPage({
  name,
  fullName,
  badge,
  description,
  whatIs,
  benefits,
  modules,
  ctaLabel = "Start your " + name + " journey",
  accentColor = "bg-[linear-gradient(135deg,#fdf4ff_0%,#fff7ed_50%,#ecfdf5_100%)] border border-white/80 shadow-[0_18px_40px_rgba(15,23,42,0.06)]",
}: FrameworkPageProps) {
  return (
    <div>
      <PageHero
        badge={badge}
        title={`${name} compliance,`}
        titleHighlight="automated end-to-end"
        subtitle={description}
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "See all frameworks", href: "/platform" }}
      />

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="heading-lg text-slate-900 mb-4">
                What is {fullName}?
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">{whatIs}</p>
              <h3 className="font-semibold text-slate-900 mb-4">
                How CloudAnzen helps
              </h3>
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
              {modules.map(({ title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50 hover:shadow-sm transition-all"
                >
                  <FileText className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {title}
                    </p>
                    <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${accentColor} rounded-3xl p-10 text-center`}>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">{ctaLabel}</h2>
            <p className="mx-auto mb-8 max-w-lg text-slate-600">
              Talk to our team to see how CloudAnzen maps controls, collects
              evidence, and gets you audit-ready for {name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Book a demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/platform/compliance-automation"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-white"
              >
                See compliance automation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
