---
title: "Setting ISO 27001 ISMS boundaries for a Series B SaaS"
summary: "ISMS scope is the highest-leverage decision in your ISO 27001 journey — get it wrong and you spend months closing controls that never needed to be open"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","SaaS compliance","audit readiness"]
sortOrder: 54
publishedAt: "2026-05-25"
author: "sarah-jenkins"
---
The scope document is the first thing an ISO 27001 auditor asks for. Series B SaaS teams often write it in a rush, scope too broadly and burn months closing controls that do not matter, or scope too narrowly and stumble during surveillance. Getting the boundary right before control work starts is the highest-leverage decision in your certification journey.

## Why scoping is not a checkbox

ISO 27001:2022 requires you to define the external and internal context of your organisation, identify interested parties, and document where the ISMS boundary falls [source: https://www.isms.online/iso-27001/]. That boundary determines which assets, systems, processes, and locations fall under the management system — and therefore which of the 93 Annex A controls you need to justify in your Statement of Applicability.

At Series B you typically operate across three zones with different risk profiles:

- **Core product** — the SaaS application, cloud infrastructure, and CI/CD pipelines
- **Corporate IT** — employee endpoints, identity provider, and productivity SaaS such as email and chat
- **Support functions** — customer success tooling, billing systems, HR platforms

You do not have to include all three in the initial scope. But you need a deliberate, documented decision on each one before you write a single control.

## The evidence debt that comes with over-scoping

The instinct at Series B is to scope everything. It signals ambition to enterprise buyers and looks thorough on the certification summary page. In practice it means your control list balloons, your control ownership map covers every function in the business, and your internal audit in year two becomes a months-long spreadsheet exercise that demoralises the team and delays product work.

Every process inside your ISMS boundary needs operating evidence. Access reviews, change management records, risk assessments — ongoing artefacts the auditor pulls in every surveillance visit. If you dragged HR and finance into scope because they handle background checks and payroll data, you now own evidence for those processes indefinitely. Most Series B teams lack the headcount and tooling to sustain it without building bespoke workflows around functions that are not core to your product.

A tighter scope covering your product infrastructure and core corporate IT delivers the certification outcome enterprise buyers care about without the evidence debt that compounds year over year.

## Drawing the boundary around what actually matters

Start with your data flows, not your org chart. Map where customer data enters your systems, where it is processed, stored, and eventually deleted. That map defines the mandatory scope — you cannot exclude systems that handle production customer data.

Next, identify systems that gate access to in-scope assets. Your identity provider is almost certainly in scope because it governs access to everything else. Your deployment pipeline is in scope because code it ships touches production. Apply this test to every candidate exclusion: if a failure in this system could compromise the confidentiality, integrity, or availability of in-scope assets, it is in scope. If it cannot, document why and exclude it with a clear rationale.

ISMS.online's scoping guidance recommends capturing the rationale for exclusions in a scoping decision log rather than just the final boundary statement [source: https://www.isms.online/iso-27001/]. Auditors want to see that exclusions were deliberate choices, not omissions.

### Physical locations

Cloud-native Series B teams frequently ask whether offices need to be in scope. The answer depends on whether sensitive data is processed there beyond what flows through your cloud environment. If your team operates entirely through cloud services with no on-premise servers or local data stores, your office is typically excludable — but document that assessment explicitly and revisit it when you open a second location or stand up a data centre.

### Third-party cloud services

Your cloud provider sits outside your ISMS boundary. You inherit their physical and environmental controls and can reference their own certifications as assurance evidence. What falls inside your boundary is how you configure, access, monitor, and govern those services. Clause 4.3 of the standard requires you to identify the interfaces and dependencies between in-scope and out-of-scope elements [source: https://www.isms.online/iso-27001/]. A short written explanation of how your cloud architecture relates to your ISMS boundary satisfies most auditors on this point without a lengthy technical appendix.

## Connecting your scope to the Statement of Applicability

Once the boundary is defined, you produce a Statement of Applicability — the document that lists all 93 Annex A controls and states whether each applies and, if so, how it is implemented. The SoA is the direct output of your scope decision, not a separate exercise.

Controls that fall entirely outside your boundary get excluded with a short justification. Controls relevant to in-scope systems get included with implementation evidence cited. Controls where the threat simply does not exist in your operating context get marked not applicable — with reasoning that an auditor can follow.

This connection is why scope creep is expensive. Every additional system or process pulled into scope can drag previously excluded controls back onto your implementation list. A team that scopes precisely from the start produces a leaner SoA, a more manageable control set, and a sustainable evidence programme that does not collapse under its own weight by the second certification cycle.

## Keeping scope current through the surveillance cycle

Your scope statement is a living document. ISO 27001 expects you to review the ISMS boundary whenever your context changes materially — new product lines, significant changes to cloud architecture, acquisitions, or expansion into regulated markets all warrant a scope review [source: https://www.isms.online/iso-27001/].

Set a minimum cadence of annual review within your management review cycle. If a significant architectural or organisational change happens between annual reviews, reassess then and record it. Document each review with a dated record of what changed, what was considered, and whether the boundary needed to move.

Surveillance auditors look for evidence that the management system is operating rather than sitting as a static document. A dated, reasoned scope review log is a strong signal that someone is actively maintaining the ISMS rather than coasting on a certification won two years ago. It also protects you if a new auditor questions a scoping decision your original auditor accepted without pushback.

Getting scope right is unglamorous work. It does not show up in dashboards or board updates. But it determines whether your ISO 27001 programme is sustainable or a slow-motion compliance emergency that surfaces in the first surveillance visit.

CloudAnzen maps your infrastructure continuously against ISO 27001 controls, so your scope statement stays grounded in how your stack actually operates rather than how it looked when you last did a manual asset inventory. [Talk to us](/demo).