---
title: "ISO 27001 ISMS scope when you're pursuing SOC 2 at the same time"
summary: "How Series B SaaS teams should define ISMS boundaries when SOC 2 is already in motion—what overlaps, what diverges, and where scope decisions compound"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001 scope","SOC 2","ISMS boundaries","dual framework"]
sortOrder: 168
publishedAt: "2026-10-03"
author: "sarah-jenkins"
---
Most Series B SaaS teams arrive at ISO 27001 having already spent twelve months on SOC 2. The auditor relationship is familiar. The evidence tooling is in place. The question they're really asking: can we just reuse what we built?

The honest answer: partly. But ISMS scoping is a distinct decision, and getting it wrong adds months of rework once you're deep in Stage 1.

## What SOC 2 scope and ISO 27001 scope are actually measuring

SOC 2 scope is about the **services** that are in scope for the audit—typically your production environment plus the people and processes that operate it. The Trust Services Criteria apply to the system you described in your System Description document. If a service isn't in that document, it's out of scope.

ISO 27001 ISMS scope is broader. Clause 4.3 of the standard requires you to define the boundaries and applicability of the ISMS, accounting for internal and external issues, interested parties, and interfaces between your ISMS and other organizations [source: https://www.iso.org/standard/27001]. That last phrase—interfaces with other organizations—is what catches teams who copy their SOC 2 system description directly into their scope document.

Your SOC 2 scope might exclude the HR system your contractors use. Your ISMS scope probably cannot. If those contractors have access to production secrets, the HR system is an interested party with a real interface to your ISMS.

## Three places where scope decisions diverge

**Supporting functions**

SOC 2 scope traditionally focuses on production and adjacent controls. HR, legal, and finance are often out of scope for SOC 2 Type II unless they touch the in-scope system.

ISO 27001 auditors look for evidence that human resource security and asset management are functioning. If HR and procurement sit outside your ISMS scope document, you'll be asked to justify the exclusion. Auditors from accredited certification bodies are particularly thorough here [source: https://www.isms.online/iso-27001/].

A clean rule: if the function creates, processes, or destroys assets that could affect confidentiality, integrity, or availability—it belongs in scope.

**Development and staging environments**

Most SOC 2 audits carve development environments out of scope by restricting production data access. That boundary is defensible for a Trust Services Criteria audit.

Under ISO 27001, if your engineering team uses staging to reproduce production incidents—which often means production data, even anonymized—that environment becomes an interested party. You do not have to include it in scope, but you need documented reasoning for excluding it. A scope statement that says production only without acknowledging the staging exception is a Stage 1 finding waiting to happen.

**Third-party integrations and subprocessors**

SOC 2 complementary user entity controls let you push responsibility to downstream systems—you rely on your cloud provider to handle physical security. ISO 27001 supplier relationship controls require you to actively manage supplier risk, not just note that it exists [source: https://www.isms.online/iso-27001/]. Your scope statement needs to acknowledge where ISMS boundaries end and where supplier agreements pick up.

For a Series B SaaS with twenty-plus integrations, this is often the most time-consuming alignment exercise.

## Building the scope document in parallel

The ISO 27001 scope statement is typically a page or two, but it needs to be precise. Here is a practical approach when SOC 2 work is already underway.

### Start with your SOC 2 System Description

Your System Description already documents the boundaries of the system, the principal service commitments, and the components. This is useful starting material for the ISMS scope, but treat it as a draft, not a final answer.

Go line by line. For each component or process excluded from SOC 2 scope, ask: does this component have a material interface with anything that is in scope? If yes, it needs to appear in the ISMS scope document—even if you are going to justify its exclusion.

### Map your interested parties

ISO 27001 Clause 4.2 requires you to understand interested parties and their requirements. For a B2B SaaS: customers, regulators, employees, contractors, and investors all qualify. Your sales team's NDA process is an interested party interface. Your investor data room is an interested party interface [source: https://www.iso.org/standard/27001].

These do not all need to be in scope, but they need to be documented as considerations.

### Lock the exclusions before Stage 1

The Stage 1 audit is largely a document review. Your auditor will read the scope statement and probe for exclusions that look convenient rather than justified. Common exclusions that need strong written rationale:

- R&D teams excluded: you need to explain what prevents them from accessing production secrets
- India-based team excluded: ISO 27001 auditors will expect offshore teams' HR and access control practices to be covered
- Legacy product excluded: if the legacy product shares authentication infrastructure with the in-scope product, the exclusion will not hold

### Account for differences in asset inventory requirements

SOC 2 evidence packages typically include infrastructure inventories tied to logical access reviews. ISO 27001 requires a broader asset inventory—software licenses, information assets including data classifications, and hardware all belong there. If your SOC 2 evidence includes only infrastructure assets, plan to expand the inventory before Stage 1.

## The overlap you can actually reuse

Despite the divergences, significant reuse is possible.

**Policies**: most SOC 2-required policies—access control, change management, incident response, vendor management—map directly to ISO 27001 Annex A controls. Review them for language, since ISO 27001 wants evidence of management intent and not just control descriptions, but you are not starting from zero.

**Evidence cadence**: your existing evidence collection rhythm—quarterly access reviews, annual vendor reviews, change management tickets—maps well to ISO 27001 control requirements. You may need to add review cadences for some Annex A controls that SOC 2 does not mandate, but the infrastructure is there.

**Risk register**: SOC 2 does not require a formal risk treatment plan in the ISO 27001 sense, but most teams doing Type II have an informal risk register. Formalizing it to ISO 27001 Clause 6.1 requirements is usually one sprint of work, not three months.

The teams that stall are the ones who run ISO 27001 and SOC 2 as entirely separate programs with separate scope definitions. Running them in parallel with a shared scope conversation from the start saves weeks in the typical Series B timeline and prevents the expensive rework that comes when an auditor finds a gap your SOC 2 evidence never needed to address.

Defining ISMS scope alongside an active SOC 2 program is one of those decisions that looks straightforward until you're standing in front of a Stage 1 auditor with a scope statement that mirrors your SOC 2 System Description. CloudAnzen maps your existing controls and evidence against ISO 27001 Annex A and SOC 2 criteria in parallel, so scope gaps surface before Stage 1, not during it. [Talk to us](/demo).