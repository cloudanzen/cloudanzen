---
title: "ISO 27001 ISMS scoping when you run two legal entities"
summary: "When your SaaS has separate India and overseas entities, Clause 4.3 forces a decision — here is how to make it defensible before Stage 1"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001 scope","ISMS boundaries","SaaS compliance","legal entity","Series B"]
sortOrder: 194
publishedAt: "2026-10-31"
author: "sarah-jenkins"
---
Most ISO 27001 scope guidance assumes one entity. You have two. Your R&D arm is a private limited registered in India. Your contracting entity is a Delaware C-Corp or a Singapore holding company. Stage 1 auditors will ask which one is "the organisation" in Clause 4.3. If you haven't answered that before the audit, you'll answer it in the room — under pressure, with consequences for the controls evidence you've already assembled.

## Why two entities create a scoping decision, not a scoping problem

The ISO 27001:2022 standard defines the ISMS scope as the part of the organisation to which the ISMS applies. [source: https://www.iso.org/standard/27001] "The organisation" is legally ambiguous when you have two separate legal persons sharing infrastructure, people, and customer data.

Indian SaaS companies at Series B typically operate under exactly this structure. An India Pvt. Ltd. employs most engineers and manages product development. A US or Singapore entity holds customer contracts, processes payments, and owns the primary commercial relationships. Both touch information assets that matter to customers. The question is which entity's boundaries define your ISMS — and that question has a correct answer for your specific situation.

This is not a compliance technicality. It shapes every downstream decision: which processes fall under your Statement of Applicability, which employees are in-scope for security awareness training, and which systems must appear in your audit evidence package.

## What Clause 4.3 actually requires of a dual-entity structure

Clause 4.3 asks you to determine scope by considering the internal and external issues from your context analysis, the requirements of interested parties, and the interfaces and dependencies between activities performed by the organisation and those performed by other organisations. [source: https://www.isms.online/iso-27001/]

The phrase "other organisations" is the operative one. Your two entities are legally distinct. Whichever entity certifies must document the interfaces and dependencies with the other as an external organisational boundary — even if both share a GitHub organisation, a Slack workspace, and an AWS landing zone.

Shared tooling does not mean shared scope. The question is contractual responsibility and legal accountability, not operational convenience. Auditors treat inter-entity relationships the same way they treat any supplier relationship: they want to see the interface documented, risk-assessed, and governed.

## Three boundary models to choose from

There is no single correct model. Your choice depends on which entity holds customer contracts, where data residency obligations sit, and what certifying entity your sales team needs on the certificate.

**Model 1: Certify the India entity only.** The India Pvt. Ltd. is the data processor. The overseas entity is the data controller, acting in the role of a customer. The ISMS covers the India entity's systems, processes, and personnel. Customer-facing contracts and payment processing fall outside scope as activities performed by a separate legal person.

This model produces the smallest audit surface. It is defensible when the India entity has no direct customer relationships and when the overseas entity operates no systems that process or store in-scope information assets.

**Model 2: Certify the overseas entity with India as a documented subprocessor.** The contracting entity holds the certificate. The India entity is documented as a critical subprocessor under Annex A control 5.19, covering supplier relationships. You assess and manage the India entity as you would any third-party supplier — including annual reviews and contractual security obligations flowing down via an intra-group agreement.

This is the model most enterprise customers expect. When a buyer asks for your ISO 27001 certificate, they want the entity named on their data processing agreement to be the certified entity. Certifying only the India entity while contracting through the overseas entity creates a gap in your customer conversations.

**Model 3: Group scope covering both entities.** You define the ISMS scope as covering both entities as a single organisational boundary. The scope statement references both legal names and describes the information assets, processes, and systems that span the group.

Group scope is achievable but requires proportionally more audit evidence. Policies, training records, and risk register entries must cover personnel and systems in both jurisdictions. Auditors will verify coverage in both. Choose this model when the two entities are operationally inseparable and documenting one as a supplier of the other would be artificial.

## Writing a scope statement that survives Stage 1

Whatever model you choose, the scope statement must be unambiguous on four points.

First, use the exact registered legal entity name. Trading names, brand names, and parent group names are not acceptable substitutes. If you are certifying both entities, list both registered names. [source: https://www.isms.online/iso-27001/]

Second, name the geographical locations: data centre regions, office locations, and the jurisdictions where remote-working in-scope personnel operate. Auditors will ask whether your controls evidence covers all of these.

Third, describe the products and services the ISMS protects. "Cloud-based compliance management platform" is specific enough to audit against. "SaaS software" is not.

Fourth, document exclusions explicitly. If one entity is excluded from scope, state it and provide a written rationale. Auditors expect exclusions to be deliberate and recorded, not simply absent. An exclusion with no rationale is treated as an oversight, not a decision.

A common failure mode: writing a scope statement that refers to "the Company" throughout without specifying which legal entity that means. When a Stage 1 auditor asks which entity the certificate covers, "the Company" is not an answer. Fix this before the audit, not during it.

## The shared-infrastructure boundary in practice

The practical complication in dual-entity structures is shared infrastructure. AWS accounts, GitHub repositories, identity providers, and monitoring tooling are often provisioned under one entity but used by employees of both.

The cleanest resolution: identify which entity owns the infrastructure commercially — which entity pays the AWS bill, owns the root domain, and holds the vendor contracts. That entity is almost always the right one to include infrastructure within its scope. Document the dependency clearly: if the other entity's personnel use systems owned by the certifying entity, capture that interface in your Clause 4.1 context analysis and in the controls you apply under the Statement of Applicability.

This documentation discipline separates a scope statement that survives Stage 1 from one that generates a non-conformity finding on day one of Stage 2. Auditors are not looking for perfection; they are looking for evidence that you understood the boundary and made an informed decision.

Scoping the ISMS across two legal entities is the first decision that shapes every deliverable that follows. Get it wrong and you spend months collecting evidence against the wrong entity's systems. CloudAnzen maps your information assets and control obligations to the legal entity structure you actually operate — so your Stage 1 scope statement is defensible from the first draft. [Talk to us](/demo).