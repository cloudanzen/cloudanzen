---
title: "Scoping your ISMS after a Series B acquisition"
summary: "How to determine ISMS scope when your Series B SaaS acquires a startup — boundary decisions, toolchain gaps, and what Stage 1 auditors verify"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","ISMS scope","M&A integration","SaaS compliance","Series B"]
sortOrder: 171
publishedAt: "2026-10-05"
author: "sarah-jenkins"
---
You closed the acquisition. Legal is done. Engineering is already pushing commits to the acquired team's repos. Now your ISO 27001 certification is up for renewal and the auditor is asking a direct question: is the acquired company inside your ISMS or not? Most ops and security leads don't have a clean answer ready. Here's how to work through the boundary decision before Stage 1 catches you unprepared.

## Why the acquisition breaks your existing scope statement

Your scope statement probably reads something like: "The ISMS applies to the development and delivery of [Product Name], including the people, processes, and technology operating from [registered address]."

The acquired company doesn't fit that sentence.

ISO 27001:2022 Clause 4.3 requires you to determine the boundaries and applicability of the ISMS, taking into account internal and external issues from Clause 4.1 and interested parties from Clause 4.2. [source: https://www.iso.org/standard/27001] The acquisition changes every input to that equation: new assets, new people, new dependencies, new contracts.

Your auditor knows this. At Stage 1, they will pull your scope document and ask you to walk them through the boundary. If the acquired entity is doing anything that touches your in-scope product — code, data, infrastructure, customer-facing services — and it isn't reflected in your scope, you have a nonconformity before the opening meeting closes.

Don't patch the sentence. Rebuild the boundary with the new reality in mind.

## The four questions that determine boundary placement

Before you can write a defensible scope statement, you need honest answers to four questions.

**Does the acquired entity process, store, or transmit data that falls within your existing ISMS?**

If their service feeds data into yours, if your customers' data flows through their infrastructure, or if they hold credentials to your production environment, they are already operationally inside your risk perimeter. The scope statement needs to follow the data.

**Are their controls mature enough to include without creating new gaps?**

Including an entity with weak controls is legitimate — you are committing to apply your ISMS to them. Excluding an entity that handles in-scope data is harder to defend. Auditors will scrutinize exclusions that appear designed to conceal risk.

**Do they hold their own ISO 27001 certification?**

If the acquired company holds its own certificate, you have options: keep separate ISMS boundaries with explicit interface documentation, work toward a combined scope in a future certification cycle, or integrate immediately. Separate certificates need documented interface controls showing how the two management systems interact at the boundary. [source: https://www.isms.online/iso-27001/]

**What does your certification body require?**

If you are mid-cycle on your existing certification, notify your CB before you change the scope statement. Most CBs require a scope change notification. Some require a supplementary audit. Getting ahead of this is cheaper than discovering the requirement at your next surveillance visit.

These four questions are not a checklist to rush through. Each one surfaces a different category of risk. Answer them together — CISO, legal, and the integration lead — before you write the new scope statement. The document you produce from that conversation becomes your primary evidence at Stage 1.

## Handling the acquired company's toolchain

This is where most integrations stall. The acquired team uses a different set of tools: a different identity provider, a different cloud account, a different ticketing system. You have three realistic options.

### Full integration before the next audit

Migrate everything into your existing toolchain — same IdP, same SIEM, same asset register, same change management process. The acquired entity becomes an extension of your existing ISMS, and the scope statement expands to name them explicitly.

This is clean but rarely practical at Series B timelines. Full migration takes months, not weeks.

### Boundary document with interface controls

Document exactly where your ISMS ends and theirs begins. Define what governs the interface: access provisioning, data classification at handoff, incident response escalation paths. Your scope statement names both entities and the interface document governs the gap.

This approach works at Stage 1 because it is honest and traceable. The auditor can see the risk you accepted, the controls at the boundary, and the timeline for full integration.

### Full carve-out

Exclude the acquired entity entirely. This is defensible only if they have no operational contact with in-scope systems, data, or processes. If they do and you exclude them anyway, expect a major nonconformity.

In practice, full carve-out is rare at Series B because the acquisition rationale usually involves some form of product or infrastructure integration.

## What Stage 1 auditors actually check on M&A boundaries

Stage 1 is a documentation review. Experienced auditors know what integration looks like — and what it looks like when it has been glossed over. Expect scrutiny on five areas.

**Scope statement wording.** If the statement is vague about the acquired entity, the auditor will ask directly whether they are in scope. "We are integrating them" is not an answer. You need a documented decision with a clear rationale.

**Asset inventory.** Does your asset register include assets from the acquired entity? If they are in scope, yes. If they are excluded, the auditor will check that the exclusion is justified and that no in-scope assets have crossed the boundary without documentation.

**Risk treatment records.** Risks introduced by the acquisition — new third parties, new infrastructure, new personnel with access — should appear in your risk register. An acquisition that added no new risks is a red flag.

**People and roles.** Who from the acquired company has access to in-scope systems? Are they covered by your acceptable use policy, your security awareness training program, and your access review cycle? The control requirements differ depending on whether someone is an employee, a contractor, or a managed service relationship.

**Supplier records.** If the acquired entity had supplier relationships that now touch your in-scope environment, those suppliers need to appear in your supplier register and go through your supplier assessment process. [source: https://www.isms.online/iso-27001/]

## Making the scope decision stick

A scope decision made at close of deal is only as good as the documentation behind it. Three things help it survive a Stage 1 review.

**Write a scope rationale memo.** One page. What the acquired company does, what data they handle, their relationship to your in-scope product, and the decision — in or out — with the reasoning. This is a working document, not a compliance artifact. It shows the auditor you made a deliberate choice.

**Update the Statement of Applicability.** If the acquired entity is in scope, your SoA may need to expand. New assets, new locations, new personnel types, and new supplier relationships each carry control implications under Annex A.

**Schedule a gap assessment on the acquired entity.** Even if full integration is months away, a documented gap assessment shows the auditor you know where the risks are. It turns a potential nonconformity into a tracked remediation item.

The goal is not a perfect scope. It is a defensible one. Auditors understand that acquisitions create temporary complexity. A scope statement that names the acquired entity, explains the boundary rationale, and references a gap assessment is one an auditor can work with. That is the target before Stage 1.

If you are heading into Stage 1 with a recent acquisition on the books and the boundary question is still open, the cost of getting it wrong is a major nonconformity and a delayed certificate. Getting the scope statement right before Stage 1 is always cheaper than trying to correct it during. [Talk to us](/demo) to work through the scope analysis before your audit starts.