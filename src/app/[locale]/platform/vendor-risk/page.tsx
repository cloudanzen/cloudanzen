import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Building2, ClipboardCheck, ArrowRight, RotateCcw, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Vendor Risk Management",
  description:
    "Standardize vendor onboarding, assessments, and ongoing oversight. CloudAnzen keeps your third-party risk program organized and auditable.",
};

const features = [
  { icon: Building2, title: "Vendor inventory", desc: "Maintain a complete, up-to-date inventory of all third-party vendors with risk tiers and business context." },
  { icon: ClipboardCheck, title: "Standardized assessments", desc: "Send questionnaires, collect evidence, and track review status for every vendor in one workflow." },
  { icon: RotateCcw, title: "Periodic review scheduling", desc: "Set review frequencies by risk tier. CloudAnzen reminds owners before reviews are due." },
  { icon: ShieldAlert, title: "Inherent and residual risk scoring", desc: "Score vendors on inherent risk and residual risk after controls, aligned with your risk appetite." },
];

export default function VendorRiskPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Vendor Risk"
        title="Vendor risk management"
        titleHighlight="built for scale"
        subtitle="Review vendors with standardized workflows, track ongoing oversight, and keep your third-party risk program audit-ready."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "See platform overview", href: "/platform" }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/Vendor.png"
              alt="CloudAnzen Vendor Risk Management interface"
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
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-violet-700 p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Get your vendor program under control</h2>
            <p className="text-violet-200 mb-8 max-w-lg mx-auto">See how CloudAnzen helps procurement, security, and compliance teams work together on vendor risk.</p>
            <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-violet-700 font-semibold hover:bg-violet-50 transition-colors">
              Book a demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
