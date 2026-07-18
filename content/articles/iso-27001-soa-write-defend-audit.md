---
title: "ISO 27001 statement of applicability: how to write and defend your control selection at audit"
summary: "How to write, structure, and defend an ISO 27001 Statement of Applicability so your control selection survives both stage-1 review and stage-2 fieldwork"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","SoA","audit readiness","ISMS","control selection"]
sortOrder: 98
publishedAt: "2026-07-18"
author: "sarah-jenkins"
---
The Statement of Applicability is the document auditors reach for first. If yours cannot explain why you excluded a control — not just that you excluded it — your certification timeline slips. Here is how to write an SoA that survives both the stage-1 document review and the hard questions in stage-2.

## What the SoA is and is not

The SoA is a formal declaration of which ISO 27001:2022 Annex A controls your organisation has implemented, which it has excluded, and the justification for each decision. It is required by clause 6.1.3(d) [source: https://hightable.io/statement-of-applicability-iso-27001/].

It is not a checklist you fill in once and file. It is a live document tied to your risk treatment plan. Every time a residual risk on your register changes, your SoA should follow.

Common misunderstanding: "implemented" means the control exists and is operating effectively, not that a policy document references it. Auditors test operational evidence — screenshots, logs, configuration exports — not prose commitments.

### The 93 controls you are working from

Annex A in the 2022 revision restructured controls into four themes: Organisational (37 controls), People (8), Physical (14), and Technological (34). Eleven controls were added compared to the 2013 revision [source: https://hightable.io/statement-of-applicability-iso-27001/]. If your SoA is still structured around the 2013 version's 114 controls and you have not completed the transition, a surveillance auditor will note it.

## How to structure each SoA row

A defensible SoA entry has five components for each control.

**Control reference and title.** For example, A.5.23 Information security for use of cloud services.

**Inclusion status.** Included or excluded. If a control is partially implemented, mark it included and note the implementation status separately.

**Justification for inclusion.** Link to the specific risk or legal obligation that drives inclusion. "Best practice" is not a justification; a risk register entry is.

**Implementation status.** Not started, in progress, or implemented. Do not mark a control implemented until evidence exists.

**Evidence pointer.** The specific artefact location where the auditor can verify the control — policy name and version, ticket reference, configuration export path, date of last review.

Omitting the evidence pointer is the most common gap teams carry into stage-2. Auditors do not want a SharePoint folder URL; they want a specific artefact they can pull before fieldwork starts.

## Writing exclusion justifications that hold up

Exclusion is where most SoAs break. Teams either exclude controls they should keep, or they write justifications that cannot survive a single follow-up question.

The auditor's question for every excluded control is the same: if this risk exists, how have you addressed it without this control?

Acceptable exclusion reasons fall into three categories. First, the control is genuinely not applicable because the risk it addresses does not apply to your scope. Example: A.7.4 Physical security monitoring is excluded because the organisation operates fully remotely and holds no physical premises. Second, the risk exists but has been formally accepted — recorded on the risk register with a named owner and a review date. Third, an alternative control addresses the same risk at equivalent or greater effectiveness, with the mapping documented explicitly.

Unacceptable exclusion reasons: "We are a small team" is not a risk argument. "We plan to implement this next quarter" is not a control. "We use a SaaS tool that handles this" requires scope definition — which data, which users, which configurations fall under that tool's remit.

## What the auditor will ask for each included control

Stage-2 auditors use the SoA as a test plan. Each included control becomes a line of inquiry. They ask three questions: how does this control operate, who owns it, and where is the recent evidence.

**How does this operate.** Be able to describe the control procedure without reading from a policy. If the only person who can explain a control is away, that is a single-point-of-failure risk, which may itself generate a finding.

**Who owns it.** Named individuals, not teams or roles. "The engineering team" is not an owner. A named individual with a title is an owner. Your SoA, or a linked RACI, should name them.

**Recent evidence.** "Recent" means within the cadence your own policy declares. If your access review policy says quarterly and your last review was eight months ago, your SoA says implemented but your evidence says otherwise. That is a nonconformity.

### Surveillance audits check for drift

Many teams treat the SoA as a one-time certification artefact. Surveillance auditors specifically check whether implemented controls have drifted since the last cycle. A control marked implemented two years ago with no evidence update since is a flag.

Minimum maintenance trigger: review your SoA every time you complete a risk register review, make a significant infrastructure or product change, add a new third-party processor, or change your scope boundaries.

## Linking your SoA to the risk treatment plan

Clause 6.1.3 explicitly requires that the risk treatment plan and the SoA are consistent [source: https://hyperproof.io/resource/iso-27001-statement-of-applicability/]. Every risk treatment decision in your register should have a corresponding SoA entry, and vice versa.

A clean linkage looks like this: Risk R-047 (unauthorised access to production database) → Treatment: implement A.8.3 (information access restriction) → SoA row A.8.3 marked Included, status Implemented, evidence pointer: Postgres role configuration export dated 2026-06-30, access policy v2.1, access review completed Q2-2026.

If you cannot trace a risk to a control to evidence, you have a gap in one of three places: your risk register, your SoA, or your evidence library. Auditors find all three, and any one of them can push your certification date.

Getting your SoA audit-ready means connecting every control decision to a live, dated evidence trail. CloudAnzen maps your stack to ISO 27001 controls continuously, so when the auditor asks for evidence, you pull it in minutes rather than assembling it in the weeks before stage-2. [Talk to us](/demo).