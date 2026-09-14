---
title: "ISO 27001 ISMS scope: what to include when you are Series B"
summary: "The scoping decision sits at the start of every ISO 27001 programme and mistakes here cost you months before Stage 1"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001 scope","ISMS boundaries","SaaS compliance","Series B"]
sortOrder: 150
publishedAt: "2026-09-14"
author: "sarah-jenkins"
---
Scoping your ISMS wrong is the most expensive mistake you can make before Stage 1. Too narrow and the auditor expands it on you. Too broad and you spend six months evidencing processes your customers do not care about. Here is the decision framework operators at Series B actually need.

## Why scope matters more at Series B than at any other stage

At Seed, most teams skip formal ISMS work entirely. At Series C and beyond, the org is large enough that a dedicated compliance team can absorb a poorly scoped ISMS. But at Series B, you have one GRC person — possibly yourself — a 30 to 80-person engineering org, and enterprise customers asking for ISO 27001 on renewal. Get the scope right now and the next two surveillance audits become routine. Get it wrong and you are re-scoping under time pressure.

ISO 27001:2022 Clause 4.3 requires you to document the "boundaries and applicability" of the ISMS [source: https://www.iso.org/standard/27001]. The standard does not prescribe size or shape, but auditors at accredited certification bodies have calibrated expectations. A scope that covers everything on the org chart raises eyebrows. So does one that mysteriously excludes the production environment.

## The three variables that define a defensible scope

**Which products or services are in scope?**

If you sell multiple products, consider whether enterprise customers — the ones demanding the certification — use all of them or only a subset. You can certify a single product line and bring additional products in during a subsequent surveillance audit. Starting narrow is faster and cheaper, and it rarely costs you the deal.

**Which environments are in scope?**

For a cloud-first SaaS company, environment means the production cloud accounts, the CI/CD pipeline, and the tooling that can touch production. Development environments are generally excludable if they hold no production data and cannot reach production systems directly [source: https://www.isms.online/iso-27001/]. Staging environments are a judgement call: if a staging compromise could expose production credentials, auditors will want it in scope.

**Which third parties are in scope?**

ISO 27001:2022 Annex A 5.21 and 5.22 require supplier relationships to be managed [source: https://www.isms.online/iso-27001/]. This does not mean every SaaS tool in your tech stack needs a supplier security assessment. It means you have a documented process to evaluate suppliers who process your customers' data or hold privileged access to your infrastructure. Cloud providers, authentication platforms, and data sub-processors typically need to be listed. Free-tier internal productivity tools do not.

## Common scoping mistakes at Series B

**Including all employees regardless of role**

A customer success rep who accesses tickets in a help-desk tool does not automatically put that tool in scope. Scope follows information assets — the systems that store, process, or transmit them. Map your data flows first, then decide which roles interact with scoped assets. Most Series B teams find that fewer than half of all employees have meaningful contact with scoped systems.

**Excluding third-party development contractors**

If offshore or agency developers have persistent access to production repositories or cloud environments, they are part of your information processing. Excluding them creates an obvious gap that auditors probe at Stage 1. The fix is not to scope them in as individuals but to ensure your supplier management process covers the agency relationship with documented security obligations.

**Writing a scope statement that cannot be operationalised**

A scope statement like "all information assets supporting the product" sounds complete but gives you nothing concrete to audit against. Effective scope statements name specific environments, specific services, and specific locations if any are relevant. When the statement is concrete, the gap analysis has a clear starting point and surveyance audits become a matching exercise rather than a negotiation.

**Expanding scope without re-running risk assessment**

Each time you add a product line, a new cloud region, or a new sub-processor, the risk assessment must cover the addition. Many teams add scope items and assume existing controls apply. Sometimes they do, but the documentation must say so explicitly. Auditors look for a traceable link from every scoped asset back to a risk assessment entry and a control.

## Writing a scope statement that holds up at Stage 1

Stage 1 is largely a document review. The auditor will read your scope statement and cross-check it against your asset register, network diagrams, and supplier list. A structure that has held up across multiple accredited certifications reads roughly as follows:

The ISMS covers the design, development, operation, and support of [product name], delivered as a SaaS application. The scope includes: (a) production infrastructure hosted in [cloud provider and region]; (b) the CI/CD pipeline and related tooling with production access; (c) the [city] office where [specific systems] are located; and (d) employees and contractors with access to production environments.

The following are explicitly excluded: (a) development and test environments that hold no production data and have no production access; (b) internal productivity tools not used to process customer data.

Explicit exclusions are as important as inclusions. Auditors will ask about them. "Not in scope" without a documented rationale is a nonconformity waiting to happen [source: https://www.iso.org/standard/27001].

## What to do in the 30 days before you submit the scope statement

First, run a data flow exercise. For each customer-facing data category, trace where it enters your system, where it is stored, and where it exits. Every system that touches that flow is a scoping candidate.

Second, list privileged access holders. Anyone with production access — employee or contractor — needs to appear in your access register and therefore in your scope.

Third, check your sub-processor agreements. If a sub-processor processes personal data or holds production access, they need to appear in your supplier management process [source: https://www.isms.online/iso-27001/]. If the agreement is silent on security obligations, fix that before Stage 1, not after.

Fourth, draft and review with a legal eye. The scope statement becomes a public-facing document once the certificate is issued. Make sure no confidential architectural details appear in the version you will publish.

Scope definition is unglamorous work. It feels like writing documentation when you could be building controls. But a tight, defensible scope statement is the foundation the rest of the ISMS sits on, and every audit after this one will be faster for having got it right.

Audit prep for ISO 27001 scope decisions pulls in teams across engineering, legal, and operations. CloudAnzen maps your infrastructure, data flows, and supplier relationships to the Clause 4.3 requirements so your scope statement is defensible before the auditor arrives. [Talk to us](/demo).