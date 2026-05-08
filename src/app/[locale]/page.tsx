import {
  ArrowRight,
  CheckCircle2,
  Shield,
  BarChart3,
  FileText,
  Zap,
  Lock,
  AlertTriangle,
  CloudCog,
  ShieldCheck,
  ClipboardCheck,
  Eye,
  Building2,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { locales } from "@/i18n/config";
import { HomeHeroStory } from "@/components/HomeHeroStory";

const painPointIcons = [FileText, Zap, Globe, AlertTriangle];

const moduleData = [
  {
    icon: ClipboardCheck,
    href: "/platform/compliance-automation",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    icon: Globe,
    href: "/platform/trust-center",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Zap,
    href: "/platform/questionnaire-automation",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Eye,
    href: "/platform/continuous-monitoring",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: BarChart3,
    href: "/platform/risk-management",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Building2,
    href: "/platform/vendor-risk",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: FileText,
    href: "/platform/policy-management",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: CheckCircle2,
    href: "/platform/audit-readiness",
    color: "from-emerald-500 to-emerald-600",
  },
];

const howItWorksIcons = [CloudCog, Eye, ShieldCheck];

const integrationCategories = [
  { key: "cloud", items: ["AWS", "GCP", "Azure"] },
  { key: "identity", items: ["Okta", "Google Workspace", "Microsoft Entra"] },
  { key: "sourceControl", items: ["GitHub", "GitLab"] },
  { key: "hris", items: ["BambooHR", "HiBob", "Rippling"] },
  { key: "ticketing", items: ["Jira", "Linear", "ServiceNow"] },
  { key: "collaboration", items: ["Slack", "Microsoft Teams"] },
];

const frameworkCards = [
  {
    name: "SOC 2",
    color: "from-fuchsia-600 to-violet-600",
    href: "/frameworks/soc2",
  },
  {
    name: "ISO 27001",
    color: "from-indigo-600 to-indigo-700",
    href: "/frameworks/iso27001",
  },
  {
    name: "GDPR",
    color: "from-emerald-600 to-teal-600",
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
];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffdf8_0%,#f8fafc_42%,#f6fffb_100%)] pt-24 pb-8 sm:pt-28 sm:pb-10 lg:flex lg:min-h-[calc(100vh-4rem)] lg:items-center lg:pt-32 lg:pb-10">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-16 left-[18%] h-96 w-96 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute bottom-4 right-[18%] h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute right-[34%] top-24 h-72 w-72 rounded-full bg-rose-200/25 blur-3xl" />

        <div className="page-shell relative lg:ml-[12.5%] lg:mr-[3.5rem]">
          <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,1.52fr)] lg:gap-16 xl:grid-cols-[minmax(0,0.44fr)_minmax(0,1.56fr)] xl:gap-20">
            <div className="mx-auto max-w-[36rem] pt-0 text-center sm:pt-2 lg:sticky lg:top-1/2 lg:mr-0 lg:-translate-y-1/2">
              <h1 className="mx-auto max-w-[13ch] text-[2rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-slate-950 sm:max-w-[12ch] sm:text-[2.65rem] lg:text-[2.9rem] xl:text-[3.1rem]">
                <span className="block">{t("hero.title")}</span>
                <span className="block bg-gradient-to-r from-fuchsia-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-6 text-slate-600 sm:mt-4 lg:text-[14px]">
                {t("hero.trustNote")}
              </p>

              <div className="mt-4 flex justify-center sm:mt-5">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-[15px] font-semibold text-white transition-all shadow-lg shadow-slate-900/15 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <HomeHeroStory />
          </div>
        </div>
      </section>

      <section className="relative -mt-4 px-4 pb-14 sm:px-6 lg:-mt-8 lg:px-8 lg:pb-18">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
            <div className="grid items-center gap-0 lg:grid-cols-[0.42fr_0.58fr]">
              <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-100 bg-fuchsia-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
                  {t("hero.productTransition.badge")}
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-[2rem]">
                  {t("hero.productTransition.title")}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {t("hero.productTransition.description")}
                </p>

                <div className="mt-6 space-y-3">
                  {([0, 1] as const).map((index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-fuchsia-600" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {t(`hero.productTransition.points.${index}.title`)}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {t(
                            `hero.productTransition.points.${index}.description`,
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,#fff7ed_0%,#faf5ff_100%)] p-3 sm:p-4">
                <div className="overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                  <Image
                    src="/screenshots/AI.png"
                    alt={t("hero.productTransition.imageAlt")}
                    width={1200}
                    height={675}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="page-shell">
          <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">
            {t("socialProof.title")}
          </p>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {(t.raw("socialProof.badges") as string[]).map((badge) => (
              <span
                key={badge}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm text-slate-600 font-medium shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM → OUTCOME ────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="text-center mb-16">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-fuchsia-600">
              {t("problem.label")}
            </span>
            <h2 className="heading-xl text-slate-900 mb-4">
              {t("problem.title")}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {t("problem.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPointIcons.map((Icon, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 bg-slate-50 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                    {t(`problem.items.${i}.pain`)}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {t(`problem.items.${i}.painDesc`)}
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">
                        {t(`problem.items.${i}.outcome`)}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {t(`problem.items.${i}.outcomeDesc`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM MODULES ─────────────────────────────────────────────── */}
      <section className="section-pad gradient-section">
        <div className="page-shell">
          <div className="text-center mb-16">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-fuchsia-600">
              {t("platformModules.label")}
            </span>
            <h2 className="heading-xl text-slate-900 mb-4">
              {t("platformModules.title")}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {t("platformModules.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {moduleData.map(({ icon: Icon, href, color }, i) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-xl"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-sm`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {t(`platformModules.modules.${i}.title`)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {t(`platformModules.modules.${i}.desc`)}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-fuchsia-600 opacity-0 transition-opacity group-hover:opacity-100">
                  {tCommon("cta.learnMore")}{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#fffaf5_0%,#fdf4ff_45%,#f8fafc_100%)] text-slate-900">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-fuchsia-200/20 blur-3xl" />

        <div className="page-shell relative">
          <div className="text-center mb-16">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-fuchsia-600">
              {t("howItWorks.label")}
            </span>
            <h2 className="heading-xl mb-4 text-slate-900">
              {t("howItWorks.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              {t("howItWorks.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {howItWorksIcons.map((Icon, i) => (
              <div key={i} className="relative">
                {i < howItWorksIcons.length - 1 && (
                  <div className="absolute top-10 left-full z-10 hidden h-px w-full translate-x-4 bg-gradient-to-r from-fuchsia-300/70 to-transparent lg:block" />
                )}
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-emerald-500 shadow-[0_12px_28px_rgba(217,70,239,0.18)]">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-4xl font-black text-slate-300">
                      {t(`howItWorks.steps.${i}.step`)}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {t(`howItWorks.steps.${i}.title`)}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {t(`howItWorks.steps.${i}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-8 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            {(t.raw("howItWorks.flowSteps") as string[]).map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                  {step}
                </span>
                {i < 3 && (
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-fuchsia-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORKS ───────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-fuchsia-600">
                {t("frameworks.label")}
              </span>
              <h2 className="heading-xl text-slate-900 mb-6">
                {t("frameworks.title")}
              </h2>
              <p className="text-lg text-slate-500 mb-8">
                {t("frameworks.subtitle")}
              </p>
              <ul className="space-y-3">
                {(t.raw("frameworks.features") as string[]).map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-slate-700">{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/frameworks/soc2"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-fuchsia-600 hover:underline"
              >
                {t("frameworks.exploreLink")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {frameworkCards.map(({ name, color, href }) => (
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
        <div className="page-shell">
          <div className="text-center mb-14">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-fuchsia-600">
              {t("integrations.label")}
            </span>
            <h2 className="heading-xl text-slate-900 mb-4">
              {t("integrations.title")}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {t("integrations.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationCategories.map(({ key, items }) => (
              <div
                key={key}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  {t(`integrations.categories.${key}`)}
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
            {t("integrations.seeAll")}{" "}
            <Link
              href="/platform/integrations"
               className="text-fuchsia-600 hover:underline"
            >
              {t("integrations.seeAllLink")}
            </Link>
          </p>
        </div>
      </section>

      {/* ── TRUST / PROOF ────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-fuchsia-600">
                {t("trustCenter.label")}
              </span>
              <h2 className="heading-xl text-slate-900 mb-6">
                {t("trustCenter.title")}
              </h2>
              <ul className="space-y-5">
                {(
                  t.raw("trustCenter.features") as {
                    title: string;
                    desc: string;
                  }[]
                ).map(({ title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
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
                {t("trustCenter.ctaLabel")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mock Trust Center UI */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 bg-[linear-gradient(90deg,#faf5ff_0%,#f0fdf4_100%)] px-6 py-4">
                <Shield className="h-5 w-5 text-fuchsia-500" />
                <span className="text-sm font-semibold text-slate-900">
                  {t("trustCenter.mock.header")}
                </span>
              </div>
              <div className="bg-white p-6 space-y-4">
                <div className="flex flex-wrap gap-3">
                  {(t.raw("trustCenter.mock.badges") as string[]).map((b) => (
                    <span
                      key={b}
                       className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {(
                    t.raw("trustCenter.mock.docs") as {
                      doc: string;
                      status: string;
                    }[]
                  ).map(({ doc, status }) => (
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
                          status === "Public" || status === "公開"
                            ? "bg-green-100 text-green-700"
                            : status === "NDA Required" || status === "NDA必須"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-fuchsia-100 text-fuchsia-700"
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
          <span className="mb-6 block text-sm font-semibold uppercase tracking-wider text-fuchsia-600">
            {t("testimonial.label")}
          </span>
          <h2 className="heading-xl mb-10 text-slate-900">
            {t("testimonial.title")}
          </h2>
          <blockquote className="relative">
             <div className="absolute -top-4 left-0 font-serif text-6xl text-fuchsia-200">
              &ldquo;
            </div>
            <p className="relative z-10 mb-8 text-xl italic leading-relaxed text-slate-700 md:text-2xl">
              {t("testimonial.quote")}
            </p>
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 font-bold shadow-sm">
              JT
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-900">
                {t("testimonial.author")}
              </p>
              <p className="text-sm text-fuchsia-600">{t("testimonial.role")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_55%,#fdf4ff_100%)]">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-emerald-500 shadow-[0_14px_30px_rgba(217,70,239,0.18)]">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h2 className="heading-xl mb-4 text-slate-900">{t("finalCta.title")}</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-600">
            {t("finalCta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-8 py-4 text-base font-semibold text-white transition-all shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              {t("finalCta.ctaPrimary")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/85 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-white"
            >
              {t("finalCta.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
