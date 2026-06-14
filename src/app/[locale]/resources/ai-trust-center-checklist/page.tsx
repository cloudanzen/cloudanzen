import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Trust Center Checklist",
  description:
    "A practical checklist for AI companies building Trust Center sections for AI governance, model providers, data handling, BYOK, and human oversight.",
};

const checklist = [
  "AI governance overview",
  "Approved AI vendors and model providers",
  "Data handling and retention FAQ",
  "Customer data training statement",
  "Human oversight and review process",
  "BYOK / approved model routing support",
  "Dedicated Cloud / BYOC deployment support",
  "Responsible AI policy links",
  "AI incident response process",
  "Customer commitments and subprocessors",
];

export default function AiTrustCenterChecklistPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffdf8_0%,#f8fafc_48%,#f6fffb_100%)] pt-32 pb-20">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="page-shell relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-fuchsia-100 bg-fuchsia-50 px-3 py-1 text-sm font-semibold text-fuchsia-700">
                Resource · AI Trust Center checklist
              </p>
              <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Show buyers how your AI is governed
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                Use this checklist to add buyer-ready AI governance, model,
                data handling, BYOK, and human oversight sections to your Trust
                Center.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  Request checklist <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/platform/trust-center"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  See Trust Center
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-5 flex items-center gap-3">
                <Globe className="h-6 w-6 text-fuchsia-600" />
                <h2 className="text-xl font-semibold text-slate-900">
                  AI Trust Center sections
                </h2>
              </div>
              <ul className="space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Governance proof",
                text: "Surface AI policies, review cadence, oversight, and incident process in a format buyers can inspect.",
              },
              {
                icon: KeyRound,
                title: "Data-control answers",
                text: "Explain BYOK, approved provider routing, customer-data training posture, retention, and opt-out paths.",
              },
              {
                icon: FileText,
                title: "Gated resources",
                text: "Share model cards, AI governance summaries, subprocessors, and impact assessments publicly or behind access approval.",
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
