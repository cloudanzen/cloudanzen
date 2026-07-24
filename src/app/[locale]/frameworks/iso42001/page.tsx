import type { Metadata } from "next";
import FrameworkPage from "@/components/FrameworkPage";

export const metadata: Metadata = {
  alternates: { canonical: "/frameworks/iso42001" },
  title: "ISO 42001 AI Management System",
  description:
    "Build ISO/IEC 42001 readiness for AI governance, AI risk management, model oversight, and audit-ready evidence with CloudAnzen.",
};

export default function ISO42001Page() {
  return (
    <FrameworkPage
      name="ISO 42001"
      fullName="ISO/IEC 42001"
      badge="Frameworks · ISO 42001"
      description="Operationalize AI governance with mapped controls, risk reviews, ownership, evidence, and review workflows for teams building or deploying AI systems."
      whatIs="ISO/IEC 42001 is an AI management system standard for organizations that develop, provide, or use AI systems. It helps teams define governance, risk management, accountability, monitoring, and improvement practices around AI so buyers, auditors, and internal stakeholders can understand how AI is controlled."
      benefits={[
        "AI system inventory with owners, use cases, data sources, and risk levels",
        "AI risk assessment workflows for model behavior, data exposure, safety, and human oversight",
        "Evidence tracking for AI governance reviews, model provider diligence, and monitoring results",
        "Policy and approval workflows for acceptable AI use, data handling, and high-risk AI changes",
        "Cross-framework reuse with SOC 2, ISO 27001, GDPR, NIST CSF, and custom AI controls",
        "Trust-center and questionnaire evidence packages for enterprise AI security reviews",
      ]}
      modules={[
        { title: "AI System Inventory", desc: "Track AI features, models, providers, RAG pipelines, training data, owners, and customer-data exposure." },
        { title: "AI Risk Management", desc: "Review risks around prompt injection, data leakage, model output quality, human oversight, and provider dependency." },
        { title: "Governance & Accountability", desc: "Assign owners, approve AI use cases, review policies, and maintain decision history for AI operations." },
        { title: "Monitoring & Evidence", desc: "Collect evidence from integrations, manual reviews, incidents, model changes, and recurring AI control checks." },
        { title: "Buyer Assurance", desc: "Package AI governance evidence for security questionnaires, trust centers, audits, and enterprise diligence." },
      ]}
      ctaLabel="Build your ISO 42001 program"
      accentColor="bg-[linear-gradient(135deg,#fdf4ff_0%,#fff7ed_50%,#ecfdf5_100%)] border border-white/80 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
      academyCourse={{
        slug: "iso-42001-ai-governance-awareness",
        title: "ISO 42001 AI Governance Awareness",
      }}
    />
  );
}
