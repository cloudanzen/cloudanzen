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
  accentColor = "bg-blue-600",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
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
            <h2 className="text-2xl font-bold text-white mb-4">{ctaLabel}</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Talk to our team to see how CloudAnzen maps controls, collects
              evidence, and gets you audit-ready for {name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
              >
                Book a demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/platform/compliance-automation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white border border-white/20 font-semibold hover:bg-white/20 transition-colors"
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
