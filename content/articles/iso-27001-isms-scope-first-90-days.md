---
title: "How to scope your ISO 27001 ISMS in the first 90 days"
summary: "A practical guide to defining ISMS boundaries at a Series B SaaS — the decisions, common traps, and a scope statement auditors won't question."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","Series B SaaS","Clause 4.3","audit readiness"]
sortOrder: 207
publishedAt: "2026-11-13"
author: "sarah-jenkins"
---
The moment your Series B SaaS commits to ISO 27001, the first real question isn't which controls to implement — it's what exactly you're certifying. Get the scope wrong and you spend months implementing controls for systems nobody audits, or leave customer-facing infrastructure exposed. The scope statement determines the entire audit programme. Most teams treat it as a formality. Auditors don't.

## What clause 4.3 actually requires

ISO/IEC 27001:2022 Clause 4.3 is short. It requires the organisation to determine the boundaries and applicability of the ISMS, taking into account external and internal issues from clause 4.1 and the requirements of interested parties from clause 4.2 [source: https://www.iso.org/standard/27001].

That sounds abstract. For a SaaS company, it means three concrete decisions.

**What information assets are in scope?** For most Series B teams, this is the production environment and anything that processes customer data. Development environments, internal HR systems, and finance tools are often out — but only if you can clearly demonstrate they don't influence the security of what's in.

**What organisational units are in scope?** A Series B SaaS typically has engineering and product fully in scope, with sales and marketing excluded. If your sales team handles customer data during onboarding, that exclusion won't hold.

**What are the interfaces?** ISO 27001:2022 brought explicit attention to interfaces — touchpoints between your ISMS scope and what's outside it. Your CI/CD pipeline connecting developers to production. Your HRIS feeding access provisioning. Your subprocessors processing customer data. Each is a documented boundary that Stage 1 auditors will examine.

The scope statement that emerges from these three decisions must be a written document, approved by management, and reviewed at least annually.

## The two decisions that shape everything

Before you write a word of the scope statement, two binary decisions determine its structure.

**Decision 1: Product perimeter or whole company?**

Most first-time ISO 27001 certifications at Series B SaaS companies scope to the product and its production infrastructure only. The whole-company option — where every department and business process is in scope — is more defensible long-term but substantially heavier to implement in year one.

Product-scoped certifications are legitimate and common. They satisfy the enterprise buyer question: "Is your ISMS certified?" But they require watertight exclusion rationale. If your legal team handles data subject requests and that process touches customer PII, it cannot be cleanly excluded without compensating controls at the boundary.

**Decision 2: Which environments?**

Scoping production-only sounds obvious until you examine your actual architecture. At a modern SaaS, staging is often a near-mirror of production. Developers may have direct database access in staging. CI pipelines run with production-level credentials.

The practical test: if a compromise of that environment would give an attacker a path to production customer data, it belongs in scope — or you need documented compensating controls at the boundary. Data masking and access segregation between staging and production become your evidence for the exclusion.

## Where Series B teams get burned

Three patterns reliably cause problems at Stage 1 audit.

**Scoping in what you don't control.** Many teams include cloud infrastructure in the scope statement without acknowledging the shared responsibility boundary. On AWS, you're responsible from the guest OS up. The physical security of the data centre is not your control to demonstrate. The scope statement should reference your reliance on the cloud provider and make clear your controls cover only what you operate [source: https://www.iso.org/standard/27001].

**Scoping out what auditors expect to see.** The clearest version of this: excluding the development environment entirely when developers push directly to production via a CI/CD pipeline. The pipeline is an interface. If there's no documented change management control at that boundary, the exclusion won't hold.

**Undersizing your subprocessor inventory.** The scope statement references interfaces with external parties. If you use subprocessors that process customer data — a CRM, a support platform, a data warehouse, a payment processor, an email delivery service — each is a documented interface. Stage 1 auditors will ask for your supplier register and your due diligence process for each. Building that register after writing the scope statement means working backwards under time pressure.

## Writing the scope statement auditors won't challenge

A scope statement that holds up at audit isn't long — typically one to two pages. It answers five questions in plain prose:

1. What is the organisation's primary business activity?
2. What information assets are in scope?
3. What locations are in scope?
4. What is explicitly excluded, and why?
5. Who are the external parties with interfaces to the ISMS?

The exclusion rationale is the part most teams underwrite. "Development environment excluded" is not a rationale. "Development environment excluded because all production data is masked before entering staging, enforced by an automated masking pipeline, and no development credentials carry production access" is. The difference matters at Stage 1 precisely because the auditor's job is to probe your stated boundaries.

The scope statement also sets the floor for your Statement of Applicability. Every Annex A control you later justify excluding from the SoA needs a clear line back to the scope. If customer data handling is out of scope, certain data-protection controls may be excludable. If it's in scope, they aren't.

## Maintaining scope as the company scales

A Series B scope statement written today will face pressure within twelve months. New products, new markets, infrastructure changes — all affect scope. What looks like a purely engineering decision (moving from a single AWS account to a multi-account AWS Organisation) is a scope change requiring management sign-off and an ISMS update.

The practical mechanism is a change management process with a checkpoint for scope impact. Any infrastructure change that touches the perimeter of your ISMS boundary should trigger a scope review, documented in your management review records.

Formal annual review is mandatory. Treat it as a focused half-day workshop with engineering, product, and your ISMS owner. Walk through the asset register, the subprocessor list, and the exclusion rationale. The output is a written record that the scope remains appropriate — or a formal scope change with management approval.

Scope drift is how well-run ISMS programmes quietly fall out of compliance between audits. Catching it in a workshop costs an afternoon. Catching it at a surveillance audit costs credibility and sometimes the certificate.

Scoping the ISMS wrong in year one compounds at every audit cycle thereafter. CloudAnzen maps your production stack, subprocessor dependencies, and team structure to give you a defensible scope statement before you're under Stage 1 pressure. [Talk to us](/demo).