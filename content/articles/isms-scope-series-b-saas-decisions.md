---
title: "ISO 27001 ISMS scope decisions every Series B SaaS team gets wrong"
summary: "The scoping mistakes that create stage 1 audit gaps, and five decisions to lock down before you write your first control"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","audit readiness"]
sortOrder: 126
publishedAt: "2026-08-18"
author: "sarah-jenkins"
---
By Series B you probably already have a product, a cloud stack, offshore contractors, and an expanding list of customer data flows. The ISMS scope document is supposed to capture all of that. Most teams write it after they have already built their control set, then spend months backfilling gaps. Scope first. Everything else follows from it.

## What ISO 27001 scope actually means

ISMS scope defines the boundary of your information security management system — the assets, processes, locations, and organisational units that fall inside the certification. Everything outside that boundary is explicitly excluded, and exclusions need to be defensible.

ISO 27001:2022 clause 4.3 requires you to determine scope by considering your context, your interested parties, and the interfaces and dependencies between your in-scope activities and everything else [source: https://www.iso.org/standard/27001]. That final requirement — interfaces and dependencies — is where Series B companies most consistently underscope.

The practical test: if a failure in that system, team, or process could expose customer data or cause a control to break, it belongs in scope. "It's a separate legal entity" is not a defence if that entity pushes code to your production environment.

Scope is also not the same as your scope statement. The statement is a one-page summary. The underlying scoping work — identifying assets, mapping data flows, evaluating third-party relationships — takes weeks and shapes every control decision that follows.

## The five scoping decisions to make before you write a single control

Before writing a policy or mapping an Annex A control, these five questions need definitive answers.

**What products and services does the ISMS cover?** Name them explicitly. If you have a core platform and an adjacent analytics module, the scope statement must say which is in scope. Ambiguous scope produces an ambiguous control set, which produces gaps an auditor will find.

**Which cloud regions and infrastructure components are included?** List the regions, the services, and the accounts. If customer data lives in AWS ap-south-1 and eu-west-1, both regions are in scope. Listing them prevents later arguments about whether a specific environment was certified.

**Which organisational units and locations are included?** Remote teams, offshore contractors, and acquired companies that touch in-scope data or systems are in scope by definition [source: https://www.iso.org/standard/27001]. Writing "headquarters" and hoping an auditor does not ask about your Bangalore development team is not a strategy.

**What third-party dependencies does the ISMS rely on?** Cloud providers, SaaS tools, and sub-processors that process or transmit customer data are dependencies. You do not need to certify them, but you do need controls governing how you engage them. ISO 27001:2022 Annex A controls A.5.19 and A.5.20 govern supplier relationships and must appear in your SoA if any external parties have access to in-scope data [source: https://www.iso.org/standard/27001].

**What are you explicitly excluding, and why?** Every exclusion requires a justification that holds under auditor scrutiny. A valid exclusion: a marketing function that never touches production systems or customer data. An invalid exclusion: the contractor team that delivered your authentication service and retains access to the codebase.

## How cloud dependencies create hidden scope gaps

At seed stage, the shared responsibility model is relatively simple. You control the application; your cloud provider controls the infrastructure layer. By Series B, that clarity typically dissolves.

Your stack now includes Terraform-managed infrastructure across multiple regions, a growing list of SaaS tools with access to customer data, contractors with production system privileges, and possibly a separate data warehouse or analytics environment. Each of those elements needs to appear somewhere in your scope document or your risk register.

ISMS.online notes that teams commonly scope either too broadly — listing systems they cannot actually control — or too narrowly, excluding systems where they bear the real residual risk [source: https://www.isms.online/iso-27001/]. The second error is the more dangerous one. A certified ISMS that does not reflect your actual data flows gives customers and auditors a false picture of your security coverage.

For each third-party tool in your stack, ask: who controls the data in this tool? If you have admin access, export capability, or the data was generated by your product, treat it as an in-scope dependency and document the controls you rely on the vendor to maintain under your supplier agreements.

This is not a theoretical requirement. If a SaaS tool you rely on has a data breach and customer data is exposed, your auditor will ask whether that tool was in your scope, whether you had a supplier agreement with information security terms, and whether you reviewed its controls annually. Having clear answers to all three is what being properly scoped actually looks like.

## What stage 1 auditors check for

Stage 1 is a documentation review. The auditor reads your scope statement, context document, risk assessment, and Statement of Applicability looking for internal consistency. They are not yet verifying whether your controls actually work.

They are specifically looking at three things:

- Does the scope match the context document you prepared for clause 4?
- Does the SoA include — or explicitly exclude with justification — every control relevant to the scope?
- Does the risk register cover the assets and threats that the scope implies?

A scope statement that reads "all of the organisation" paired with a risk register covering only a single product will flag at stage 1. So will a scope statement naming a cloud region that never appears in the asset register.

Auditors are pattern-matchers. An inconsistency between the scope statement and the SoA signals broader control gaps even when none actually exist. Walking in with a clean, internally consistent set of documents signals an operator who understands the standard. Walking in with inconsistencies signals rework ahead — rework that delays certification by months.

ISMS.online recommends treating the scope document as a living artefact, reviewed whenever you launch a new product, open a new region, or onboard a significant contractor [source: https://www.isms.online/iso-27001/]. That discipline keeps your certification aligned with your actual operating reality.

## Writing the scope statement itself

Keep it to one page. Use declarative language. A scope statement is not a company summary or a marketing description of the product.

A working format for a typical Series B SaaS:

The information security management system covers the development, operation, and customer support of [Product Name], including all systems and data stores that process [data type] in [cloud regions and account identifiers]. The ISMS applies to [teams and locations]. Excluded: [specific exclusions with documented justification].

Avoid: "our entire technology stack" — too vague to audit against. Avoid: "all customer data" without specifying where it is stored and processed. Avoid exclusions without documented reasons; an undocumented exclusion looks like an oversight to an auditor.

After drafting the scope statement, read it against your asset register and your SoA. Every asset in the register should trace back to a part of the scope. Every Annex A control you exclude should correspond to a documented exclusion in the scope or an explicit SoA justification.

Scope mistakes surface months later at stage 1 — after you have already built a control set against the wrong boundary. CloudAnzen maps your stack, data flows, and supplier relationships to ISO 27001 requirements so the scope document you write matches the evidence you are actually collecting. [Talk to us](/demo).