import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  Gauge,
  Layers3,
  LockKeyhole,
  Minus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CloudAnzen vs Vanta vs Drata",
  description:
    "Compare CloudAnzen, Vanta, and Drata across features, pricing model, AI workflows, trust center capabilities, and compliance automation fit.",
};

const competitors = [
  {
    name: "CloudAnzen",
    position: "AI-native trust operations for lean teams and growing GRC programs",
    pricing: "$499/mo Startup, $1,499/mo Growth, custom Enterprise",
    bestFor:
      "Teams that want transparent pricing, trust workflows, AI-assisted questionnaires, risk, vendor, evidence, and compliance in one workspace.",
    highlight: true,
  },
  {
    name: "Vanta",
    position: "Established trust management and compliance automation platform",
    pricing: "Personalized quote; final cost varies by plan, company size, frameworks, and add-ons",
    bestFor:
      "Teams that want a mature vendor ecosystem and broad compliance automation with quote-based packaging.",
    highlight: false,
  },
  {
    name: "Drata",
    position: "Established compliance automation and GRC platform",
    pricing: "Personalized quote; packaged by plan, framework scope, GRC needs, and add-ons",
    bestFor:
      "Teams that want a larger GRC platform with implementation support and enterprise/compliance automation depth.",
    highlight: false,
  },
];

const comparisonRows = [
  {
    category: "Published cost clarity",
    cloudanzen: "Transparent public pricing for Startup and Growth; Enterprise is custom.",
    vanta: "Quote-based pricing; Vanta asks buyers to request personalized pricing.",
    drata: "Quote-based pricing; Drata presents plan tiers and routes buyers to sales.",
  },
  {
    category: "Starting price signal",
    cloudanzen: "$499/month for Startup; $1,499/month for Growth.",
    vanta: "Not publicly listed on the official pricing page.",
    drata: "Not publicly listed on the official plans page.",
  },
  {
    category: "Compliance automation",
    cloudanzen: "SOC 2, ISO 27001, ISO 42001, GDPR, HIPAA, PCI DSS, NIST CSF, custom frameworks.",
    vanta: "Strong fit for common frameworks including SOC 2, ISO 27001, HIPAA, PCI, GDPR, and related programs.",
    drata: "Strong multi-framework automation for SOC 2, ISO 27001, HIPAA, GDPR, CMMC, and enterprise programs.",
  },
  {
    category: "AI direction",
    cloudanzen: "AI-native workflows with bring-your-own-key support, so enterprise teams can route AI work through their approved model/provider.",
    vanta: "Vanta Agent supports trust, questionnaires, audit prep, risk, and related workflows.",
    drata: "Drata positions around agentic trust and AI-powered GRC workflows.",
  },
  {
    category: "AI-native company fit",
    cloudanzen: "Designed for AI companies selling to enterprises: AI governance, BYOK, Trust Center content, questionnaires, ISO 42001, and buyer proof in one motion.",
    vanta: "Broad trust management platform; AI-specific workflow fit should be evaluated against the buyer's AI governance requirements.",
    drata: "Broad compliance and GRC platform; AI-specific workflow fit should be evaluated against the buyer's AI governance requirements.",
  },
  {
    category: "AI data control",
    cloudanzen: "BYOK lets teams use approved OpenAI or Anthropic keys today, preserving enterprise procurement, retention, and data-governance controls.",
    vanta: "AI data handling and retention should be reviewed in Vanta's contract, DPA, and AI terms.",
    drata: "AI data handling and retention should be reviewed in Drata's contract, DPA, and AI terms.",
  },
  {
    category: "AI Trust Pack",
    cloudanzen: "Prepare a customer-facing package for approved models/vendors, data handling, BYOK, human oversight, AI policies, evidence, and Trust Center links.",
    vanta: "Trust Center and questionnaire workflows are available; confirm support for an AI-specific trust package during procurement.",
    drata: "Trust Center and questionnaire workflows are available; confirm support for an AI-specific trust package during procurement.",
  },
  {
    category: "Enterprise deployment",
    cloudanzen: "Standard SaaS, Dedicated Cloud single-tenant deployment, or BYOC/private deployment options for stricter isolation needs.",
    vanta: "Enterprise deployment and data-isolation requirements should be confirmed during procurement.",
    drata: "Enterprise deployment and workspace/isolation requirements should be confirmed during procurement.",
  },
  {
    category: "Trust Center",
    cloudanzen: "Branded trust center, resource gating, access requests, announcements, and customer trust workflows.",
    vanta: "Mature Trust Center product with customer-facing resources and questionnaire automation options.",
    drata: "Trust Center and SafeBase-related capabilities for customer-facing security review workflows.",
  },
  {
    category: "Questionnaires",
    cloudanzen: "AI-assisted response generation backed by evidence, policies, controls, and prior answers.",
    vanta: "Questionnaire automation is a major trust workflow focus.",
    drata: "AI questionnaire assistance is part of the broader Drata trust/GRC suite.",
  },
  {
    category: "Vendor risk",
    cloudanzen: "Vendor inventory, tiering, assessment workflows, and continuous review context.",
    vanta: "Third-party risk capabilities are available, with agentic TPRM emphasis in recent positioning.",
    drata: "Third-party risk management is a core module with enterprise workflow depth.",
  },
  {
    category: "Implementation style",
    cloudanzen: "Designed for fast setup, direct workflows, and guided support when needed.",
    vanta: "Structured onboarding and self-serve resources with sales-led packaging.",
    drata: "Guided implementation and customer success are emphasized for larger programs.",
  },
  {
    category: "Best buyer fit",
    cloudanzen: "Teams that want modern trust operations without surprise add-on complexity.",
    vanta: "Teams standardizing on an established category leader with a broad partner ecosystem.",
    drata: "Teams needing a mature enterprise GRC/compliance automation platform.",
  },
];

