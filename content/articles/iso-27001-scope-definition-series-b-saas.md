---
title: "ISO 27001 ISMS scoping for a Series B SaaS"
summary: "How to draw a focused, audit-ready ISMS scope that covers your real attack surface without stalling certification"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","audit readiness"]
sortOrder: 156
publishedAt: "2026-09-20"
author: "sarah-jenkins"
---
Your certifying auditor will ask for your scope statement on day one. Most SaaS teams write a scope either so wide it takes two years to certify, or so narrow it excludes the assets buyers actually care about. Getting the scope right up front determines how painful the certification becomes — and how convincing the certificate looks to enterprise prospects.

## Why scope is the hardest decision in an ISO 27001 project

The ISO 27001 standard [source: https://www.iso.org/standard/27001] defines the ISMS scope as the boundaries and applicability of the information security management system. That sounds bureaucratic. The practical question is: which systems, processes, and teams need to be inside the certification boundary for your buyers to trust the certificate?

For a Series B SaaS company, the typical answer is your production environment, the engineering and DevOps teams who touch it, and the support processes that handle customer data. That usually excludes your marketing stack, internal HR tools, and the finance team — unless they handle in-scope data.

The trap is starting with your org chart instead of your data flows. Scope the data first, then work backwards to the systems and people who touch it.

## How to draw the boundary around production

Start by mapping where customer data enters your environment, where it's processed, and where it exits. For most SaaS products, that means:

- Cloud infrastructure (AWS, GCP, or Azure)
- Application code repositories and CI/CD pipelines
- Third-party SaaS tools with access to production data (observability platforms, support ticketing, CRM if it stores PII)
- The people who can access production systems with elevated privileges

Each of these is an inclusion candidate. Everything else is an exclusion — and you need to document why it's out of scope.

The ISO 27001 framework [source: https://www.isms.online/iso-27001/] requires that you justify exclusions explicitly. "It's not relevant" is not a justification. "Marketing email runs in a separate tenant with no access to production customer data" is.

### Keep third-party exclusions tight

SaaS companies often want to exclude their cloud provider entirely, pointing to the provider's own certifications. That argument covers the physical infrastructure layer. Your configuration of cloud services stays in scope: your IAM policies, bucket access controls, VPC firewall rules. Exclude the layer the provider certifies. Include the layer you control.

## What a good scope statement actually looks like

Your scope document needs to answer three questions without ambiguity:

1. What systems are included? Name the environments — production, staging if it holds real data, disaster recovery infrastructure.
2. What data is included? Name the data types — customer PII, authentication credentials, audit logs.
3. What is excluded, and why? Write one sentence per exclusion.

A scope statement for a mid-stage SaaS company on AWS might read: "The ISMS covers the production application hosted in AWS eu-west-1 and us-east-1, the CI/CD pipeline in GitHub Actions, and the engineering and DevSecOps teams with production access. Internal HR, finance, and marketing systems are excluded — they process no in-scope customer data."

That is the whole document. A scope statement is a boundary definition, not a capabilities brochure.

## Pressure-testing the scope before your auditor does

Once you have a draft, run it through three tests.

**The buyer test.** Your largest enterprise prospect sends a security questionnaire. Does your certification cover the systems and controls they are asking about? If you scoped out the authentication layer to reduce certification effort, you will fail this test.

**The breach test.** Walk a hypothetical incident. Customer data is exfiltrated. Is the path from entry point to data store entirely within scope? If not, your certificate does not cover the controls that should have stopped it.

**The evidence test.** Can you produce audit evidence for every control in scope? The ISO 27001 standard [source: https://www.isms.online/iso-27001/] requires documented evidence of control operation. A scope that includes systems your team does not manage means you will be manufacturing evidence when the auditor arrives.

If the scope fails any of these tests, redraw the boundary before you start your gap analysis.

## What changes at Series B that wasn't true earlier

Early-stage startups can often certify against a minimal scope — just the production environment and a small security function. That works once. At Series B, several things shift.

Your customer base now includes enterprise procurement teams who read scope statements. A scope that excludes your support tooling or deployment pipeline will generate follow-up questions during vendor security reviews.

Your team has grown. More people in scope means more evidence: background checks, access reviews, security training records for everyone with elevated access.

Your infrastructure is more complex. Multiple cloud accounts, a data warehouse, a separate analytics pipeline — each is a scope decision. Include it if it touches in-scope data. Exclude it with a written justification if it doesn't.

At Series B, the right approach is to expand the scope to cover the full production attack surface and invest in tooling that makes continuous evidence collection manageable. Manual evidence collection across a complex infrastructure is the tax you pay for a carelessly wide scope. A scope too narrow to satisfy buyers is a different tax. Neither is worth paying.

Get your draft scope reviewed by your certifying auditor before you commit to it — most will review a draft at no charge. Document the sign-off; it becomes part of your ISMS record [source: https://www.isms.online/iso-27001/].

Scoping the ISMS correctly takes an afternoon with clean data-flow documentation. It takes months without it. CloudAnzen helps you map your infrastructure to ISO 27001 requirements and collect evidence continuously once the boundary is set. [Talk to us](/demo).