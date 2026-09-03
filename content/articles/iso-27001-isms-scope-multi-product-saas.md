---
title: "ISO 27001 ISMS scope when your SaaS has multiple products"
summary: "When shared infrastructure connects two products, your scope boundary is a technical question before it is a documentation one — here is how to answer it before Stage 1"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","audit readiness"]
sortOrder: 139
publishedAt: "2026-09-03"
author: "sarah-jenkins"
---
Your Series B SaaS now has two products. Maybe a core platform and a newer module that started as an internal tool and became a standalone offering. Certification is next. The first question your auditor will ask: which one are you certifying? That decision shapes everything — evidence scope, control coverage, the list of internal audits you will need to run. Getting it wrong costs months at Stage 2.

## Why the multi-product question matters at Stage 1

ISO 27001 requires you to define your ISMS scope in writing before Stage 1 begins [source: https://www.isms.online/iso-27001/]. That document must describe what information assets, processes, locations, and functions are covered. When you have one product, this is straightforward. When you have two or more, it becomes a real decision with real trade-offs.

Auditors use the scope document as their roadmap. They test only what is in scope — and they flag anything that is technically inside your stated boundary but missing from your evidence collection. If your scope says "all cloud-hosted services" and you forgot that the legacy onboarding tool still runs on a different AWS account, that is a nonconformity on day one.

The fundamental choice is narrow or wide.

**Narrow scope** means certifying a single product or a tightly defined service boundary. The benefit: a shorter evidence collection list, fewer control owners to train, and a faster path to the certificate. The risk: enterprise buyers may push back when they see a certificate that does not cover the product they are actually buying.

**Wide scope** means certifying everything — platform, ancillary services, internal tools that touch customer data. More work upfront, but a cleaner story in procurement conversations.

Neither is wrong. The right choice depends on your sales motion and your technical architecture.

## How shared infrastructure forces your hand

Here is where most multi-product teams get surprised: shared infrastructure often makes narrow scope impractical.

If your two products share a common authentication service, a data pipeline, or a logging stack, the ISO 27001 standard expects you to include those shared components in scope [source: https://www.isms.online/iso-27001/]. Clause 4.3 of the standard requires you to account for interfaces and dependencies between your in-scope processes and the outside world. A shared auth layer used by customers of both products is not outside the boundary — it is inside it, whether you planned for that or not.

There are two ways to handle this.

**Full inclusion**: bring both products and all shared infrastructure into scope. This is clean from an audit perspective. All controls apply everywhere. Evidence is collected across the entire environment. The downside is proportional effort.

**Explicit carve-out**: document the carve-out formally, demonstrate that the excluded product has no access to the in-scope product's data or shared control plane, and certify only what you planned to certify. Auditors accept this when the boundary is technically enforced and documented, not just stated. A VPC separation with documented network ACLs carries far more weight than a sentence claiming the products are separate.

If you cannot show technical enforcement of the boundary, do not try to carve it out. Auditors will ask for evidence, and an informal boundary will fail.

## What your scope document must actually contain

ISO 27001 Clause 4.3 requires your scope document to address the context of the organisation, the requirements of interested parties, interfaces and dependencies at the ISMS boundary, and any Annex A exclusions with justification [source: https://www.iso.org/standard/27001].

For multi-product teams, this means the scope document must do more than name which product is in scope. It needs to:

- Name every external interface where the in-scope product exchanges data with systems outside the ISMS boundary
- Describe how shared services — authentication, logging, alerting, CI/CD — are handled: in scope or out, and why
- Justify any Annex A control exclusions with a paragraph that would hold up to five minutes of auditor questioning

The most common Stage 1 finding for multi-product teams is a scope document that names a single product without saying anything about the shared database layer, the shared CI/CD pipeline, or the shared admin console that engineers use across both products. Auditors will find those systems. Better to include them in scope and control them than to pretend they do not exist.

### The five questions auditors ask about scope

When an auditor reviews a scope document, they are looking for answers to five questions:

1. What data does this product hold, and where?
2. Which external parties access it, and how?
3. Which internal systems support it, and are they in scope?
4. What does the scope boundary look like — technically, not just on paper?
5. How does this scope connect to the risk treatment plan?

Prepare answers to all five before Stage 1. If the scope document does not address them, the opening meeting will be spent doing it verbally — not a good start.

## Practical sequencing for a Series B team

If you are at Series B and planning your first ISO 27001 certification, the scope decision should happen in the first two weeks of the implementation project, not at the end.

A pragmatic sequence:

**Step 1 — Map your architecture.** Draw a diagram of all services, data flows, and external integrations. One working session with your engineering lead. Do not rely on the Confluence diagram from eighteen months ago.

**Step 2 — Identify shared components.** Highlight anything shared between the products you are considering including or excluding. This is your forcing function.

**Step 3 — Run the carve-out test.** For each shared component, ask: can you demonstrate a hard technical boundary? If not, it goes in scope.

**Step 4 — Draft the scope statement.** One to two pages. Name what is in, what is out, and why.

**Step 5 — Get auditor feedback before Stage 1.** Many certification bodies offer a pre-Stage 1 scoping call. Use it. A scope document that your auditor has reviewed and not objected to before Stage 1 saves weeks.

The scope statement is not a permanent contract — it can be amended. But every amendment costs calendar time and sometimes recertification cost. Getting it right before Stage 1 is worth the upfront effort.

## Common mistakes that surface in Stage 2

Even teams that start scoping early make predictable mistakes.

**Scoping the product without scoping the team.** ISO 27001 controls cover people as well as systems. If engineers from both product teams have access to production infrastructure, those engineers are inside your boundary regardless of which product they nominally own.

**Listing services without listing locations.** The standard asks where information is processed, not just what processes it. AWS regions, contractor home offices, and co-located servers all need to appear in the scope document or be explicitly excluded.

**Ignoring subprocessors.** If your product relies on a third-party service that processes customer data on your behalf, that dependency belongs in your scope context even if the subprocessor is not itself in scope. Clause 4.3 explicitly covers external interfaces and the requirements of relevant interested parties [source: https://www.isms.online/iso-27001/].

**Treating scope as a one-time exercise.** At Series B, your architecture changes fast. A scope that was accurate in January may be outdated by July. Build a review trigger into your ISMS operating rhythm — at minimum, every time you launch a new product, acquire a capability, or migrate infrastructure.

Scope creep at the wrong moment — discovered mid-audit rather than at planning — is one of the most expensive things that can happen to a certification timeline. The cost is not just calendar days. It is the management attention that gets pulled off product work and into remediation.

Audit prep for a multi-product SaaS requires a live picture of what your ISMS boundary actually contains. CloudAnzen continuously maps your cloud architecture to ISO 27001 controls, so when your auditor asks what is in scope you have an answer backed by evidence, not memory. [Talk to us](/demo).