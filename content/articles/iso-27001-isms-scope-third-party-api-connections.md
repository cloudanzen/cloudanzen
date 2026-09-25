---
title: "ISO 27001 ISMS scope when your product connects to third-party APIs"
summary: "How to define your ISMS boundary when third-party API integrations handle customer data — and what auditors look for in the scope justification."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","third-party APIs","SaaS compliance","supplier controls"]
sortOrder: 161
publishedAt: "2026-09-25"
author: "sarah-jenkins"
---
The ISMS scope document is the first thing a Stage 1 auditor reads. At a Series B SaaS company, it is also the document that founders most often get wrong. Third-party API connections are the biggest culprit: many teams treat external services as out of scope by default, then discover mid-audit that the auditor disagrees.

## Why API connections complicate your scope boundary

ISO 27001 defines scope as the boundaries and applicability of the ISMS [source: https://www.isms.online/iso-27001/]. That sounds straightforward until you have 40 SaaS tools wired into your product via API, each handling customer data in some way.

The question is not whether those services are "yours." The question is whether they process, store, or transmit information that falls under your ISMS. Clause 4.3 of ISO 27001:2022 requires you to consider both internal and external issues — and external interfaces that carry customer data are hard to argue out of scope [source: https://www.iso.org/standard/27001].

Three categories of API connection require explicit scope treatment:

- **Data processors**: services that process personal or sensitive data on your behalf (analytics platforms, data warehouses, ML inference APIs)
- **Control dependencies**: services whose availability or security directly affects your ability to meet security objectives (identity providers, key management services, CDNs that cache authenticated content)
- **Operational integrations**: services embedded in your delivery pipeline in ways that could introduce vulnerabilities (CI/CD pipelines, deployment platforms, secret management tools)

Auditors are looking for consistency. If your scope statement says "all systems processing customer data," but your scope justification silently excludes three data processors, you will get a nonconformity.

## What to include and what you can reasonably exclude

Including every third-party service in your ISMS scope would be operationally impossible and is not what ISO 27001 requires. The standard requires you to determine what is in scope, document why, and then manage the risks of anything in scope. Out-of-scope services are handled through supplier controls, not ISMS controls — but that distinction needs to be explicit [source: https://www.isms.online/iso-27001/].

A practical test: for each API connection, ask two questions.

1. If this service were compromised or unavailable, would it directly affect the confidentiality, integrity, or availability of your ISMS-scoped information?
2. Does your contract with this provider include security terms you rely on to meet your own compliance obligations?

If both answers are yes, the service belongs in your scope document as a "relevant external party," and you need a supplier assessment for it. If only the second answer is yes, the service belongs in your supplier register with a risk-tiered assessment but does not need to appear in the scope boundary itself.

The key output is a scope statement that is specific and defensible. "All systems operated by [Company] for the delivery of [Product], including production infrastructure, development tooling, and third-party services processing [data category] data" gives an auditor a clear boundary. "All information assets" does not.

## Documenting third-party dependencies in your scope justification

The scope document is two things in practice: the scope statement (one or two paragraphs) and the scope justification (the reasoning behind what is included and excluded). Many teams write the statement and skip the justification. That is a mistake.

Your justification should address each external interface category and explain the decision. For API connections, a useful structure is a table mapping each service to the data it processes, your scope decision, and the rationale. This table does not need to be exhaustive on day one. It needs to cover every service a reasonable auditor would notice in your architecture diagram and ask about [source: https://www.isms.online/iso-27001/].

Common entries include:

- **Auth providers** (identity, session tokens): typically in scope as a control dependency — their compromise directly affects all authenticated access
- **Payment processors** (tokenised card data): typically out of scope if you use a certified processor under a separate PCI DSS obligation
- **Analytics platforms** (anonymised event data): typically out of scope if no PII flows through them, covered by a data processing agreement
- **Cloud infrastructure** (compute, storage, networking): typically in scope because your production environment runs on it

If you have an architecture diagram in your evidence pack, your scope justification should cross-reference it explicitly. Auditors use the two documents together.

## How scope interacts with Annex A controls for API security

Once a third-party service is in scope, it becomes subject to your ISMS controls — including the Annex A controls in your Statement of Applicability. This has practical implications for how you manage those integrations.

Annex A 5.19 through 5.22 (supplier relationships, agreements, and monitoring) apply to in-scope external services. You need supplier assessment documentation, a signed or accepted security agreement, and periodic review evidence [source: https://www.iso.org/standard/27001]. A vendor's terms of service referencing ISO 27001 or SOC 2 Type II certification can satisfy the agreement requirement — but only if you document that you reviewed the certification before accepting it.

Annex A 8.24 covers cryptography. If your product uses external key management or passes sensitive data over APIs you do not fully control, your cryptography policy needs to address how you verify the security of those channels. API keys, OAuth tokens, and webhook signing secrets all fall here.

The practical output is a short procedure describing how new API integrations are security-reviewed before they are added to scope, and how existing ones are periodically reassessed. This is often called an integration onboarding checklist. It turns an abstract control into something an auditor can inspect.

## Common scope mistakes Series B teams make

The most expensive mistake is deferring the scope document until the Stage 1 audit is scheduled. By then, you have six to eight weeks, your architecture has grown to include 30-plus integrations, and you are writing the scope justification from memory rather than from current architecture documentation.

The second most common mistake is writing a scope that matches your production environment at a point in time and then failing to update it as you add integrations. A scope that is three months behind your actual architecture will generate nonconformities. Build the scope document update into your integration onboarding checklist so it never drifts.

A third mistake is treating "we use ISO 27001-certified vendors" as a complete answer to scope questions about those vendors. Certification reduces your residual risk but does not eliminate your obligation to document the decision and conduct a periodic review. Your ISMS scope needs to account for the dependency even if the risk tier is low [source: https://www.isms.online/iso-27001/].

The last mistake is inconsistency between your scope statement and your risk register. If your risk register addresses risks tied to services that your scope statement excludes, an auditor will ask why. The two documents should tell the same story about what is in your ISMS.

API integrations are one of the most frequently cited findings in Stage 1 audits because they expose the gap between what a scope document claims and what the architecture actually includes. CloudAnzen maps your production systems and third-party connections to your ISMS scope continuously, so your documentation stays current as your stack grows. [Talk to us](/demo).