const costRows = [
  {
    item: "Platform subscription",
    cloudanzen: "$499/mo Startup or $1,499/mo Growth; Enterprise custom.",
    vanta: "Custom quote.",
    drata: "Custom quote.",
  },
  {
    item: "Additional frameworks",
    cloudanzen: "Startup includes 1 framework; Growth includes up to 4; Enterprise unlimited.",
    vanta: "Typically plan/add-on dependent; confirm in quote.",
    drata: "Typically plan/add-on dependent; confirm in quote.",
  },
  {
    item: "Trust center",
    cloudanzen: "Basic Trust Center in Startup; custom Trust Center in Growth.",
    vanta: "Available as product/package; confirm plan and add-on terms.",
    drata: "Available as product/package; confirm plan and add-on terms.",
  },
  {
    item: "Questionnaire automation",
    cloudanzen: "Included in Growth.",
    vanta: "Available through Vanta Trust Center/questionnaire workflows; confirm packaging.",
    drata: "Available as AI Questionnaire Assistance; confirm packaging.",
  },
  {
    item: "Audit fees",
    cloudanzen: "Not included; auditor fees are separate.",
    vanta: "Not included; auditor fees are separate.",
    drata: "Not included; auditor fees are separate.",
  },
];

const decisionCards = [
  {
    icon: CircleDollarSign,
    title: "Choose CloudAnzen for cost visibility",
    text: "If you are budgeting now, CloudAnzen publishes the two most common startup and growth tiers so finance and security can align before a sales cycle.",
  },
  {
    icon: Bot,
    title: "Choose CloudAnzen for BYOK AI workflows",
    text: "Enterprise teams can bring approved AI keys instead of sending sensitive trust data through an unapproved default model path.",
  },
  {
    icon: LockKeyhole,
    title: "Choose CloudAnzen for buyer trust operations",
    text: "Trust Center, access requests, security questionnaires, evidence, policies, risks, and vendors stay connected in one workspace.",
  },
];

const featureGroups = [
  {
    icon: ShieldCheck,
    title: "Compliance automation",
    points: ["Control mapping", "Evidence collection", "Framework reuse", "Continuous monitoring"],
  },
  {
    icon: FileCheck2,
    title: "Customer trust",
    points: ["Trust Center", "Private resources", "Questionnaires", "Security review workflows"],
  },
  {
    icon: Layers3,
    title: "Operational GRC",
    points: ["Risk register", "Vendor reviews", "Policies", "Audit readiness"],
  },
  {
    icon: Sparkles,
    title: "AI assistance",
    points: ["Answer drafts", "Evidence synthesis", "Remediation ideas", "Context-aware guidance"],
  },
];

