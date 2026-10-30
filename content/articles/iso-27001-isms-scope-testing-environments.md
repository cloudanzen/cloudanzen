---
title: "ISO 27001 ISMS scope: the testing environment decision that surprises Series B teams"
summary: "How to decide whether dev, staging, and CI/CD environments belong inside your ISO 27001 ISMS scope — and how to defend that call at stage 1."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","testing environments","Series B","SaaS compliance"]
sortOrder: 193
publishedAt: "2026-10-30"
author: "sarah-jenkins"
---
Series B is when someone on your board or a prospective enterprise customer asks for the ISO 27001 certificate. You scramble to scope the ISMS, write the scope statement, and brief a certification body. Then a question lands in your inbox from the stage 1 auditor: "Are your development and staging environments in scope?"

Most teams answer this wrong the first time.

## What the standard actually says about environment scope

ISO 27001:2022 does not define which environments must be in scope [source: https://www.iso.org/standard/27001]. Clause 4.3 requires you to determine the scope based on external and internal context, interested parties, and interfaces with other organisations. That is deliberately broad. Scoping is your decision — and the auditor's job is to challenge whether it is defensible.

The mistake is treating "in production" as a proxy for "in scope". A staging environment that processes real customer data is a risk that belongs in your risk register, regardless of what you call the server.

Three questions frame the decision:

- Does the environment process, store, or transmit data the ISMS is supposed to protect?
- Can a compromise of this environment lead to a compromise of a production system or production data?
- Do you need to control access to this environment to satisfy Annex A controls?

If you answer yes to any of these, excluding the environment requires a documented rationale — and that rationale will be scrutinised at stage 1.

## The staging environment trap

Staging environments are the most common source of scope disputes at Series B. The reasoning that gets teams into trouble: "staging doesn't have real data, so it's out of scope."

That reasoning fails the moment staging uses a scrubbed copy of a production database. Or when a developer SSH-keys from staging into production for a hotfix. Or when the CI/CD pipeline holds a deployment credential that covers both environments.

The question is not whether staging has live customer data today. The question is whether staging is architecturally connected to systems that do.

ISMS.online's guidance on ISO 27001 scoping recommends treating environment boundaries as trust boundaries [source: https://www.isms.online/iso-27001/]. If a compromised staging environment can reach production resources — even indirectly via shared credentials, shared identity providers, or shared network segments — the environments share a trust boundary and should be treated as a single scope unit.

At Series B, your staging environment almost certainly shares:

- The same AWS account (even if a different VPC)
- The same Okta or Google Workspace identity provider
- The same GitHub organisation and deployment credentials
- The same DNS zone and certificate infrastructure

Each shared element is a pathway. Experienced stage 1 auditors know exactly where to look for them.

## When you can legitimately exclude dev and CI/CD environments

Exclusions are valid — but they require evidence, not just assertions.

Development environments are a reasonable exclusion when:

- They are air-gapped from production networks and credentials
- They use entirely synthetic test data with no production-lookalike sensitivity
- Access is controlled through a separate identity system with its own access review cadence
- No production deployment can be triggered from or through the dev environment

CI/CD pipelines are trickier. The pipeline itself may sit outside your scope statement, but if it holds deployment credentials for production, it belongs in Annex A control coverage — specifically A.8.20 (network security), A.8.2 (privileged access management), and A.5.14 (information transfer). You can acknowledge this in your Statement of Applicability without bringing the full CI/CD toolchain into the scope boundary [source: https://www.iso.org/standard/27001].

Document every exclusion and its rationale in the scope statement. Clause 4.3 specifies that any exclusion must not affect your organisation's ability to achieve conformity or fulfil customer obligations. Auditors interpret that broadly.

## A practical scoping approach for Series B SaaS

Most Series B teams are better served by a "production-plus" scope than either a maximalist or a minimalist approach.

**Production-plus scope includes:**

- All production systems handling customer or company data
- The identity systems (SSO, MFA, privileged access) that control access to those systems
- Any environment with a live credential or persistent path to production — which usually means staging
- The incident response process and the documentation systems that hold evidence

**Excluded with documented rationale:**

- Fully isolated dev environments using synthetic data only
- Contractor- or partner-operated systems where controls are documented in vendor agreements under Annex A 5.19–5.22

This is a starting framework, not a rulebook. Draw a data flow diagram from a customer request to your data store. Trace every environment that can write to, read from, or deploy into that path. That diagram becomes your scope evidence. ISMS.online recommends this data-flow-first method for SaaS organisations defining their first certified scope [source: https://www.isms.online/iso-27001/].

## Preparing for the stage 1 scope challenge

Stage 1 is a documentation review. The auditor wants three things: a scope statement that maps to your actual operations, a risk assessment that covers risks within that scope, and a Statement of Applicability that is consistent with both.

If staging is in scope, your risk register must include it. If staging is excluded, your scope statement must explain why the exclusion does not create a control gap. The auditor will request the architecture diagram, data flow documentation, and access control records to verify the boundary holds.

Teams that clear stage 1 without major non-conformities made an explicit scoping decision, documented the rationale, and have the evidence to back it. Teams that arrive with an intuitive scope and no written justification earn a finding almost every time.

The testing environment question is not an edge case — it is one of the first places an experienced stage 1 auditor probes [source: https://www.isms.online/iso-27001/].

Audit prep for ISMS scope shouldn't depend on a spreadsheet review two weeks before the auditor arrives. CloudAnzen maps your AWS, identity, and CI/CD infrastructure continuously to your ISO 27001 scope boundaries, so the evidence is current when the auditor asks. [Talk to us](/demo).