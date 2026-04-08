import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners",
  description: "Join the CloudAnzen partner program — auditors, consultants, MSSPs, and technology partners.",
};

export default function PartnersPage() {
  return (
    <div>
      <PageHero
        badge="Company · Partners"
        title="Grow together with"
        titleHighlight="CloudAnzen"
        subtitle="We partner with auditors, GRC consultants, MSSPs, and technology vendors who share our commitment to making continuous compliance accessible."
        ctaPrimary={{ label: "Apply to partner program", href: "/contact" }}
      />
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { type: "Audit & Consulting Partners", desc: "CPA firms and GRC consultants who use CloudAnzen to deliver compliance engagements for their clients.", perks: ["Co-delivery on customer accounts", "Referral revenue sharing", "Training and certification", "Partner portal and resources"] },
              { type: "MSSP Partners", desc: "Managed security service providers who include CloudAnzen in their compliance-as-a-service offerings.", perks: ["White-label options", "Multi-tenant management dashboard", "Bulk pricing", "Technical onboarding support"] },
              { type: "Technology Partners", desc: "SaaS vendors, cloud platforms, and security tools that integrate with CloudAnzen to extend our evidence network.", perks: ["Native integration development", "Marketplace listing", "Co-marketing opportunities", "Joint GTM planning"] },
            ].map(({ type, desc, perks }) => (
              <div key={type} className="rounded-2xl border border-slate-200 p-8">
                <h3 className="font-bold text-slate-900 mb-3">{type}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{desc}</p>
                <ul className="space-y-2">
                  {perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-blue-600 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Interested in partnering?</h2>
            <p className="text-blue-100 mb-8">Tell us about your practice and we&apos;ll explore how to build something together.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
