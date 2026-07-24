import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileQuestion,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/ai-security-questionnaire-pack" },
  title: "AI Security Questionnaire Pack",
  description:
    "A buyer-facing AI security questionnaire pack with common enterprise questions about model providers, customer data, BYOK, retention, and human oversight.",
};

const questionGroups = [
  {
    title: "Data handling",
    questions: [
      "Do you train models on customer data?",
      "Which customer data classes are sent to AI providers?",
      "How long are prompts and outputs retained?",
      "Can customers opt out of AI processing?",
    ],
  },
  {
    title: "Model and vendor governance",
    questions: [
      "Which model providers and AI vendors do you use?",
      "Do you maintain an approved AI vendor/model register?",
      "Do AI vendors have DPAs and subprocessor disclosures?",
      "How often are model providers reviewed?",
    ],
  },
  {
    title: "Oversight and control",
    questions: [
      "Is human review required for high-impact AI outputs?",
      "How do you test for hallucination, bias, and unsafe output?",
      "Do you support BYOK or approved model routing?",
      "How are AI incidents escalated and remediated?",
    ],
  },
];

export default function AiSecurityQuestionnairePackPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.25),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.18),transparent_30%)]" />
        <div className="page-shell relative">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
              Resource · AI security questionnaire pack
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              50 questions enterprise buyers ask AI vendors
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Use this pack to prepare approved answers about customer data,
              model providers, retention, BYOK, human oversight, and AI risk
              controls before a security review blocks your deal.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                Request the pack <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solutions/ai-startups"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                For AI startups
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
              What the pack covers
            </p>
            <h2 className="heading-lg mb-4 text-slate-900">
              Turn repeated AI security questions into an answer library
            </h2>
            <p className="leading-relaxed text-slate-600">
              CloudAnzen helps teams turn these questions into approved,
              evidence-backed responses grounded in their AI vendor/model
              register, policies, Trust Center, and compliance evidence.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {questionGroups.map(({ title, questions }) => (
              <div key={title} className="rounded-3xl border border-slate-200 p-7">
                <FileQuestion className="mb-5 h-8 w-8 text-fuchsia-600" />
                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {questions.map((question) => (
                    <li key={question} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span className="text-sm text-slate-600">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Map answers to proof",
                text: "Connect responses to policies, AI system records, model cards, vendor reviews, and Trust Center content.",
              },
              {
                icon: LockKeyhole,
                title: "Handle enterprise AI concerns",
                text: "Prepare answers for BYOK, data retention, model routing, customer opt-out, and dedicated deployment questions.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Icon className="mb-5 h-8 w-8 text-slate-950" />
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
