import type { Metadata } from "next";
import FrameworkPage from "@/components/FrameworkPage";

export const metadata: Metadata = {
  title: "GDPR Compliance",
  description: "Map GDPR requirements to controls, manage data subject requests, and demonstrate compliance with CloudAnzen.",
};

export default function GDPRPage() {
  return (
    <FrameworkPage
      name="GDPR"
      fullName="General Data Protection Regulation (GDPR)"
      badge="Frameworks · GDPR"
      description="Map GDPR requirements to technical and organizational controls, track your data processing activities, and demonstrate compliance to regulators and customers."
      whatIs="The General Data Protection Regulation (GDPR) is the EU's comprehensive data protection law, applying to any organization that processes the personal data of EU residents. Non-compliance carries fines of up to 4% of annual global turnover or €20 million."
      benefits={[
        "Pre-mapped GDPR articles to technical and organizational controls",
        "Records of Processing Activities (RoPA) management",
        "Data Subject Rights request tracking and SLA management",
        "DPIA (Data Protection Impact Assessment) workflow",
        "Consent management integration support",
        "Shared controls with ISO 27001 and SOC 2",
      ]}
      modules={[
        { title: "Lawful Basis & Consent", desc: "Track legal bases for processing and manage consent records." },
        { title: "Records of Processing Activities", desc: "Maintain Article 30 RoPA with data flows, recipients, and retention schedules." },
        { title: "Data Subject Rights", desc: "Manage access, erasure, portability, and objection requests within statutory timelines." },
        { title: "Data Protection Impact Assessments", desc: "Run DPIA workflows for high-risk processing activities." },
        { title: "Breach Notification", desc: "Track incidents and manage 72-hour notification obligations." },
      ]}
      ctaLabel="Demonstrate GDPR compliance"
      accentColor="bg-teal-700"
    />
  );
}
