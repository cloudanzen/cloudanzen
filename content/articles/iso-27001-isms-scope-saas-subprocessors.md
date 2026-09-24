---
title: "Scoping your ISO 27001 ISMS when subprocessors run half your stack"
summary: "How to draw defensible ISO 27001 ISMS scope boundaries when your SaaS stack includes dozens of critical subprocessors."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","subprocessors","SaaS compliance","Series B"]
sortOrder: 160
publishedAt: "2026-09-24"
author: "sarah-jenkins"
---
The audit is six months out. Your production stack runs on AWS, Stripe, Snowflake, Intercom, GitHub, and another dozen SaaS tools. The question every Stage 1 auditor asks first: what exactly is in your ISMS scope? Most Series B teams answer this wrong. They either over-scope — trying to include every supplier — or under-scope by pretending the boundary stops at code they wrote themselves.

## What ISO 27001 Clause 4.3 actually requires

The standard is specific. When you define your ISMS scope, you must consider the interfaces and dependencies between activities performed by your organisation and those performed by other organisations [source: https://www.isms.online/iso-27001/].

That phrase does a lot of work. Every SaaS tool in your stack that touches in-scope data creates an interface. The standard does not require you to bring all of those tools inside your ISMS boundary. It does require you to document the interface and demonstrate that your controls cover it — either by managing the third party through supplier controls or by excluding it with a written rationale the auditor can follow.

The scoping decision at Clause 4.3 is not a legal exercise. It is an operational claim: here is what we control, here is what we manage through suppliers, and here is what sits outside entirely because it does not touch our in-scope data. The auditor's job at Stage 1 is to test whether that claim is coherent and internally consistent [source: https://www.iso.org/standard/27001].

## A three-tier model for SaaS subprocessors

The most practical approach splits your stack into three tiers before you write a word of scope documentation.

**Tier 1 — in scope, directly controlled.** Cloud infrastructure accounts your organisation owns, your code repositories, your CI/CD pipelines, and the administrative endpoints used to manage production. You have root-level access. Evidence is yours to collect and retain.

**Tier 2 — in scope, supplier-managed.** Critical subprocessors where in-scope customer data flows but you do not control the underlying infrastructure. A payment processor, a cloud data warehouse, a transactional email provider. These belong in your supplier register and require active management under Annex A controls 5.19 through 5.22. They are in scope for supplier management, not for direct technical controls you cannot enforce.

**Tier 3 — out of scope, documented.** Internal productivity tools where no ISMS-relevant data flows: your project tracker, your design tool, your HR system. These still appear in your asset register. They do not require ISMS controls, but the rationale for their exclusion must be documented — specifically, why the data they handle falls outside your ISMS boundary.

The auditor will probe the Tier 2/Tier 3 boundary hardest. Any tool you place in Tier 3 needs a credible isolation argument: the system does not connect to in-scope environments, does not receive in-scope data exports, and cannot be used as a path to reach your Tier 1 systems.

## Writing the scope statement your auditor needs

A scope statement that survives Stage 1 review answers four questions without requiring the auditor to infer anything.

**What services are in scope?** Name the product lines and the data categories they process. Avoid vague language like "all information assets." Concrete example: "The SaaS platform serving commercial customers in the UK and India, including all customer data processed in AWS eu-west-1 and ap-south-1."

**What is excluded and why?** Exclusions are not weaknesses — they demonstrate deliberate scoping decisions. "The internal HR system is excluded because it does not process customer data and has no network connection to in-scope production environments." Document the isolation evidence, not just the conclusion.

**Which legal entities are included?** At Series B, many companies have a UK holding company, a Singapore entity for APAC contracts, and an offshore engineering entity. State explicitly which legal entities are within scope, and provide the rationale for any that are excluded [source: https://www.isms.online/iso-27001/].

**What is the physical and logical boundary?** For cloud-native SaaS this is usually: "All production workloads running in the organisation's AWS accounts, the CI/CD pipelines used to deploy to those accounts, and the administrative laptops enrolled in the organisation's MDM solution."

## The over-scoping trap at Series B

Over-scoping is more common than under-scoping at this stage. The instinct to include everything feels safer. It is not.

Including every supplier in active scope means evidencing controls for each at audit time. Thirty tools means thirty supplier questionnaires, thirty annual reviews, thirty risk assessments. At Series B headcount, that operational load will collapse the compliance programme before you reach Stage 2.

The discipline is a single test for each system: does this tool store, process, or transmit data that falls within our ISMS boundary? If no, document the data flow rationale and place it in Tier 3. If yes, tier it appropriately and apply controls proportionate to the risk it carries — not identical controls for every supplier regardless of criticality.

A lightweight supplier tiering template used consistently is more defensible than an exhaustive questionnaire applied to every SaaS tool in the stack. The auditor is assessing proportionality as much as completeness.

## Keeping the scope current after certification

A scope defined at Series B will not survive Series C without revision. Two triggers should force a scope review before your next surveillance audit.

The first is a new product line or regulated market. Launching a product that handles health data after initial certification means either bringing that product into scope with a gap assessment, or explicitly excluding it with documented rationale. Neither is automatic. An undocumented scope expansion is one of the most common nonconformities raised at surveillance audits [source: https://www.isms.online/iso-27001/].

The second is a significant new subprocessor. Onboarding an AI inference provider that processes customer data, a new CDN that terminates TLS, or a new data replication service changes your risk landscape. Treat any Tier 2 addition as a scope-change trigger, not just a supplier addition.

The operators who stay ahead of this build one step into their supplier onboarding process: any system that may process in-scope data gets flagged for a scope impact review before the contract is signed. That review takes under an hour. A nonconformity at surveillance costs significantly more.

Audit readiness erodes quietly as your stack grows. CloudAnzen maps your infrastructure to ISO 27001 controls continuously so your scope statement reflects the environment your auditor will actually test. [Talk to us](/demo).