import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Shield, Lock, Eye, Server, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Security",
  description: "How CloudAnzen protects your data. Our security practices, certifications, and infrastructure overview.",
};

const sections = [
  {
    icon: Shield,
    title: "Compliance & certifications",
    items: [
      "SOC 2 Type II certified — report available upon request under NDA",
      "ISO 27001 certified",
      "GDPR compliant — DPA available for EU customers",
      "HIPAA-ready infrastructure for healthcare customers",
    ],
  },
  {
    icon: Lock,
    title: "Data protection",
    items: [
      "All data encrypted at rest using AES-256",
      "All data in transit encrypted via TLS 1.2+",
      "Encryption key management with HSM-backed keys",
      "Customer data segregated at the tenant level",
    ],
  },
  {
    icon: Eye,
    title: "Access controls",
    items: [
      "Least-privilege access enforced for all internal systems",
      "MFA required for all CloudAnzen employee accounts",
      "SSO and SAML support for customer environments",
      "Full audit log of all access and actions",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure",
    items: [
      "Hosted on AWS with multi-AZ availability",
      "Automated backups with point-in-time recovery",
      "Annual penetration testing by independent third party",
      "Continuous vulnerability scanning and patching",
    ],
  },
];

export default function SecurityPage() {
  return (
    <div>
      <PageHero
        badge="Company · Security"
        title="Security is what"
        titleHighlight="we're built on"
        subtitle="We hold ourselves to the same standards we help our customers achieve. Here's how we protect your data."
        ctaPrimary={{ label: "Request security report", href: "/demo" }}
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sections.map(({ icon: Icon, title, items }) => (
              <div key={title} className="p-8 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need our security documentation?</h2>
            <p className="text-slate-400 mb-8">
              SOC 2 reports, penetration test summaries, security policies, and our completed questionnaires are available through our trust center.
            </p>
            <a
              href="/platform/trust-center"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Visit our Trust Center
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
