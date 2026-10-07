---
title: "How to scope your ISMS when you white-label your SaaS platform"
summary: "White-labeling blurs the ISMS boundary: here is how to draw it clearly before your Stage 1 auditor does it for you"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","white-label SaaS","SaaS compliance","certification"]
sortOrder: 168
publishedAt: "2026-10-02"
author: "sarah-jenkins"
---
The white-label question comes up at Stage 1, not Stage 2. You hand your certification body the scope statement and they see that your largest customer runs your product under their own brand, on a subdomain you do not control, with user management they own. The auditor asks: is that deployment inside or outside the ISMS?

If you do not have a written answer ready, you are about to lose two weeks and a lot of back-and-forth with your certification body before Stage 2 begins. The fix is not technical. It is a scope statement that reflects how your product actually works.

## What white-labeling actually changes in your scope

The ISO 27001 standard [source: https://www.iso.org/standard/27001] requires the scope to cover the information assets, processes, and systems that support the service being certified. When you white-label, three things change that you need to account for explicitly.

First, the data processing may happen in your infrastructure but under your customer's brand identity. The customer controls who sees the product, sets their own SSO policies, and manages their user list. You control the underlying platform, the database, and the pipelines. Those lines of responsibility are not obvious from the outside.

Second, you may have given your customer admin access to their environment. That admin access is an entry point into your infrastructure. It sits on your network, under their control, and subject to their internal access management practices — which you cannot audit by default.

Third, the product your customer presents to their clients may look nothing like your own. If something goes wrong — a breach, a data loss event — both organizations are in the incident. The regulatory response lands on both companies.

The ISMS boundary has to account for all three realities. Leaving any one of them ambiguous in the scope statement will generate findings at Stage 1 and again at each surveillance audit.

## The two scoping models auditors accept

There are two clean ways to scope a white-label deployment. Neither is universally right. [source: https://www.isms.online/iso-27001/]

**Model 1: Infrastructure in, customer interface out.** Your ISMS covers the platform: the infrastructure you run, the code you deploy, the pipelines that process data. The customer-facing interface — their admin portal, their brand configuration, their user management — sits outside the scope as a customer-operated layer. You document the boundary explicitly: your platform hands off at the API. What happens on the customer side is their security responsibility.

This model works when your customer has their own security program. It is clean to audit. The risk is that a customer admin misconfigures something that exposes your shared infrastructure. Mitigating that risk requires controls at the API boundary — rate limiting, authentication enforcement, anomaly detection on admin actions.

**Model 2: Entire deployment in scope.** You treat every white-label deployment as an extension of your platform. The customer's environment — including their admin access and their configuration decisions — is inside your ISMS boundary. You accept responsibility for controls across the whole stack.

This model works when your customers are small and do not have their own security governance. It is harder to audit because your evidence package has to cover every customer's environment. The advantage is that you have full visibility into every risk.

Most Series B SaaS teams land on Model 1 and write a clear boundary into the scope statement. The key is to document the choice before Stage 1, not after the auditor asks.

## What your scope statement needs to say

A scope statement that covers white-label deployments needs to answer four questions. [source: https://www.isms.online/iso-27001/]

**What is the service?** Name the platform being certified, not the white-label products. Be specific: the SaaS platform including the API layer, data processing pipelines, and shared infrastructure supporting all customer deployments.

**Where does the platform boundary sit?** Define the handoff point. The scope extends to the API endpoints through which customer-operated environments connect to the platform. Customer branding, user management configuration, and customer-side integrations are excluded.

**What are the interfaces with excluded systems?** List the touchpoints: API keys, OAuth connections, admin access grants, webhook endpoints. Each one needs a documented control — who can issue credentials, how they are rotated, and what access they provide.

**What is the rationale for exclusions?** ISO 27001 requires justification for exclusions from the scope. Customer-operated environments are excluded because the customer bears contractual responsibility for their configuration, user management, and compliance posture. The platform boundary controls — API authentication, rate limiting, data isolation — are within scope.

If any of these four answers are missing or vague, your Stage 1 reviewer will ask for them. Writing them before Stage 1 is faster than writing them under pressure, and much faster than revising them in response to a Stage 1 finding.

## Contractual controls that make the scope defensible

Scope documentation is not enough on its own. If a customer's admin account can take an action that creates a risk inside your ISMS boundary, you need a contractual control alongside the technical one.

Three contract clauses make white-label scoping defensible. [source: https://www.isms.online/iso-27001/]

**Shared responsibility matrix.** A written document that maps controls to owner: which you own, which the customer owns, which are shared. Auditors accept this as evidence that you have thought through the boundary and communicated it to the customer.

**Customer security obligations clause.** Your customer agreement should list the minimum security requirements for customer-operated environments: MFA enforcement on admin accounts, access review cadence, incident notification window. If the customer violates these and something goes wrong, you need to show that you had contractual safeguards in place.

**Audit rights clause.** You need the right to request evidence that the customer is meeting their security obligations. This is standard in enterprise SaaS agreements. If you do not have it, add it before your next renewal. Your certification body may ask during surveillance whether you have it.

None of these require you to run security for your customers. They require you to document that you knew where your responsibility ended and that you had an agreed boundary with the customer.

## Preparing for Stage 1

Stage 1 is a documentation review. The auditor checks that your scope statement is internally consistent and covers what you say it covers.

For white-label deployments, prepare a boundary diagram. Show the platform infrastructure, the API layer, the customer-operated environments, and the control at each interface. Label which side of each interface is in scope. One page is enough.

Bring the shared responsibility matrix and a sample customer agreement. If the auditor asks whether your customers have their own security controls, you point to the contract rather than saying you assume they do.

Review the asset inventory. Every asset that supports the platform should be in scope. Every asset the customer controls should be out of scope. If there is an asset both sides touch — a logging pipeline that ingests customer-generated events, a monitoring tool the customer can configure — document it explicitly and assign an owner.

The auditor is not trying to expand your scope. They are checking that your scope statement matches reality. The more clearly you have mapped that reality before Stage 1, the shorter the review will be and the fewer items will carry forward to Stage 2.

White-label scope gaps are a common source of noncompliance findings for Series B SaaS teams. The fix is not architectural — it is documentation and contracts. CloudAnzen maps your platform controls to ISO 27001 scope requirements continuously, so your scope statement reflects your actual stack at every audit cycle. [Talk to us](/demo).