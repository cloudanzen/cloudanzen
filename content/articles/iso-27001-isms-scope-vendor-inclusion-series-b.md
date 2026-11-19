---
title: "ISO 27001 ISMS scoping: how to handle vendor inclusion at Series B"
summary: "At Series B, your vendor list touches dozens of services. Here is how to decide which ones fall inside your ISMS boundary — and how to defend that call."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","vendor risk","Series B","supplier management"]
sortOrder: 212
publishedAt: "2026-11-19"
author: "maria-rodriguez"
---
The first question your Stage 1 auditor asks about scope is not what you expected. It is not about your cloud infrastructure or your engineering team. It is about your vendors — specifically, which of them sit inside your ISMS boundary and which sit outside it. Get this wrong and you will spend the next six months retrofitting supplier assessments you should have scoped out from day one.

## Why vendor scope decisions define your control burden

ISO 27001 defines the ISMS scope in Clause 4.3: you document the boundaries and applicability of the management system [source: https://www.iso.org/standard/27001]. Those boundaries are not just physical locations and software assets. They include the people, processes, and third-party relationships that touch the information you are protecting.

At Series B, most SaaS teams are running on a substantial stack of external services — payment processors, identity providers, cloud infrastructure, monitoring tools, and a dozen SaaS-on-SaaS integrations the product team added without a security review. Each is a potential in-scope supplier. Each in-scope supplier adds work: a supplier assessment, a periodic review, a row in your supplier register, and a trail of evidence to show your auditor.

The temptation is to put every vendor in scope and show how thorough you are. The experienced path is to put the right vendors in scope and have a defensible rationale for leaving the others out. That rationale is what your Stage 1 auditor is looking for.

## The four vendor categories that matter at Series B

Not all vendors affect your information security risk equally. A practical four-way classification that holds up during a Stage 1 scope review:

**Category 1 — Critical data processors**: Vendors that store, process, or transmit your customers' data or the personal data of your employees. Your cloud provider. Your database-as-a-service. Your support ticketing system if it holds customer PII. These are in scope, full stop. Annex A Controls 5.19 and 5.20 require documented agreements and periodic reviews for these relationships [source: https://www.isms.online/iso-27001/].

**Category 2 — Infrastructure dependencies**: Vendors that run software or hardware your product depends on, even if they do not directly touch customer data. Your CI/CD pipeline. Your container registry. Your DNS provider. The key test is blast radius: if this vendor were compromised, could an attacker reach customer data or disrupt your service? If yes, they belong here.

**Category 3 — Operational SaaS**: Tools your team uses that are not on the customer data path — HR platforms, expense tools, project management software. These affect the confidentiality of internal information, not your product's data. You still need a supplier register entry and a basic due diligence check, but the control depth is lighter than Categories 1 and 2.

**Category 4 — Commodity utilities**: Vendors with established security certifications covering the services you use — email delivery, font CDNs, analytics pipelines where data is already anonymised. You can reference their published certification (SOC 2 Type II, ISO 27001 certificate) rather than conducting a bespoke assessment. The key evidence item is the certificate itself plus a note confirming the scope covers your use case.

This classification is not part of the ISO 27001 standard text, but it aligns with how Annex A Control 5.19 (supplier relationships) and 5.20 (information security within supplier agreements) are applied in practice [source: https://www.isms.online/iso-27001/].

## Where the ISMS boundary actually sits

The standard is explicit: your scope must reflect the context of the organisation, the needs and expectations of interested parties, and interfaces and dependencies between activities performed by the organisation and those performed by other organisations [source: https://www.iso.org/standard/27001].

That last clause — interfaces and dependencies — is what catches Series B teams off guard. You are not scoping only what you own. You are scoping what you depend on for the security of your information assets.

A practical test: draw a data flow diagram for your highest-risk customer journey — typically login, a data export, or a payment transaction. Every service that data touches is a candidate for scope inclusion. Every service that could inject a malicious payload into that flow is one too.

Where you can draw a clean contractual and technical boundary — the vendor does not store your data unencrypted, shares no secrets with your systems, and holds its own certification — you can treat that vendor as an external party and reference their certification rather than pulling them inside your ISMS controls directly.

## Making the inclusion call: a practical decision tree

Work through each vendor in this order:

1. **Does this vendor process, store, or transmit our customer data?** If yes, Category 1 — full Annex A supplier controls required.

2. **Can a compromise of this vendor reach our customer data or service availability?** If yes, Category 2 — risk assessment and contractual controls required.

3. **Does this vendor hold a recognised security certification with a valid scope that covers the services we use?** If yes, reference their certificate, reduced assessment depth, annual re-verification.

4. **Is this vendor commodity infrastructure with published security controls?** If yes, register entry, annual review of their published posture, no bespoke assessment.

5. **None of the above** — operational SaaS, baseline due diligence (questionnaire or published security page), annual review cycle.

The output is two documents: a Supplier Register (every vendor, categorised, with their certification status and last assessment date) and a Scope Statement addendum that explains which vendors are in scope and why the rest are not.

Your auditor will read that addendum during Stage 1 and check that your rationale is consistent with the data flows you have documented [source: https://www.isms.online/iso-27001/]. If it holds together, they sign off the scope and you move to Stage 2 with a clean boundary.

## After you have drawn the line

Scoping is not a one-time exercise. At Series B, your vendor list changes every quarter. A new data integration, a tool adopted from a pilot, a customer that requires you to use their nominated platform — any of these can move a Category 4 vendor into Category 1 overnight.

Build the scope review into your quarterly supplier review process. The practical mechanism is a scope-impact field on your vendor onboarding checklist. Before any new vendor is provisioned, someone signs off on which category it falls into and whether the ISMS scope document needs updating. This catches the integrations that bypass procurement because they were billed as a team expense rather than a vendor contract.

Another pattern worth adopting: a brief annual scope walk with your CISO or Head of Engineering. Pull up the data flow diagram, compare it against the current supplier register, and confirm nothing has crept in without a scope decision attached. Document that review. When your surveillance auditor asks what you have done since certification to maintain the scope, that document is your answer.

The ISMS is a living management system, not a snapshot [source: https://www.isms.online/iso-27001/]. The scope document should reflect the organisation you are today, not the one that existed when you first engaged a certification body.

Scoping your ISMS vendor boundary well is the first place Series B teams save time they never knew they were losing. CloudAnzen tracks your supplier register, maps vendor controls to the relevant Annex A controls automatically, and flags new integrations that change your scope before your auditor does. [Talk to us](/demo).