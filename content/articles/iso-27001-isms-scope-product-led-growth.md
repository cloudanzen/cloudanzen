---
title: "ISO 27001 ISMS scope decisions for product-led growth SaaS"
summary: "When your product has a free tier and a paid tier, your ISMS scope boundary splits in ways most scoping guides ignore — here is how to handle it."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","product-led growth","SaaS compliance","Clause 4.3"]
sortOrder: 174
publishedAt: "2026-10-09"
author: "sarah-jenkins"
---
Your Stage 1 auditor will ask one question that every product-led growth (PLG) team fumbles: which tier of users is inside the ISMS boundary? Founders who built compliance programs from SOC 2 guides or ISO templates designed for enterprise-only products hit a wall here. Free-tier users behave differently, create different data flows, and are often served by different infrastructure than your paying customers. Getting the scope boundary wrong means the auditor either rejects your scope statement or you inherit controls over data you cannot justify protecting to that standard.

## Why PLG breaks standard scoping guides

Most ISO 27001 scoping guidance assumes a single product tier. Clause 4.3 asks you to define the boundaries and interfaces of the ISMS — it does not tell you how to handle a free-tier community that runs on shared infrastructure alongside a SOC 2-audited enterprise tier.

The problem shows up in three places. First, your data model likely does not cleanly separate free-tier rows from paid-tier rows at the database level. Both sit in the same RDS cluster. Your scope statement says you are protecting data for paying customers, but the infrastructure does not enforce that boundary. Second, your free-tier users may be sending data to the same logging and monitoring stack as your enterprise customers. Your SIEM events reference user IDs that are not within your stated scope. Third, your engineering team writes code that runs across both tiers. Developer access, CI/CD pipelines, and deployment tooling affect free-tier and paid-tier services simultaneously.

An auditor who traces your access review to a list of users who can access your production database does not care that most of those users only touch free-tier tenants. The access control scope covers all of production.

## The three scope decisions PLG teams face

**Decision 1: Include both tiers or draw a hard boundary.** The simplest defensible scope is to include all tiers. You do not need to justify a split, your infrastructure already applies uniform controls, and your evidence collection is cleaner. The cost is that you are certifying a larger surface than enterprise-only vendors. For most Series B PLG companies, the cost is worthwhile — your free tier is a customer acquisition channel and your enterprise buyers will want to see that your ISMS covers the same infrastructure their data runs on.

If you genuinely want to scope out the free tier, you need technical segregation at the infrastructure level: separate VPCs or accounts, separate databases, separate access management, and documented data flows that prove free-tier data never crosses into the paid-tier boundary. That is a significant engineering investment before your first certification. Most teams choose to include both.

**Decision 2: How to handle community users in your Statement of Applicability.** If free-tier users can file support tickets, access documentation, or interact with a community forum, those touchpoints involve personal data and staff access. Annex A.5.13 (information classification) and A.5.33 (protection of records) both apply to that data even if you do not bill for it. Your SoA needs to reflect this honestly, or the auditor finds a gap between your scope statement and your actual data flows.

**Decision 3: Where developer access sits in your scope.** Your engineers commit code to a repository that deploys to both tiers. Your scope cannot say "only paid-tier infrastructure" if the same developer laptop, the same GitHub account, and the same CI runner deploys to both. The access control envelope is your engineering team, regardless of which tier's services they can reach. Document this accurately in your scope and your Clause 4.3 boundary diagram.

## Writing a Clause 4.3 boundary that survives auditor scrutiny

Clause 4.3 requires your scope document to identify external and internal issues relevant to the ISMS boundary. For a PLG company, the relevant interfaces are:

- The point at which free-tier users are provisioned (typically an API gateway or auth service)
- The data store layer and whether tenant isolation is enforced at row, schema, or infrastructure level
- The CI/CD pipeline that deploys code affecting both tiers
- Third-party sub-processors who handle both free and paid user data (email, analytics, support tooling)

For each interface, your scope document should state whether it is inside or outside the ISMS boundary and why. If a sub-processor handles free-tier user data and paid-tier user data under the same DPA, that sub-processor is inside your scope for supplier management purposes regardless of which tier you are certifying.

The test is simple: if a security incident on that component would require you to notify a paid-tier enterprise customer, the component is in scope.

## What the SoA looks like for a tiered product

Your Statement of Applicability will look similar to a single-tier product, with one important difference. Any control that references user categories — particularly around data classification, access rights, and incident response — needs to acknowledge that your user population includes two groups with different contractual relationships.

A.5.12 (classification of information) applies to data generated by both free and paid users. Your classification policy should address both groups, even if the handling procedures differ. If you classify paid-tier production data as Confidential and free-tier data as Internal, document that distinction and show that your controls enforce the boundary.

A.6.8 (information security event reporting) applies to events involving any user data. A breach affecting free-tier users is still a breach. Your incident response plan should cover both user populations, or your SoA annotation for A.6.8 will not survive scrutiny.

Annex A.5.19 (information security in supplier relationships) applies to sub-processors who handle both tiers. Your supplier register should reflect this. If a sub-processor only handles free-tier data, you can note that in your risk assessment — but the assessment still needs to happen.

## Keeping scope current as your PLG funnel matures

PLG companies move fast. Your free-to-paid conversion path changes, new integrations land, and your infrastructure architecture evolves as your team grows. The ISMS scope is a living document, not a certificate artifact you file and forget.

Build scope review into the events that change your PLG architecture:

- New product tier launches (a Pro tier between free and Enterprise creates a new boundary question)
- New sub-processors that touch free-tier user data
- Infrastructure changes that alter tenant isolation (migrating from shared database to separate schemas)
- Enterprise customer contractual requirements that mandate specific data isolation

Version your scope document. A changelog showing that you reviewed scope when you launched a new tier is evidence that you are actively managing the ISMS boundary, not just pointing at a document you wrote before your first Stage 1 audit.

The auditor is not trying to catch you out. They want to see that you understand your own product and can explain where the boundary sits and why. A well-reasoned scope that includes both tiers, with documented interfaces and a consistent SoA, is far easier to defend than a narrow scope with unexplained exceptions.

Audit prep for a PLG product is harder than it looks when you start from a template. CloudAnzen maps your actual infrastructure — including the services your free and paid tiers share — to ISO 27001 controls, so your scope document reflects how your product actually works. [Talk to us](/demo).