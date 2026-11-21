---
title: "How to scope an ISO 27001 ISMS before your Series B closes"
summary: "The scope decisions you make before ISO 27001 Stage 1 determine certification costs for years — here is the method that keeps your ISMS boundary lean."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","Series B","SaaS certification","ISMS boundaries"]
sortOrder: 214
publishedAt: "2026-11-21"
author: "sarah-jenkins"
---
Your lead investor just asked for your ISO 27001 certificate by the end of the quarter. You have six weeks, one contractor who knows something about compliance, and a product that runs across two AWS accounts and a handful of SaaS dependencies. The first decision is not which controls to implement. It is what goes inside the ISMS boundary. Get it wrong and you will certify a scope that is vastly more expensive to maintain than it needs to be.

## What the standard actually says about scope

ISO 27001:2022 Clause 4.3 requires you to determine the boundaries and applicability of the ISMS [source: https://www.iso.org/standard/27001]. It does not prescribe a fixed perimeter. That is deliberate. The standard expects you to map your context — your interested parties, your legal obligations, your interfaces with suppliers — before you draw any lines.

For a Series B SaaS, the relevant inputs are: the services you sell, the data you process, the infrastructure you operate, and the people who access them. The scope boundary separates the assets you will control under the ISMS from the ones you will not.

The scope is not "the whole company" by default. Many teams make that mistake. Including your marketing website, your design tools, and your internal productivity suite on day one makes certification slower and ongoing surveillance audits heavier. The question is what a customer or regulator needs to trust.

## The two decisions that do most of the work

**Scope the service, not the company.**

Your auditor needs to know what you are certifying. "The CloudX API platform, accessed by enterprise customers over HTTPS" is a scope. "CloudX Ltd" is not. Services have clear boundaries — an API surface, a set of data stores, a deployment pipeline. Companies have fuzzy ones.

Scoping to the service and its direct dependencies is the foundation of lean certification [source: https://www.isms.online/iso-27001/]. If your product team builds on shared infrastructure, that shared infrastructure is in scope. If your HR platform stores employee data but is not part of your product delivery chain, it is typically out of scope, with a brief exclusion justification in your scope statement.

**Decide where your infrastructure boundary sits.**

If you run on AWS, you use the shared responsibility model. AWS operates the physical datacentre, the hypervisor, and the networking fabric. You operate everything above the hypervisor. The scope statement should name which AWS accounts and services are included. It does not need to include every account your company uses — only the ones that touch customer data or service delivery [source: https://www.isms.online/iso-27001/].

These two decisions alone can significantly reduce the number of controls you need to actively evidence.

## Where startups draw the wrong boundary

**Including the whole SaaS toolchain by default.**

Your company uses dozens of SaaS tools. Almost none of them are in scope unless they process customer data or directly support product delivery. Your design workspace, your expense management tool, your candidate tracking system — these are almost certainly out of scope. What is typically in scope: your code repository, your deployment pipeline, your customer database, your logging infrastructure, and the third-party services your product calls at runtime.

**Excluding subprocessors to avoid the evidence burden.**

The opposite mistake is equally common. If you send customer data to a third-party analytics or infrastructure provider, that provider is a subprocessor. Its security posture is part of your risk picture. You do not certify them, but you need a process to review and document their controls. Excluding them from the scope statement does not make them go away — it creates a gap that an auditor will find at Stage 2.

**Treating scope as a fixed document.**

Scope is a living document. A Series B company acquires tools, launches features, and enters new markets on a quarterly cycle. Your scope statement needs a review cadence — typically annual, with triggered reviews on material changes. Build that in from the start [source: https://www.isms.online/iso-27001/].

## Writing the scope statement that holds up at Stage 1

Your Stage 1 audit is a documentation review. The auditor will test whether your scope statement is coherent, defensible, and aligned with your risk context. A scope statement that holds up answers four questions.

**What services are covered?** Name them specifically. Vague descriptions like "our platform" are a red flag. Name the product, the data types it processes, and how customers access it.

**What infrastructure is included?** List the cloud accounts or projects, the cloud regions, and the significant supporting services — databases, queues, monitoring tools, CI/CD pipelines.

**What is explicitly excluded and why?** For each material exclusion, write one sentence explaining why it falls outside the boundary. "Employee devices are managed under a separate MDM policy with its own access controls" is a defensible exclusion. "We decided not to include it" is not.

**Who are the interested parties?** ISO 27001:2022 emphasises that scope must reflect the expectations of relevant stakeholders, including customers, regulators, and commercial partners [source: https://www.iso.org/standard/27001]. If your enterprise customers run annual security reviews, their expectations belong in this section.

Keep the document under two pages. If you cannot explain the boundary in two pages, you have not made the decision yet.

## Maintaining scope as the company grows

Certification is not a destination. ISO 27001 requires a surveillance audit each year and a full recertification every three years. The scope you define now becomes the basis for every future audit cycle.

The common failure mode is scope drift: controls documented for one boundary, infrastructure operating under a different one. This happens when product teams ship new services without looping in the ISMS owner, when new cloud accounts are created for a pilot without being added to the scope, or when a critical third-party dependency changes without triggering a review.

Establish a simple trigger list: new products, new data processing agreements, new infrastructure accounts, new enterprise customer requirements. Any of these should prompt a scope review before the next audit cycle, not during it [source: https://www.isms.online/iso-27001/].

Scope drift is also the main reason surveillance audits surface nonconformities. An auditor who finds systems in production that are not reflected in your scope statement has found a material gap — one that can delay recertification and require corrective action before close.

Treat the scope statement as a first-class document. Review it whenever the product changes materially, not just when the auditor asks. The teams that maintain a clean certification are not the ones with the most controls. They are the ones that keep the scope honest — narrow enough to be manageable, wide enough to cover what customers actually trust.

Scoping your ISMS right before a Series B audit window is one of the highest-leverage decisions your security team will make. CloudAnzen maps your infrastructure, your services, and your third-party dependencies to ISO 27001 controls — so your scope statement reflects your actual environment and holds up at Stage 1. [Talk to us](/demo).