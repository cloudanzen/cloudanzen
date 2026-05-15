export type ResourceTypeSlug =
  | "blog"
  | "guides"
  | "templates"
  | "glossary"
  | "checklists";

export interface ResourceCollection {
  slug: string;
  title: string;
  summary: string;
  description: string;
  audience: string;
  outcomes: string[];
  accent: string;
}

export interface ResourceArticle {
  slug: string;
  title: string;
  summary: string;
  type: ResourceTypeSlug;
  collection: string | null;
  category: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  author?: string;
  content: string;
}

export const resourceTypes: {
  slug: ResourceTypeSlug;
  title: string;
  description: string;
}[] = [
  {
    slug: "blog",
    title: "Blog",
    description:
      "Operator-focused commentary on frameworks, audits, and practical GRC execution.",
  },
  {
    slug: "guides",
    title: "Guides",
    description:
      "Deep dives for building security, compliance, and trust workflows that scale.",
  },
  {
    slug: "templates",
    title: "Templates",
    description:
      "Reusable policy, questionnaire, and evidence structures for busy teams.",
  },
  {
    slug: "glossary",
    title: "Glossary",
    description:
      "Plain-English definitions for the terms buyers, auditors, and security teams use every day.",
  },
  {
    slug: "checklists",
    title: "Compliance Checklists",
    description:
      "Actionable lists to keep readiness work moving without missing the basics.",
  },
];

export const resourceCollections: ResourceCollection[] = [
  {
    slug: "soc-2",
    title: "SOC 2",
    summary:
      "Practical guidance for building and operating an audit-ready SOC 2 program.",
    description:
      "From scoping to evidence to audit fieldwork, this collection helps SaaS teams make steady SOC 2 progress without turning compliance into a spreadsheet project.",
    audience:
      "Startups and growth-stage SaaS teams selling into mid-market and enterprise buyers.",
    outcomes: [
      "Define the right audit scope before control work starts",
      "Build a lean set of controls around the trust services criteria",
      "Collect evidence continuously instead of at quarter-end",
    ],
    accent: "from-blue-600 to-cyan-500",
  },
  {
    slug: "iso-27001",
    title: "ISO 27001",
    summary:
      "Templates and guides for operationalizing an ISMS that teams can actually maintain.",
    description:
      "This collection is built for teams turning ISO 27001 from a certification project into an operating rhythm across policies, assets, risks, and internal audits.",
    audience:
      "Global teams formalizing an ISMS and aligning controls across multiple regions or business units.",
    outcomes: [
      "Stand up an ISMS with clear ownership and review cycles",
      "Map risks and controls to Annex A without duplicate work",
      "Prepare for internal audits and management review with less friction",
    ],
    accent: "from-violet-600 to-indigo-500",
  },
  {
    slug: "gdpr",
    title: "GDPR",
    summary:
      "Core privacy operations content for SaaS teams handling personal data in the EU.",
    description:
      "Designed for product, security, and legal teams that need practical guidance on data inventories, vendor oversight, and responding to privacy requests.",
    audience:
      "SaaS businesses processing EU personal data and needing operational privacy rigor.",
    outcomes: [
      "Document processing activities and lawful basis decisions",
      "Review vendors and cross-border data flows with more consistency",
      "Create a repeatable process for privacy requests and evidence retention",
    ],
    accent: "from-emerald-600 to-teal-500",
  },
  {
    slug: "hipaa",
    title: "HIPAA",
    summary:
      "Security rule planning for companies building or selling into healthcare workflows.",
    description:
      "Use this collection to break HIPAA readiness into technical safeguards, workforce processes, vendor oversight, and audit-friendly documentation.",
    audience:
      "Healthtech and B2B software teams that process or support protected health information.",
    outcomes: [
      "Translate HIPAA requirements into manageable controls",
      "Strengthen access, device, and vendor oversight for PHI handling",
      "Keep policies and evidence organized for customer diligence and audits",
    ],
    accent: "from-rose-600 to-orange-500",
  },
  {
    slug: "vendor-risk",
    title: "Vendor Risk",
    summary:
      "A focused collection for third-party review workflows, questionnaires, and ongoing oversight.",
    description:
      "Built for teams that need to assess vendors quickly, keep renewal reviews on track, and avoid losing risk context between procurement, security, and legal.",
    audience:
      "Security and procurement teams managing more vendors without adding more spreadsheets.",
    outcomes: [
      "Standardize intake and tiering for new vendors",
      "Shorten review cycles with reusable evidence requests",
      "Keep renewal and remediation actions visible across stakeholders",
    ],
    accent: "from-amber-500 to-yellow-400",
  },
  {
    slug: "trust-center",
    title: "Trust Center",
    summary:
      "Resources for reducing questionnaire fatigue and sharing proof earlier in the sales cycle.",
    description:
      "This collection helps revenue, security, and compliance teams package the right proof for buyers so trust work becomes proactive instead of reactive.",
    audience:
      "Teams supporting enterprise sales motions and repeated security reviews.",
    outcomes: [
      "Publish the right security artifacts for buyer self-service",
      "Reduce repetitive questionnaire work with reusable answers",
      "Improve buyer confidence without over-sharing sensitive evidence",
    ],
    accent: "from-sky-600 to-blue-400",
  },
];

export function getResourceType(slug: string) {
  return resourceTypes.find((type) => type.slug === slug) ?? null;
}

export function getCollection(slug: string) {
  return (
    resourceCollections.find((collection) => collection.slug === slug) ?? null
  );
}
