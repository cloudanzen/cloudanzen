import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CheckCircle2, ArrowRight, Bot, Building2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "CloudAnzen pricing plans for startups, scale-ups, and enterprises. Start with ISO 42001 or SOC 2 and expand to any framework.",
};

const plans = [
  {
    name: "Startup",
    price: "$499",
    period: "/month",
    desc: "For early-stage teams pursuing their first compliance framework.",
    highlight: false,
    features: [
      "1 framework (ISO 42001, SOC 2, or ISO 27001)",
      "Up to 10 integrations",
      "Continuous monitoring",
      "Evidence room",
      "Basic trust center",
      "Email support",
    ],
    cta: "Get started",
    href: "/demo",
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "/month",
    desc: "For scale-ups managing multiple frameworks and vendors.",
    highlight: true,
    features: [
      "Up to 4 frameworks",
      "Unlimited integrations",
      "Vendor risk management",
      "Policy management",
      "Questionnaire automation",
      "Custom trust center",
      "Priority support + CSM",
    ],
    cta: "Book a demo",
    href: "/demo",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For enterprises with complex, multi-entity compliance programs.",
    highlight: false,
    features: [
      "Unlimited frameworks",
      "Multi-entity support",
      "SSO / SCIM provisioning",
      "Dedicated Cloud or BYOC deployment option",
      "Custom roles & permissions",
      "API access",
      "Dedicated CSM & onboarding",
      "SLA guarantees",
    ],
    cta: "Contact sales",
    href: "/contact",
  },
];

const packageMotions = [
  {
    icon: ShieldCheck,
    name: "ComplianceOps for SaaS",
    text: "SOC 2, ISO 27001, vendor risk, policies, evidence, questionnaires, and Trust Center workflows for standard SaaS teams.",
  },
  {
    icon: Bot,
    name: "AI TrustOps for AI companies",
    text: "AI governance, model/vendor register, ISO 42001 readiness, BYOK story, AI Trust Center content, and buyer questionnaire packs.",
  },
  {
    icon: Building2,
    name: "Enterprise Dedicated Cloud / BYOC",
    text: "Package platform.cloudanzen.com and app.cloudanzen.com as a dedicated deployment for stricter isolation, procurement, and data-control needs.",
  },
];

export default function PricingPage() {
  return (
    <div>
      <PageHero
        badge="Pricing"
        title="Transparent pricing"
        titleHighlight="for every stage"
        subtitle="Start with ISO 42001 or SOC 2 and expand to any framework as your compliance program grows. No surprise fees."
      />

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map(({ name, price, period, desc, highlight, features, cta, href }) => (
              <div
                key={name}
                className={`rounded-3xl border p-8 flex flex-col ${
                  highlight
                    ? "border-fuchsia-300 bg-[linear-gradient(135deg,#d946ef_0%,#8b5cf6_45%,#10b981_100%)] text-white shadow-2xl shadow-fuchsia-100 scale-[1.02]"
                    : "border-slate-200 bg-white"
                }`}
              >
                {highlight && (
                  <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full self-start mb-4">
                    Most popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${highlight ? "text-white" : "text-slate-900"}`}>
                  {name}
                </h3>
                <p className={`text-sm mb-6 ${highlight ? "text-white/80" : "text-slate-500"}`}>{desc}</p>
                <div className={`text-4xl font-black mb-1 ${highlight ? "text-white" : "text-slate-900"}`}>
                  {price}
                  <span className={`text-base font-normal ${highlight ? "text-white/75" : "text-slate-400"}`}>
                    {period}
                  </span>
                </div>
                <ul className="space-y-3 my-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${highlight ? "text-white/85" : "text-slate-600"}`}>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${highlight ? "text-white" : "text-emerald-500"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    highlight
                        ? "bg-white text-fuchsia-700 hover:bg-fuchsia-50"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                Package motions
              </p>
              <h2 className="heading-lg mb-4 text-slate-900">
                Pick the motion that matches the buyer conversation
              </h2>
              <p className="leading-relaxed text-slate-600">
                The same platform can support regular SaaS compliance,
                AI-native enterprise trust, or a dedicated enterprise
                deployment when the buyer needs stronger isolation.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {packageMotions.map(({ icon: Icon, name, text }) => (
                <div
                  key={name}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                  Comparing vendors?
                </p>
                <h2 className="heading-lg mb-3">
                  See how CloudAnzen compares with Vanta and Drata
                </h2>
                <p className="text-slate-300">
                  Compare cost model, Trust Center, AI questionnaires, vendor
                  risk, compliance automation, and implementation fit before you
                  commit to a quote-based platform.
                </p>
              </div>
              <Link
                href="/compare/vanta-drata"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
              >
                View comparison <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-slate-900 mb-8 text-center">Common questions</h2>
            <div className="space-y-6">
              {[
                { q: "Can I start with one framework and add more?", a: "Yes. AI-native teams can start with ISO 42001, while many SaaS teams start with SOC 2 and add ISO 27001, GDPR, or HIPAA later. Controls and evidence are automatically reused across frameworks." },
                { q: "Is there a free trial?", a: "We offer a guided proof of concept for qualified prospects. Book a demo and we'll walk you through your specific use case." },
                { q: "What counts as an integration?", a: "Each connected tool (AWS, Okta, GitHub, etc.) counts as one integration. The Growth and Enterprise plans include unlimited integrations." },
                { q: "Do you offer annual billing discounts?", a: "Yes — annual plans include a 20% discount. Ask your account team for details." },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-slate-200 pb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                  <p className="text-sm text-slate-500">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
