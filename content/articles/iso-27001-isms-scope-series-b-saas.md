---
title: "How to scope your ISO 27001 ISMS as a Series B SaaS"
summary: "Getting ISMS scope wrong is the most common reason Series B SaaS teams stall their ISO 27001 certification — here is how to draw the boundary correctly"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","Series B","audit readiness"]
sortOrder: 127
publishedAt: "2026-08-19"
author: "sarah-jenkins"
---
Scoping your ISMS wrong is one of the most expensive mistakes you can make early in an ISO 27001 programme. Too narrow and auditors flag material gaps. Too broad and you drown in controls that don't map to real risk. For a Series B SaaS hitting enterprise procurement questionnaires for the first time, getting the scope right is the difference between a six-month certification sprint and an eighteen-month crawl.

## What ISO 27001 actually requires for scope

The standard requires you to define the ISMS scope as part of clause 4.3 [source: https://www.isms.online/iso-27001/]. In practice that means answering three questions before you write a single policy:

1. **Which organisational boundaries apply?** Are you scoping the whole company, or just the product division?
2. **Which locations?** Remote-first companies routinely forget to address employee home networks — and auditors do not.
3. **Which assets and services?** Your production environment, CI/CD pipeline, SaaS toolchain, and customer data handling processes all need to be considered.

The scope statement sits in your Statement of Applicability (SoA) and appears on your certificate. Auditors read it first. Whatever you put there, they will test against it.

## Three decisions Series B teams consistently get wrong

**Over-scoping the organisation.** If you have 80 employees but only 20 of them ever touch customer data or production systems, scoping all 80 immediately doubles your control burden. ISO 27001 does not require you to scope the entire company [source: https://www.isms.online/iso-27001/]. Scope the segment that processes, stores, or transmits the information you are protecting.

**Under-scoping third-party dependencies.** Your production database runs on a managed cloud provider. Authentication is handled by a vendor. Data is replicated to a backup service. If a control in Annex A covers an area you have outsourced, you must still include it in scope and describe how the third-party arrangement satisfies it. Auditors will ask for your vendor assessments and SLAs. Missing documentation here is a nonconformity.

**Treating scope as a one-time decision.** At Series A you were five engineers and one product. At Series B you added an enterprise tier, two new regions, and a data pipeline built six months ago. The scope statement written eighteen months ago probably does not reflect the current system. Scope must be reviewed whenever there is a material change to the organisation or its information assets [source: https://www.isms.online/iso-27001/]. Build a quarterly review cadence into your ISMS calendar before your first surveillance audit catches the gap.

## How to draw the boundary in practice

Start with your data flows. Map where customer data enters your system, how it moves, where it rests, and where it exits. That map is your scope in draft form.

For a typical SaaS company the scope includes:

- The production environment and all supporting infrastructure (cloud accounts, CI/CD tooling, secrets management)
- Engineering and product teams that access production or handle customer data
- The security and compliance function — even if that is one person
- Customer-facing support tooling that accesses production data

It typically excludes:

- Finance and legal functions with no production system access
- The marketing website, unless it processes personal data beyond analytics cookies
- Office facilities if you are fully remote with no physical assets in scope

Once you have the draft, walk it with your auditor or a qualified Lead Implementer before you publish it. Auditors have pattern-matched against hundreds of scopes [source: https://www.isms.online/iso-27001/]. A one-hour review early catches scoping arguments that would otherwise surface at your certification audit.

## Documenting scope so auditors do not push back

Your scope document must answer five questions clearly:

1. **What information is in scope?** Name the data types: customer personal data, financial records, authentication credentials, source code.
2. **What systems process that information?** List environments by name — production AWS account, data warehouse, secrets vault.
3. **Who has access?** Name roles and teams, not individuals.
4. **What external parties are relevant?** Name your critical vendors and what they touch.
5. **What is explicitly excluded and why?** Exclusions need a rationale. "Marketing team is excluded as they have no access to production systems or customer personal data" is defensible. "Finance is excluded because it's complicated" is not.

The scope statement itself should fit on one page. The supporting documentation — asset inventory, data flow diagrams, vendor list — lives behind it. Auditors who must read a ten-page scope document to find the boundary will assume you don't know where it is either.

## Scope and your Annex A controls

Scope determines which Annex A controls are applicable. If physical security controls (A.7) don't apply because you have no physical office, you exclude them — but you must document the justification in your SoA. The SoA is the living link between your scope and your control framework [source: https://www.isms.online/iso-27001/].

Be precise about partial applicability. If engineering is in scope but sales is not, controls for HR security (A.6) apply only to the in-scope population. Auditors sample controls against your scope; if the documented scope doesn't match who actually has access, you have a gap on both sides.

One pragmatic approach for fast-growing Series B teams: define scope conservatively on your first certification — the core product, core team, core infrastructure — then expand it at your first surveillance audit or recertification once your programme is stable. A narrower scope with mature controls is more defensible than a broad scope with patchy evidence.

## Before your first audit

Audit prep for ISO 27001 starts with scope, and scope gaps compound downstream. If you find them during your pre-certification audit you are looking at weeks of remediation. If auditors find them at certification you are looking at major nonconformities.

Map your data flows first. Draft your scope against them. Get eyes on it from someone who has seen an ISO 27001 certification audit. Lock it down and build your control programme against it — not the other way around.

Compliance evidence is only useful if it maps to a scope auditors will accept. CloudAnzen continuously maps your stack to ISO 27001 controls so gaps surface before your auditor does. [Talk to us](/demo).