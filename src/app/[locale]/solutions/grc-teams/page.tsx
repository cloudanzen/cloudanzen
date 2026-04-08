import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "For GRC Teams",
  description: "Purpose-built GRC workflows for compliance managers, risk leads, and audit teams. Replace spreadsheets with a platform that actually works.",
};

export default function GRCTeamsPage() {
  return (
    <SolutionPage
      badge="Solutions · For GRC Teams"
      title="GRC workflows built"
      titleHighlight="for GRC professionals"
      subtitle="CloudAnzen is the platform GRC managers actually want to use — with proper risk registers, control ownership, framework support, and audit workflows."
      description="GRC professionals have been duct-taping spreadsheets and shared drives together for too long. CloudAnzen gives you purpose-built workflows for compliance, risk, vendor management, and audit collaboration — with the documentation and evidence trails auditors actually want to see."
      benefits={[
        "Proper risk register with full CRUD and audit trail",
        "Control ownership and review workflow management",
        "Multi-framework support with cross-mapping and gap analysis",
        "Vendor risk assessment workflows with standardized questionnaires",
        "Policy lifecycle management — create, approve, distribute, track acknowledgements",
        "Auditor-facing evidence room with scoped access",
        "Management and board-ready reporting out of the box",
      ]}
      useCases={[
        { title: "Consolidate GRC from spreadsheets", desc: "Move your risk register, control library, and vendor list into a single system of record." },
        { title: "Run annual audit cycles", desc: "Manage Type I → Type II progression, evidence collection, and auditor coordination in one place." },
        { title: "Demonstrate program maturity", desc: "Produce board-ready metrics showing risk posture, compliance status, and control health trends." },
      ]}
      accentColor="bg-blue-800"
    />
  );
}
