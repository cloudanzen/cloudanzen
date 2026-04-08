import type { Metadata } from "next";
import FrameworkPage from "@/components/FrameworkPage";

export const metadata: Metadata = {
  title: "ISO 27001 Compliance",
  description: "Build your ISO 27001 ISMS and achieve certification faster with CloudAnzen's control mapping, risk treatment, and evidence automation.",
};

export default function ISO27001Page() {
  return (
    <FrameworkPage
      name="ISO 27001"
      fullName="ISO/IEC 27001"
      badge="Frameworks · ISO 27001"
      description="Build your Information Security Management System (ISMS), complete your risk treatment plan, and achieve certification faster with CloudAnzen."
      whatIs="ISO/IEC 27001 is the internationally recognized standard for information security management systems. Achieving certification demonstrates to customers, partners, and regulators that your organization systematically manages information security risks. It's widely required for enterprise sales in Europe and increasingly in North America."
      benefits={[
        "Pre-mapped Annex A controls with implementation guidance",
        "ISMS documentation templates ready to customize",
        "Risk treatment plan workflow aligned with ISO 27001 requirements",
        "Statement of Applicability (SoA) generation",
        "Continuous monitoring to maintain certification between audits",
        "Shared control library with SOC 2, GDPR, and other frameworks",
      ]}
      modules={[
        { title: "ISMS Scope & Context", desc: "Define organizational context, interested parties, and ISMS scope." },
        { title: "Risk Assessment & Treatment", desc: "Identify, evaluate, and treat information security risks per ISO 27005 methodology." },
        { title: "Annex A Controls", desc: "All 93 controls from ISO 27001:2022 Annex A pre-mapped and ready to implement." },
        { title: "Statement of Applicability", desc: "Generate and maintain your SoA with justifications for included/excluded controls." },
        { title: "Continual Improvement", desc: "Track corrective actions, internal audits, and management reviews." },
      ]}
      ctaLabel="Start your ISO 27001 program"
      accentColor="bg-indigo-700"
    />
  );
}
