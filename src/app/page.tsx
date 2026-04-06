import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  BarChart3,
  FileText,
  Zap,
  Lock,
  TrendingUp,
  AlertTriangle,
  CloudCog,
  ShieldCheck,
  ClipboardCheck,
  Eye,
  Building2,
  Globe,
} from "lucide-react";

const frameworkBadges = [
  "SOC 2",
  "ISO 27001",
  "GDPR",
  "HIPAA",
  "PCI DSS",
  "NIST CSF",
];

const painPoints = [
  {
    icon: FileText,
    pain: "Manual evidence collection",
    painDesc: "Chasing screenshots and documents slows every audit cycle.",
    outcome: "Automate evidence collection",
    outcomeDesc: "Connect systems and gather evidence continuously.",
  },
  {
    icon: Zap,
    pain: "Security reviews drain time",
    painDesc:
      "Answering buyer questionnaires repeatedly slows deals and overloads lean teams.",
    outcome: "Respond with approved answers",
    outcomeDesc:
      "Reuse approved answers and attach supporting evidence from one place.",
  },
  {
    icon: Globe,
    pain: "Trust requests arrive too early",
    painDesc:
      "Prospects want security documents, policy answers, and proof before your team is ready.",
    outcome: "Publish trust faster",
    outcomeDesc:
      "Share trust-center content and supporting evidence from one source of truth.",
  },
  {
    icon: AlertTriangle,
    pain: "Scattered control ownership",
    painDesc:
      "Teams lose track of who owns what and what still needs attention.",
    outcome: "Assign owners clearly",
    outcomeDesc: "Track controls, tasks, reviews, and due dates in one place.",
  },
];

const modules = [
  {
    icon: ClipboardCheck,
    title: "Compliance Automation",
    desc: "Get SOC 2 and ISO-ready faster with controls, evidence, and audit workflows in one place.",
    href: "/platform/compliance-automation",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Trust Center",
    desc: "Share security posture, policies, and reports without slowing your team down.",
    href: "/platform/trust-center",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Zap,
    title: "Questionnaire Automation",
    desc: "Respond faster to security reviews with reusable answers and supporting evidence.",
    href: "/platform/questionnaire-automation",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    desc: "Track control health continuously instead of relying on point-in-time checks.",
    href: "/platform/continuous-monitoring",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: BarChart3,
    title: "Risk Management",
    desc: "Record risks, assign owners, track treatment plans, and maintain visibility.",
    href: "/platform/risk-management",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Building2,
    title: "Vendor Risk Management",
    desc: "Review vendors with standardized workflows and ongoing oversight.",
    href: "/platform/vendor-risk",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: FileText,
    title: "Policy Management",
    desc: "Centralize policies, approvals, reviews, and version history.",
    href: "/platform/policy-management",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: CheckCircle2,
    title: "Audit Readiness",
    desc: "Organize evidence and streamline auditor collaboration.",
    href: "/platform/audit-readiness",
    color: "from-emerald-500 to-emerald-600",
  },
];

