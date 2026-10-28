---
title: "How to scope ISO 27001 ISMS for a Series B SaaS"
summary: "A practical guide to the three scoping decisions that determine whether your ISO 27001 certification covers the right systems at Series B"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001 scope","ISMS boundaries","Series B SaaS","certification boundary","audit readiness"]
sortOrder: 191
publishedAt: "2026-10-28"
author: "sarah-jenkins"
---
You have closed your Series B. Enterprise buyers are asking for ISO 27001. Your lead engineer has booked a Stage 1 audit in four months. Someone needs to answer the auditor's first question: *what is in scope?* Get this wrong and you spend the next year certifying systems that do not matter while leaving your actual risk exposure unaddressed. Here is how to think through it before you answer.

## What the standard actually requires from your scope statement

ISO 27001:2022 Clause 4.3 requires you to define the scope of the ISMS by considering external and internal issues, the requirements of interested parties, and the interfaces between what your organisation does and what external parties do [source: https://www.iso.org/standard/27001]. That is the formal requirement.

In practice, auditors want to see a document that names:

- Which products or services are in scope
- Which organisational units, sites, and teams handle them
- Which data flows cross the scope boundary
- What your rationale is for any exclusion

A scope statement that says "our cloud-based SaaS platform" tells the auditor almost nothing. A scope statement that says "the production SaaS platform running on AWS ap-south-1 and eu-west-1, operated by the engineering, product, and security functions and supported by tools including GitHub and GitHub Actions" gives them something to audit against.

The ISMS.online guidance on ISO 27001 notes that auditors will probe any gap between what the scope claims and what you can demonstrate with controls and evidence [source: https://www.isms.online/iso-27001/]. Start with the evidence you can actually produce, then define the scope around it.

## Three decisions Series B teams consistently get wrong

**Including the entire company instead of the certification boundary**

At Series B, your company probably has a sales team, a finance function, marketing, and HR. Almost none of these functions touch production data in a meaningful way. If you include them in scope, you are committing to ISO 27001 controls for laptop management, acceptable use policies, and security awareness training for every employee — including people whose work has no bearing on your product's security posture.

Define the boundary tightly around the systems and processes that create, process, store, or transmit information assets that matter to your customers. For a SaaS company, that usually means:

- The production environment and all infrastructure components
- The development and CI/CD pipeline, because it deploys to production
- The engineering, product, and security teams with production access
- Customer support systems that hold customer data
- The risk and compliance function itself

Sales, marketing, and finance can almost always be excluded with a written rationale: they do not process customer data and do not have production access. That rationale must be documented in your scope statement.

**Treating subprocessors as inside scope**

When you use AWS for hosting, Stripe for payments, or Okta for identity, none of those vendors are inside your ISMS scope. They sit outside your control boundary. The way you handle them is through your supplier security controls — Annex A controls 5.19 to 5.22 in ISO 27001:2022 — not by dragging their data centres into your scope statement [source: https://www.iso.org/standard/27001].

What does belong in scope: your configuration of those services. The IAM policies you write, the S3 bucket access controls you set, the Okta policies you configure — those are your controls. The underlying vendor infrastructure is not yours to certify.

**Forgetting data flows that cross the boundary**

Even a tight scope definition must document what crosses the line. If your customer success team — which you have placed outside scope — can access a support ticketing system that holds customer data inside scope, that access flow needs to be acknowledged and controlled. Auditors look for uncontrolled interfaces between in-scope and out-of-scope systems because that is where real risk concentrates.

For every system you have placed outside scope, ask: does it touch data or systems that are inside scope? If yes, document the interface and the control on it. Missing this step is one of the most common reasons Stage 1 findings carry over to Stage 2.

## How to write a scope statement that survives Stage 1

A workable scope statement for a Series B SaaS has five components:

**Products and services.** Name what you deliver. Example: "The production SaaS platform and associated APIs, delivered to enterprise customers."

**Environments.** List the infrastructure explicitly. Example: "AWS ap-south-1 (production), AWS eu-west-1 (disaster recovery), GitHub (source control), GitHub Actions (CI/CD pipeline)."

**Organisational units.** Name the included functions. Example: "Engineering, Product Management, DevSecOps, and the CISO function."

**Information assets.** Describe the data handled. Example: "Customer compliance data, audit evidence files, configuration credentials, and authentication tokens."

**Exclusions with rationale.** Name what is out and why. Example: "Sales, marketing, finance, and HR are excluded. These functions do not process, store, or transmit customer information assets and do not have access to production systems."

This structure maps directly to what Stage 1 auditors check against Clause 4.3 [source: https://www.iso.org/standard/27001]. Arriving at your Stage 1 meeting with this written and signed off internally saves multiple rounds of clarification.

## Keeping scope defensible at surveillance audits

Your scope is not static. It changes when you launch a new product line, move into a new region with different data residency requirements, acquire a company with its own systems, or bring on contractors with production access. At each of these points, your scope statement needs a review.

The standard does not require scope changes to trigger a full re-certification — but they do need to be assessed against your risk treatment plan and your Statement of Applicability. If new systems or processes come into scope, the controls that apply to them must be implemented and evidenced before your next surveillance audit.

Build a scope review trigger into your change management process. Any significant architectural change, geographic expansion, or new data processing category should automatically trigger a scope assessment, not just an annual review. The ISMS.online guidance on ISO 27001 identifies scope creep as a leading cause of surveillance audit nonconformities — not because teams added too little to scope, but because they added systems to production without asking whether the ISMS still covered them [source: https://www.isms.online/iso-27001/].

The discipline is simple: before you push a major change to production, ask whether it changes what the ISMS covers. If the answer is yes, update the scope document before the change goes live, not after the auditor asks.

## Before you finalise anything

Run your draft scope statement past the person who will manage audit relationships day to day. Then ask one practical question: if an auditor asked to see evidence for every system inside scope, could your team produce it within two weeks?

If the answer is no, the scope is too wide. Narrow it to what you can evidence fully. You can always expand scope at a later certification cycle once you have built the operational muscle to manage it.

Audit prep eats months of engineering time. CloudAnzen continuously maps your stack to ISO 27001 and SOC 2 controls so the evidence is ready when the auditor is. [Talk to us](/demo).