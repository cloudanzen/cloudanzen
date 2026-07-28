import type { Metadata } from "next";
import { localeAlternates } from "@/lib/site";
import FrameworkPage from "@/components/FrameworkPage";

const metaBase: Omit<Metadata, "alternates"> = {
  title: "HIPAA Compliance",
  description:
    "Map HIPAA Security Rule and Privacy Rule controls, manage Business Associate Agreements, and stay audit-ready with CloudAnzen.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...metaBase,
    alternates: localeAlternates(locale, "/frameworks/hipaa"),
  };
}

export default function HIPAAPage() {
  return (
    <FrameworkPage
      name="HIPAA"
      fullName="Health Insurance Portability and Accountability Act (HIPAA)"
      badge="Frameworks · HIPAA"
      description="Map HIPAA Security Rule and Privacy Rule controls, manage BAAs, track PHI access, and demonstrate compliance to healthcare partners and regulators."
      whatIs="HIPAA sets national standards for protecting sensitive patient health information. Covered entities and business associates must implement administrative, physical, and technical safeguards to protect ePHI. Violations carry fines up to $1.9 million per violation category per year."
      benefits={[
        "Pre-mapped HIPAA Security Rule administrative, physical, and technical safeguards",
        "Business Associate Agreement (BAA) tracking and management",
        "PHI access monitoring and logging evidence collection",
        "Risk analysis workflow aligned with HHS guidance",
        "Workforce training tracking and acknowledgement records",
        "Shared controls with SOC 2 and NIST CSF",
      ]}
      modules={[
        {
          title: "Administrative Safeguards",
          desc: "Risk analysis, workforce training, access management policies, and contingency planning.",
        },
        {
          title: "Physical Safeguards",
          desc: "Facility access controls, workstation security, and device controls.",
        },
        {
          title: "Technical Safeguards",
          desc: "Access controls, audit controls, integrity controls, and transmission security.",
        },
        {
          title: "BAA Management",
          desc: "Track Business Associate Agreements and monitor BA compliance status.",
        },
        {
          title: "Breach Notification",
          desc: "Manage incident tracking and notification obligations under the Breach Notification Rule.",
        },
      ]}
      ctaLabel="Start your HIPAA compliance program"
      accentColor="bg-emerald-700"
      academyCourse={{
        slug: "hipaa-security-awareness",
        title: "HIPAA Security Awareness",
      }}
    />
  );
}
