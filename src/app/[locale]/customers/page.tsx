import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Customers",
  description: "See how security-conscious teams use CloudAnzen to automate compliance, manage risk, and prove trust.",
};

const testimonials = [
  {
    quote: "CloudAnzen gave us a single place to manage controls, evidence, vendor reviews, and audit prep. What used to take weeks now feels operational.",
    name: "Jordan Torres",
    role: "Head of Security, Fintech startup",
    tag: "SOC 2 · Fintech",
  },
  {
    quote: "We went from zero compliance posture to SOC 2 Type I in under 8 weeks. CloudAnzen made it feel manageable for a 12-person team.",
    name: "Alex Morgan",
    role: "CTO, Early-stage SaaS",
    tag: "SOC 2 · Startup",
  },
  {
    quote: "Our trust center removes the friction from enterprise security reviews. Deals that used to take 3 extra weeks for security paperwork now move in days.",
    name: "Sarah Chen",
    role: "Head of Security, B2B SaaS",
    tag: "Trust Center · SaaS",
  },
  {
    quote: "We run SOC 2 and ISO 27001 simultaneously in CloudAnzen with about 70% control overlap. The cross-framework reuse alone saved us months of work.",
    name: "Marcus Lee",
    role: "CISO, Scale-up",
    tag: "SOC 2 + ISO 27001 · Scale-up",
  },
];

const industries = [
  { name: "SaaS", href: "/solutions/saas", desc: "Win enterprise deals with continuous SOC 2 and a proactive trust center." },
  { name: "Fintech", href: "/solutions/enterprise", desc: "Meet SOC 2, PCI DSS, and GDPR requirements in one platform." },
  { name: "Healthcare", href: "/solutions/enterprise", desc: "HIPAA compliance with BAA management and PHI access controls." },
  { name: "AI Companies", href: "/solutions/startups", desc: "Move fast to SOC 2 while navigating emerging AI governance requirements." },
  { name: "Cloud-native", href: "/solutions/security-teams", desc: "Deep integrations with AWS, GCP, Azure, GitHub, and more." },
];

export default function CustomersPage() {
  return (
    <div>
      <PageHero
        badge="Customers"
        title="Trusted by"
        titleHighlight="security-conscious teams"
        subtitle="From early-stage startups to enterprise security organizations — CloudAnzen helps teams of all sizes automate compliance and prove trust."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-xl text-slate-900 mb-12 text-center">What customers say</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {testimonials.map(({ quote, name, role, tag }) => (
              <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">{tag}</span>
                <blockquote className="mt-5 mb-6 text-slate-700 italic leading-relaxed">&ldquo;{quote}&rdquo;</blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                    {name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{name}</p>
                    <p className="text-slate-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="heading-xl text-slate-900 mb-10 text-center">By industry</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {industries.map(({ name, href, desc }) => (
              <Link key={name} href={href} className="group flex flex-col p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700">{name}</h3>
                <p className="text-xs text-slate-500 flex-1">{desc}</p>
                <ArrowRight className="w-4 h-4 text-blue-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
