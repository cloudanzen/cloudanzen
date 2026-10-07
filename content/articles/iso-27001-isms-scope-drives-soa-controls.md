---
title: "How your ISMS scope drives SoA control selection at Series B"
summary: "The ISMS scope boundary you draw directly determines which of the 93 Annex A controls land in your Statement of Applicability — here is how to get the sequencing right"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","ISMS scope","Statement of Applicability","Annex A","SaaS compliance"]
sortOrder: 167
publishedAt: "2026-10-01"
author: "sarah-jenkins"
---
The Statement of Applicability is not where you decide which controls apply. That decision happens earlier, when you define your ISMS scope. Get the scope wrong and your SoA either demands controls for systems you do not own or omits controls for systems you do. Series B teams in the middle of Stage 1 preparation make this sequencing mistake more than any other single error.

## Why scope comes first in the SoA workflow

The SoA lists every Annex A control, marks it applicable or excluded, and states why. [source: https://www.isms.online/iso-27001/] That justification only holds up if the scope statement is specific enough to give auditors a clear perimeter. Vague scope — "all information systems" — makes every exclusion rationale fragile at Stage 2.

ISO 27001:2022 restructured Annex A into 93 controls across four themes: Organisational, People, Physical, and Technological. [source: https://www.iso.org/standard/27001] Each theme maps naturally to a layer of your ISMS scope. Get the layers mapped before you open the SoA template, not after.

The sequencing matters because auditors read scope and SoA side by side at Stage 1. Any control that is marked excluded but whose activating asset class appears inside the scope boundary will produce a nonconformity. Finding that gap six weeks before Stage 1 costs an afternoon. Finding it during Stage 1 costs the certification cycle.

## The four scope layers and which controls they activate

**Organisational layer** — the legal entities, organisational units, and processes you are certifying. If your Series B has a subsidiary handling payments, include or explicitly exclude it. Controls covering policies, organisational roles, and supplier relationships activate the moment any external party touches in-scope processes.

**People layer** — all employees, contractors, and third parties with access to in-scope systems. Every remote engineer is in scope under teleworking and awareness training controls. Many operators exclude offshore development teams to reduce scope surface. When they do, supplier relationship controls immediately re-enter because those engineers are now treated as a vendor, and the vendor controls are heavier than the employee controls.

**Physical layer** — the locations and facilities that house in-scope systems. If your SaaS runs entirely on AWS, you can plausibly exclude data-centre physical controls by citing AWS's inherited certifications. Your Bangalore or Singapore office is still in scope for physical access and clean-desk controls. Misread this and auditors will ask why physical perimeter controls are excluded when you have a leased office with sixty staff.

**Technological layer** — the information systems, cloud services, and data flows that process in-scope data. This is where most scope documents are too vague. "AWS production environment" tells an auditor nothing about whether your staging environment, developer laptops, or SaaS tools like GitHub are in scope. The technological theme has 34 controls; roughly half activate only if end-user devices and development toolchains are explicitly included. [source: https://www.iso.org/standard/27001]

## How to sequence scope and SoA work in practice

Start with a data flow diagram at asset level, not system level. Walk the flow from user login to data at rest. Every system, service, and human role that touches the flow lands inside scope unless you can document why it does not. [source: https://www.isms.online/iso-27001/]

Once you have that inventory, sort it by the four layers above. Then open your SoA. For each control, ask: does any in-scope asset in this layer require this control? If the answer is no, write the exclusion rationale before the auditor asks. If you are excluding a control because a supplier handles it, name the supplier and the specific inherited control in the SoA row.

Operators who get Stage 1 right have typically run this exercise twice: once when they set the scope, and again three months later after engineering has changed the architecture. Scope is not a one-time document. It is the anchor for every evidence collection run that follows. Treat it as a living artefact with a quarterly review cadence tied to your change management process.

## Three scope mistakes that break SoA coherence

**Excluding a system but not the controls that govern it.** A common error: a team excludes its internal messaging platform from scope to avoid justifying data-masking and data-leakage prevention controls. Auditors notice when security incidents in the last twelve months reference that platform, because the incident register is in scope even when the tool is not. The controls follow the data, not the system label.

**Including scope assets you cannot evidence.** A scope that includes all contractor laptops sounds comprehensive. If you have no MDM and no endpoint compliance reporting, you will fail endpoint device controls with no credible remediation path before certification. Only include assets you can produce evidence for at Stage 2.

**Treating scope as the minimum surface area instead of the appropriate surface area.** Shrinking scope to pass a fast audit is rational short-term logic. The cost lands at the first enterprise security review. Buyers in financial services or healthcare will ask to see your scope statement. A scope that excludes your staging environment, developer toolchain, and HR systems reads as a compliance artefact built for a certificate, not as an operating security programme.

## What auditors actually check in your SoA against scope

The Stage 1 audit is a document review. The auditor opens the scope statement and the SoA side by side and looks for three things: internal consistency (every in-scope asset class has corresponding controls selected or credibly excluded), rationale quality (each exclusion cites a real reason — inherited controls, out-of-scope system, not applicable — rather than a blank field), and evidence availability (each applicable control names the policy, procedure, or technical control that will produce evidence at Stage 2).

The operators who pass Stage 1 without major nonconformities have usually done one dry run with an internal reviewer playing auditor. The gap list from that exercise is cheaper to fix before Stage 1 than after. [source: https://www.isms.online/iso-27001/] A morning of structured review against the SoA rows is the cheapest insurance available before you pay for certification.

Scope definition and SoA alignment are not a documentation exercise. They are the architecture decision that determines how much work the next twelve months of compliance will cost. CloudAnzen maps your cloud stack, HR systems, and developer toolchain to the relevant ISO 27001 controls automatically so you see which controls activate before you finalise your SoA. [Talk to us](/demo).