import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  BarChart3,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance Automation",
  description:
    "Automate evidence collection, map controls to frameworks, and stay audit-ready continuously with CloudAnzen's compliance automation engine.",
};

const features = [
  {
    icon: ClipboardCheck,
    title: "Automated control mapping",
    desc: "Import controls from SOC 2, ISO 27001, HIPAA, GDPR and other frameworks and map them to your environment automatically.",
  },
  {
    icon: FileText,
    title: "Continuous evidence collection",
    desc: "Pull screenshots, logs, and configuration snapshots directly from your integrations — no more chasing document links.",
  },
  {
    icon: BarChart3,
    title: "Gap analysis and remediation tracking",
    desc: "Identify gaps before your auditor does. Assign owners, set due dates, and track closure in one place.",
  },
  {
    icon: Zap,
    title: "Audit-ready at all times",
    desc: "Your compliance posture updates in real time. When the auditor asks for evidence, it's already organized.",
  },
];

export default function ComplianceAutomationPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Compliance Automation"
        title="Automate compliance,"
        titleHighlight="eliminate manual effort"
        subtitle="Map controls to every framework you need, collect evidence automatically, and keep your compliance posture current — without spreadsheets."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{
          label: "See supported frameworks",
          href: "/frameworks/soc2",
        }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/Compliance_Framework.png"
              alt="CloudAnzen Compliance Automation interface"
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
              <div
                key={title}
                className="flex gap-5 p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-fuchsia-100">
                  <Icon className="w-5 h-5 text-fuchsia-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/80 bg-[linear-gradient(135deg,#fdf4ff_0%,#fff7ed_50%,#ecfdf5_100%)] p-10 text-center shadow-[0_18px_40px_rgba(15,23,42,0.06)] lg:p-16">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Start your compliance program today
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-slate-600">
              Most teams get their first framework mapped in under a week. Talk
              to our team to see how CloudAnzen works for your stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Book a demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/frameworks/soc2"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/85 px-7 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-white"
              >
                See SOC 2 details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key outcomes */}
      <section className="section-pad bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="heading-xl text-slate-900 mb-10">
            What teams achieve
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                stat: "90%",
                label: "reduction in manual evidence collection time",
              },
              { stat: "60%", label: "faster first audit cycle" },
              {
                stat: "100%",
                label: "evidence coverage across all mapped controls",
              },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="mb-2 text-4xl font-black text-fuchsia-600">{stat}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
