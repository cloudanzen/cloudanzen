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

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "soc-2-readiness-roadmap-for-saas",
    title: "SOC 2 readiness roadmap for SaaS teams",
    summary:
      "A staged plan for going from customer pressure to a controlled, audit-ready SOC 2 program.",
    type: "guides",
    collection: "soc-2",
    category: "SOC 2",
    readTime: "8 min read",
    tags: ["SOC 2", "Startups", "Audit readiness"],
    featured: true,
    content: `## Why teams stall on SOC 2

SOC 2 projects usually slow down for three reasons: unclear scope, unclear owners, and evidence collection that starts too late.

CloudAnzen teams move faster when they treat readiness as an operating workflow rather than a document sprint.

## A practical roadmap

### 1. Lock scope first

Document the product, environments, and teams that support your customer-facing system. If scope changes every month, your control set will too.

### 2. Pick a lean baseline of controls

Start with access management, change management, logging, vulnerability management, vendor review, incident response, and policy governance.

### 3. Connect evidence sources early

Integrations should happen before your audit window. Pull data from cloud infrastructure, identity, ticketing, source control, and HR systems so you are not collecting screenshots at the end.

### 4. Review failing controls weekly

Run a short operating cadence with engineering, IT, and security owners. Weekly review beats quarterly surprise.

### 5. Prepare for fieldwork like a project handoff

By the time your auditor asks for evidence, each control should already have an owner, a source, and a recent review status.

## What good looks like

- A defined audit scope with named system owners
- Shared controls mapped once across future frameworks
- Evidence connected to controls continuously
- Open issues tracked with due dates and approvals

## Where CloudAnzen fits

CloudAnzen helps teams map controls, collect evidence automatically, assign owners, and keep readiness visible in one workflow before the auditor arrives.`,
  },
  {
    slug: "how-to-scope-soc-2-without-over-auditing",
    title: "How to scope SOC 2 without over-auditing your business",
    summary:
      "Scope decisions shape cost, effort, and audit friction more than most teams expect.",
    type: "blog",
    collection: "soc-2",
    category: "SOC 2",
    readTime: "5 min read",
    tags: ["SOC 2", "Scoping", "Audit strategy"],
    content: `## The scoping mistake most teams make

They start by asking which controls an auditor might want instead of asking which system actually delivers the service customers rely on.

## A better way to scope

- Start with the customer-facing product and supporting production environment
- Add the people, processes, and vendors that can materially affect that service
- Keep unrelated experiments, labs, and side projects out unless they touch production obligations

## Why this matters

Over-scoping creates more controls, more evidence, and more people to coordinate. That means slower readiness and a noisier audit.

## Questions to ask internally

1. Which systems process or store customer data?
2. Which teams can materially change service security or availability?
3. Which third parties are part of the control story?

The best SOC 2 scope is defensible, not oversized.`,
  },
  {
    slug: "iso-27001-isms-operating-rhythm",
    title: "Building an ISO 27001 ISMS operating rhythm",
    summary:
      "ISO 27001 becomes manageable when you turn the ISMS into a review cadence instead of a one-time project.",
    type: "guides",
    collection: "iso-27001",
    category: "ISO 27001",
    readTime: "7 min read",
    tags: ["ISO 27001", "ISMS", "Governance"],
    featured: true,
    content: `## ISO 27001 is an operating system

Teams often treat ISO 27001 as a certification checklist. In practice, the standard rewards a functioning management system with recurring reviews, ownership, and improvement.

## Build the rhythm

### Monthly

- Review open risks and treatment plans
- Check overdue policy approvals
- Review failing controls and evidence gaps

### Quarterly

- Validate asset and vendor inventories
- Run internal control health reviews
- Confirm training and awareness completion

### Semi-annually

- Review statement of applicability changes
- Reassess major risks and control priorities

### Annually

- Run internal audit activities
- Hold management review
- Refresh objectives and improvement actions

## Keep documentation lightweight but current

Documentation should reflect how work is actually performed. If the document says one thing and operational evidence says another, the ISMS will not hold up well under review.

## How CloudAnzen helps

CloudAnzen centralizes policies, evidence, risk records, and readiness reporting so ISO 27001 review cycles are visible instead of scattered across separate tools.`,
  },
  {
    slug: "vendor-risk-tiering-template",
    title: "Vendor risk tiering template",
    summary:
      "A simple tiering model to decide which vendors need fast review, deep review, or ongoing monitoring.",
    type: "templates",
    collection: "vendor-risk",
    category: "Vendor Risk",
    readTime: "4 min read",
    tags: ["Vendor risk", "Templates", "Procurement"],
    featured: true,
    content: `## Goal

Use a consistent tiering model before sending long questionnaires to every vendor.

## Recommended tiers

| Tier | When to use | Review depth |
| --- | --- | --- |
| Tier 1 | Vendor handles sensitive customer, employee, or regulated data | Full review with security evidence and contractual checks |
| Tier 2 | Vendor supports important business operations but limited sensitive data | Standard review with lighter evidence requests |
| Tier 3 | Low-impact tools with limited or no sensitive data access | Intake plus lightweight approval |

## Decision inputs

- Data sensitivity
- Access to production systems
- Business criticality
- Regulatory impact
- Subprocessor dependency

## Intake checklist

- [ ] Confirm business owner
- [ ] Confirm data types involved
- [ ] Confirm integration method and access level
- [ ] Confirm required contract and security documents
- [ ] Assign renewal review date

## Tip

Your tiering model should reduce noise. If every vendor lands in Tier 1, the model is not doing its job.`,
  },
  {
    slug: "gdpr-data-inventory-checklist",
    title: "GDPR data inventory checklist",
    summary:
      "A practical checklist for documenting systems, processing activities, vendors, and retention logic.",
    type: "checklists",
    collection: "gdpr",
    category: "GDPR",
    readTime: "6 min read",
    tags: ["GDPR", "Privacy", "Checklists"],
    content: `## What a usable data inventory should answer

Your inventory should make it easy to explain what data you collect, why you collect it, where it flows, who can access it, and how long you keep it.

## Checklist

- [ ] List each product and internal system that stores personal data
- [ ] Document categories of personal data processed in each system
- [ ] Record the lawful basis or business purpose
- [ ] Identify subprocessors or external recipients
- [ ] Record data residency and transfer considerations
- [ ] Document retention expectations and deletion workflows
- [ ] Link the process owner for each record

## Common gap

Most inventories describe applications but not data movement. Add integrations, exports, and manual handoffs so the record reflects reality.`,
  },
  {
    slug: "what-is-a-trust-center",
    title: "What is a trust center?",
    summary:
      "A plain-English definition of the security hub buyers use to review your posture before or during diligence.",
    type: "glossary",
    collection: "trust-center",
    category: "Trust Center",
    readTime: "3 min read",
    tags: ["Glossary", "Trust center", "Security reviews"],
    content: `## Definition

A trust center is a public or gated workspace where a company shares security, compliance, privacy, and reliability information with customers or prospects.

## Why it matters

Trust centers reduce repetitive security review work by letting buyers self-serve common information before sending a long questionnaire.

## A strong trust center usually includes

- Security overview and contact path
- Certifications and framework status
- Policies or summaries of core practices
- Subprocessor and infrastructure details
- A way to request deeper evidence when needed

## What it should not become

A dumping ground for every internal security document. Good trust centers are curated, current, and intentional.`,
  },
  {
    slug: "hipaa-security-rule-checklist-for-cloud-teams",
    title: "HIPAA security rule checklist for cloud teams",
    summary:
      "A short operational checklist for teams that need stronger discipline around PHI-related safeguards.",
    type: "checklists",
    collection: "hipaa",
    category: "HIPAA",
    readTime: "6 min read",
    tags: ["HIPAA", "Healthcare", "Checklists"],
    content: `## Focus areas

The HIPAA Security Rule is easier to manage when you break it into access, devices, monitoring, workforce practice, and vendor oversight.

## Checklist

- [ ] Enforce MFA for privileged and PHI-relevant systems
- [ ] Review workforce access on a defined cadence
- [ ] Log and monitor administrative activity
- [ ] Encrypt data at rest and in transit where applicable
- [ ] Maintain incident response procedures involving PHI
- [ ] Review business associate relationships and evidence
- [ ] Track device protections for systems that can access PHI

## Execution tip

If evidence lives in separate admin consoles, reviews slip. Centralize evidence status so access, device, and vendor controls can be reviewed together.`,
  },
  {
    slug: "security-questionnaire-response-template",
    title: "Security questionnaire response template",
    summary:
      "A reusable structure for answering common buyer diligence questions with less copy-paste effort.",
    type: "templates",
    collection: "trust-center",
    category: "Trust Center",
    readTime: "5 min read",
    tags: ["Questionnaires", "Templates", "Sales support"],
    content: `## Use this structure

For each common question, document a canonical answer, a supporting source, an owner, and a last-reviewed date.

## Recommended fields

| Field | Purpose |
| --- | --- |
| Question theme | Groups similar buyer questions |
| Canonical answer | Your approved default answer |
| Supporting evidence | Policy, report, control, or system source |
| Owner | Person accountable for the answer |
| Last reviewed | Freshness check |

## Suggested themes

- Access control
- Encryption
- Logging and monitoring
- Incident response
- Business continuity
- Vendor management
- Product security and SDLC

## Tip

Do not optimize only for speed. Optimize for reuse plus confidence that the answer still matches how your environment works today.`,
  },
  {
    slug: "continuous-control-monitoring-vs-point-in-time-audits",
    title: "Continuous control monitoring vs. point-in-time audits",
    summary:
      "Why modern teams are shifting from seasonal evidence scrambles to continuous visibility.",
    type: "blog",
    collection: null,
    category: "Continuous Monitoring",
    readTime: "4 min read",
    tags: ["Monitoring", "Controls", "Audit readiness"],
    content: `## The old model

Point-in-time audits encourage bursts of cleanup right before fieldwork. Teams pass the audit, then lose visibility until the next cycle.

## The better model

Continuous monitoring keeps control health visible throughout the year. That changes the conversation from evidence assembly to issue management.

## Benefits of continuous monitoring

- Earlier detection of drift
- Fewer surprise failures during audit prep
- Better ownership across engineering, IT, and GRC
- Cleaner historical evidence for auditors

## Where teams get stuck

They collect data, but they do not tie it back to a control owner or review workflow. Monitoring only matters when someone knows what to do next.`,
  },
  {
    slug: "iso-27001-vs-soc-2-for-b2b-saas",
    title: "ISO 27001 vs. SOC 2 for B2B SaaS",
    summary:
      "How to evaluate the two most common security assurance paths for growth-stage software companies.",
    type: "blog",
    collection: null,
    category: "Framework strategy",
    readTime: "6 min read",
    tags: ["ISO 27001", "SOC 2", "Frameworks"],
    content: `## The short answer

SOC 2 is often the first external assurance request for US SaaS sales. ISO 27001 is often the better fit when you want a formal management system and global signaling.

## SOC 2 tends to fit when

- Your buyers ask for a SOC 2 report specifically
- You need to support enterprise diligence in the US market
- You want a report mapped to service organization controls

## ISO 27001 tends to fit when

- You need a certifiable ISMS model
- You operate across multiple regions with stronger ISO expectations
- You want governance rhythms around continual improvement

## Many teams do both

The real decision is sequencing. Shared controls make the second framework easier if you build your operating model carefully from day one.`,
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

export function getArticlesByType(type: ResourceTypeSlug) {
  return resourceArticles.filter((article) => article.type === type);
}

export function getArticlesByCollection(collectionSlug: string) {
  return resourceArticles.filter(
    (article) => article.collection === collectionSlug,
  );
}

export function getResourceArticle(type: string, slug: string) {
  return (
    resourceArticles.find(
      (article) => article.type === type && article.slug === slug,
    ) ?? null
  );
}

export function getFeaturedResources() {
  return resourceArticles.filter((article) => article.featured);
}
