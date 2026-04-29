import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { BarChart3, Users, ArrowRight, AlertTriangle, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Risk Management",
  description:
    "Log, prioritize, assign, and remediate risks with full audit trails. CloudAnzen's risk management module brings visibility to every risk in your program.",
};

const features = [
  { icon: AlertTriangle, title: "Risk register with full audit trail", desc: "Every risk entry, status change, and comment is logged with timestamps and owner attribution." },
  { icon: Users, title: "Owner assignment and accountability", desc: "Assign risks to owners, set review dates, and track treatment plans to closure." },
  { icon: BarChart3, title: "Risk scoring and prioritization", desc: "Use likelihood × impact scoring to prioritize which risks get resources first." },
  { icon: FileCheck, title: "Treatment plan tracking", desc: "Accept, mitigate, transfer, or avoid — track every decision and evidence of action." },
];

export default function RiskManagementPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Risk Management"
        title="Risk management with"
        titleHighlight="complete visibility"
        subtitle="Centralize every risk in one place. Assign owners, track treatment plans, and maintain a full audit trail from identification to closure."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "See platform overview", href: "/platform" }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/Risks.png"
              alt="CloudAnzen Risk Management interface"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-slate-900 p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Replace your risk spreadsheet today</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">See how teams use CloudAnzen to manage risk across ISO 27001, SOC 2, and internal programs.</p>
            <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors">
              Book a demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
