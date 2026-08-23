---
title: "ISO 27001 ISMS scope: shared responsibility model for Series B SaaS teams"
summary: "How to draw defensible ISMS scope boundaries using the shared responsibility model — covering cloud systems, contractors, and subprocessors"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","shared responsibility","SaaS compliance","Series B"]
sortOrder: 130
publishedAt: "2026-08-23"
author: "sarah-jenkins"
---
Scoping your ISO 27001 ISMS is the decision that follows you through every audit. Get it wrong at Series B and you spend the next three years defending boundaries that never made sense, or scrambling to include systems your auditor keeps asking about. The good news: the shared responsibility model your cloud provider already published is a surprisingly useful tool for drawing those lines.

## What the standard actually requires from your scope statement

ISO 27001:2022 Clause 4.3 requires you to define the ISMS scope while accounting for external and internal context, interested-party requirements, and — critically — the interfaces and dependencies between activities your organisation performs and those performed by other organisations [source: https://www.iso.org/standard/27001].

That last element is where most Series B teams trip up. You cannot just list your product and call it done. The standard is asking you to trace the boundary of your accountability, including every seam where your information assets cross into a system you do not fully control.

For a cloud-native SaaS team, those seams run through your cloud tenancy, your CI/CD provider, your customer support tooling, your HR platform, and every subprocessor that touches information within scope. Understanding which parts of that map belong inside your ISMS boundary — and which parts legitimately sit outside it — is the practical work of Clause 4.3.

The output is a scope statement: not a slide deck or a vague paragraph in your ISMS manual, but an artifact that a stage-1 auditor reads on day one and uses to set the agenda for everything that follows.

## Using the shared responsibility model as a scoping boundary

Your cloud provider publishes a shared responsibility model that defines which controls they own and which ones you own [source: https://www.isms.online/iso-27001/]. For ISMS scoping purposes, this document is not just a liability reference — it is a boundary map.

Physical security of the data centre, hardware maintenance, and hypervisor integrity sit on the provider's side. You can reference these controls in your Statement of Applicability as "not applicable — inherited from cloud provider" and attach the provider's current ISO 27001 or SOC 2 Type II certificate as supporting evidence. A recognised hyperscaler with maintained third-party certification satisfies this approach; your auditor expects it.

What you do own: OS configuration and patching, IAM policies and role boundaries, network security group rules, encryption key management, data classification, and every control that touches information you are contractually responsible for. At Series B with a growing engineering team, this surface is larger than most founding teams anticipated when they first tried to scope.

The practical deliverable from this exercise is a scope boundary diagram. It should show your infrastructure, mark the trust boundary at each integration point, and label which controls belong to your team and which are inherited from a certified provider. A static diagram attached to your ISMS scope document satisfies stage-1 review; a living diagram that updates when architecture changes satisfies stage-2 and ongoing surveillance audits.

## Deciding what goes in and what stays out

Three questions help you make the call for each system or organisational unit in your environment.

**Does it store, process, or transmit information assets classified above your threshold?** If yes, it is in scope unless you can document a specific exclusion rationale. For most B2B SaaS companies handling customer data, the classification threshold is low enough that most production systems qualify without debate.

**Do you control the security configuration of the system?** Shared ownership is the most common source of scope confusion. If your engineering team can modify a system's configuration, it belongs in scope even if a third party hosts it. If you have no configuration access — for example, a payroll provider your HR team uses through a closed SaaS portal — it is a supplier relationship governed by Annex A controls, not a system inside your ISMS boundary.

**Is there a subprocessor dependency that creates a risk path?** If a supplier processes data on your behalf, their controls affect your risk posture. They belong in your supplier register, covered by a data processing agreement, and subject to periodic assessment. But their systems are not part of your ISMS scope. Scope defines what you audit internally. Supplier oversight is a separate control family, and conflating the two leads to scope statements that are impossible to audit.

Working through these questions for every system and supplier at Series B is a two-to-three-day exercise when done properly. The output feeds directly into your risk register and your Statement of Applicability.

## Handling offshore engineering teams and contractors

Series B SaaS teams often have offshore engineering pods, contractors across multiple jurisdictions, and a mix of full-time employees with different access levels. ISO 27001 scoping for people works the same way as for systems: if someone has access to in-scope information assets, they fall under the ISMS controls proportionate to that access.

This does not mean every contractor gets the same control treatment as a full-time employee. It means you classify access levels, apply controls accordingly, and include workforce management in your ISMS operating procedures. Annex A controls 6.1 (screening), 6.2 (terms and conditions of employment), and 6.5 (responsibilities after termination or change of employment) apply explicitly to contractors as well as employees [source: https://www.isms.online/iso-27001/].

The scope statement itself should list jurisdictions and employment types if your auditor is likely to ask. "Employees and contractors globally" is a valid scope element. A list of specific countries adds clarity when you have significant concentration in a region with distinct data protection requirements, or when a prospective enterprise customer reviews your scope statement as part of their vendor due diligence process.

## Writing and maintaining the scope statement

The scope statement document typically runs one to two pages. It must answer four questions without ambiguity: which products or services does the ISMS cover; which organisational units, locations, and employment types are included; which information assets and systems are in scope; and what is explicitly excluded, and why.

For exclusions, justification is mandatory. A bare assertion that something is "not considered relevant" fails at stage-1. "Out of scope because this business unit does not process information classified above Public and its network is isolated from production" is defensible. So is "excluded — controlled by certified cloud provider; see attached certificate."

Series B companies that have added product lines since their last compliance review often find their scope statement describes the company as it was twelve months ago. Build a trigger into your change management process: any new system that handles customer data should pass through a scope review checkpoint before it reaches production. A stale scope statement is a material finding in a surveillance audit, not a minor observation.

Treating scope as a living document — rather than a one-time filing — is the difference between an audit that moves quickly and one that stalls while you reconstruct decisions nobody wrote down.

Audit prep for ISO 27001 is manageable when your scope is accurate and your evidence is current before the auditor arrives. CloudAnzen continuously maps your infrastructure to ISO 27001 controls and keeps your scope evidence up to date as your architecture evolves. [Talk to us](/demo).