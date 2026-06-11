import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  KeyRound,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Enterprises",
  description:
    "Enterprise-grade GRC that scales across multiple frameworks, entities, and business units. CloudAnzen supports SaaS, Dedicated Cloud, and private deployment models.",
};

const benefits = [
  "Multi-framework support across ISO 42001, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, NIST CSF, and custom frameworks",
  "Multi-entity and business unit support with cross-framework control reuse",
  "SAML/SSO and SCIM provisioning for enterprise identity management",
  "Role-based access control with custom roles and permissions",
  "API access for integration with internal GRC, ticketing, and SIEM systems",
  "Audit log and immutable evidence chain for regulatory defensibility",
  "Dedicated customer success and onboarding for enterprise rollouts",
];

const useCases = [
  {
    title: "Consolidated GRC across entities",
    desc: "Manage compliance programs across subsidiaries, regions, and business units in one platform.",
  },
  {
    title: "Board and leadership reporting",
    desc: "Generate exec-level dashboards showing risk posture, control health, and framework status.",
  },
  {
    title: "Enterprise vendor risk at scale",
    desc: "Manage hundreds of vendors with tiered review workflows and automated follow-ups.",
  },
];

const deploymentOptions = [
  {
    icon: Cloud,
    name: "CloudAnzen SaaS",
    label: "Standard",
    desc: "The standard managed CloudAnzen service for teams that want fast deployment, continuous updates, and lower operational overhead.",
    points: ["Managed by CloudAnzen", "Shared SaaS control plane", "Fastest onboarding"],
  },
  {
    icon: LockKeyhole,
    name: "CloudAnzen Dedicated Cloud",
    label: "Enterprise",
    desc: "A CloudAnzen-managed, single-tenant deployment for enterprises that need stronger isolation, dedicated environments, and custom governance controls.",
    points: [
      "Dedicated platform and app workspaces",
      "Single-tenant infrastructure option",
      "Enterprise data isolation and retention controls",
    ],
  },
  {
    icon: Network,
    name: "CloudAnzen BYOC / Private Deployment",
    label: "Regulated",
    desc: "For highly regulated customers that require CloudAnzen to run in their cloud account or private network with customer-controlled infrastructure boundaries.",
    points: ["Customer cloud or private network", "Custom network controls", "Designed for strict procurement needs"],
  },
];

const dedicatedCloudControls = [
  {
    icon: Database,
    title: "Dedicated data boundary",
    desc: "Package the platform workspace and app workspace for one enterprise with stronger infrastructure and data-isolation options.",
  },
  {
    icon: KeyRound,
    title: "BYOK and approved AI routing",
    desc: "Route AI-assisted workflows through enterprise-approved keys and providers instead of an unapproved default model path.",
  },
  {
    icon: ShieldCheck,
    title: "Custom governance controls",
    desc: "Support customer-specific retention, access, SSO, SCIM, audit logging, and operational-review requirements.",
  },
];

export default function EnterprisePage() {
  return (
    <div>
      <PageHero
        badge="Solutions · For Enterprise"
        title="Enterprise GRC"
        titleHighlight="at any scale"
        subtitle="CloudAnzen supports complex organizations with multiple frameworks, entities, and business units, plus dedicated deployment options for teams with stricter data-isolation and AI-governance requirements."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "Compare vendors", href: "/compare/vanta-drata" }}
      />

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                Enterprise operating model
              </p>
              <h2 className="heading-lg mb-4 text-slate-900">
                Built for complex compliance programs
              </h2>
              <p className="mb-8 leading-relaxed text-slate-500">
                Large organizations need a GRC platform that can handle multiple
                compliance frameworks simultaneously, support complex role
                hierarchies, integrate with enterprise tools, and generate
                board-level reporting. CloudAnzen is built for that scale.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {useCases.map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all hover:shadow-sm"
                >
                  <p className="mb-1 text-sm font-semibold text-slate-900">
                    {title}
                  </p>
                  <p className="text-sm text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-slate-200 bg-slate-50">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
              Deployment options
            </p>
            <h2 className="heading-lg mb-4 text-slate-900">
              Choose SaaS, Dedicated Cloud, or private deployment
            </h2>
            <p className="leading-relaxed text-slate-600">
              Enterprise teams do not always want the same deployment model as a
              standard SaaS customer. CloudAnzen can package the platform and
              app workspaces together as a managed enterprise deployment for
              stronger isolation, governance, and procurement fit.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {deploymentOptions.map(({ icon: Icon, name, label, desc, points }) => (
              <article
                key={name}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
                    {label}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {desc}
                </p>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">
              <Building2 className="mb-6 h-10 w-10 text-emerald-300" />
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                Dedicated Cloud package
              </p>
              <h2 className="heading-lg mb-4">
                Platform and app workspaces for enterprise customers
              </h2>
              <p className="leading-relaxed text-slate-300">
                CloudAnzen Dedicated Cloud can package both the platform
                workspace and the app workspace as one managed enterprise
                deployment, separate from the standard shared SaaS offering.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {dedicatedCloudControls.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,#fdf4ff_0%,#fff7ed_50%,#ecfdf5_100%)] p-10 text-center shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Discuss your enterprise deployment model
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-slate-600">
              Talk to our team about standard SaaS, Dedicated Cloud, or BYOC
              deployment based on your data-isolation, AI-governance, and
              procurement requirements.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-white"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