export default function VantaDrataComparisonPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(217,70,239,0.25),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(16,185,129,0.18),transparent_30%)]" />
        <div className="page-shell relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
                Feature and cost comparison
              </p>
              <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                CloudAnzen vs Vanta vs Drata
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Compare three trust and compliance platforms by cost clarity,
                AI workflows, Trust Center depth, questionnaires, vendor risk,
                and audit-readiness fit.
              </p>
              <p className="mt-5 max-w-2xl rounded-2xl border border-white/10 bg-white/8 p-4 text-base font-semibold leading-relaxed text-white">
                CloudAnzen is designed to deliver comparable trust and
                compliance workflows at a lower, more predictable total cost.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View CloudAnzen pricing
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/8 p-5 shadow-2xl backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-fuchsia-100">
                    Quick read
                  </p>
                  <p className="text-xs text-slate-400">
                    Public buyer evaluation summary
                  </p>
                </div>
                <Gauge className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="space-y-3">
                {competitors.map((item) => (
                  <div
                    key={item.name}
                    className={`rounded-2xl border p-4 ${
                      item.highlight
                        ? "border-emerald-300/40 bg-emerald-300/10"
                        : "border-white/10 bg-white/6"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <h2 className="font-semibold text-white">{item.name}</h2>
                      {item.highlight ? (
                        <span className="rounded-full bg-emerald-300 px-2.5 py-1 text-xs font-bold text-slate-950">
                          Transparent
                        </span>
                      ) : (
                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-slate-300">
                          Quote-based
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {item.pricing}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-slate-200 bg-white">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
              Which platform fits?
            </p>
            <h2 className="heading-lg mb-4 text-slate-900">
              Start with buying motion, not just feature checkboxes
            </h2>
            <p className="leading-relaxed text-slate-600">
              Vanta and Drata are mature, quote-based platforms. CloudAnzen is
              designed for teams that want clear pricing, connected trust
              operations, and AI-assisted workflows across compliance, risk,
              evidence, and customer security reviews.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {competitors.map((item) => (
              <article
                key={item.name}
                className={`rounded-3xl border p-7 ${
                  item.highlight
                    ? "border-fuchsia-300 bg-gradient-to-br from-fuchsia-50 via-white to-emerald-50 shadow-sm"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {item.name}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  {item.position}
                </p>
                <div className="mb-5 rounded-2xl bg-slate-50 p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Cost model
                  </p>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.pricing}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.bestFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-slate-200 bg-slate-50">
        <div className="page-shell">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                Feature comparison
              </p>
              <h2 className="heading-lg text-slate-900">
                CloudAnzen, Vanta, and Drata side by side
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-500">
              Competitor packaging changes often. Use this as a buyer guide and
              confirm final scope, add-ons, support, and audit fees during
              procurement.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="min-w-[920px]">
              <div className="grid grid-cols-4 bg-slate-950 text-sm font-semibold text-white">
                <div className="p-4">Category</div>
                <div className="p-4">CloudAnzen</div>
                <div className="p-4">Vanta</div>
                <div className="p-4">Drata</div>
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row.category}
                  className="grid grid-cols-4 border-t border-slate-200 text-sm"
                >
                  <div className="bg-slate-50 p-4 font-semibold text-slate-900">
                    {row.category}
                  </div>
                  <div className="p-4 leading-relaxed text-slate-700">
                    {row.cloudanzen}
                  </div>
                  <div className="p-4 leading-relaxed text-slate-600">
                    {row.vanta}
                  </div>
                  <div className="p-4 leading-relaxed text-slate-600">
                    {row.drata}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-slate-200 bg-white">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
              Cost comparison
            </p>
            <h2 className="heading-lg mb-4 text-slate-900">
              Compare the real buying questions
            </h2>
            <p className="leading-relaxed text-slate-600">
              The platform subscription is only one part of the budget. Teams
              should also compare frameworks, trust center packaging,
              questionnaire automation, implementation, and separate auditor
              fees. CloudAnzen keeps the common startup and growth packages
              public so teams can plan around a more predictable total cost.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200">
            <div className="min-w-[920px]">
              {costRows.map((row, index) => (
                <div
                  key={row.item}
                  className={`grid grid-cols-4 gap-0 ${
                    index === 0 ? "" : "border-t border-slate-200"
                  }`}
                >
                  <div className="bg-slate-950 p-5 font-semibold text-white">
                    {row.item}
                  </div>
                  <div className="bg-emerald-50 p-5 text-sm leading-relaxed text-slate-800">
                    {row.cloudanzen}
                  </div>
                  <div className="bg-white p-5 text-sm leading-relaxed text-slate-600">
                    {row.vanta}
                  </div>
                  <div className="bg-white p-5 text-sm leading-relaxed text-slate-600">
                    {row.drata}
                  </div>
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
              Why CloudAnzen
            </p>
            <h2 className="heading-lg mb-4 text-slate-900">
              Built for modern trust teams that need speed and proof
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {decisionCards.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-700">
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
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                Core CloudAnzen coverage
              </p>
              <h2 className="heading-lg text-slate-900">
                One connected workspace for compliance and trust
              </h2>
            </div>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600 hover:text-fuchsia-700"
            >
              Explore the platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureGroups.map(({ icon: Icon, title, points }) => (
              <div key={title} className="rounded-2xl border border-slate-200 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 font-semibold text-slate-900">{title}</h3>
                <ul className="space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                  Decision checklist
                </p>
                <h2 className="heading-lg mb-4">
                  Ask every vendor the same five questions
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "What is included in the quoted subscription?",
                    "Which frameworks and add-ons change price?",
                    "Are Trust Center and questionnaires included?",
                    "What implementation support is included?",
                    "Which auditor, penetration test, or advisory fees are separate?",
                    "Can we bring our own AI key and approved model provider?",
                    "Do we need standard SaaS, dedicated cloud, or BYOC deployment?",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <Minus className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Want a line-by-line comparison?
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  Bring your Vanta or Drata quote to a CloudAnzen demo and we
                  will map plan scope, add-ons, and implementation costs against
                  your actual compliance roadmap.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Compare with us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
