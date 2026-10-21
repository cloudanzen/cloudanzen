---
title: "ISO 27001 ISMS scope decisions every Series B SaaS team must make"
summary: "A practical decision framework for defining your ISO 27001 ISMS scope at Series B — what to include, what to exclude, and how to defend both choices at Stage 1."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","Series B","SaaS compliance","certification"]
sortOrder: 184
publishedAt: "2026-10-21"
author: "sarah-jenkins"
---
You have closed your Series A. Your sales team is landing enterprise deals — one prospect in FinTech, one in healthcare. Both want your ISO 27001 certificate before they sign. Your CTO asks how long it will take. Six months is the optimistic answer. The pessimistic one starts with a poorly scoped ISMS.

ISO 27001 scoping is Clause 4.3 of the standard [source: https://www.iso.org/standard/27001]. It sounds administrative. In practice, it determines how many systems you need evidence for, how many people need training, and how expensive your surveillance audits will be for the next three years. Get it wrong and you end up either certifying a hollow shell your customers see through, or auditing your entire product stack when you only needed to cover one service.

At Series B, you have a mix of cloud environments, SaaS tooling, and probably a shared-services layer nobody has fully documented. That is the reality your scope document has to reflect.

## The four decisions that define your scope

Scope is not a single question — it is four questions answered in order. Work through them before you engage a certification body.

### Which services are in scope?

Not every product you ship needs to be in your ISMS. The standard asks you to consider the products and services of the organisation — but a product that processes no sensitive customer data, and connects to nothing that does, can stay out [source: https://www.isms.online/iso-27001/].

The common pattern at Series B: your core SaaS product is in scope. Your marketing site is not. Your internal HR SaaS tools might be in scope if they process employee personal data under GDPR, but that is a separate decision that depends on your regulatory obligations.

Write this down before you start: each in-scope service needs a sentence explaining why it is included. Each excluded service needs a sentence explaining why it is out. That justification is what your Stage 1 auditor reads first, and it is what they use to check that you have not left material gaps.

### What does your organisational boundary look like?

ISO 27001 does not care about employment type. It cares about who handles information assets inside your ISMS boundary [source: https://www.isms.online/iso-27001/].

Series B SaaS teams typically have a core engineering and product team, a small number of contractors with production access, and possibly an outsourced finance or HR function that never touches production systems. The typical right answer: contractors with production access are in scope. The finance outsource is not, unless you are processing payment data through them.

Document every party that touches in-scope information assets. This list becomes your supplier register — the foundation for Annex A supplier relationship management controls.

### Where are your information assets?

In practice at Series B: your cloud environment, your customer database, your code repositories, your logging infrastructure, and your collaboration tools are the core candidates. Wherever sensitive data actually lives, that system is a candidate for scope.

The ISMS scope statement must name the technology environments in scope [source: https://www.iso.org/standard/27001]. Your auditor will check whether your controls actually cover what you named. If you name all cloud accounts but only have evidence for one, that is a nonconformity.

The practical method: trace a data flow from customer data entry to data at rest. Every system that data passes through during its lifecycle is a candidate. Then exclude anything where the data is genuinely anonymised, aggregated before it arrives, or processed exclusively by a third party with their own certification.

### What are your interfaces and dependencies?

Your ISMS boundary ends somewhere. The question is where, and how you defend that boundary at audit.

At Series B, the common interfaces are your cloud provider, your payment processor, and your sub-processors. Your cloud provider is in scope for your controls but not for their own infrastructure — that is shared responsibility, and your scope statement should reflect it. Your payment processor is typically out of scope if they are PCI DSS certified and you store no card data. Your sub-processors are in scope for your supplier management controls, but not for their internal systems.

ISO 27001 Annex A requires supplier relationship management [source: https://www.isms.online/iso-27001/]. You need a process for reviewing each in-scope sub-processor. You do not need to audit their data centres. Conflating the two is what makes ISMS scoping feel bigger than it needs to be.

## The exclusion rationale your auditor expects

Including too much is the most common mistake at Series B. A small security team that scopes in every internal tool, every contractor laptop, and every development cloud account ends up with an ISMS that takes months just to document — before a single control is implemented or tested.

But exclusions are not free. Every service or environment you leave out needs a written rationale. The standard does not allow silent omissions [source: https://www.iso.org/standard/27001]. Your scope statement should include a section that names what is excluded and explains why — for example, that it does not process, store, or transmit customer data that falls within the ISMS boundary.

Auditors do not penalise narrow scope. They penalise unjustified exclusions. A scope that covers one well-documented product with clean evidence beats a scope that covers twelve products with gaps everywhere.

## How to write the scope statement

The scope document is a one-to-three-page statement your Stage 1 auditor reviews before they check anything else. At minimum it needs: a description of what the ISMS covers in terms of services, systems, and people; the organisational context — your industry, customer types, and regulatory requirements that drove the decision; a list of in-scope environments specific enough that an auditor can verify coverage; a list of exclusions with rationale; and a reference to the internal and external issues that informed the decision, which are the outputs of Clause 4.1 and 4.2 [source: https://www.isms.online/iso-27001/].

Keep it factual. Dense paragraphs about corporate values do not help your case. Specific asset lists and clear exclusion rationale do.

## Scope and your Statement of Applicability

Your scope document and your Statement of Applicability are two sides of the same decision. Scope defines what you are protecting. The SoA defines which Annex A controls you apply to protect it.

A narrower scope means you can legitimately exclude more Annex A controls that simply do not apply to your environment or activities. That is not gaming the certification — it is the design of the standard [source: https://www.iso.org/standard/27001]. At Series B, a focused scope your team can actually implement beats a sprawling one you cannot evidence. Auditors look for a coherent system, not the largest possible one.

## Getting scope sign-off before Stage 1

Before you engage a certification body, your scope decision needs sign-off from senior management. Not just because Stage 1 will ask for it, but because scope changes mid-certification are expensive — in auditor time, in re-documentation, and in team momentum.

The typical approval path at Series B: CTO or CISO drafts the scope, CEO or a board-level sponsor approves it, and the approval is recorded in your ISMS document register. That record stays in your evidence files for the duration of the certificate and through each subsequent surveillance audit.

If your scope changes after certification — because you added a product, acquired a company, or migrated to a new cloud platform — you need a formal scope change process. Define that process before you are first certified, not after your first surveillance audit when the auditor asks to see it [source: https://www.isms.online/iso-27001/].

Scope decisions made at Series B shape your audit costs for years. CloudAnzen maps your services, systems, and supplier relationships against ISO 27001 so your scope document reflects what you actually operate — and holds up when the auditor arrives. [Talk to us](/demo).