const integrationCategories = [
  { cat: "Cloud", items: ["AWS", "GCP", "Azure"] },
  { cat: "Identity", items: ["Okta", "Google Workspace", "Microsoft Entra"] },
  { cat: "Source Control", items: ["GitHub", "GitLab"] },
  { cat: "HRIS", items: ["BambooHR", "HiBob", "Rippling"] },
  { cat: "Ticketing", items: ["Jira", "Linear", "ServiceNow"] },
  { cat: "Collaboration", items: ["Slack", "Microsoft Teams"] },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect your systems",
    desc: "Integrate cloud infrastructure, identity providers, ticketing tools, HR systems, and collaboration apps in minutes.",
    icon: CloudCog,
  },
  {
    step: "02",
    title: "Monitor controls and collect evidence",
    desc: "CloudAnzen maps evidence to controls and highlights gaps before they become audit problems.",
    icon: Eye,
  },
  {
    step: "03",
    title: "Manage risk and prove trust",
    desc: "Track remediation, review vendors, and share trust artifacts with customers from one source of truth.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative gradient-hero overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* Glow blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-sm font-medium mb-8">
            <TrendingUp className="w-3.5 h-3.5" />
            Built for AI-native teams
          </div>

          {/* Headline */}
          <h1 className="heading-display text-white mb-6 max-w-4xl mx-auto">
            Continuous compliance and trust operations for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              AI-native teams
            </span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            CloudAnzen helps AI and SaaS teams get audit-ready faster, automate
            evidence collection, answer security questionnaires, and run trust
            workflows without building a large GRC function.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
            >
              See CloudAnzen in action
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
            >
              Explore the platform
            </Link>
          </div>
          <p className="text-sm text-slate-400">
            Built for teams pursuing SOC 2, ISO 27001, and enterprise trust
            requirements.
          </p>

          {/* Micro trust row */}
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {frameworkBadges.map((fw) => (
              <span
                key={fw}
                className="px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/75 text-xs font-medium"
              >
                {fw}
              </span>
            ))}
          </div>

          {/* Hero UI mockup */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-slate-800/60 backdrop-blur-sm p-1 shadow-2xl shadow-blue-900/30">
              <div className="rounded-xl bg-slate-900 p-6">
                <div className="flex gap-1.5 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      label: "SOC 2 Readiness",
                      value: "87%",
                      color: "text-teal-400",
                      sub: "13 controls need attention",
                    },
                    {
                      label: "Control Health",
                      value: "142/163",
                      color: "text-blue-400",
                      sub: "passing continuously",
                    },
                    {
                      label: "Open Risks",
                      value: "4",
                      color: "text-orange-400",
                      sub: "2 critical, 2 medium",
                    },
                    {
                      label: "Vendor Reviews",
                      value: "6 pending",
                      color: "text-violet-400",
                      sub: "due this month",
                    },
                    {
                      label: "Evidence Collected",
                      value: "98%",
                      color: "text-emerald-400",
                      sub: "auto-collected last 30d",
                    },
                    {
                      label: "Audit Readiness Score",
                      value: "A−",
                      color: "text-blue-300",
                      sub: "improving week over week",
                    },
                  ].map(({ label, value, color, sub }) => (
                    <div key={label} className="bg-slate-800/80 rounded-lg p-4">
                      <p className="text-xs text-slate-500 mb-1">{label}</p>
                      <p className={`text-2xl font-bold ${color}`}>{value}</p>
                      <p className="text-xs text-slate-500 mt-1">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">
            Trusted by security-conscious teams
          </p>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {[
              "AI startups",
              "B2B SaaS",
              "Fintech",
              "Healthcare",
              "Enterprise software",
            ].map((t) => (
              <span
                key={t}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm text-slate-600 font-medium shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM → OUTCOME ────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3 block">
              The Problem
            </span>
            <h2 className="heading-xl text-slate-900 mb-4">
              Security reviews move faster than your compliance ops
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              AI-native teams need to prove trust early, but evidence,
              questionnaires, and audit prep still get stitched together across
              spreadsheets, shared drives, and Slack threads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map(
              ({ icon: Icon, pain, painDesc, outcome, outcomeDesc }) => (
                <div
                  key={pain}
                  className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Pain */}
                  <div className="p-6 bg-slate-50 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                      {pain}
                    </h3>
                    <p className="text-sm text-slate-500">{painDesc}</p>
                  </div>
                  {/* Outcome */}
                  <div className="p-6 bg-white">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">
                          {outcome}
                        </h4>
                        <p className="text-sm text-slate-500">{outcomeDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── PLATFORM MODULES ─────────────────────────────────────────────── */}
      <section className="section-pad gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3 block">
              The Platform
            </span>
            <h2 className="heading-xl text-slate-900 mb-4">
              One platform for audit readiness and buyer trust
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Start with the workflows that unblock enterprise deals, then grow
              into broader compliance, risk, and control operations over time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modules.map(({ icon: Icon, title, desc, href, color }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-sm`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {desc}
                </p>
                <div className="flex items-center gap-1 text-sm text-blue-600 font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3 block">
              How it works
            </span>
            <h2 className="heading-xl text-white mb-4">How CloudAnzen works</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Get from scattered security work to audit-ready operations in
              days, not months.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {howItWorks.map(({ step, title, desc, icon: Icon }, i) => (
              <div key={step} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent z-10 translate-x-4" />
                )}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-black text-slate-700">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flow diagram */}
          <div className="flex flex-wrap items-center justify-center gap-3 py-6 px-8 rounded-2xl bg-slate-800/60 border border-slate-700">
            {[
              "Integrations",
              "Control Monitoring",
              "Risks & Tasks",
              "Audit & Trust Center",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-lg bg-slate-700 text-sm text-slate-200 font-medium border border-slate-600">
                  {step}
                </span>
                {i < 3 && (
                  <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORKS ───────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3 block">
                Frameworks
              </span>
              <h2 className="heading-xl text-slate-900 mb-6">
                Support multiple frameworks without duplicating work
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                Build once and reuse controls across your security and privacy
                program. CloudAnzen maps shared controls automatically, so you
                never duplicate effort across frameworks.
              </p>
              <ul className="space-y-3">
                {[
                  "Shared control library across all frameworks",
                  "Automatic evidence mapping to multiple audits",
                  "Custom framework support for internal standards",
                  "Auditor collaboration portals per engagement",
                ].map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/frameworks/soc2"
                className="inline-flex items-center gap-2 mt-8 text-blue-600 font-semibold hover:underline"
              >
                Explore frameworks <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                {
                  name: "SOC 2",
                  color: "from-blue-600 to-blue-700",
                  href: "/frameworks/soc2",
                },
                {
                  name: "ISO 27001",
                  color: "from-indigo-600 to-indigo-700",
                  href: "/frameworks/iso27001",
                },
                {
                  name: "GDPR",
                  color: "from-teal-600 to-teal-700",
                  href: "/frameworks/gdpr",
                },
                {
                  name: "HIPAA",
                  color: "from-emerald-600 to-emerald-700",
                  href: "/frameworks/hipaa",
                },
                {
                  name: "PCI DSS",
                  color: "from-violet-600 to-violet-700",
                  href: "/frameworks/pci-dss",
                },
                {
                  name: "NIST CSF",
                  color: "from-sky-600 to-sky-700",
                  href: "/frameworks/nist-csf",
                },
              ].map(({ name, color, href }) => (
                <Link
                  key={name}
                  href={href}
                  className={`group flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br ${color} text-white font-bold text-lg shadow-md hover:scale-105 transition-transform`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3 block">
              Integrations
            </span>
            <h2 className="heading-xl text-slate-900 mb-4">
              Connect the systems your controls already depend on
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              CloudAnzen pulls evidence automatically from your cloud, identity,
              HR, and engineering tools — so your controls are always up to
              date.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationCategories.map(({ cat, items }) => (
              <div
                key={cat}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  {cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-sm text-slate-700 font-medium border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            And dozens more via API and custom integrations.{" "}
            <Link
              href="/platform/integrations"
              className="text-blue-600 hover:underline"
            >
              See all integrations →
            </Link>
          </p>
        </div>
      </section>

      {/* ── TRUST / PROOF ────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3 block">
                Trust Center
              </span>
              <h2 className="heading-xl text-slate-900 mb-6">
                Turn security into a business advantage
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: "Publish a trust center",
                    desc: "Give customers and prospects a dedicated page showing your security posture.",
                  },
                  {
                    title: "Share policies and reports securely",
                    desc: "Gate access to documents with NDA workflows and access request flows.",
                  },
                  {
                    title: "Reduce repetitive questionnaire work",
                    desc: "Reuse approved answers and evidence packages across all security reviews.",
                  },
                  {
                    title: "Help buyers evaluate you faster",
                    desc: "Remove friction from enterprise procurement with always-current compliance badges.",
                  },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {title}
                      </h4>
                      <p className="text-sm text-slate-500">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/platform/trust-center"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
              >
                See Trust Center <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mock Trust Center UI */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
              <div className="bg-slate-900 px-6 py-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-400" />
                <span className="text-white font-semibold text-sm">
                  Trust Center — AcmeCorp
                </span>
              </div>
              <div className="bg-white p-6 space-y-4">
                <div className="flex flex-wrap gap-3">
                  {[
                    "SOC 2 Type II",
                    "ISO 27001",
                    "GDPR Compliant",
                    "HIPAA Ready",
                  ].map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { doc: "Security Overview", status: "Public" },
                    { doc: "SOC 2 Report", status: "NDA Required" },
                    { doc: "Penetration Test", status: "Request Access" },
                    { doc: "Security Policies", status: "Public" },
                  ].map(({ doc, status }) => (
                    <div
                      key={doc}
                      className="flex items-center justify-between py-3 px-4 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-700 font-medium">
                          {doc}
                        </span>
                      </div>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          status === "Public"
                            ? "bg-green-100 text-green-700"
                            : status === "NDA Required"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="section-pad gradient-cta relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-6 block">
            Customer story
          </span>
          <h2 className="heading-xl text-white mb-10">
            Built to help lean teams move faster
          </h2>
          <blockquote className="relative">
            <div className="text-6xl text-white/20 font-serif absolute -top-4 left-0">
              &ldquo;
            </div>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8 relative z-10">
              CloudAnzen gave us a single place to manage controls, evidence,
              vendor reviews, and audit prep. What used to take weeks now feels
              operational.
            </p>
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
              JT
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Jordan Torres</p>
              <p className="text-blue-200 text-sm">
                Head of Security, Fintech startup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="section-pad bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h2 className="heading-xl text-white mb-4">
            Ready to become audit-ready faster?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Use CloudAnzen to streamline compliance work, answer buyer security
            reviews faster, and build trust without spreadsheet-heavy ops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
            >
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
            >
              Explore the platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
