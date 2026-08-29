---
title: "How to scope ISO 27001 ISMS for a Series B SaaS"
summary: "A practical walkthrough for drawing defensible ISO 27001 ISMS scope boundaries when your SaaS is growing fast — product lines, cloud accounts, and third-party dependencies included"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","audit readiness","cloud infrastructure"]
sortOrder: 134
publishedAt: "2026-08-29"
author: "sarah-jenkins"
---
The stage 1 audit is eight weeks out. Your auditor just sent a one-line email: "Please confirm the ISMS scope statement." You open the document you wrote twelve months ago and realise it describes the company you were, not the company you are. New product line. Two more AWS accounts. A nearshore engineering team added after the Series B close. Here is how to fix the scope statement before you hand it over.

## Understand what the standard actually requires

ISO 27001 does not prescribe a scope size. It requires that you define one clearly and defend every boundary you draw [source: https://www.isms.online/iso-27001/]. Clause 4.3 of the standard says the ISMS scope must account for the organisation's external and internal context, the requirements of interested parties, and any interfaces or dependencies with activities performed outside the organisation.

For a Series B SaaS, this translates into four concrete questions:

- Which products touch customer data?
- Which infrastructure accounts process or store that data?
- Which third parties are integral to your service delivery — not just vendors, but entities whose failure would directly affect your customers?
- Which teams, offices, or outsourced functions participate in decisions about information security?

Every boundary you draw has to be justifiable. Auditors probe exclusions harder than inclusions. If a system touches customer data and you have excluded it, you need a coherent written reason, not silence [source: https://www.isms.online/iso-27001/].

## Draw the product boundary first

Start with the product, not the org chart. List every service, API endpoint, and data store that handles customer data, or whose failure would affect the integrity or availability of customer data. At Series B, this list is rarely tidy:

- The core SaaS product that has been running for two years
- An enterprise edition with a dedicated deployment model launched after the funding round
- An internal analytics pipeline that ingests customer behavioural events
- A mobile app that shares the same authentication service as the core product

Each of these is a candidate for scope inclusion. You do not have to include all of them on day one — ISO 27001 explicitly permits a partial scope — but you must be able to explain any exclusion in writing [source: https://www.iso.org/standard/27001]. A defensible rule of thumb: if a breach of that system would legally require you to notify customers, it belongs inside the scope boundary.

Get the product map agreed between your CTO and whoever owns the ISMS before you write a single word of the scope statement. Scope disagreements that surface in the auditor interview are expensive.

## Map infrastructure to the product boundary

Once the product boundary is settled, the infrastructure scope follows directly. Work from your cloud accounts inward:

**Production accounts holding customer data**: always in scope, no exceptions.

**Staging and pre-production accounts**: in scope if they mirror production configuration and process any real or synthetic customer data. Out of scope only if they are genuinely air-gapped from production and handle no personal data.

**Developer sandboxes**: defensibly excluded if they cannot access production systems and do not process real customer data — but you need documented access controls and network separation to back that up.

**CI/CD systems**: in scope if a pipeline can push to production without a human approval gate. The deployment pipeline is part of your security boundary [source: https://www.isms.online/iso-27001/].

Name each system explicitly in the scope statement — account ID, provider name, service name. Scope statements that say "our cloud infrastructure" or "production systems" without enumeration are a recurring finding in stage 1 reviews. Auditors want a list they can cross-reference against your asset inventory.

## Handle third-party dependencies without over-scoping

ISO 27001 requires you to manage supplier relationships — Annex A controls A.5.19 through A.5.22 cover this directly — but bringing suppliers into your ISMS scope is a different matter [source: https://www.iso.org/standard/27001]. The practical distinction:

**Cloud infrastructure providers** (AWS, GCP, Azure): you rely on their certifications and compliance programmes. You document the shared responsibility model and obtain their audit reports. They are not in scope of your ISMS.

**Subprocessors that handle customer data as part of your service** — a transactional email provider, a customer support platform with ticket-level personal data, a payment processor: these appear in your ISMS risk register and supplier assessment programme, but they are not inside your ISMS scope. You assess them; you do not manage their security operations.

**Development agencies or contractors with unmediated production access**: this is the hard case. If a contractor can deploy to production or access customer data directly, an auditor can argue they fall within your scope boundary. The clean solution is architectural — time-limited credentials, production access via a privileged access management tool, comprehensive audit logging — implemented before stage 1. If you cannot do that before certification, scope them in and document their security obligations contractually.

The goal is a scope that is honest and defensible, not one that minimises surface area for its own sake.

## Write the scope statement before the stage 1 audit

The scope statement is a mandatory documented artefact under ISO 27001 [source: https://www.isms.online/iso-27001/]. It needs to capture the organisation's legal name and location, the products and services covered, the physical and virtual locations included, the organisational units that fall inside the boundary, and a clear statement of any explicit exclusions with written justification for each.

For a Series B SaaS, treating the scope statement as a one-time document is the most common mistake. Your scope drifts every time you launch a new product feature with its own data model, expand into a new geography, add a contractor with production credentials, or onboard a new SaaS tool that integrates with your production stack. Build a lightweight scope review into each of these events — not just into your annual internal audit cycle.

A stale scope statement is a finding in itself. More importantly, it means your ISMS controls are covering a system boundary that no longer matches reality. When your auditor finds that mismatch, the remediation is not a document update — it is a re-evaluation of which controls apply and whether they are actually operating.

Audit prep at Series B eats engineering cycles that belong to your product. CloudAnzen continuously maps your stack to ISO 27001 controls and surfaces scope drift as your infrastructure changes — so the stage 1 scope conversation is a formality, not a scramble. [Talk to us](/demo).