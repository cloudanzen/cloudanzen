import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { ArrowRight, Plug2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect CloudAnzen to 100+ cloud, identity, HRIS, ticketing, and collaboration tools to collect evidence automatically.",
};

const categories = [
  { cat: "Cloud Infrastructure", color: "bg-fuchsia-50 border-fuchsia-200", items: ["Amazon Web Services", "Google Cloud Platform", "Microsoft Azure", "DigitalOcean", "Heroku"] },
  { cat: "Identity & SSO", color: "bg-emerald-50 border-emerald-200", items: ["Okta", "Google Workspace", "Microsoft Entra ID", "JumpCloud", "OneLogin"] },
  { cat: "Source Control", color: "bg-indigo-50 border-indigo-200", items: ["GitHub", "GitLab", "Bitbucket", "Azure DevOps"] },
  { cat: "HRIS", color: "bg-violet-50 border-violet-200", items: ["BambooHR", "HiBob", "Rippling", "Workday", "Gusto"] },
  { cat: "Ticketing", color: "bg-sky-50 border-sky-200", items: ["Jira", "Linear", "ServiceNow", "Asana", "GitHub Issues"] },
  { cat: "Collaboration", color: "bg-emerald-50 border-emerald-200", items: ["Slack", "Microsoft Teams", "Google Chat"] },
  { cat: "Endpoint & MDM", color: "bg-orange-50 border-orange-200", items: ["Jamf", "Kandji", "CrowdStrike", "SentinelOne"] },
  { cat: "Vulnerability & EDR", color: "bg-red-50 border-red-200", items: ["Snyk", "Tenable", "Qualys", "Wiz", "Lacework"] },
];

export default function IntegrationsPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Integrations"
        title="Connect the systems"
        titleHighlight="your controls depend on"
        subtitle="CloudAnzen pulls evidence automatically from 100+ tools so your controls are always up to date and your audit package is never stale."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/Integrations.png"
              alt="CloudAnzen Integrations interface"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {categories.map(({ cat, color, items }) => (
              <div key={cat} className={`rounded-2xl border p-6 ${color}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Plug2 className="w-4 h-4 text-slate-600" />
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{cat}</p>
                </div>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-slate-700 font-medium">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/80 bg-[linear-gradient(135deg,#fdf4ff_0%,#fff7ed_50%,#ecfdf5_100%)] p-10 text-center shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Don&apos;t see your tool?</h2>
            <p className="mb-8 text-slate-600">CloudAnzen supports custom integrations via API and webhooks. Talk to our team to discuss your stack.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800">
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
