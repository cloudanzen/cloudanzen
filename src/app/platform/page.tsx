import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import {
  ClipboardCheck, Eye, BarChart3, Building2, FileText,
  CheckCircle2, Globe, Zap, Plug2, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform Overview",
  description:
    "CloudAnzen gives you one unified platform for compliance automation, continuous monitoring, risk management, vendor risk, and your trust center.",
};

const modules = [
  {
    icon: ClipboardCheck,
    title: "Compliance Automation",
    desc: "Map controls to frameworks, collect evidence automatically, and stay perpetually audit-ready without manual effort.",
    href: "/platform/compliance-automation",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    desc: "Replace point-in-time checks with always-on control health monitoring across your entire environment.",
    href: "/platform/continuous-monitoring",
    color: "bg-teal-50 text-teal-600 border-teal-200",
  },
  {
    icon: BarChart3,
    title: "Risk Management",
    desc: "Log risks, assign owners, track treatment plans, and maintain a full audit trail from identification to remediation.",
    href: "/platform/risk-management",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
  {
    icon: Building2,
    title: "Vendor Risk Management",
    desc: "Standardize how you review, onboard, and continuously oversee third-party vendors.",
    href: "/platform/vendor-risk",
    color: "bg-violet-50 text-violet-600 border-violet-200",
  },
  {
    icon: FileText,
    title: "Policy Management",
    desc: "Create, approve, distribute, and track acknowledgement of security policies in one place.",
    href: "/platform/policy-management",
    color: "bg-sky-50 text-sky-600 border-sky-200",
  },
  {
    icon: CheckCircle2,
    title: "Audit Readiness",
    desc: "Organize evidence, manage auditor access, and collaborate in a dedicated audit workspace.",
    href: "/platform/audit-readiness",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    icon: Globe,
    title: "Trust Center",
    desc: "Publish a branded trust center that gives customers immediate visibility into your security posture.",
    href: "/platform/trust-center",
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
  {
    icon: Zap,
    title: "Questionnaire Automation",
    desc: "Respond to security reviews faster with an AI-assisted answer library and evidence packages.",
    href: "/platform/questionnaire-automation",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    icon: Plug2,
    title: "Integrations",
    desc: "Connect 100+ cloud, identity, HRIS, ticketing, and collaboration tools to pull evidence automatically.",
    href: "/platform/integrations",
    color: "bg-rose-50 text-rose-600 border-rose-200",
  },
];

export default function PlatformPage() {
  return (
    <div>
      <PageHero
        badge="Platform"
        title="One platform for"
        titleHighlight="compliance, risk, and trust"
        subtitle="CloudAnzen brings every GRC workflow into a single, connected system — so your controls, evidence, risks, policies, and vendor reviews stay synchronized."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "See integrations", href: "/platform/integrations" }}
      />

      <section className="relative -mt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/Home.png"
              alt="CloudAnzen unified dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(({ icon: Icon, title, desc, href, color }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col p-7 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{desc}</p>
                <div className="flex items-center gap-1.5 text-sm text-blue-600 font-medium mt-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
