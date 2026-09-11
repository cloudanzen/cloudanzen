---
title: "How to scope your ISO 27001 ISMS: a decision guide for Series B SaaS"
summary: "Getting ISMS scope wrong stalls ISO 27001 certification — here is how to draw the boundary correctly and defend it at Stage 1 audit"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","Series B","audit readiness"]
sortOrder: 147
publishedAt: "2026-09-11"
author: "sarah-jenkins"
---
Scoping your ISMS wrong is one of the fastest ways to turn a six-month certification into an eighteen-month slog. Too narrow and auditors flag material gaps; too broad and you drown in controls that add no value. For a Series B SaaS facing enterprise procurement for the first time, getting scope right is not bureaucracy — it is the foundation of a credible certification.

## What scope means under ISO 27001

The standard requires you to document the ISMS scope as part of clause 4.3 [source: https://www.isms.online/iso-27001/]. In practice, that means writing a clear statement covering three things: which parts of your organisation are in scope, which systems and services are included, and which locations or regions apply.

Your scope statement appears on your ISO 27001 certificate and is the first thing your Stage 1 auditor reads. It also anchors your Statement of Applicability, which lists every Annex A control and records whether you have applied it or excluded it — and why [source: https://www.iso.org/standard/27001].

The standard does not tell you where to draw the boundary. That decision is yours, and it carries both operational and commercial consequences. A scope drawn correctly at the start keeps your certification effort proportionate to the risk you are actually managing.

## The three questions every Series B SaaS must answer

Before writing any control or policy, answer these questions in writing and get them signed off by a senior stakeholder. They form the basis of your scope statement and will be tested at Stage 1.

**Which organisational units are in scope?**

For a Series B SaaS, a natural starting point is product, engineering, and any support or operations teams with access to production data. Finance, HR, and marketing can often be excluded unless they routinely process customer data or have direct access to production systems.

The test is straightforward: if a team member's credentials were compromised, would customer data be exposed? If yes, that team belongs in scope. If no, you have a defensible case for exclusion — but document the reasoning explicitly, because auditors will ask.

**Which systems and services are in scope?**

Start with your production environment, then work outward. Add your CI/CD pipeline, source code repositories, logging and monitoring stack, secrets management tooling, and any SaaS tools that provide access to production data or customer PII.

Third-party services are where Series B teams most often under-scope. If a cloud provider hosts your database, a managed service handles your authentication layer, or a third party stores backup data, their controls need to appear in your Statement of Applicability. You do not need to manage those controls internally, but you do need to document how the supplier arrangement satisfies the relevant Annex A clauses [source: https://www.isms.online/iso-27001/].

**Which locations or regions are in scope?**

If your team is fully remote, every location where engineers access production is technically within the ISMS boundary. That does not mean auditing individual home offices, but it does mean your device management policy, acceptable use policy, and remote access controls must explicitly cover those scenarios. If you have an engineering team in a second country, determine whether they access production data and scope them accordingly.

## Mistakes that cause Stage 1 findings

Stage 1 is a documentation review. Auditors are looking for consistency between your scope statement, your risk assessment, and your Statement of Applicability. The most common scope-related findings are not exotic — they come from failing to think the boundary through before committing it to paper.

**Scope that reads like a mission statement.** Phrases like "we protect all customer data across all systems" are not a scope statement. Auditors want specifics: which teams, which systems, which locations. Vague scope invites challenge at every stage of the audit.

**Exclusions with no written justification.** If you exclude a system, you need a written reason. A defensible exclusion names the system, describes what data it holds — or confirms it holds no in-scope data — and explains why including it would be disproportionate to the actual risk.

**Third-party dependencies left unaddressed.** The standard requires you to consider information security in supplier relationships [source: https://www.iso.org/standard/27001]. If you rely on a managed cloud service, an outsourced SOC, or a contracted penetration testing firm, those relationships must appear in your SoA and your supplier management documentation.

**Scope drift between certification cycles.** A scope that was accurate at initial certification can become materially wrong after significant headcount growth, a new product line, or a migration to a different infrastructure stack. Surveillance audits will test whether your scope still reflects operational reality.

## Writing a scope statement that holds up

A scope statement should be short — two to four paragraphs. It names the organisation or business unit, the products and services covered, the key systems and infrastructure included, and the locations in scope.

Pair it with a simple system inventory: a spreadsheet listing each in-scope system, its owner, the type of data it processes, and its classification. This does not need to be a sophisticated configuration management database on day one. It does need to be accurate and directly traceable to your risk assessment.

The Statement of Applicability must be consistent with the scope statement. If you have scoped your production environment but excluded cloud backup storage from your SoA without justification, a sharp auditor will flag the inconsistency. Consistency between documents is what auditors are checking for at Stage 1.

## Keeping scope current as the company scales

Series B companies grow fast. New products launch, acquisitions bring unfamiliar infrastructure, engineering headcount expands across time zones, and the toolchain evolves continuously. A scope that was accurate six months ago may not reflect today's reality.

Build a formal scope review into your ISMS operating calendar — at minimum before each surveillance audit, and ideally on a quarterly basis. The review should cover: a check of the system inventory against actual deployed infrastructure, an assessment of any new third-party dependencies, and a sign-off from the ISMS owner confirming the scope statement remains accurate [source: https://www.isms.online/iso-27001/].

Scope drift is one of the easiest ways to generate audit findings that should never have existed. A regular review cadence keeps the scope statement honest and removes the risk of being caught flat-footed at surveillance.

Audit prep takes months when your scope statement, risk register, and evidence library are misaligned. CloudAnzen maps your systems and supplier relationships to ISO 27001 controls automatically, so your scope stays consistent with your actual environment as you scale. [Talk to us](/demo).