import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  FileCheck2,
  GitPullRequest,
  KeyRound,
  LockKeyhole,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/platform/ai-governance" },
  title: "AI Governance",
  description:
    "Operate AI governance with system inventory, model and vendor register, use-case approvals, risk classification, evidence, and AI Trust Packs.",
};

const modules = [
  {
    icon: Database,
    title: "AI system inventory",
    text: "Track AI features, use cases, owners, lifecycle stage, customer exposure, and the data classes each system touches.",
  },
  {
    icon: Bot,
    title: "Model and vendor register",
    text: "Record model providers, versions, DPA status, retention terms, training posture, regions, subprocessors, and approval state.",
  },
  {
    icon: GitPullRequest,
    title: "Use-case approvals",
    text: "Route proposed AI usage through security, privacy, and risk review before it becomes production behavior.",
  },
  {
    icon: ShieldAlert,
    title: "AI risk classification",
    text: "Score risks such as data leakage, hallucination, prompt injection, missing human oversight, and unapproved model usage.",
  },
  {
    icon: FileCheck2,
    title: "Evidence and model cards",
    text: "Attach model cards, impact assessments, vendor reviews, policies, prompt logging records, and human oversight designs.",
  },
  {
    icon: LockKeyhole,
    title: "AI Trust Pack",
    text: "Package your AI governance posture, approved models, data handling commitments, and Trust Center links for buyers.",
  },
];

const approvalSteps = [
  "Describe the AI use case and business purpose",
  "Declare customer data, PII, and sensitive data exposure",
  "Select the approved model or vendor",
  "Calculate risk tier and required reviews",
  "Attach evidence, model card, and vendor review",
  "Approve, approve with conditions, reject, or retire",
];

export default function AiGovernancePage() {
  return (
    <div>
      <PageHero
        badge="Platform · AI Governance"
        title="Govern AI systems"
        titleHighlight="with evidence"
        subtitle="CloudAnzen gives AI-native teams a system of record for models, vendors, use cases, risks, evidence, and customer-facing AI trust commitments."
        ctaPrimary={{ label: "Book AI Trust Demo", href: "/demo" }}
        ctaSecondary={{ label: "For AI startups", href: "/solutions/ai-startups" }}
      />

      <section className="section-pad border-b border-slate-200 bg-white">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
              AI governance module
            </p>
            <h2 className="heading-lg mb-4 text-slate-900">
              Everything an enterprise buyer asks about AI, connected to proof
            </h2>
            <p className="leading-relaxed text-slate-600">
              Replace scattered spreadsheets and ad hoc questionnaire answers
              with one governed workflow for AI system inventory, provider
              approval, model risk, evidence, and customer disclosure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-slate-200 bg-slate-50">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                Approval workflow
              </p>
              <h2 className="heading-lg mb-4 text-slate-900">
                Make every AI use case reviewable before launch
              </h2>
              <p className="leading-relaxed text-slate-600">
                CloudAnzen can turn AI intake into a repeatable workflow:
                classify the risk, request the right approvals, generate
                evidence tasks, and preserve the audit trail.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <ol className="space-y-4">
                {approvalSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-50 text-sm font-bold text-fuchsia-700">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm font-medium text-slate-700">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">
              <KeyRound className="mb-6 h-10 w-10 text-emerald-300" />
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                Enterprise AI data control
              </p>
              <h2 className="heading-lg mb-4">
                Bring your approved AI provider and deployment model
              </h2>
              <p className="leading-relaxed text-slate-300">
                BYOK, Dedicated Cloud, and BYOC options help enterprise teams
                keep AI workflows aligned to their procurement, retention, and
                data-governance requirements.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Bring-your-own-key for approved AI providers",
                "Approved model/provider routing for sensitive workflows",
                "Prompt and generation audit logs",
                "Trust Center disclosures for data handling and AI governance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Book AI Trust Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
