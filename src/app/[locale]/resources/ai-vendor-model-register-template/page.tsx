import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Database,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Vendor and Model Register Template",
  description:
    "A practical register template for tracking AI vendors, models, versions, use cases, data classes, retention terms, DPA status, regions, and risk ratings.",
};

const fields = [
  "Vendor",
  "Model",
  "Version",
  "Use case",
  "Data classes",
  "Training/retention terms",
  "DPA status",
  "Region",
  "Subprocessor status",
  "Risk rating",
  "Review owner",
  "Next review date",
];

export default function AiVendorModelRegisterTemplatePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.24),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.18),transparent_30%)]" />
        <div className="page-shell relative">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
              Resource · AI vendor/model register
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Track every AI vendor and model before procurement asks
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              A register template for the model providers, AI tools, use cases,
              data classes, contract terms, and review owners behind your AI
              product.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Request template <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/platform/ai-governance"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See AI governance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                Register fields
              </p>
              <h2 className="heading-lg mb-4 text-slate-900">
                Make AI vendor governance inspectable
              </h2>
              <p className="leading-relaxed text-slate-600">
                Enterprise buyers want to know which AI providers touch their
                data, how they are reviewed, and what contractual protections
                govern the workflow. This register turns that into an operating
                record.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {fields.map((field) => (
                <div
                  key={field}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                >
                  {field}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Bot,
                title: "Model/provider clarity",
                text: "Know which foundation models, AI APIs, and AI SaaS tools power each customer-facing workflow.",
              },
              {
                icon: Database,
                title: "Data-class controls",
                text: "Record which data types are allowed for each vendor/model combination.",
              },
              {
                icon: ShieldCheck,
                title: "Review cadence",
                text: "Track DPA status, risk rating, review owner, and next review date from one governance view.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 p-6">
                <Icon className="mb-5 h-8 w-8 text-fuchsia-600" />
                <h3 className="mb-3 font-semibold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
