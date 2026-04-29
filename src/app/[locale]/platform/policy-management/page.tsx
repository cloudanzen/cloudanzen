import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { FileText, CheckCircle2, ArrowRight, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Policy Management",
  description: "Centralize security policies, manage approvals and review cycles, and track employee acknowledgements — all in CloudAnzen.",
};

export default function PolicyManagementPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Policy Management"
        title="Policy management"
        titleHighlight="without the chaos"
        subtitle="Create, approve, distribute, and track every security policy from one place — with full version history and auditor access."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/Compliance_Policy.png"
              alt="CloudAnzen Policy Management interface"
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
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: FileText, title: "Policy library", desc: "Pre-built templates for 40+ common security policies, ready to customize and publish.", color: "bg-sky-100 text-sky-600" },
              { icon: Users, title: "Approval workflows", desc: "Route policies through defined approvers before publishing. Every approval is logged.", color: "bg-sky-100 text-sky-600" },
              { icon: Clock, title: "Review cycles", desc: "Set annual or custom review dates. CloudAnzen reminds owners and tracks completion.", color: "bg-sky-100 text-sky-600" },
              { icon: CheckCircle2, title: "Employee acknowledgements", desc: "Send policies to all staff and track who has acknowledged, with timestamped records.", color: "bg-sky-100 text-sky-600" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition-all">
                <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-slate-900 p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Policies that stay current</h2>
            <p className="text-slate-400 mb-8">Stop version-controlling Word docs in Google Drive. See how CloudAnzen manages your entire policy lifecycle.</p>
            <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-500 transition-colors">
              Book a demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
