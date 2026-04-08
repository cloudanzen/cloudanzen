import type { Metadata } from "next";
import FrameworkPage from "@/components/FrameworkPage";

export const metadata: Metadata = {
  title: "SOC 2 Compliance",
  description: "Automate your SOC 2 Type I and Type II journey with CloudAnzen. Map controls, collect evidence continuously, and collaborate with auditors in one platform.",
};

export default function SOC2Page() {
  return (
    <FrameworkPage
      name="SOC 2"
      fullName="SOC 2 (System and Organization Controls 2)"
      badge="Frameworks · SOC 2"
      description="Automate your SOC 2 Type I and Type II journey from control mapping to evidence collection to auditor collaboration — all in one platform."
      whatIs="SOC 2 is an auditing framework developed by the American Institute of CPAs (AICPA) that evaluates a service organization's controls related to security, availability, processing integrity, confidentiality, and privacy. It's the de-facto standard for SaaS companies selling to enterprise buyers."
      benefits={[
        "Pre-mapped controls for all five Trust Services Criteria",
        "Automated evidence collection from 100+ integrations",
        "Gap analysis to identify missing or failing controls before your audit",
        "Dedicated auditor collaboration workspace with scoped access",
        "Type I and Type II readiness scoring updated in real time",
        "Shared controls across SOC 2 and other frameworks (ISO 27001, HIPAA, etc.)",
      ]}
      modules={[
        { title: "Security (CC)", desc: "Access controls, logical security, change management, risk assessment, incident response, and more." },
        { title: "Availability (A)", desc: "Uptime monitoring, capacity management, and recovery controls mapped to evidence." },
        { title: "Confidentiality (C)", desc: "Data classification, encryption, and disposal controls." },
        { title: "Processing Integrity (PI)", desc: "Input/output controls and processing completeness monitoring." },
        { title: "Privacy (P)", desc: "Personal data handling aligned with AICPA privacy principles." },
      ]}
      ctaLabel="Start your SOC 2 program"
      accentColor="bg-blue-700"
    />
  );
}
