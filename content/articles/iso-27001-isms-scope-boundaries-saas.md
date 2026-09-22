---
title: "How to define ISO 27001 ISMS scope for a Series B SaaS"
summary: "Getting ISMS scope wrong before control work starts costs months — here is how to draw the right boundaries the first time"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "7 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","audit readiness"]
sortOrder: 158
publishedAt: "2026-09-22"
author: "sarah-jenkins"
---
You close your Series B, hire a head of security, and the auditors arrive. The first document they request is your scope statement. If it describes the wrong slice of your business — too broad or too narrow — you spend the next three months fixing the foundation instead of collecting evidence. Scoping is where ISO 27001 programs succeed or stall.

## Why scope decisions are harder at Series B

ISO 27001 defines the ISMS scope as the boundaries and applicability of your information security management system — what you protect, who runs it, and where it operates [source: https://www.iso.org/standard/27001]. At seed stage, that definition sounds manageable. You have one product, one cloud provider, and a dozen engineers. At Series B, you have multiple services, a distributed team, third-party integrations, and possibly an acquisition running on different infrastructure.

Scope decisions made at seed look wrong by the time an auditor shows up. The problem is rarely a bad scope statement. The problem is one written too broadly or too narrowly, and neither is recoverable without significant rework.

Scope too broad: you include every internal tool, every team, every country. Your control set explodes. You are now auditing your design workspace and internal chat alongside production infrastructure. Nobody wins.

Scope too narrow: you write "our cloud-hosted SaaS product." But you have an internal admin panel, a customer support toolset, and a data processing pipeline that handles personal information. The auditor finds all of it. Your scope statement covers none of it.

Getting this right before control work starts is the single highest-leverage decision in an ISO 27001 programme.

## What the scope statement must actually contain

ISO 27001 clause 4.3 requires your scope to address the external and internal issues your organization faces, the requirements of interested parties, and the interfaces between what the ISMS covers and what it does not [source: https://www.isms.online/iso-27001/]. Practically, that means answering five questions in writing.

**Which products and services are in scope?** Name them specifically. "Our cloud-hosted B2B platform" is better than "our products." List each product by name if you have more than one. If a product is explicitly out of scope, say that and explain why — auditors ask.

**Which physical and logical locations are in scope?** For a remote-first team, this is your AWS, GCP, or Azure regions, not office addresses. For teams with offices, include the buildings where ISMS-relevant work happens. A team in Bengaluru, a sales office in Singapore, and a contractor in Berlin each need explicit handling.

**Which business functions and teams are in scope?** Engineering, security, product, and any function with access to in-scope systems or data. Customer success teams frequently get skipped — until the auditor notices they handle customer data in a CRM that is not in scope.

**Which information assets are in scope?** Customer data, production databases, configuration secrets, internal credentials, source code, and operational documentation. Draw the line at information that, if disclosed or corrupted, would cause material harm to customers or your business.

**What is explicitly excluded and why?** A well-written exclusion saves arguments during audit fieldwork. If your marketing website runs on a third-party CMS and does not process personal data, exclude it and document the rationale.

## How to draw ISMS boundaries around distributed infrastructure

The boundaries question is where Series B teams most often get stuck. A single cloud account with a clean network perimeter is easy to draw a line around. Multi-account architectures, acquired codebases, and self-hosted tools in customer tenants are not.

A practical starting point: trace the data, not the org chart. Start from the point of customer data collection and follow it through every system that processes or stores it. Each system the trace touches is a candidate for inclusion. Each system the data never reaches is a candidate for exclusion.

For typical Series B infrastructure that means:

- **In scope by default:** Production application infrastructure, CI/CD pipelines that push to production, credential stores such as AWS Secrets Manager or HashiCorp Vault, customer-facing APIs, and logging and SIEM infrastructure.
- **Potentially excludable with documented rationale:** Internal wikis that do not store credentials or sensitive data, non-production developer environments with no persistent customer data, and marketing tools that receive no production exports.

One asset category that surprises teams: tooling your customers use to connect to your product. If you expose APIs that customers integrate with, the scope boundary extends to how you authenticate those integrations and log activity on them. Auditors expect evidence.

Document the interfaces between what is in scope and what is not. Where data crosses the boundary — say, a production export that lands in a business intelligence tool — the handoff point needs to be named and controlled. ISO 27001 clause 4.3 explicitly calls this out [source: https://www.isms.online/iso-27001/].

## Managing scope updates as the business changes

At Series B, your ISMS scope will change. You will acquire a company, launch a new product, move to a new region, or spin up a data processing pipeline that changes your regulatory footprint. Scope change is not a failure — it is a managed event.

A scope change should trigger a review of:

- Which controls apply to the new assets or processes
- Whether existing risk assessments still cover the changed surface
- Whether your Statement of Applicability needs updating
- Whether your certification body needs to be notified before the next surveillance audit

Build a lightweight change-control step into your security review process. Any infrastructure change that brings a new system into scope — or explicitly removes one — should log a scope review ticket. It does not need to be a multi-week exercise. It does need to be documented, because auditors ask for evidence of scope management over time, not just a point-in-time statement.

The goal is a scope statement that reflects what you actually operate. Auditors can work with an honest, evolving document. What they cannot work with is a statement from eighteen months ago that bears no resemblance to your current stack.

## Common scoping mistakes and how to avoid them

**Copying your SOC 2 audit scope.** SOC 2 and ISO 27001 scope differently. Your SOC 2 audit may cover only the production SaaS application. ISO 27001 typically pulls in more of your organizational controls — HR practices, supplier management, and physical security considerations even for cloud-first teams. Do not copy-paste your SOC 2 scope and assume it translates.

**Scoping out systems to reduce audit burden.** It is tempting to exclude a legacy system because controlling it looks hard. But if customer data lives there, excluding it creates a material gap. The auditor will find it, and a post-audit scope amendment is painful. Better to include it, apply compensating controls, and plan for migration with a documented timeline.

**Writing a scope statement that describes aspirations rather than reality.** Phrases like "our enterprise-grade cloud infrastructure" describe intentions, not facts. Write the scope statement around systems and processes that exist today and that you can produce evidence for. Ambitions belong in your roadmap, not your scope document.

**Treating scope as a one-time decision.** The most durable ISO 27001 programmes treat scope as a living document with a named owner, a review cadence, and a change-control process. Teams that freeze scope at certification tend to hit a wall at their first surveillance audit when the auditor finds the infrastructure has grown well beyond the original statement.

Audit prep without a clean scope statement burns months of effort you cannot recover. CloudAnzen maps your stack to ISO 27001 controls starting from scope definition, so the evidence is ready when your auditor is. [Talk to us](/demo).