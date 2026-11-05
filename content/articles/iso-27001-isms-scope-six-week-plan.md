---
title: "ISO 27001 ISMS scope: a six-week plan for Series B SaaS"
summary: "How to define ISO 27001 ISMS scope in six weeks without over-scoping your first certification—a practical plan for Series B SaaS teams"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","Series B","SaaS compliance","certification"]
sortOrder: 199
publishedAt: "2026-11-05"
author: "sarah-jenkins"
---
Your investors closed the Series B on a Tuesday. By Thursday, enterprise prospects are asking about ISO 27001. By Monday, your engineering lead wants to know what exactly needs to be "in scope." Answer wrong and you spend twelve months auditing systems you didn't need to—or under-scope and hand your Stage 1 auditor a nonconformity on day one. Here is a six-week plan to get your ISMS scope right the first time.

## Understand what Clause 4.3 actually requires

ISO 27001:2022 Clause 4.3 requires you to determine the boundaries and applicability of the ISMS. That means deciding which locations, teams, systems, and processes fall inside the management system—not which controls you will implement. Controls come later. Scope comes first. [source: https://www.iso.org/standard/27001]

The standard uses "internal and external issues" (Clause 4.1) and "needs and expectations of interested parties" (Clause 4.2) as inputs to scope. In practice, that means: who cares about your security posture, and which of your systems touch the information they care about?

For a Series B SaaS, the interested parties are usually enterprise buyers running vendor security reviews, investors asking about InfoSec governance, and regulators in markets where you are growing. Your scope should trace directly to those interests.

What "in scope" does not mean: everything. Including your internal HR tooling, your marketing analytics stack, or developer laptops—when none of those touch customer data—inflates your scope, inflates your audit bill, and creates controls you must maintain indefinitely. [source: https://www.isms.online/iso-27001/]

## Map your information assets to scope boundaries

Before you write a single sentence of scope documentation, map what you actually have. A scope statement that says "all systems" is not useful to your auditor and not honest to yourself.

Draw the boundary at the information asset level.

**What typically belongs inside:**

- Production cloud accounts and the services running in them
- Databases processing customer data
- Identity providers and secrets management
- CI/CD pipelines that can push to production
- Employees and contractors who can access in-scope systems

**What typically belongs outside—with documented rationale:**

- Development and sandbox environments (valid exclusion if they hold no production data)
- Internal HR and payroll systems (unless they process data covered by your buyers' requirements)
- Marketing analytics platforms (unless they process personal data subject to your certification scope)
- Physical offices where no production infrastructure lives

Exclusion rationale is your friend. Auditors do not penalise a narrow scope. They penalise a scope that excludes something which clearly should be included, without explanation. One sentence per exclusion—"Development environment is excluded because it uses synthetic data only and has no connectivity to production accounts"—satisfies Clause 4.3. [source: https://www.isms.online/iso-27001/]

## Draft a defensible scope statement

Your scope document does not need to be a fifty-page appendix. It needs to be clear, internally consistent, and durable enough that the same words still describe your reality twelve months from now.

A minimal scope statement for a cloud-native Series B SaaS:

> *"The ISMS covers the design, development, and operation of the [Product Name] SaaS platform, including production cloud infrastructure on AWS [region], internal identity and access management systems, and the people and processes responsible for delivering the service to customers."*

Follow that statement with three supporting sections:

1. **Explicitly included** — name the systems, the data classes, and the teams
2. **Explicitly excluded** — name what is out and why (one sentence of rationale per exclusion)
3. **Interaction with excluded activities** — if excluded systems interact with in-scope systems, explain the control boundary

This structure is what auditors look for at Stage 1. Getting those three sections right means your Stage 1 review confirms what you documented rather than discovering what you missed. [source: https://www.isms.online/iso-27001/]

One common mistake: writing scope in present-tense language that reflects where you are today rather than where you will be when certification lands. If you are adding a new region or service in the next six months, decide now whether that lands inside or outside scope. Scope changes after certification require formal management of change and notification to your certification body. Build the right perimeter from the start.

## Stress-test against enterprise security questionnaires

Take your draft scope statement and your most demanding customer security questionnaire. Ask: does my scope statement answer "What is covered by your ISO 27001 certification?" clearly enough that the buyer's security team can verify it?

Walk through three to five questionnaires before finalising. The delta between your draft and what buyers actually want to know is usually small, but correcting it before Stage 1 is free. Correcting it after Stage 2 means a formal scope change with your certification body.

Two problems surface reliably in this exercise.

**Problem: scope is too narrow.** A prospect asks about data backup and disaster recovery. You excluded your backup infrastructure because it lives in a separate cloud account. If that backup infrastructure processes customer data, the exclusion rationale is weak and your auditor will flag it.

**Problem: scope language is vague.** "All relevant systems" tells your prospect nothing. Name the systems and environments explicitly. "AWS production account ID 123456789, covering [Product Name] API, database tier, and authentication service" is a scope statement your buyer can verify against your compliance documentation. [source: https://www.iso.org/standard/27001]

## Lock in management sign-off and submit to your CB

Clause 5.1 of ISO 27001:2022 places leadership accountability at the centre of the ISMS. Scope is not an InfoSec team decision; it is a business decision that management must approve.

For most Series B SaaS companies, this means:

- CEO or CTO formally approving the scope document with a dated signature or written approval
- Board or audit committee aware of what the certification covers and what it does not
- Written approval on file before Stage 1 begins

If your Stage 2 auditor sees a scope document approved only by the security lead, they will probe whether leadership actually understands the commitment. That becomes a potential major nonconformity. Get the right signatures before you think you need them.

The final step before Stage 1: submit your scope statement to your certification body for a pre-audit review. Most certification bodies allow—and encourage—a brief scope review as part of Stage 1 preparation. Send the document and ask two questions: does this meet the requirements of Clause 4.3, and are there elements you would like clarified? [source: https://www.isms.online/iso-27001/]

The payoff: you enter Stage 1 with a scope the auditor has already reviewed conceptually, which removes scope nonconformities from the table before the audit begins.

Scope is a living document. As your Series B growth adds teams, systems, and geographies, your ISMS boundary will shift. Build a scope review into your annual management review cycle from day one so the question of what is in and what is out stays answered before your surveillance audit arrives.

Defining scope correctly the first time is the difference between a certification that holds and one that generates nonconformities every year. CloudAnzen maps your stack to ISO 27001 requirements continuously so you know what belongs in scope, what is covered by controls, and what your auditor will examine—before they arrive. [Talk to us](/demo).