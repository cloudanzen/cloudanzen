---
title: "ISO 27001 ISMS scope for India-based SaaS at Series B"
summary: "How India-headquartered SaaS teams at Series B should draw ISMS boundaries that hold at Stage 1, covering entity selection, cloud provider limits, and contractor scope."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","Series B","India SaaS","Stage 1 audit"]
sortOrder: 141
publishedAt: "2026-09-05"
author: "sarah-jenkins"
---
Your Series B closes and three enterprise prospects from Europe and the US want ISO 27001 before they sign. Your engineering org is in Bengaluru, your customer data is in AWS Mumbai, and you have a small customer success team in Singapore. Every ISMS scope decision you make in the next few weeks will be tested by an auditor at Stage 1. Here is what those decisions actually look like in practice.

## Why India-based SaaS teams face a harder scoping problem

ISO 27001 clause 4.3 requires you to define the scope of your ISMS with reference to your organisation's context, interested parties, and interfaces with other organisations. [source: https://www.isms.online/iso-27001/] That final phrase is where India-based Series B companies consistently underestimate the work.

A Bengaluru-headquartered SaaS company at this stage usually has production infrastructure across multiple AWS regions, contract engineers or a captive offshore team whose employment contracts sit outside the main entity, customers in the EU or US with data residency expectations, and a Singapore or US holding entity that signs some customer agreements. Each of these creates a scope boundary question. Getting any one of them wrong costs months rather than days, because you end up reworking the risk register, the control documentation, and the scope statement itself once the auditor flags the inconsistency.

The standard's intent is straightforward: your ISMS should cover everything that materially affects the confidentiality, integrity, and availability of the information you handle for customers. The hard part is drawing that boundary precisely when your organisation spans multiple legal entities, several cloud accounts, and two or three geographies.

## The four boundary decisions that determine your Stage 1 outcome

**1. Which legal entity gets certified?**

In India you typically have a private limited company incorporated under the Companies Act 2013 and possibly a parent entity registered in Singapore or the US. Your ISO 27001 certificate names one entity. Certify the entity that signs customer contracts and controls the data in practice. Certifying a holding entity that does not process data makes the scope statement harder to defend because the operational controls sit with an entity outside the certificate.

**2. Which environments belong in scope?**

Production is always in scope. Many teams try to exclude development and staging on the grounds that they carry lower risk. This is defensible only if customer data never enters those environments. At Series B, the typical CI/CD pipeline has at least one data leak path—a staging seed from a production backup, a bug reproduction using records that were anonymised incompletely. Document the data flow honestly. A scope exclusion you cannot defend in the first hour of Stage 1 sets a damaging tone for the entire engagement.

**3. How do you handle contract engineers and staff augmentation vendors?**

ISO 27001 Annex A includes controls on supplier relationships and personnel security. [source: https://www.isms.online/iso-27001/] If you use a staff augmentation firm or independent contractors alongside your permanent team, you have two options: bring them in scope under your ISMS—they sign your policies, complete your security training, use your endpoint management tooling—or treat them as suppliers with a formal assessment. Neither path is free. The in-scope path demands disciplined onboarding and offboarding. The supplier path requires a risk assessment and ongoing monitoring process. Most Series B teams underestimate the documentation burden of the supplier route.

**4. What is your boundary with the cloud provider?**

AWS, GCP, and Azure all operate under a shared responsibility model. The provider owns the physical layer, the hypervisor, and the managed service boundary. You own what you deploy on top. Your scope statement must acknowledge this division and reference the relevant provider documentation so the auditor can see that you have considered it. An auditor who reads a scope statement that simply says "all systems" without addressing cloud provider boundaries will probe this directly at Stage 1.

## Writing a scope statement that survives Stage 1

The scope statement is documented information under ISO 27001—it must exist as a retrievable document and it must be accurate at the point of audit. [source: https://www.isms.online/iso-27001/] For a Series B India SaaS company, a defensible scope statement includes the legal entity name and its registered address, the specific products and services covered (named, not described as "all products"), the AWS regions or equivalent in scope, physical locations including registered office and any operational offices or significant remote-work arrangements, explicit exclusions with written justification, and a summary statement of how cloud provider and supplier boundaries are managed.

One page is usually sufficient. The document does not need to be long. It needs to be accurate, internally consistent, and consistent with your risk register and control documentation. Reviewers at Stage 1 will cross-reference the scope statement against your risk register headers, your architecture diagrams, and your supplier list. Inconsistencies between any of these will be raised as observations before Stage 2 is approved.

## What auditors check at Stage 1

Stage 1 is a documentation review. The auditor is confirming that your scope is plausible and that your supporting documentation is coherent before approving the move to Stage 2 control testing. In practice they will cross-check your scope statement against the products and services listed on your website and in customer contracts, your cloud account structure via a high-level architecture diagram, your risk register to confirm it covers the in-scope environment, and your supplier register to confirm it includes your cloud provider and other significant vendors.

The most common Stage 1 finding at India-based SaaS companies is a scope statement that was written at the start of the certification project and was never updated as the business grew. A product line launched, a second AWS account opened for a new geography, or a contractor team was engaged—and none of these changes reached the scope document. Review your scope statement every time the business changes materially. This is not optional; it is how you avoid a non-conformity that delays Stage 2 approval.

## What enterprise buyers see in your certificate

Every ISO 27001 certificate includes the scope on its face. Enterprise procurement teams read it. If the scope on your certificate excludes your main product, references only back-office systems, or names only a holding entity that does not process customer data, a procurement reviewer will flag it and the sales conversation gets harder rather than easier.

Scope your ISMS to what your buyers care about: the systems that process their data, the people who can access it, and the infrastructure it runs on. A narrow scope that was easy to certify is a sales liability in every subsequent deal where procurement asks to see the certificate.

Getting ISMS scope right at Series B takes time you do not have in the middle of a fundraise. CloudAnzen maps your infrastructure, people, and data flows to the scope boundaries ISO 27001 clause 4.3 requires so your documentation holds up before the auditor arrives. [Talk to us](/demo).