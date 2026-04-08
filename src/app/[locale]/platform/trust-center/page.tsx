import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Globe, Lock, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust Center",
  description:
    "Publish a branded trust center that gives customers, prospects, and auditors real-time visibility into your security posture.",
};

export default function TrustCenterPage() {
  return (
    <div>
      <PageHero
        badge="Platform · Trust Center"
        title="Your security posture,"
        titleHighlight="always visible"
        subtitle="Publish a branded, always-current trust center that turns security into a competitive advantage and reduces repetitive questionnaire work."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
      />

      <section className="relative -mt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white">
            <Image
              src="/screenshots/TrustCenter.png"
              alt="CloudAnzen Trust Center interface"
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
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="heading-lg text-slate-900 mb-6">Stop re-explaining your security posture to every buyer</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">With a CloudAnzen trust center, your compliance badges, policy documents, and security overviews are always available to the right people — gated by NDAs and access requests where needed.</p>
              <ul className="space-y-4">
                {[
                  "Public compliance badges (SOC 2, ISO 27001, GDPR, HIPAA)",
                  "Gated document access with NDA workflows",
                  "Security questionnaire request flow",
                  "Always-current policy and report library",
                  "Custom branding to match your company",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/demo" className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
                See a demo trust center <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Mock UI */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
              <div className="bg-slate-900 px-6 py-4 flex items-center gap-3">
                <Globe className="w-5 h-5 text-teal-400" />
                <span className="text-white font-semibold">trust.yourcompany.com</span>
              </div>
              <div className="bg-white p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {["SOC 2 Type II", "ISO 27001", "GDPR Ready", "HIPAA Compliant"].map((b) => (
                    <span key={b} className="px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">{b}</span>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { doc: "Security Overview", icon: Globe, access: "Public" },
                    { doc: "SOC 2 Type II Report", icon: Lock, access: "NDA Required" },
                    { doc: "Penetration Test Summary", icon: Lock, access: "Request Access" },
                    { doc: "Information Security Policy", icon: FileText, access: "Public" },
                    { doc: "Privacy Policy", icon: FileText, access: "Public" },
                  ].map(({ doc, icon: Icon, access }) => (
                    <div key={doc} className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-700">{doc}</span>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${access === "Public" ? "bg-green-100 text-green-700" : access === "NDA Required" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>{access}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
