---
title: "ISMS scoping for remote-first SaaS: boundaries when your team is everywhere"
summary: "Scoping an ISO 27001 ISMS when your team is fully distributed introduces boundary decisions that office-based playbooks ignore"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","remote work","SaaS compliance","Series B"]
sortOrder: 157
publishedAt: "2026-09-21"
author: "sarah-jenkins"
---
Your certification body will ask you for a scope statement on day one of Stage 1. Most Series B SaaS teams know their product is in scope. The uncertainty starts when the auditor asks: "What about your contractors in Bangalore? Your devs running local environments? The EU instance you spun up last quarter?" These are not edge cases. They are the questions that define how hard the next twelve months of controls work will be.

## What "organizational context" means when there is no office

ISO 27001 Clause 4.1 asks you to understand your organization's context — internal and external factors that affect its ability to achieve ISMS objectives. For a remote-first company, the organizational boundary is not a building perimeter. It is every endpoint, cloud account, and SaaS tool that processes in-scope information [source: https://www.isms.online/iso-27001/].

In practice this means:

- **Legal entity boundary**: the entity seeking certification, not the entire corporate group.
- **Information boundary**: the systems that create, store, process, or transmit the information types you are certifying against — customer data, credentials, audit logs.
- **Personnel boundary**: employees and contractors whose activities affect the ISMS, regardless of location.

Remote-first teams often start scope discussions by listing cloud accounts. That is backwards. Start with the information types your customers are trusting you with, then trace every system that touches them. The geographic spread of your people is a control challenge, not a scope boundary.

## Employee endpoints: the remote-first default position

When everyone works from a laptop at home, devices are formally in scope. ISO 27001 Annex A controls for asset management and endpoint protection require you to know which assets are in use and that they meet baseline security requirements [source: https://www.isms.online/iso-27001/].

The operational choices this creates:

- **MDM enrollment**: does your MDM enroll all employee laptops before they access production systems? If not, you have a gap the auditor will note.
- **Personal devices**: the safest position for a first certification is to prohibit personal device access to production environments entirely. Document the prohibition and enforce it technically.
- **Contractor endpoints**: contractors who have standing access to production or customer data are almost always in scope. Contractors who submit deliverables through a project tool with no production access are usually not.

Auditors are pragmatic about remote work. They are not expecting you to physically control every home office. They are expecting evidence that you know what devices exist, that you manage them, and that you track exceptions. A complete asset inventory and an MDM coverage report will answer the question.

## Cloud tenancy boundaries: what to include and what to note as a dependency

Most Series B SaaS companies run on one primary cloud provider and a range of SaaS tools. Your scope statement needs to distinguish between what is formally in scope and what is an external dependency.

**In scope**: cloud accounts and SaaS services where your team processes customer data or operates controls — your primary cloud production account, your identity provider, your SIEM, your code repository.

**Dependency (out of scope but noted)**: infrastructure your product sits on top of and relies on. Your cloud provider's own physical data centres, your payment processor, your payroll vendor. These are dependencies. You inherit their certifications; you do not include their environments in your ISMS scope. Document the inherited controls and keep their compliance certificates on file for the auditor [source: https://www.isms.online/iso-27001/].

The line between in scope and dependency is whether your team operates controls there. If your engineers have IAM access and deploy code, it is in scope. If you consume an API and review the vendor's compliance posture once a year, it is a dependency.

Multi-region deployments add complexity. If you run separate EU and US instances for data residency reasons, both regions are in scope unless you formally limit certification to one. Artificially narrow scope without a coherent commercial rationale tends to frustrate enterprise buyers who need to see coverage for both regions [source: https://www.iso.org/standard/27001].

## Contractors and offshore engineering teams

Contractors are the scope decision most teams get wrong at Stage 1. The test is not geography or employment status. The test is access.

**Full production access → in scope.** These individuals need to follow your ISMS policies: acceptable use, access control, incident reporting. They need ISMS awareness training. You need to be able to produce evidence of this at audit.

**Project access only, no production data → typically out of scope.** A designer who works in a design tool does not need to appear in your asset inventory. A contractor who reviews API documentation does not necessarily need ISMS training records — depending on what else they can reach.

Document your reasoning. Write a brief rationale for each category of contractor explaining why they are included or excluded. An auditor who sees documented reasoning is far less likely to probe each individual case.

Offshore engineering teams — staff from a services firm co-developing your product — are almost always in scope. Their laptops process source code, possibly staging data. Include them and get contractual commitments via a supplier agreement or ISMS addendum confirming they will comply with your controls and respond to your audit evidence requests.

## What your scope statement must cover before Stage 1

ISO 27001 Clause 4.3 requires a documented ISMS scope. Your certification body reviews this document at Stage 1 to confirm it is appropriate and not artificially narrow. A scope that excludes a significant part of your information risk will result in a major nonconformity finding [source: https://www.iso.org/standard/27001].

A workable one-page scope statement covers:

1. **The organization**: legal entity name and primary locations, including "remote" where applicable.
2. **The information types**: customer data, credentials, audit logs, source code — whatever is material to your service delivery.
3. **The environments**: cloud accounts, SaaS tools, and physical locations including home offices where your information security policies apply.
4. **The exclusions**: what you are explicitly leaving out and why. Undocumented exclusions become audit findings.
5. **External dependencies**: major vendors and the evidence basis for relying on their compliance certifications rather than scoping them in.

Keep it to one page. Ambiguity in a scope statement does not protect you — it invites questions from your certification body. Revisit the document every time you add a significant new cloud service, bring on a new cohort of contractors, or expand into a new geographic region.

Audit prep drains engineering attention at the worst possible time. CloudAnzen continuously maps your distributed stack to ISO 27001 controls, tracks contractor and endpoint coverage, and keeps your scope document current as your team scales. [Talk to us](/demo).