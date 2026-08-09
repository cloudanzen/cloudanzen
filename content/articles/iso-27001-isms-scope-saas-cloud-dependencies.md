---
title: "ISO 27001 ISMS scope when your stack is mostly SaaS"
summary: "ISMS scope statements for SaaS-heavy stacks fail at audit because they ignore cloud dependency obligations — here is how to draw defensible boundaries"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS","SaaS","cloud compliance","audit readiness"]
sortOrder: 118
publishedAt: "2026-08-09"
author: "sarah-jenkins"
---
Most Series B teams inherit an ISMS scope decision made early — sometimes before the compliance lead was even hired. By the time the Stage 1 audit arrives, the scope is either too wide (every Notion doc, every personal laptop) or a legal fiction (claiming three AWS accounts when twelve SaaS tools process customer data daily). Both fail.

## What Clause 4.3 actually requires

ISO 27001:2022 Clause 4.3 requires you to determine the boundaries and applicability of the ISMS [source: https://www.iso.org/standard/27001]. That is it. The standard does not prescribe a specific tool count or system list. It requires you to consider:

- Internal and external issues identified in Clause 4.1
- Requirements of interested parties under Clause 4.2
- Interfaces and dependencies between your activities and those of external parties

The third point is where SaaS-heavy stacks get complicated. Every critical SaaS integration is a dependency. Ignore it and you have a gap the auditor will find.

## The shared responsibility trap

When your infrastructure runs mostly on third-party SaaS — AWS, GitHub, Okta, Salesforce, Slack — you are not responsible for the physical security of those data centres. The provider is. That is the upside.

The downside: you are still responsible for how you configure, access, and govern those platforms. Misconfigured sharing rules, over-permissioned API tokens, poorly managed group memberships — those are your controls, not the vendor's.

Auditors working to ISO 27001 will ask what controls you have in place for critical SaaS platforms. The answer "the vendor handles it" does not satisfy Clause A.5.19 (supplier relationships) or Clause A.8.3 (information access restriction) [source: https://www.isms.online/iso-27001/]. The scope statement needs to reflect this honestly. If customer data flows through a SaaS platform, that dependency belongs in your scope boundary description — even if the underlying servers are not yours.

## How to draw defensible scope for a SaaS-heavy stack

### Step 1: Map where customer data actually lives

Before writing a single line of the scope statement, list every system that touches personal data, confidential configuration, or production credentials:

- Primary cloud: compute, storage, databases
- CI/CD: source control, pipeline tooling, deployment platforms
- Identity: SSO provider, directory service, MFA platform
- Monitoring: log aggregation, SIEM, alerting
- Product integrations: any SaaS that directly exchanges data with your product

This list is your working scope boundary. If a system appears here, the controls governing that system belong in your ISMS — even when your team does not manage the underlying infrastructure.

### Step 2: Tier by data sensitivity and blast radius

You cannot write controls for every SaaS tool at the same depth. A practical tiering approach:

**Tier 1 — Direct data processors.** Production cloud accounts, primary databases, identity provider. Full control set, quarterly access reviews, formal change management.

**Tier 2 — Significant accessors.** Collaboration platforms containing confidential discussions, source control repositories holding code and credentials. Formal access reviews, clear offboarding procedures.

**Tier 3 — Peripheral tools.** Analytics platforms, marketing automation with no personal data. Covered by supplier management policy and annual review.

Documenting this tiering inside the scope statement shows auditors that you have mapped the dependencies deliberately — without claiming evidence you cannot produce.

### Step 3: Write exclusion rationale that holds up

If you exclude a system from formal scope, Clause 4.3 requires that the exclusion does not affect your ability to achieve information security objectives or meet interested-party requirements [source: https://www.iso.org/standard/27001]. Write it down.

Practical language: "The [Tool Name] system is excluded from ISMS scope because it processes no personal data, holds no confidential information assets, and has no network connectivity to in-scope systems. This exclusion was reviewed and approved by [Name], CISO, on [Date]."

That sentence holds up at audit. "We don't think it's important" does not.

## The operating model question: who owns scope going forward

The scope statement is a living document. At Series B, engineering ships weekly. New SaaS tools get onboarded, cloud accounts multiply, and scope drifts without a process to catch it.

Assign explicit ownership:

- The CISO or compliance lead owns the scope statement and reviews it quarterly.
- Engineering runs a lightweight intake check: any new SaaS tool or cloud account that will touch customer data requires a brief risk assessment before onboarding.
- Each Tier 1 and Tier 2 tool has a named owner responsible for access reviews.

Auditors will ask: "How would you know if your scope had changed without the document being updated?" If the answer is a repeatable quarterly review tied to a change management process, that is credible. Silence is a non-conformity.

## What Stage 1 auditors look for in the scope document

Stage 1 auditors review documentation, not controls. They want to see four things in the scope statement:

1. A clear statement of what is in scope — people, processes, systems, physical locations if relevant
2. An explicit description of the external context, including cloud providers and critical SaaS vendors
3. Any exclusions with documented rationale
4. Evidence that interested-party requirements were considered — customer DPA obligations, regulatory requirements, contractual commitments

Most Stage 1 scope failures come from omitting point three or treating point four as a checkbox [source: https://www.isms.online/iso-27001/]. Cover all four and you clear Stage 1 without a major non-conformity on scope.

Getting scope wrong costs months — either rework when the auditor finds the gap, or wasted evidence collection for systems that never needed to be in scope. CloudAnzen maps your cloud and SaaS stack to ISO 27001 controls automatically, so you start scope conversations with an accurate picture rather than guesswork. [Talk to us](/demo).