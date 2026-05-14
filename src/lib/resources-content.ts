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
    slug: "soc-2-continuous-monitoring-alert-fatigue",
    title: "Continuous monitoring for SOC 2 without alert fatigue",
    summary:
      "How to build a SOC 2 continuous monitoring program that catches real control failures without burying your team in noise",
    type: "blog",
    collection: "soc-2",
    category: "SOC 2",
    readTime: "7 min read",
    tags: [
      "SOC 2",
      "continuous monitoring",
      "alert fatigue",
      "evidence management",
    ],
    content: `You set up automated alerting across your AWS environment, Okta logs, and GitHub audit trail. Six weeks before your SOC 2 Type II window closes, the team is ignoring most alerts because too many fire on routine activity. Continuous monitoring is supposed to keep you audit-ready. Done wrong, it creates a second job: triaging noise. Here is how to build a program that catches real control failures without burying the people responsible for them.

## What SOC 2 actually requires from monitoring

The AICPA's Trust Services Criteria does not mandate a specific monitoring tool or architecture [source: https://www.aicpa.org/soc4so]. What it requires is that your organization detect deviations from your stated control objectives — and respond to them. CC7.1 through CC7.4 under the Common Criteria cover logical and physical access monitoring, anomaly detection, and response procedures. CC9.1 covers risk mitigation through vendor and partner oversight.

This matters because most teams conflate infrastructure alerting with SOC 2 monitoring. Infrastructure alerting is about uptime. SOC 2 monitoring is about whether your controls are working. An alert that fires because CPU hit a high threshold tells your auditor nothing. An alert that fires because a production IAM role was modified outside your change-management window tells them a great deal.

The AICPA's guidance focuses on control effectiveness, not system performance. The auditor reviewing your Type II will sample the period and look for evidence that your monitoring detected and responded to real deviations [source: https://www.aicpa.org/soc4so].

## The alert-fatigue trap: where most teams go wrong

Alert fatigue happens when the volume of alerts forces humans to apply a mental filter they never explicitly designed. That filter is dangerous because it is invisible. Your team starts categorizing alerts as "probably fine" based on frequency rather than content. Real control failures start slipping through.

Three patterns cause most alert fatigue in SOC 2 programs:

**Alerting at the wrong layer.** Cloud provider logs generate enormous volumes of events. Alerting on every CloudTrail API call is not monitoring — it is log streaming with anxiety. You want rules triggered on control-relevant events: privilege escalation, policy changes, access outside business hours for sensitive systems, new service-account creation.

**No owner per alert.** Alerts that go to a shared Slack channel die there. Every monitoring rule in your SOC 2 program should have one named owner — usually the control owner for the corresponding Trust Services Criterion. Without a named owner, nobody is accountable for resolution, and the evidence trail your auditor needs never gets created.

**Threshold drift.** You set a threshold in January. By June, legitimate usage has changed and the threshold fires constantly. Without a periodic review cycle for your alert rules, thresholds accumulate false positives. The Security Compass blog notes that sustainable compliance programs treat monitoring rules as living documents, subject to the same review cadence as policy documents [source: https://www.securitycompass.com/blog/].

## Mapping controls to monitoring rules before writing a single query

Before you open your SIEM or write a CloudWatch rule, map your SOC 2 control environment to monitoring objectives. For each control in your control matrix, ask:

1. What does a failure of this control look like in log data?
2. Which system generates that evidence?
3. What is the acceptable time-to-detect?

A few examples from a typical Series A SaaS environment:

| Control | Failure signal | Source system | Target TTD |
|---|---|---|---|
| Least-privilege access | Admin role attached to service account | AWS IAM logs | 1 hour |
| Change management | Merge to production without PR approval | GitHub audit log | 15 min |
| Encryption at rest | S3 bucket created without default encryption | AWS Config | 30 min |
| Offboarding | Account active 24 hours after HR termination | Okta + HRIS | 2 hours |

Building this table first means your monitoring rules are traceable to controls. Traceable rules are auditable. Your auditor can inspect a rule, understand which criterion it addresses, and verify that failures get handled. That is what a SOC 2 Type II report measures: not whether you have monitoring, but whether monitoring is part of a functioning control system [source: https://www.aicpa.org/soc4so].

## A prioritized monitoring stack for SOC 2 Type II

You do not need a purpose-built SIEM in your first SOC 2 cycle. You need coverage on the highest-risk control categories, routed to accountable owners.

**Start with access control.** Privileged access changes, account creation and deletion, MFA status changes, and after-hours logins to admin consoles cover the bulk of CC6 and CC7 monitoring requirements. These events are available from your IdP (Okta, Google Workspace, Azure AD) and your cloud IAM service with minimal configuration.

**Add change management second.** Your CI/CD pipeline and code repository generate audit events for every deployment and every merge. Rules checking for direct pushes to production, bypassed branch protections, or deployments during change-freeze windows address CC8 without additional tooling.

**Automate evidence collection, not just alerting.** Each time a monitoring rule fires and is resolved, that resolution is evidence. Capture the ticket number, the timestamp, the owner, and the action taken. Your auditor will ask for evidence of how you handled exceptions — a resolved alert with a linked ticket is clean evidence.

The Security Compass blog recommends aligning your monitoring cadence to your audit observation period rather than the calendar, so evidence is continuous and gap-free across the entire Type II window [source: https://www.securitycompass.com/blog/].

**Review zero-firing rules on a quarterly cadence.** A rule that never fires is either catching nothing real or configured too narrowly. Both are problems. Control owners should review quiet rules each quarter to confirm the underlying control is active and the rule is correctly scoped.

## Keeping your evidence clean for the auditor

The audit observation period for a SOC 2 Type II is typically six to twelve months. Your auditor will sample events from across that window. The most common evidence failure is not that monitoring was absent — it is that log retention was shorter than the observation period, or that alert records lived in a system the auditor could not access.

Minimum evidence hygiene for a clean Type II:

- **Log retention**: 12 months minimum, stored in a system accessible to your auditor's review team.
- **Alert disposition**: every triggered rule has a closed record showing who reviewed it and what action was taken, even if the action is "false positive, suppression rule created."
- **Rule change history**: every modification to a monitoring rule is logged with a justification. Auditors spot-check rule histories to verify you did not silence controls during the observation period.
- **Mapping document**: a one-page table linking each monitoring rule to its Trust Services Criterion saves your auditor hours and reduces the back-and-forth that extends audit windows.

Continuous monitoring is not about automation for its own sake. It is about shrinking the gap between when a control fails and when someone with authority to fix it finds out. When that gap is short and the evidence is clean, your SOC 2 Type II becomes a confirmation of what you already know — not a surprise.

Continuous monitoring fails when it is bolted onto existing tooling without a clear map to your SOC 2 controls. CloudAnzen maps your infrastructure to the Trust Services Criteria continuously, so the right evidence surfaces automatically — before the auditor asks. [Talk to us](/demo).`,
  },
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
  {
    slug: "soc-2-evidence-matrix-template",
    title: "SOC 2 evidence matrix template",
    summary:
      "A simple way to track each control, its evidence source, owner, and review cadence before fieldwork starts.",
    type: "templates",
    collection: "soc-2",
    category: "SOC 2",
    readTime: "5 min read",
    tags: ["SOC 2", "Evidence", "Templates"],
    content: `## Why teams need an evidence matrix

Audit prep breaks down when controls are defined but evidence is still tribal knowledge. An evidence matrix closes that gap.

## Recommended columns

| Field | Why it matters |
| --- | --- |
| Control | The exact control being tested |
| Owner | Who is accountable for the evidence |
| Evidence source | System, report, or document used |
| Frequency | How often evidence should refresh |
| Reviewer | Who confirms it still supports the control |
| Status | Ready, missing, stale, or under review |

## Operating tip

Do not wait until auditors ask for a sample. Build the matrix while implementing controls so missing evidence shows up early.

## Best use

Use the matrix during weekly readiness reviews to identify stale evidence before it becomes a late-stage blocker.`,
  },
  {
    slug: "iso-27001-risk-register-structure",
    title: "ISO 27001 risk register structure that teams can maintain",
    summary:
      "A practical structure for keeping risk treatment visible without turning the register into an archive.",
    type: "guides",
    collection: "iso-27001",
    category: "ISO 27001",
    readTime: "6 min read",
    tags: ["ISO 27001", "Risk management", "Guides"],
    content: `## The goal of the register

An ISO 27001 risk register should help teams decide what to do next, not just prove that a workshop happened once.

## Keep each entry lightweight

At minimum, track:

- Risk statement
- Affected asset, system, or process
- Likelihood and impact
- Current controls
- Treatment decision
- Owner and target date

## Where teams overcomplicate it

They add too many scoring dimensions before they have consistent review discipline. Start with a scoring method your stakeholders will actually use.

## Review cadence

Revisit critical and high risks monthly. Review the full register quarterly. Tie updates to management review so the register stays alive.`,
  },
  {
    slug: "gdpr-vendor-review-questions",
    title: "GDPR vendor review questions for SaaS teams",
    summary:
      "A practical set of privacy-focused questions to ask subprocessors before approving them.",
    type: "templates",
    collection: "gdpr",
    category: "GDPR",
    readTime: "5 min read",
    tags: ["GDPR", "Vendor risk", "Templates"],
    content: `## What this template is for

Use these questions when a vendor will process personal data, support production systems, or introduce transfer risk.

## Core questions

1. What categories of personal data will you process for us?
2. In which regions will that data be stored or accessed?
3. Which subprocessors support this service?
4. What retention and deletion controls are available?
5. How are security incidents communicated to customers?
6. Can you support data subject request workflows if needed?

## How to use responses

Answers should inform both procurement approval and your RoPA or vendor inventory updates. If the review ends in email, the organization loses the context later.`,
  },
  {
    slug: "hipaa-access-review-playbook",
    title: "HIPAA access review playbook",
    summary:
      "A repeatable approach for reviewing access to systems that can expose or influence PHI handling.",
    type: "guides",
    collection: "hipaa",
    category: "HIPAA",
    readTime: "6 min read",
    tags: ["HIPAA", "Access reviews", "Guides"],
    content: `## Why access reviews matter

For HIPAA-oriented environments, stale access is more than an admin issue. It becomes a trust, privacy, and evidence problem.

## Scope the review correctly

Start with systems that store PHI, administer PHI-relevant infrastructure, or can materially affect availability and confidentiality.

## Run the review in stages

### 1. Pull the entitlement snapshot

Capture users, roles, MFA status, and last activity.

### 2. Validate business need

Managers and system owners should confirm whether access is still required.

### 3. Remove or reduce unnecessary access

Track removals and exceptions in a central workflow instead of ad hoc tickets alone.

### 4. Preserve evidence

Keep reviewer decisions, timestamps, and follow-up actions tied to the review cycle.`,
  },
  {
    slug: "third-party-risk-review-checklist",
    title: "Third-party risk review checklist",
    summary:
      "A lean checklist for assessing a new vendor without losing the basics during intake.",
    type: "checklists",
    collection: "vendor-risk",
    category: "Vendor Risk",
    readTime: "5 min read",
    tags: ["Vendor risk", "Checklists", "Procurement"],
    content: `## Intake checklist

- [ ] Confirm business owner and intended use case
- [ ] Identify sensitive data categories involved
- [ ] Record access level to production systems or internal users
- [ ] Confirm security documentation requested and received
- [ ] Assign risk tier and review depth
- [ ] Capture contractual or privacy dependencies
- [ ] Set renewal review date and accountable owner

## Practical note

The goal is not to create the longest questionnaire. The goal is to decide quickly whether the vendor fits, needs deeper review, or should be blocked.`,
  },
  {
    slug: "trust-center-launch-checklist",
    title: "Trust center launch checklist",
    summary:
      "A checklist for publishing a trust center that helps sales instead of creating another maintenance burden.",
    type: "checklists",
    collection: "trust-center",
    category: "Trust Center",
    readTime: "4 min read",
    tags: ["Trust center", "Checklists", "Sales support"],
    content: `## Before you publish

- [ ] Define which artifacts are public versus gated
- [ ] Add a clear security overview and contact path
- [ ] Confirm framework status and certifications are current
- [ ] Link core policies or security summaries that buyers ask for often
- [ ] Provide a request path for deeper evidence
- [ ] Set an owner for ongoing updates and review cadence

## Keep it current

A stale trust center erodes confidence quickly. Treat it like a product surface with owners and a review schedule.`,
  },
  {
    slug: "what-is-a-control-owner",
    title: "What is a control owner?",
    summary:
      "A quick definition of the person accountable for how a control operates and how its evidence stays reviewable.",
    type: "glossary",
    collection: null,
    category: "Compliance operations",
    readTime: "2 min read",
    tags: ["Glossary", "Controls", "Ownership"],
    content: `## Definition

A control owner is the person accountable for ensuring a control is operating as expected and that evidence exists to show it.

## What they are responsible for

- Understanding how the control works
- Keeping related evidence current
- Reviewing failures or exceptions
- Coordinating remediation when the control drifts

## What they are not

They are not always the system administrator doing every task directly. In mature programs, the owner is accountable even if evidence comes from several teams or tools.`,
  },
  {
    slug: "customer-security-review-intake-guide",
    title: "Customer security review intake guide",
    summary:
      "How to route incoming buyer questionnaires and evidence requests before they derail engineering time.",
    type: "guides",
    collection: "trust-center",
    category: "Trust Center",
    readTime: "5 min read",
    tags: ["Questionnaires", "Guides", "Revenue support"],
    content: `## The intake problem

Security reviews often arrive through sales channels without the context needed to answer them efficiently.

## Build a simple intake process

1. Capture account name, deal stage, due date, and customer requirements.
2. Check whether the buyer can self-serve from the trust center first.
3. Route technical questions to the right owner instead of broadcasting them broadly.
4. Reuse approved answers and attach current evidence.
5. Track unresolved questions centrally until the review closes.

## Why this matters

    Without intake discipline, every questionnaire feels new. With intake discipline, your team answers faster and learns from each review.`,
  },
  {
    slug: "soc-2-control-owner-operating-model",
    title: "SOC 2 control owner operating model",
    summary:
      "How to assign and run control ownership so readiness does not depend on one compliance lead chasing everyone.",
    type: "guides",
    collection: "soc-2",
    category: "SOC 2",
    readTime: "6 min read",
    tags: ["SOC 2", "Controls", "Ownership"],
    content: `## Why ownership breaks down

Teams often assign control owners on paper, but not in a way that matches operational reality.

## A better model

- Assign one accountable owner per control
- Identify supporting contributors for evidence and remediation
- Review ownership quarterly as systems and teams change

## Weekly operating cadence

1. Review failing or stale controls
2. Confirm owner response and next action
3. Track remediation dates and exceptions

## What good looks like

Control ownership should make it obvious who reviews the evidence, who fixes the issue, and who signs off when the control is healthy again.`,
  },
  {
    slug: "soc-2-vendor-management-for-audits",
    title: "SOC 2 vendor management for audits",
    summary:
      "How to keep vendor oversight organized so third-party controls do not become late audit surprises.",
    type: "blog",
    collection: "soc-2",
    category: "SOC 2",
    readTime: "5 min read",
    tags: ["SOC 2", "Vendor risk", "Audits"],
    content: `## The common issue

Teams remember to assess new vendors, but they do not maintain a review process for existing ones that support customer systems.

## What auditors look for

- Clear inventory of in-scope vendors
- Evidence of review or due diligence
- Contracts and security commitments where relevant
- Follow-up on material risks or exceptions

## The practical fix

Tie vendor reviews to your broader control program so renewals, exceptions, and evidence live in one place rather than scattered email threads.`,
  },
  {
    slug: "iso-27001-statement-of-applicability-template",
    title: "ISO 27001 statement of applicability template",
    summary:
      "A lightweight way to document which Annex A controls apply, why they apply, and how they are implemented.",
    type: "templates",
    collection: "iso-27001",
    category: "ISO 27001",
    readTime: "5 min read",
    tags: ["ISO 27001", "SoA", "Templates"],
    content: `## What the SoA should capture

Your statement of applicability should connect three things clearly: the control, the implementation decision, and the reason behind it.

## Recommended columns

| Field | Purpose |
| --- | --- |
| Control reference | Identifies the Annex A control |
| Applicable | Yes or no |
| Justification | Why it applies or does not |
| Implementation status | Planned, active, or not applicable |
| Evidence source | Where proof lives |

## Practical advice

Keep the SoA synchronized with your risk treatment logic. If they diverge, reviews become harder than they need to be.`,
  },
  {
    slug: "iso-27001-internal-audit-prep-checklist",
    title: "ISO 27001 internal audit prep checklist",
    summary:
      "A checklist for making internal audits useful, repeatable, and less disruptive to operators.",
    type: "checklists",
    collection: "iso-27001",
    category: "ISO 27001",
    readTime: "5 min read",
    tags: ["ISO 27001", "Internal audit", "Checklists"],
    content: `## Before the audit starts

- [ ] Confirm scope and process areas under review
- [ ] Gather current policies and procedures
- [ ] Review recent risk and treatment updates
- [ ] Confirm evidence owners for sampled controls
- [ ] Collect previous internal or external findings
- [ ] Prepare follow-up tracking for observations and actions

## Make the audit valuable

The internal audit should surface system weaknesses early, not just prove that a calendar event happened.`,
  },
  {
    slug: "gdpr-ropa-template-for-saas-products",
    title: "GDPR RoPA template for SaaS products",
    summary:
      "A practical structure for records of processing activities that product and compliance teams can maintain together.",
    type: "templates",
    collection: "gdpr",
    category: "GDPR",
    readTime: "5 min read",
    tags: ["GDPR", "RoPA", "Templates"],
    content: `## Core fields to track

| Field | Why it matters |
| --- | --- |
| Process name | Describes the business activity |
| Data subjects | Clarifies whose data is involved |
| Data categories | Explains what is processed |
| Purpose | Captures business reason |
| Recipients | Identifies sharing or subprocessors |
| Retention | Shows how long data stays |

## Keep it operational

Your RoPA should connect to product systems and vendors, not sit separately as a legal-only artifact.`,
  },
  {
    slug: "gdpr-dsar-workflow-for-lean-teams",
    title: "GDPR DSAR workflow for lean teams",
    summary:
      "How smaller teams can handle access, deletion, and correction requests without inventing a new process every time.",
    type: "guides",
    collection: "gdpr",
    category: "GDPR",
    readTime: "6 min read",
    tags: ["GDPR", "DSAR", "Guides"],
    content: `## The challenge

Most DSAR pain comes from not knowing where relevant data lives or who needs to respond.

## Build a repeatable flow

1. Intake and verify the requester
2. Identify systems and vendors in scope
3. Assign owners for search and response
4. Review exemptions or edge cases
5. Respond and preserve an audit trail

## What matters most

Speed is important, but consistency matters more. A visible workflow prevents missed systems and inconsistent decisions.`,
  },
  {
    slug: "hipaa-business-associate-review-template",
    title: "HIPAA business associate review template",
    summary:
      "A review structure for third parties that can create, receive, maintain, or transmit PHI on your behalf.",
    type: "templates",
    collection: "hipaa",
    category: "HIPAA",
    readTime: "5 min read",
    tags: ["HIPAA", "Business associates", "Templates"],
    content: `## Review goals

This template helps teams capture what the vendor does, what PHI exposure exists, and what safeguards or agreements are required.

## Recommended sections

- Service description
- PHI involvement and data flow
- Access model and personnel exposure
- Security controls and evidence requested
- Contract or BAA status
- Renewal review date

## Why this matters

Business associate oversight should be visible as part of the ongoing vendor program, not rediscovered during diligence.`,
  },
  {
    slug: "hipaa-incident-response-for-healthtech",
    title: "HIPAA incident response for healthtech teams",
    summary:
      "How to connect incident handling, evidence retention, and stakeholder communication when PHI may be involved.",
    type: "blog",
    collection: "hipaa",
    category: "HIPAA",
    readTime: "5 min read",
    tags: ["HIPAA", "Incident response", "Healthtech"],
    content: `## Where teams struggle

The technical incident response process exists, but PHI-related communication and review steps are not built into it.

## Add these elements

- Flag incidents that may involve regulated data early
- Capture timestamps, systems, and affected records clearly
- Coordinate security, legal, and operations review paths
- Preserve evidence for later diligence or audit questions

## The payoff

You reduce confusion during incidents and make post-incident review far more defensible.`,
  },
  {
    slug: "vendor-security-questionnaire-core-sections",
    title: "Vendor security questionnaire core sections",
    summary:
      "The sections most teams actually need to assess vendor risk without sending a bloated questionnaire.",
    type: "guides",
    collection: "vendor-risk",
    category: "Vendor Risk",
    readTime: "5 min read",
    tags: ["Vendor risk", "Questionnaires", "Guides"],
    content: `## Start with the essentials

Questionnaires should help you evaluate risk, not collect trivia.

## Core sections

- Data handling and retention
- Access control and MFA
- Logging and monitoring
- Incident response and breach notification
- Infrastructure and subprocessor model
- Business continuity and recovery

## When to go deeper

Add more depth only when the vendor tier, data sensitivity, or regulatory exposure justifies it.`,
  },
  {
    slug: "vendor-renewal-review-workflow",
    title: "Vendor renewal review workflow",
    summary:
      "How to turn annual vendor re-review into a lightweight operating cycle instead of a last-minute scramble.",
    type: "blog",
    collection: "vendor-risk",
    category: "Vendor Risk",
    readTime: "4 min read",
    tags: ["Vendor risk", "Renewals", "Operations"],
    content: `## The renewal problem

Initial reviews are documented, but annual reassessments often depend on someone remembering to ask.

## Build the loop

1. Assign a renewal date at onboarding
2. Tier the review depth based on current use and risk
3. Collect updated evidence only where needed
4. Record decisions and exceptions centrally

## Result

Renewal oversight becomes predictable and auditable instead of reactive.`,
  },
  {
    slug: "trust-center-content-map",
    title: "Trust center content map",
    summary:
      "A simple framework for deciding what belongs in your trust center, what should be gated, and what should stay internal.",
    type: "templates",
    collection: "trust-center",
    category: "Trust Center",
    readTime: "4 min read",
    tags: ["Trust center", "Templates", "Content strategy"],
    content: `## Divide content into three groups

| Zone | What belongs there |
| --- | --- |
| Public | High-level security and compliance information |
| Gated | Sensitive reports or detailed evidence for qualified buyers |
| Internal only | Operational runbooks, raw screenshots, and privileged documents |

## Why this works

The map prevents both over-sharing and under-sharing. Buyers get enough confidence early, and your team keeps control of deeper evidence.`,
  },
  {
    slug: "trust-center-metrics-that-matter",
    title: "Trust center metrics that matter",
    summary:
      "A few metrics that show whether your trust center is reducing review friction or just existing on the website.",
    type: "blog",
    collection: "trust-center",
    category: "Trust Center",
    readTime: "4 min read",
    tags: ["Trust center", "Metrics", "Revenue support"],
    content: `## Useful metrics

- Number of buyer requests resolved through self-service
- Time saved on questionnaire response cycles
- Most requested documents or topics
- Gated access requests converted into active deal support

## Why these matter

They show whether the trust center is reducing repetitive work for security and sales teams, not just adding another page to maintain.`,
  },
  {
    slug: "what-is-continuous-compliance",
    title: "What is continuous compliance?",
    summary:
      "A plain-English definition of running compliance as an ongoing operating model instead of a once-a-year push.",
    type: "glossary",
    collection: null,
    category: "Compliance operations",
    readTime: "2 min read",
    tags: ["Glossary", "Compliance", "Monitoring"],
    content: `## Definition

Continuous compliance is the practice of monitoring controls, collecting evidence, and reviewing issues throughout the year instead of preparing only when an audit or customer request appears.

## Why teams adopt it

It reduces audit surprises, improves accountability, and keeps trust work closer to day-to-day operations.`,
  },
  {
    slug: "what-is-an-evidence-owner",
    title: "What is an evidence owner?",
    summary:
      "A quick definition of the person responsible for keeping a control's supporting proof current and reviewable.",
    type: "glossary",
    collection: null,
    category: "Compliance operations",
    readTime: "2 min read",
    tags: ["Glossary", "Evidence", "Ownership"],
    content: `## Definition

An evidence owner is the person responsible for ensuring the proof linked to a control stays current, accurate, and available for review.

## In practice

Evidence owners often work alongside control owners. One is accountable for the control's operation, while the other makes sure the supporting proof remains usable.`,
  },
  {
    slug: "framework-selection-checklist-for-startups",
    title: "Framework selection checklist for startups",
    summary:
      "A checklist for deciding whether SOC 2, ISO 27001, HIPAA, GDPR, or multiple frameworks belong in your near-term roadmap.",
    type: "checklists",
    collection: null,
    category: "Framework strategy",
    readTime: "5 min read",
    tags: ["Frameworks", "Startups", "Checklists"],
    content: `## Checklist

- [ ] Confirm which frameworks buyers ask for most often
- [ ] Check whether you handle regulated data such as PHI or EU personal data
- [ ] Review which markets or geographies shape buyer expectations
- [ ] Estimate internal capacity for policy, evidence, and review workflows
- [ ] Identify shared controls that reduce future duplicate effort
- [ ] Decide whether certification, attestation, or operational readiness is the immediate goal

## What this helps avoid

It prevents teams from chasing a framework based on generic advice instead of actual customer and operating requirements.`,
  },
  {
    slug: "audit-request-intake-template",
    title: "Audit request intake template",
    summary:
      "A lightweight template for capturing auditor requests, owners, due dates, and evidence status in one place.",
    type: "templates",
    collection: "soc-2",
    category: "Audit readiness",
    readTime: "4 min read",
    tags: ["Audit readiness", "Templates", "SOC 2"],
    content: `## Track every request with the same fields

| Field | Purpose |
| --- | --- |
| Request ID | Unique reference |
| Control or topic | What the auditor is asking about |
| Owner | Who responds |
| Due date | When the response is needed |
| Evidence link | Where the proof lives |
| Status | Open, in progress, submitted, closed |

## Why this matters

Audit work gets chaotic when requests are tracked in inboxes. A simple intake structure keeps fieldwork organized and visible.`,
  },
  {
    slug: "privacy-by-design-review-checklist",
    title: "Privacy-by-design review checklist",
    summary:
      "A checklist for reviewing new features or workflows that collect, use, or expose personal data.",
    type: "checklists",
    collection: "gdpr",
    category: "GDPR",
    readTime: "5 min read",
    tags: ["GDPR", "Privacy by design", "Checklists"],
    content: `## Before launch

- [ ] Define the purpose for collecting the data
- [ ] Confirm the minimum data needed for that purpose
- [ ] Check where the data is stored and who can access it
- [ ] Review vendor or subprocessor involvement
- [ ] Confirm retention and deletion expectations
- [ ] Identify whether user-facing notices or workflow changes are needed

## Why teams use this

It turns privacy review into a repeatable product workflow instead of a last-minute legal checkpoint.`,
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
