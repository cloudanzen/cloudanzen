export interface Writer {
  slug: string;
  name: string;
  age: number;
  role: string;
  bio: string;
  certifications: string[];
  expertise: string[];
  suggestedTopics: string[];
  avatarUrl?: string;
}

export const writers: Writer[] = [
  {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins",
    age: 31,
    role: "Regulatory & Compliance Analyst",
    bio: "Sarah is a compliance specialist with over 8 years of experience guiding fintech and healthcare organizations through complex regulatory landscapes. She specializes in breaking down global frameworks into actionable corporate roadmaps.",
    certifications: ["CISA", "CRISC", "ISO 27001 Lead Implementer"],
    expertise: [
      "HIPAA Compliance",
      "GDPR & CCPA",
      "ISO/IEC 27001 Frameworks",
      "Regulatory Auditing",
    ],
    suggestedTopics: [
      "The Ultimate Guide to Passing Your First ISO 27001 Audit",
      "Understanding Healthcare Data Privacy: A Deep Dive into HIPAA Compliance",
      "Cross-Border Data Transfers: Navigating Evolving EU-US Privacy Frameworks",
    ],
    avatarUrl: "/writers/sarah-jenkins.png",
  },
  {
    slug: "david-chen",
    name: "David Chen",
    age: 34,
    role: "Cybersecurity & Threat Intel Writer",
    bio: "David is a former security operations engineer who tracks emerging threat vectors and advanced persistent threats (APTs). He translates complex network vulnerabilities into highly readable threat intelligence reports.",
    certifications: ["CEH", "CompTIA Security+", "GCTI"],
    expertise: [
      "Malware Analysis",
      "Zero-Day Vulnerabilities",
      "Phishing Mitigation",
      "Ransomware Strategy",
    ],
    suggestedTopics: [
      "Deconstructing the Latest Ransomware Tactics: How to Protect Your Network",
      "Why Zero-Trust Architecture is No Longer Optional for Remote Workforce Security",
      "Spotting the Signs: Advanced Phishing Techniques Targeting Enterprise Executives",
    ],
    avatarUrl: "/writers/david-chen.png",
  },
  {
    slug: "maria-rodriguez",
    name: "Maria Rodriguez",
    age: 35,
    role: "Data Privacy & Legal Compliance Writer",
    bio: "Maria bridges the gap between corporate law and IT systems. With a background in legal tech consulting, she advises organizations on data governance structures and the legal liabilities of organizational data breaches.",
    certifications: ["CIPP/E", "CIPP/US", "CIPM"],
    expertise: [
      "Data Governance",
      "Consumer Privacy Rights",
      "Incident Response Law",
      "Vendor Risk Assessments",
    ],
    suggestedTopics: [
      "Does Your Business Comply with the Newest State-Level Privacy Laws?",
      "How to Build a Legally Sound Incident Response Plan Before a Breach Happens",
      "Third-Party Risk Management: Vetting the Cybersecurity Posture of Your Supply Chain",
    ],
    avatarUrl: "/writers/maria-rodriguez.png",
  },
  {
    slug: "james-peterson",
    name: "James Peterson",
    age: 45,
    role: "Enterprise Risk Management Editor",
    bio: "James brings two decades of information security governance experience to the team. He focuses on executive-level strategy, business continuity planning, and aligns technical security posture with corporate business objectives.",
    certifications: ["CISSP", "CISM", "COBIT"],
    expertise: [
      "C-Suite Security Strategy",
      "NIST Risk Management",
      "Business Continuity",
      "Cyber Insurance Planning",
    ],
    suggestedTopics: [
      "How to Present Cyber Risk Metrics Effectively to Your Board of Directors",
      "Aligning Your Security Strategy with the NIST Risk Management Framework",
      "Evaluating Cyber Insurance Packages: What Policy Coverage Does Your Business Actually Need?",
    ],
    avatarUrl: "/writers/james-peterson.png",
  },
  {
    slug: "chloe-thompson",
    name: "Chloe Thompson",
    age: 28,
    role: "Cloud Security & SOC Analyst Writer",
    bio: "Chloe is a cloud infrastructure engineer who specializes in multi-cloud security environments and automated monitoring setups. She covers modern DevSecOps pipelines and Security Operations Center best practices.",
    certifications: [
      "AWS Certified Security - Specialty",
      "CCSP",
      "Microsoft Certified: Azure Security Engineer",
    ],
    expertise: [
      "AWS/Azure Cloud Hardening",
      "SOC 2 Type II Preparation",
      "DevSecOps Automation",
      "SIEM Architecture",
    ],
    suggestedTopics: [
      "Step-by-Step Guide to Achieving and Maintaining SOC 2 Type II Compliance",
      "Common Misconfigurations in AWS Environments and How to Remediate Them",
      "Integrating Security Tools Directly into Your CI/CD Pipeline Without Slowing Down Deployment",
    ],
    avatarUrl: "/writers/chloe-thompson.png",
  },
];

const writerBySlug = new Map(writers.map((w) => [w.slug, w]));

export function getWriter(slug: string): Writer | null {
  return writerBySlug.get(slug) ?? null;
}

export function getAllWriters(): Writer[] {
  return writers;
}

export const writerSlugs: ReadonlySet<string> = new Set(
  writers.map((w) => w.slug),
);
