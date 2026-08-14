---
title: "ISO 27001 ISMS scope decisions for SaaS with offshore engineering"
summary: "How to draw defensible ISMS boundaries when your engineering team spans multiple countries, time zones, and legal entities."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","offshore teams","SaaS compliance","audit readiness"]
sortOrder: 123
publishedAt: "2026-08-14"
author: "sarah-jenkins"
---
The scoping meeting is usually the first one your auditor runs. You show up thinking you will finalise a target date. Instead you spend two hours unpicking whether your Bangalore team is in scope, your Hyderabad contractor portal, your staging infrastructure on AWS Mumbai and Singapore. If you leave without clear answers, the audit starts on the back foot.

Here is how to draw defensible ISMS boundaries when your engineering function crosses borders.

## Why offshore structure complicates ISO 27001 scope

ISO 27001:2022 defines the ISMS scope as the boundaries and applicability of the management system [source: https://www.iso.org/standard/27001]. In practice that means every asset, process, and person that touches the information you are protecting needs to fall inside or explicitly outside the boundary.

When your engineering team sits in Bangalore and your sales team sits in London, you cannot simply say you are a remote-first company and move on. The standard expects you to document which legal entities are in scope, which physical locations or cloud regions are included, which third-party relationships handle your information assets, and any explicit exclusions along with why they are defensible.

A Series B SaaS typically has one entity nominally in scope but several that actually touch customer data through support portals, shared CI/CD pipelines, or staging environment access. That gap is exactly where auditors probe.

## Define the scope boundary around information assets, not the org chart

The most common mistake is scoping to the organisational chart. Engineering is in scope, finance is not. That logic collapses the moment an auditor asks who has admin access to your production database. If the CFO's EA resets password credentials or approves IAM changes, they are touching a scope asset.

The better approach is to map information assets first, then trace every human and system that touches them [source: https://www.isms.online/iso-27001/].

For a SaaS company the primary information assets are typically:

- Customer data in your production database
- Source code and CI/CD pipelines
- Secrets management covering API keys, certificates, and environment variables
- Audit logs and SIEM events

Draw a boundary around those categories. Everyone and every system with access to any of those assets is in scope, regardless of employment contract type, geography, or which entity pays their salary.

## What to do with offshore contractors

Contractors working on in-scope assets are in scope. Full stop.

The mechanism is your supplier relationship. ISO 27001:2022 Annex A Control 5.19 requires that you manage information security in supplier relationships [source: https://www.isms.online/iso-27001/]. For offshore engineering firms this means a signed data processing agreement or security addendum covering your requirements, evidence that the contractor completed security awareness training, access provisioned and de-provisioned through your IAM tooling rather than ad hoc, and documented background screening records.

If a contractor accesses your production environment, they need the same onboarding evidence trail as a direct hire. Auditors will pull a sample. Calling someone a vendor is not a scope exclusion. It is a supplier control question that requires its own evidence.

The practical upside: once you have this structure in place, your supplier register doubles as an evidence artefact for Annex A 5.19. You are building compliance work product, not bureaucracy.

## Excluding your India entity: when it holds and when it does not

Some companies try to scope only their UK or US entity and exclude their India subsidiary. This can work in certain structures, but only if the India entity has no access to in-scope information assets.

If engineers in your India entity have production database access, commit to the main code repository, or handle customer support tickets containing personal data, the exclusion fails [source: https://www.isms.online/iso-27001/]. You cannot exclude a legal entity that operates in-scope assets regardless of its place in the corporate structure.

The approach that actually works at audit is to restrict production access to a named set of engineers regardless of entity, document why the restriction is technically enforced using VPN plus IP allowlisting, MFA, and privileged access management tooling, scope only the people and systems with that production access, and exclude the rest of the India entity with a written rationale tied to the access control evidence.

Your scope statement then reads something like: the ISMS covers the production environment, CI/CD pipeline, and the named individuals and systems with access to them across all geographies. Non-technical functions in the Bangalore entity are excluded as they do not process or access in-scope information assets.

That statement holds under audit because it is asset-driven, not geography-driven. The auditor can verify the access controls and confirm the exclusion is real.

## Writing the scope statement that survives Stage 1 review

The scope statement required by Clause 4.3 must be a documented output [source: https://www.iso.org/standard/27001]. Auditors review it during Stage 1 and use it to set the boundaries of the entire audit. A vague scope statement leads to a widening scope during the engagement, which is expensive and stressful.

Your scope statement should answer four questions.

**What is in scope?** List the services, systems, or products specifically. Production and staging environments on AWS ap-south-1 and ap-southeast-1, and the services running on them. Do not say your entire organisation if that is not true.

**What are the boundaries?** Include network, organisational, and geographic limits. All accounts under your root organisation. All personnel with IAM access to production workloads, regardless of entity.

**What is excluded and why?** Auditors respect explicit exclusions more than vague inclusions. HR systems are excluded. They do not process customer data or interact with in-scope information assets.

**What are the external interfaces?** Third-party services that touch your data—your payment processor, log aggregation provider, offshore development partner—each gets a row in your supplier register, not a blank spot in your scope document.

Before you finalise, run this check: take your asset register and for each asset ask who has access. If the access trail leads to a person, system, or location not in your scope draft, either expand the scope or close the access path first. This surfaces surprises such as legacy admin accounts held by an offshore ops firm or shared staging credentials used by a third-party QA contractor. Resolve those before Stage 1 and the auditor finds a clean picture.

Audit prep is harder when your team spans borders and entities. CloudAnzen maps your information assets to ISO 27001 controls and flags scope boundary gaps before the auditor does. [Talk to us](/demo).