import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BookOpen, FileText, Video, CheckSquare, Book, ArrowRight, LifeBuoy } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "GRC guides, compliance templates, glossary, checklists, and webinars to help your team build a modern compliance program.",
};

const resources = [
  {
    icon: BookOpen,
    category: "Guides",
    items: [
      { title: "The Complete SOC 2 Guide for Startups", tag: "Guide", href: "#" },
      { title: "ISO 27001:2022 Implementation Playbook", tag: "Guide", href: "#" },
      { title: "GDPR Compliance for SaaS Companies", tag: "Guide", href: "#" },
      { title: "Building Your First Vendor Risk Program", tag: "Guide", href: "#" },
    ],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FileText,
    category: "Templates",
    items: [
      { title: "Information Security Policy Template", tag: "Template", href: "#" },
      { title: "Vendor Risk Assessment Questionnaire", tag: "Template", href: "#" },
      { title: "SOC 2 Readiness Checklist", tag: "Template", href: "#" },
      { title: "Risk Register Template (Excel + CloudAnzen)", tag: "Template", href: "#" },
    ],
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Video,
    category: "Webinars",
    items: [
      { title: "SOC 2 in 90 Days: Live Q&A", tag: "Webinar", href: "#" },
      { title: "Continuous Monitoring vs. Annual Audits", tag: "Webinar", href: "#" },
      { title: "ISO 27001:2022 — What Changed", tag: "Webinar", href: "#" },
    ],
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: CheckSquare,
    category: "Compliance Checklists",
    items: [
      { title: "SOC 2 Type II Readiness Checklist", tag: "Checklist", href: "#" },
      { title: "HIPAA Security Rule Checklist", tag: "Checklist", href: "#" },
      { title: "GDPR Article 30 RoPA Checklist", tag: "Checklist", href: "#" },
    ],
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Book,
    category: "Glossary",
    items: [
      { title: "GRC Glossary: 50 Essential Terms", tag: "Reference", href: "#" },
      { title: "SOC 2 Trust Services Criteria Explained", tag: "Reference", href: "#" },
      { title: "ISO 27001 Annex A Controls Explained", tag: "Reference", href: "#" },
    ],
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: LifeBuoy,
    category: "Help Center",
    items: [
      { title: "Getting Started with CloudAnzen", tag: "Guide", href: "/help/getting-started" },
      { title: "Connecting Integrations", tag: "Guide", href: "/help/integrations" },
      { title: "Setting Up Continuous Monitoring", tag: "Guide", href: "/help/continuous-monitoring" },
      { title: "Preparing for Your Audit", tag: "Guide", href: "/help/audit-readiness" },
      { title: "Browse All Help Articles", tag: "Help", href: "/help" },
    ],
    color: "bg-amber-50 text-amber-600",
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageHero
        badge="Resources"
        title="Everything you need to"
        titleHighlight="run a modern GRC program"
        subtitle="Guides, templates, checklists, and webinars built by GRC practitioners — free for your team."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
      />

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {resources.map(({ icon: Icon, category, items, color }) => (
              <div key={category} className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-5 bg-slate-50 border-b border-slate-200">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{category}</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {items.map(({ title, tag, href }) => (
                    <Link key={title} href={href} className="flex items-start justify-between gap-4 p-5 hover:bg-slate-50 transition-colors group">
                      <span className="text-sm text-slate-700 font-medium group-hover:text-blue-700 leading-snug">{title}</span>
                      <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">{tag}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
