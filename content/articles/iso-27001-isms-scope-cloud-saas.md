---
title: "How to scope ISO 27001 ISMS for a cloud-native SaaS"
summary: "Define and maintain ISO 27001 ISMS scope for a cloud-native SaaS — what Clause 4.3 requires and where most teams draw the boundary wrong"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","cloud-native","Clause 4.3"]
sortOrder: 195
publishedAt: "2026-11-01"
author: "sarah-jenkins"
---
Most Series B SaaS teams treat the ISMS scope statement as a box to tick. Fill in the template, get auditor sign-off, move on. That approach holds until Stage 1 of your certification audit. The auditor asks exactly where your scope boundary sits, why this microservice is inside it and that internal HR tool is not, and your answer cannot be "we included everything we could think of."

Getting scope right is the single biggest lever you control over your ISO 27001 workload. Too wide and you are gathering evidence for systems that carry no meaningful information risk. Too narrow and the certificate means nothing to the enterprise buyer reading your trust center.

## What Clause 4.3 actually requires

ISO 27001:2022 Clause 4.3 requires you to define the ISMS scope considering three things: the external and internal issues from Clause 4.1, the requirements of interested parties from Clause 4.2, and the interfaces and dependencies between your activities and those of other organisations [source: https://www.iso.org/standard/27001].

"Interfaces and dependencies" is deliberate language. If a third-party SaaS handles data that is in scope, you must address that relationship — not necessarily audit the vendor yourself, but document the risk and the associated control [source: https://www.isms.online/iso-27001/]. Scope is also not limited to technology. It includes organisational units and, where relevant, physical locations. Remote-first teams with no office still face scope questions about developer laptops, home offices, and shared workspaces where production access happens.

Exclusions are permitted, but every exclusion needs a documented justification. An auditor will not accept "we left it out because it is difficult" as a rationale. The standard expects you to demonstrate that excluded areas do not affect your ability to achieve the objectives and intended outcomes of the ISMS [source: https://www.iso.org/standard/27001].

## Where cloud-native SaaS teams draw the boundary wrong

The most common mistake is defining scope around the product rather than the information assets.

Your product is your SaaS platform. But the ISMS exists to protect information. The production environment, the CI/CD pipeline, the customer data warehouse, the CRM that holds customer contacts and PII — these all handle information that matters. The framing question is not "what do we build?" but "where does sensitive information live and flow?"

A typical cloud-native SaaS scope should address these areas [source: https://www.isms.online/iso-27001/]:

- **Production environment**: cloud accounts, Kubernetes clusters, database services, storage buckets
- **Software development lifecycle**: source control, CI/CD toolchain, artifact storage, deployment automation
- **Customer data**: where it is stored, processed, and transmitted
- **Support and operations tooling** that has access to customer tenants or production systems
- **Identity and access management**: SSO provider, MFA policy, privileged access workflows
- **Corporate endpoints** for all staff with production access

The HR system and marketing analytics stack are typically out of scope unless they process data under a separate regulatory obligation. GDPR complicates this picture: if you are also a data controller for employee personal data, HR tooling may pull back into scope as a relevant information asset.

## The three-question scope test

Before finalising which systems are in scope, run each significant system through three questions.

**Does it store, process, or transmit information classified as confidential or above?** If yes, include it unless there is a documented reason not to.

**Does it have access to systems that do?** A deployment pipeline that can push to production, a monitoring agent with read access to databases, a support tool that can impersonate customer users — these are in scope even if they never touch customer data directly. Compromising the access path compromises the data.

**Would its failure or compromise materially affect your ability to meet customer security commitments?** Enterprise SLAs, security addenda, and data processing agreements create obligations. If a system's failure breaks those commitments, it belongs in scope.

A system that fails any of these three questions is a strong candidate for inclusion. You can exclude it only with a documented risk acceptance showing the residual risk is within your accepted risk appetite and does not affect the scope boundaries that matter [source: https://www.iso.org/standard/27001].

## Writing a scope statement that holds up at Stage 1

The scope statement must stand alone. An auditor reading it for the first time should be able to understand what is covered, what is excluded, why each exclusion was made, and how third-party dependencies are handled.

A workable template for a cloud-native Series B SaaS:

> The ISMS covers the design, development, and operation of the [Product] SaaS platform, including the production cloud environment hosted on [Provider], the software development lifecycle, customer data processing and storage, and the corporate endpoints of all personnel with production access. Physical premises are not in scope as the company operates fully remotely. HR and payroll systems are excluded because they do not process customer data; risks they pose to in-scope systems are addressed in the risk register. Third-party cloud services processing in-scope customer data are assessed through the supplier management process.

The final sentence carries its weight. You are not claiming your cloud provider has been audited. You are claiming your supplier management process covers the associated risk [source: https://www.isms.online/iso-27001/]. An auditor will look for evidence that the process exists and is actually running.

Two things to avoid: scope statements so vague they could apply to any company, and scope statements copied from a consultant template without mapping them to your actual architecture. Auditors see both patterns regularly, and neither makes a good impression during Stage 1.

## Keeping scope current as your stack grows

A certification obtained at Series B is not a permanent fixture. The standard requires scope review as part of the management review cycle. In practice, for a fast-moving SaaS, scope-relevant changes happen several times per year: a new integration that accesses production data, an acquired company with its own infrastructure, a move into a regulated vertical that brings new data types into your environment.

The practical approach is to build scope assessment into your change management process rather than treating it as an annual check [source: https://www.isms.online/iso-27001/]. When a new system is onboarded or a significant integration goes live, the change record should include a scope assessment question: does this system store, process, or transmit in-scope data, or does it have access to a system that does? A yes triggers a scope update before the system reaches production, not after the next audit cycle.

Enterprise buyers increasingly request the current scope statement alongside the certificate. A scope statement two years old, referencing infrastructure you replaced six months ago, signals that the ISMS is a compliance artefact rather than a working programme — regardless of what the certificate itself says.

Scope drift is quiet. It does not announce itself. It accumulates across sprints and integrations until the auditor finds it for you.

Audit prep is already expensive. Keeping ISMS scope accurate across a fast-moving cloud stack should not add to that cost. CloudAnzen continuously maps your environment to ISO 27001 controls so scope changes surface early and evidence is ready when the auditor arrives. [Talk to us](/demo).