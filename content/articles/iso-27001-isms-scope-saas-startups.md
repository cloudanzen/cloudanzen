---
title: "How to scope your ISO 27001 ISMS as a Series B SaaS"
summary: "Most Series B SaaS teams scope their ISMS too broadly, then spend months collecting evidence for systems that barely touch customer data — here is how to get the boundary right."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","Series B","audit readiness"]
sortOrder: 41
publishedAt: "2026-05-18"
author: "sarah-jenkins"
---
Your Series B board wants ISO 27001 certification before the next enterprise deal closes. The auditor asks: what is the scope of your ISMS? You name your whole engineering org. The auditor nods, then hands you a 200-item control list. Six months later, you are still collecting evidence for systems that do not touch customer data. Scope creep is the most common reason ISO 27001 programmes stall — and it is entirely avoidable.

## What ISMS scope means in practice

The ISO 27001 standard requires you to determine the boundaries and applicability of your information security management system [source: https://www.iso.org/standard/27001]. That sentence sounds administrative. In practice, it means deciding which assets, people, processes, and locations sit inside the scope boundary — and documenting why.

Scope is not just a sentence on paper. It drives every control in Annex A. A narrow, well-justified scope means fewer controls to implement, fewer evidence artefacts to collect, and a cleaner audit. A bloated scope means extra months of work, a larger attack surface on paper, and auditors who spend time chasing down information assets you did not know were in scope.

The standard does not dictate a minimum or maximum scope. It requires that your scope reflects the organisation's context, the needs of interested parties, and the interfaces between your ISMS and activities outside it [source: https://www.isms.online/iso-27001/]. That gives you meaningful flexibility — if you use it deliberately.

## The three inputs your scope statement needs

**Organisational context**

Before writing a scope statement, map what the business actually does. For a Series B SaaS company, this usually means the product and the infrastructure running it (cloud provider, CDN, CI/CD pipeline), the teams that build and support it, and the data types processed: customer PII, financial records, health data if applicable.

If your product processes personal data for EU customers, GDPR requirements from interested parties shape your scope. If you have a business associate agreement with a healthcare customer, HIPAA considerations enter scope regardless of your ISO work.

**Internal and external interfaces**

ISO 27001 requires you to identify where the ISMS boundary touches systems or activities outside it [source: https://www.iso.org/standard/27001]. For SaaS companies, the most common interfaces are third-party subprocessors such as payment providers and email delivery services, contractors or offshore development teams, and shared services like HR tools that hold employee data tied to your user provisioning.

These interfaces do not need to be inside scope. But you must document how information flows across the boundary and what controls govern those flows. Leaving interfaces undocumented is a frequent finding in stage-one audits.

**The exclusion list**

Exclusions are legitimate — but each one needs justification. ISO 27001 allows you to exclude Annex A controls only if you can demonstrate that the exclusion does not affect your ability to achieve information security objectives [source: https://www.isms.online/iso-27001/].

Common legitimate exclusions for cloud-native SaaS teams include physical security controls if you operate entirely in cloud with no on-premises infrastructure, specific cryptography requirements that do not apply to your data classification levels, and business continuity provisions at a depth that exceeds your product's criticality tier. Document every exclusion. An auditor who finds an undocumented exclusion treats it as a gap, not a deliberate choice.

## Where SaaS teams get scope wrong

**Scoping the company instead of the product**

The most common error is writing a scope statement that reads: "The ISMS covers all business activities." That might fit an enterprise with physical offices across five countries. For a 60-person SaaS company where the vast majority of information security risk sits in one product, it is overkill.

A product-centric scope — "the [Product] platform and the information assets supporting its development, operation, and customer delivery" — is defensible, focused, and auditable. You can expand scope later once the programme matures.

**Forgetting people and processes**

Scope is not just systems. It includes the people who handle in-scope information and the processes they follow. If your customer success team has access to production data for troubleshooting, they are in scope. Their access controls, training records, and off-boarding procedure all sit inside the ISMS boundary [source: https://www.isms.online/iso-27001/].

Many teams scope their engineering org and forget support, sales engineering, and customer success. The auditor will ask about every role with access to production systems.

**Leaving development environments ambiguous**

Where does your staging environment sit relative to scope? If it processes a subset of production data — common in load-testing setups — it is in scope. If it uses fully synthetic data with no customer records, you can argue it is out of scope, but you need a data handling policy that enforces the boundary.

Ambiguity here leads to auditor questions that consume time and create doubt. Decide, document, and enforce.

## Writing a scope statement that holds at audit

A strong scope statement answers four questions: what is being protected (systems, data types), where it lives (cloud regions, physical offices if any), who operates it (teams and roles), and why the boundaries sit where they do (the justification for inclusions and exclusions).

A concrete example for a cloud-native SaaS:

> The ISMS covers the development, operation, and support of the [Product] platform, including all cloud infrastructure hosted across two cloud regions, the engineering, security, and customer support functions that handle production data, and the organisational processes governing access control, change management, and incident response. Physical security controls in Annex A are excluded; the organisation operates without on-premises infrastructure and relies on the cloud provider's physical security under the shared responsibility model [source: https://www.iso.org/standard/27001].

This statement is specific enough that an auditor can draw the boundary. It is narrow enough that your control implementation is tractable. The shared responsibility model reference is the most common and accepted rationale for physical security exclusions in cloud-native businesses.

## Getting executive alignment before implementation

Scope is not a document that lives in a GRC tool. It is a decision that affects product roadmap, hiring, and vendor selection. Get leadership to approve it before your team begins implementing controls.

Getting scope approved late — after engineers have spent months implementing controls — means you either live with a scope that leadership does not understand, or you restart implementation with a narrower scope. Neither outcome is efficient.

In practice, a 30-minute working session with the CTO, head of engineering, and whoever owns legal or compliance is enough to align on scope. Come with a draft, a list of candidate exclusions, and the business rationale for each. Leave with documented approval [source: https://www.isms.online/iso-27001/]. Review scope at least annually — the standard requires it, and your business will change with new products, cloud regions, or acquisitions.

Scoping your ISMS well at the start cuts months off certification and keeps evidence collection focused on what actually matters. CloudAnzen maps your infrastructure and processes to ISO 27001 controls so scope gaps surface before your auditor finds them. [Talk to us](/demo).