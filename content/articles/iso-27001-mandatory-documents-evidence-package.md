---
title: "ISO 27001 mandatory documents: the audit evidence package auditors check first"
summary: "Before an ISO 27001 auditor reviews your controls, they open a mandatory document checklist — here is what belongs in that package and what each item needs to contain"
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "5 min read"
tags: ["ISO 27001","audit evidence","ISMS documentation","document control"]
sortOrder: 77
publishedAt: "2026-06-26"
author: "sarah-jenkins"
---
The auditor's opening move never changes. Before your security controls get tested, before employee interviews start, the certification auditor pulls up a mandatory document checklist. If the ISMS scope statement is vague, the Statement of Applicability lacks exclusion justifications, or the risk treatment plan cannot trace to actual risk decisions, Stage 1 stalls. Here is what that document package needs to contain and what auditors actually look for inside each item.

## Why mandatory documents come before anything else

ISO 27001 is a management system standard. Auditors do not just test whether controls work; they verify whether your security program is governed, documented, and improving over time. Mandatory documents are the evidence that a system exists — not just a set of configured tools.

The standard uses a two-stage audit format. Stage 1 is a document review: auditors assess whether the organization has the documentation needed before Stage 2 control testing and interviews can begin. A Stage 1 gap — an undated risk treatment plan, a missing management review record, a Statement of Applicability that was never formally approved — delays Stage 2. Investing in mandatory document quality before booking Stage 1 is one of the highest-leverage preparation moves available. [source: https://www.konfirmity.com/blog/iso-27001-evidence-requirements]

## The mandatory document set: what each clause requires

ISO 27001 specifies documentation that "shall" exist, with the requirement embedded in clause text. These are not best practices — they are baseline requirements the auditor will verify before anything else. [source: https://hightable.io/iso-27001-documents/]

**ISMS scope (Clause 4.3).** Defines which parts of the organization, which assets, and which locations fall inside the certification boundary. Auditors probe scope statements that are too broad — "all company systems" — with no documented rationale for what was intentionally excluded and why.

**Information security policy (Clause 5.2).** A top-management-signed statement setting direction for information security. Auditors check the signature, date, review cycle, and evidence that the policy was communicated to relevant parties. A policy that has not been reviewed in over a year will draw a finding.

**Risk assessment and treatment process (Clause 6.1).** Documents how the organization identifies, rates, and decides to respond to risks. The methodology does not need to be complex, but it must be consistent and reproducible. An auditor who cannot reconstruct your risk rating using the documented process will raise a finding.

**Statement of Applicability (Clause 6.1.3).** Lists all Annex A controls, marks each as included or excluded, and provides documented justification for every exclusion. This is the document auditors treat as the map of the organization's control landscape — it connects risk decisions to the controls that address them.

**Risk treatment plan (Clause 6.1.3).** The concrete list of what the organization will do, by whom, and by when, to address identified risks. It must connect to the risk assessment output. A treatment plan that references no specific risks is evidence of a documentation gap, not a gap in the security controls themselves.

**Information security objectives (Clause 6.2).** Measurable targets with owners and deadlines. "Improve security awareness" is a goal, not an objective. Auditors look for metrics with defined collection methods and scheduled review points.

**Competence records (Clause 7.2).** Evidence that personnel handling security responsibilities have the credentials, training, or experience to perform those roles. Training logs, certification records, or documented experience reviews all qualify.

**Monitoring and measurement results (Clause 9.1).** Records showing the organization actually tracks whether controls work. Dashboard exports, periodic reports, or meeting minutes that reference security metrics all serve as evidence that monitoring is happening.

**Internal audit program and results (Clause 9.2).** The audit plan, evidence that audits were conducted, and the findings with their closure status. Auditors expect at least one complete internal audit cycle before Stage 1. Arriving at Stage 1 with an in-progress audit — or findings that have not been closed — is a common delay.

**Management review minutes (Clause 9.3).** Records that top management reviewed ISMS performance at least once within the certification window. The minutes need to document the inputs reviewed and the decisions or actions taken — not just a note that the meeting occurred.

**Nonconformities and corrective actions (Clause 10.1).** Evidence the organization identifies problems and resolves them. An active corrective action log with confirmed closure is a positive signal. Open items from prior cycles without documented remediation are not.

Beyond these clause-level requirements, Annex A controls generate their own supporting evidence: access control logs, encryption policy documents, supplier assessment records, business continuity plans, and more. Auditors expect this supporting evidence for every control marked as included in the Statement of Applicability. [source: https://www.hicomply.com/en-us/hub/iso-27001-documentation]

## The Statement of Applicability: where auditors slow down

Of all mandatory documents, the SOA receives the closest scrutiny. It bridges the risk assessment and the control set. Auditors use it to verify that control selections follow from actual risk decisions rather than being inherited from a generic template.

Common SOA problems that become nonconformities:

**Exclusions without documented justification.** Every excluded Annex A control needs a specific reason. "Not applicable" is not a justification. "We have no physical premises under our direct control, so A.7.1 physical entry controls are excluded because there is no perimeter to secure" is a justification. The distinction matters because auditors use exclusions to assess whether the organization understood what each control protects.

**Inclusions without implementation evidence.** If a control appears in the SOA as included, the auditor will ask for evidence that it is operating. An SOA that includes every control with no corresponding implementation evidence is a signal the document was produced without reference to actual practice — not a demonstration of thoroughness.

**Version mismatch with the current standard.** The ISO 27001:2022 revision reorganized and updated Annex A controls relative to the prior edition. Organizations certifying against the 2022 version need an SOA that reflects the current control structure. An SOA built for an older version that was not properly migrated will generate an immediate finding on the structure alone. [source: https://www.konfirmity.com/blog/iso-27001-evidence-requirements]

## Evidence-packaging errors that delay Stage 2

The format and organization of mandatory documents matters more than most teams expect. Auditors work through a folder structure or shared workspace during Stage 1. Disorganized evidence — documents scattered across multiple tools, versioned only informally, or accessible only through a vendor portal requiring separate credentials — wastes audit time and raises questions about whether the program is actually managed.

**One authoritative version per document.** If the information security policy lives in Google Docs, Confluence, and a PDF circulated to the board, auditors will ask which is current. Pick one location and retire the others. Multiple live copies without a designated version of record is a governance finding waiting to happen.

**Explicit revision history.** Every mandatory document needs a version number and a review date. Auditors verify documents were reviewed within the expected cycle. An undated policy cannot be confirmed as current, and an auditor has no obligation to assume good faith on something that is easily verifiable.

**Cross-references between documents.** The risk treatment plan should reference the risk assessment by version. The SOA should point to control implementation evidence by location. Disconnected documents force auditors to do extra reconciliation work and increase the chance something gets flagged as unsupported. A well-structured evidence package reduces both audit duration and the number of follow-up information requests. [source: https://hightable.io/iso-27001-documents/]

**Closed internal audit findings before Stage 1.** Unresolved findings from an in-progress internal audit cycle signal systemic non-conformity. Complete the internal audit — findings, corrective actions, and documented closure — before scheduling Stage 1. Treating internal audit as a pre-Stage-1 cleanup exercise misses the point; the standard expects it to be a genuine operating mechanism, not a box-ticking event before the external auditor arrives.

Building and maintaining ISO 27001 mandatory documents is not a pre-audit sprint — it is the ongoing operating work of the ISMS. CloudAnzen continuously maps your risk register, control evidence, and Annex A decisions to the mandatory document requirements, so the package is complete and current before you book the assessor. [Talk to us](/demo).