---
title: "Scoping your ISO 27001 ISMS: what the Stage 1 auditor actually reads"
summary: "Most Series B teams write the ISMS scope statement like a README. Here is what Stage 1 auditors look for and how to make it hold up under scrutiny."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","Stage 1 audit","SaaS compliance","certification"]
sortOrder: 124
publishedAt: "2026-08-15"
author: "sarah-jenkins"
---
The first time you hand your scope document to a Stage 1 auditor, you find out whether your ISMS is real or a set of policies stapled to a dashboard. Most Series B teams write the scope statement in an afternoon and treat it as a formality. Stage 1 auditors treat it as the anchor for the entire audit. Get the scope wrong here and you will spend Stage 2 defending it line by line.

## What ISO 27001:2022 requires in the scope statement

ISO 27001:2022, clause 4.3, requires the organization to determine the external and internal issues relevant to its purpose, the requirements of interested parties, and the interfaces and dependencies between activities performed by the organization and those performed by external parties. [source: https://www.iso.org/standard/27001]

In practice, the scope statement needs to answer four questions.

**What services are in scope?** Name the product and specific service tiers or modules. "Our SaaS platform" does not pass Stage 1. "The GRC automation platform, hosted on AWS ap-south-1 and us-east-1, serving enterprise customers under Business and Enterprise tier agreements" does.

**What infrastructure is in scope?** Cloud accounts, CI/CD pipelines, developer laptops, and SaaS tooling used to build or operate the product. If it processes, stores, or transmits customer data — it is in scope.

**What is explicitly excluded and why?** Exclusions are acceptable under the standard, but each one needs a written justification. "Marketing website — no customer data processed or stored" is defensible. "Legacy billing system" is not unless you can prove zero data flow to the main product.

**What are the interfaces with external parties?** Sub-processors, cloud providers, contractors. The Stage 1 auditor will check that your supplier controls cover these relationships. [source: https://www.isms.online/iso-27001/]

## Why broad scoping backfires at Series B

Some founders scope the entire company into the ISMS from the start. The logic: simpler, no debates, just audit everything. The problem is that a Series B company typically has business units with no connection to the product — a sales org on its own CRM, a finance team on a separate accounting platform, a marketing team using tools your security function has never reviewed.

Auditing all of that is expensive and distracting. Worse, it exposes you to nonconformities in units that do not touch customer data and that your certification auditor does not need to care about.

A tighter scope — the product and the people who build and operate it — is faster to certify, easier to maintain, and equally credible to enterprise buyers. Buyers want to know that the system holding their data is certified. They do not care whether your head of marketing can log into a certified CRM.

## The two documents the Stage 1 auditor reads together

Most organizations produce one scope document. Certification auditors expect two distinct outputs.

**The scope statement** is the formal clause 4.3 artifact. It is version-controlled and reviewed annually or whenever the scope changes materially. It should be one to two pages: organizational context, purpose, services in scope, exclusions with rationale, and key external interfaces.

**The Statement of Applicability** references the scope statement and maps every Annex A control to an inclusion or exclusion decision with a documented justification. If your scope statement says contractor laptops are in scope, the SoA must show that A.8.1 asset management for endpoint devices is included and applied. [source: https://www.isms.online/iso-27001/]

A mismatch between the two documents — scope says contractors are in scope, SoA marks device controls as not applicable with no justification — is a finding at Stage 1, not Stage 2. Resolve it before the auditor walks in.

## Common Stage 1 findings on scope documents

**Product names that do not match contracts.** Your scope statement says "Platform V2." Your enterprise agreements say something different. The auditor will note the mismatch. Use the legal product name throughout all ISMS documentation.

**Vague cloud account references.** "AWS environment" is not sufficient. List account types — production, staging, data warehouse — and justify any exclusion. If staging is out of scope, document why: "staging environment uses synthetic data only; no real customer personal data is processed or stored."

**Missing the CI/CD pipeline.** The pipeline builds and deploys your product and handles secrets, tokens, and infrastructure credentials. Omit it from scope and the auditor will note that your build tooling is uncontrolled. Include it and reflect it in your SoA controls.

**Sub-processors listed without rationale.** Cloud providers and SaaS vendors that process personal data on your behalf are sub-processors. Your scope statement should acknowledge these interfaces and reference the controls that govern them — data processing agreements, annual reviews of their certifications, termination clauses. [source: https://www.isms.online/iso-27001/]

## Keeping scope current through surveillance audits

Scope drift is the most common trigger for nonconformities at first surveillance audits. A Series B company moves fast. A new tool here, a new contractor cohort there, a database migration — each can silently change what is and is not in scope without anyone updating the documentation.

Build scope review into your change management process. Any material change to infrastructure, data flows, or team access should prompt a quick scope check. A one-paragraph amendment to the scope document, approved by the ISMS owner and logged in your change management system, is sufficient for most changes.

Your surveillance auditor will review the scope document version history. A document last updated at initial certification with no subsequent revisions raises an immediate concern: either nothing changed in twelve months — implausible for a growing SaaS company — or scope changes were not being tracked. Neither answer helps you at audit.

Scope drift caught late becomes a firefight. CloudAnzen continuously maps your infrastructure, vendor roster, and access topology to your ISMS scope so amendments happen at the right moment, not the night before the auditor arrives. [Talk to us](/demo).