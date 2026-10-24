---
title: "How to scope ISO 27001 ISMS for a Series B SaaS"
summary: "A practical method for founder-led Series B SaaS teams drawing ISMS boundaries before their first dedicated security hire"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","Series B","SaaS compliance","ISMS certification"]
sortOrder: 187
publishedAt: "2026-10-24"
author: "sarah-jenkins"
---
Founders at Series B still run compliance before they hire a dedicated security person. That gap—between “we need ISO 27001 to close enterprise deals” and “we have a CISO”—is exactly when scoping decisions go wrong.

ISO 27001 defines your ISMS scope as the boundary of your information security management system. Get it too wide and you are auditing infrastructure you do not control. Get it too narrow and the auditor rejects it, your enterprise customer’s procurement team rejects it, or both.

Here is a practical method for drawing that boundary correctly the first time.

## What “scope” means under Clause 4.3

ISO 27001:2022 Clause 4.3 requires you to document the boundaries and applicability of your ISMS [source: https://www.iso.org/standard/27001]. This is not a free-form exercise. It must reflect three things: external and internal issues relevant to your business (Clause 4.1), the requirements of interested parties—customers, regulators, investors—(Clause 4.2), and the interfaces and dependencies between activities your organisation performs and those performed by external parties.

For a Series B SaaS, that usually resolves to three concrete questions. Which products are in scope? Which infrastructure components support those products? Which external parties—subprocessors, cloud providers, development contractors—are in scope as dependencies rather than as audited entities in their own right?

Your auditor will read your scope statement against your risk assessment. Inconsistencies are a Stage 1 finding. Write the scope document to survive that read.

## The boundary between your ISMS and your subprocessors

The most common scoping mistake: treating every SaaS tool you use as an in-scope asset. Your ISMS scope covers what you control and are accountable for. Subprocessors—your cloud provider, your payment gateway, your monitoring vendor—sit outside your ISMS boundary and inside your supplier relationship framework.

ISO 27001 Annex A Control 5.19 on supplier relationships requires you to manage information security risks in relationships with suppliers [source: https://www.isms.online/iso-27001/]. That management happens through supplier assessments and contracts, not by including the supplier’s infrastructure inside your ISMS scope.

Draw a line around the systems your team configures, manages, and is accountable for. Your AWS account is in scope. AWS’s underlying infrastructure is not. Your CRM instance where you store customer contact data is in scope. The CRM vendor’s data centres are not.

When in doubt, ask: if something went wrong here, would my auditor expect me to have an audit trail? If yes, it is in scope. If the answer is “that is the vendor’s problem,” it belongs in your supplier register.

## Five decisions that close the scope

At Series B, five decisions usually resolve the boundary.

**Which products are in scope?** If you have multiple products, scope the one your enterprise customers care about first. Expanding scope post-certification is easier than getting it wrong upfront.

**Which environments are in scope?** Production always. Staging only if production data flows through it—and at Series B it usually does. Development environments are typically excluded unless code runs alongside customer data.

**Which locations are in scope?** For remote-first companies, your “locations” are your cloud infrastructure regions and the home offices from which your team accesses production systems. Document both.

**Which third parties are dependencies?** Cloud infrastructure provider, DNS, CDN, and any service that processes or stores customer data on your behalf. These go into your Statement of Applicability as assessed dependencies, not as entities you audit.

**What is explicitly excluded and why?** ISO 27001 allows exclusions, but each must be justified [source: https://www.isms.online/iso-27001/]. “We do not use on-premise infrastructure” is a valid rationale. “We did not want to audit that system” is not. Documenting what you excluded and why is as important as documenting what you included.

Your Stage 1 auditor spends significant time on Clause 4.3 precisely because ill-defined scope is the leading cause of Stage 1 failure. These five decisions prevent that.

## What to prepare before Stage 1

Your scope statement alone is not sufficient. Stage 1 requires evidence that the scope is grounded in your actual context. Prepare four documents before the auditor arrives.

**Scope document.** One page: ISMS name, products in scope, infrastructure in scope, locations, exclusions with rationale, and a list of interested parties.

**Context document.** Covers Clauses 4.1 and 4.2. External issues: regulatory landscape (GDPR, DPDP if you serve Indian customers), competitive environment, customer expectations. Internal issues: team size, technical stack, current security maturity.

**Data flow diagram.** Shows where customer data enters your environment, how it moves between systems, and where it exits or rests. Every system on this diagram either appears in your scope or is captured as a supplier relationship. Gaps here are Stage 1 findings.

**Risk assessment initiation.** You do not need a complete risk register at Stage 1, but you need evidence that assessment has started and that the scope feeds into it. A blank risk register is a finding.

Together, these four documents trace the logic from your business context through your scope decision to your initial risk thinking. The auditor checks whether your scope reflects your actual business, not whether your documentation is polished.

## Scoping under time pressure

Enterprise deals move fast. A procurement team asking for ISO 27001 may have a legal sign-off deadline weeks after first asking. That pressure pushes founders toward two bad decisions: scoping too broadly to be safe, or deferring the decision until a consultant arrives.

Both are expensive. A broad scope takes longer to certify because more controls need evidence across more systems. A deferred scope means starting over once someone external draws the lines differently than your engineering team assumed.

The correct response is to make the five decisions above with your CTO in one working session, document them in a scope statement, and let that drive the risk assessment. You can refine boundaries between Stage 1 and Stage 2. You cannot easily change the fundamental scope once the auditor has reviewed it.

ISO 27001 is an operational constraint you live with until recertification. Scope it to reflect how your team actually works, and the rest of the ISMS follows naturally.

Audit prep eats weeks of engineering time when scope is unclear from the start. CloudAnzen maps your product and infrastructure to ISO 27001 controls as you build, so your scope document and evidence package stay current without a dedicated compliance resource. [Talk to us](/demo).