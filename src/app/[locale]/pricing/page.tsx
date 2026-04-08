import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "CloudAnzen pricing plans for startups, scale-ups, and enterprises. Start with SOC 2 and expand to any framework.",
};

const plans = [
  {
    name: "Startup",
    price: "$499",
    period: "/month",
    desc: "For early-stage teams pursuing their first compliance framework.",
    highlight: false,
    features: [
      "1 framework (SOC 2 or ISO 27001)",
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
      "Custom roles & permissions",
      "API access",
      "Dedicated CSM & onboarding",
      "SLA guarantees",
    ],
    cta: "Contact sales",
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <div>
      <PageHero
        badge="Pricing"
        title="Transparent pricing"
        titleHighlight="for every stage"
        subtitle="Start with SOC 2 and expand to any framework as your compliance program grows. No surprise fees."
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map(({ name, price, period, desc, highlight, features, cta, href }) => (
              <div
                key={name}
                className={`rounded-3xl border p-8 flex flex-col ${
                  highlight
                    ? "border-blue-500 bg-blue-600 text-white shadow-2xl shadow-blue-200 scale-[1.02]"
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
                <p className={`text-sm mb-6 ${highlight ? "text-blue-100" : "text-slate-500"}`}>{desc}</p>
                <div className={`text-4xl font-black mb-1 ${highlight ? "text-white" : "text-slate-900"}`}>
                  {price}
                  <span className={`text-base font-normal ${highlight ? "text-blue-200" : "text-slate-400"}`}>
                    {period}
                  </span>
                </div>
                <ul className="space-y-3 my-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${highlight ? "text-blue-100" : "text-slate-600"}`}>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${highlight ? "text-white" : "text-teal-500"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    highlight
                      ? "bg-white text-blue-700 hover:bg-blue-50"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-slate-900 mb-8 text-center">Common questions</h2>
            <div className="space-y-6">
              {[
                { q: "Can I start with one framework and add more?", a: "Yes. Most customers start with SOC 2 and add ISO 27001, GDPR, or HIPAA later. Controls and evidence are automatically reused across frameworks." },
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
