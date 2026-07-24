import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileCheck2,
  KeyRound,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/ai-startups" },
  title: "For AI Startups",
  description:
    "CloudAnzen helps AI-native companies win enterprise trust with compliance automation, AI governance, Trust Center workflows, and security questionnaire readiness.",
};

const buyerQuestions = [
  "Do you train models on customer data?",
  "Which AI vendors and model providers process our data?",
  "Can we bring our own AI key or approved model provider?",
  "How do you review high-risk AI use cases before release?",
  "Can you share SOC 2, ISO 27001, or ISO 42001 evidence?",
  "How do you handle human oversight, model risk, and customer opt-out requests?",
];

const workflowSteps = [
  {
    icon: Database,
    title: "Map your AI systems",
    text: "Inventory AI features, models, vendors, data classes, owners, and customer-facing use cases before the buyer asks.",
  },
  {
    icon: ShieldCheck,
    title: "Build audit-ready governance",
    text: "Connect AI policies, model cards, impact assessments, vendor reviews, risks, and evidence to SOC 2, ISO 27001, and ISO 42001.",
  },
  {
    icon: FileCheck2,
    title: "Answer enterprise reviews",
    text: "Generate grounded questionnaire answers and AI Trust Packs from approved evidence, policies, and Trust Center content.",
  },
];

const sprintDeliverables = [
  "AI system inventory",
  "AI vendor/model register",
  "AI governance policy pack",
  "SOC 2 + ISO 42001 readiness baseline",
  "Trust Center AI section draft",
  "Security questionnaire answer library",
  "Customer-ready AI Trust Pack",
];

export default function AiStartupsPage() {
  return (
    <div>
      <PageHero
        badge="Solutions · AI Startups"
        title="Win enterprise trust"
        titleHighlight="for your AI product"
        subtitle="CloudAnzen helps AI-native teams prove security, compliance, AI governance, and customer data controls without hiring a full GRC team."
        ctaPrimary={{ label: "Book AI Trust Demo", href: "/demo" }}
        ctaSecondary={{ label: "See Vanta comparison", href: "/compare/vanta-drata" }}
      />

      <section className="section-pad border-b border-slate-200 bg-white">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                The enterprise AI trust gap
              </p>
              <h2 className="heading-lg mb-4 text-slate-900">
                Buyers are asking questions classic compliance tools were not
                built to answer
              </h2>
              <p className="leading-relaxed text-slate-600">
                AI startups do not only need SOC 2 evidence. They need a clear
                story for how customer data, model providers, human oversight,
                AI vendors, and AI risks are governed across the product.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {buyerQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-relaxed text-slate-700"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-slate-200 bg-slate-50">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
              AI Trust Operations
            </p>
            <h2 className="heading-lg mb-4 text-slate-900">
              Compliance, AI governance, and customer trust in one workflow
            </h2>
            <p className="leading-relaxed text-slate-600">
              CloudAnzen turns scattered security review answers into a live
              system of record for AI systems, models, vendors, evidence,
              controls, and customer-facing trust commitments.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {workflowSteps.map(({ icon: Icon, title, text }) => (
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

      <section className="section-pad border-b border-slate-200 bg-white">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">
              <Bot className="mb-6 h-10 w-10 text-emerald-300" />
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                30-Day AI Trust Readiness Sprint
              </p>
              <h2 className="heading-lg mb-4">
                Package the proof your next enterprise buyer needs
              </h2>
              <p className="leading-relaxed text-slate-300">
                Use CloudAnzen to move from ad hoc questionnaire answers to a
                buyer-ready AI trust package that links policies, vendors,
                models, evidence, and customer commitments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="mb-5 text-xl font-semibold text-slate-900">
                Sprint deliverables
              </h3>
              <ul className="space-y-3">
                {sprintDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Book AI Trust Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: KeyRound,
                title: "BYOK and approved AI routing",
                text: "Route sensitive AI workflows through enterprise-approved providers and keys.",
              },
              {
                icon: Layers3,
                title: "ISO 42001 plus SOC 2",
                text: "Map AI governance evidence to frameworks buyers already understand.",
              },
              {
                icon: ClipboardCheck,
                title: "AI Trust Center content",
                text: "Publish or gate AI governance, data handling, and model-provider answers.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-700">
                  <Icon className="h-5 w-5" />
                </div>
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
