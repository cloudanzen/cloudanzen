---
title: "Five scoping mistakes that delay ISO 27001 certification at Series B"
summary: "The ISMS scope decisions you make at Series B will follow you through every audit cycle — here are the five mistakes that add months to certification"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","Series B","SaaS compliance","audit readiness"]
sortOrder: 135
publishedAt: "2026-08-30"
author: "sarah-jenkins"
---
Auditors read your scope document on day one of Stage 1. It tells them what systems are in play, what you're claiming to control, and what you've decided not to be accountable for. Get it wrong and you spend the rest of that audit defending boundaries that don't hold up. At Series B, the scoping decision is especially high-stakes: you've grown past the point where a narrow scope is credible, but haven't yet built the evidence machinery a broad one demands.

These five mistakes show up consistently in first-time ISO 27001 certifications at growth-stage SaaS companies.

## Scoping to your product instead of your ISMS

The most common mistake: treating the scope of your ISO 27001 ISMS as if it were the scope of your product. They're different things.

Your product is what your customers use. Your ISMS is the management system that governs how your organization identifies, treats, and monitors information security risk [source: https://www.isms.online/iso-27001/]. That includes your product, yes, but also the systems that run it, the people who build and operate it, and the processes that govern how sensitive information moves through your organization.

At Series B, you likely have HR tooling with employee data, a CRM with prospect and customer contact details, engineering toolstacks with access to production credentials, and internal wikis with architecture documentation. None of these are your product. All of them are in scope for your ISMS unless you've consciously and documentably excluded them.

The fix: define scope by starting with your information assets, not your customer-facing surface area. Ask what systems touch data that matters to your business or your customers. That list is your starting point for scope.

A narrowly product-scoped ISMS also creates a credibility gap. Your certifying auditor can see that a twenty-person engineering team is unlikely to limit all information security risk to a single application. The scope statement needs to match organizational reality.

## Excluding third-party SaaS tools without documented rationale

"We don't manage it, so it's out of scope" is the second-most-common mistake — and the one most likely to generate a nonconformity.

ISO 27001 expects you to document what is and isn't in scope, and to justify your exclusions [source: https://www.iso.org/standard/27001]. Excluding a third-party SaaS provider is legitimate, but only if you've documented why, what controls the provider operates, and how you've verified those controls. Verification typically comes from reviewing the supplier's SOC 2 Type II report or their own ISO 27001 certificate, then recording that review in your supplier management process.

If your data analytics platform stores customer usage data and you exclude it from scope with no documentation, your auditor will ask questions. If you can't produce a supplier review or equivalent evidence, that gap becomes a finding.

This matters especially at Series B, where the SaaS tool sprawl is real. Sales teams add CRMs, engineering teams adopt new observability platforms, people ops adopts HRIS systems. Each new tool that touches sensitive data is a potential scope boundary that needs a documented position.

The fix: for every third-party tool you propose to exclude, document the rationale and the supplier assurance you've collected. Keep this in your scope document, not scattered across email threads or Notion pages with no audit trail.

## Defining scope around your current team rather than your audit cycle

ISO 27001 certification takes time. By the time your auditor arrives for Stage 2, your team will likely be larger, your infrastructure more complex, and your customer list longer than it was when you wrote the scope statement.

Series B companies often scope based on current state, then spend the months before the audit scrambling to justify why systems and headcount that joined since scoping aren't being included in the evidence set. The safer approach is to scope around your legal entity and organizational boundaries, not your current team size [source: https://www.isms.online/iso-27001/].

When you define your scope as your legal entity and all personnel, systems, and processes used to deliver your product to customers, you've built a scope that grows with you. When you define it as a named list of five engineers and one AWS account, you've set yourself up to rewrite it mid-certification.

The fix: use your legal entity as the outer boundary. Then document what is specifically excluded and why. Exclusions should shrink the scope, not define it. That framing also makes scope amendments much lower-risk — you're documenting what moved in or out of exclusion, not rewriting the whole document.

## Treating geographic scope as optional

If your engineering team is partly offshore, those locations are almost certainly in scope. "It's just development" is not a sufficient exclusion argument if that team has production access, handles customer data, or contributes to systems that process sensitive information.

ISO 27001's scope applies across all locations, people, and systems that fall within the defined organizational boundary [source: https://www.iso.org/standard/27001]. If engineers in Bengaluru have access to production databases, excluding that location because it's a development centre will not survive auditor scrutiny.

This matters particularly for Series B SaaS companies operating India-plus-global models. If your primary customers are in the EU or US but your engineering team is in India, the operational reality is that all three regions have information security significance. Your scope document needs to reflect that, and your controls need to operate across those locations.

The fix: list every physical and logical location in your scope statement. For each location, document which information assets are present and which controls operate there. If you want to exclude a location, you need to show it has no meaningful access to in-scope information. That's a high bar if the team there writes code or handles any customer data.

## Not linking your scope to your Statement of Applicability

Your scope document and your Statement of Applicability are not independent artifacts. The SoA documents which ISO 27001 Annex A controls apply to your organization and why — and those decisions flow directly from what you've put in scope [source: https://www.isms.online/iso-27001/].

The mistake: write scope in month one, hand it to a consultant to build an SoA, then update scope three times during certification without revisiting the SoA. Now your controls reference systems that are no longer in scope, or fail to address systems that were added after the SoA was written.

Auditors cross-reference scope and SoA explicitly. Inconsistencies between them are findings. At worst, they signal that your ISMS is a document exercise rather than a live management system — which undermines the credibility of your entire certification.

The fix: treat scope and SoA as a linked pair from day one. Any change to scope triggers a review of the SoA. Keep both documents under version control and review both at every management review cycle. If you're using a GRC platform, this linkage should be enforced structurally, not tracked manually in a spreadsheet.

Scoping is the first decision your auditor evaluates and the one that frames every subsequent evidence request. CloudAnzen maps your organization's information assets, supplier relationships, and controls to ISO 27001 from day one, so your scope document and SoA stay in sync as your business grows. [Talk to us](/demo).