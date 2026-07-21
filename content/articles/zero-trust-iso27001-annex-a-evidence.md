---
title: "Zero Trust and ISO 27001: mapping architecture controls to Annex A evidence"
summary: "Which Annex A controls your Zero Trust architecture already satisfies and where you still need supplemental evidence before ISO 27001 certification"
type: "blog"
collection: null
category: "Access control"
readTime: "5 min read"
tags: ["Zero Trust","ISO 27001","Annex A","access control","audit evidence"]
sortOrder: 101
publishedAt: "2026-07-21"
author: "sarah-jenkins"
---
Zero Trust maps to ISO 27001 Annex A better than most teams assume — and worse than most architecture diagrams suggest. Some controls are satisfied directly by what your identity provider and micro-segmentation tooling already enforce. Others require supplemental evidence your tooling will not generate automatically. Getting that distinction clear before your Stage 1 audit saves weeks of remediation scramble.

## What ISO 27001 actually asks for

ISO 27001 requires evidence that your controls are appropriate for your risk context. Annex A in the 2022 revision lists 93 controls across four themes: organisational, people, physical, and technological.

Zero Trust is an architecture principle — never trust, always verify, assume breach — not a compliance framework. ISO 27001 does not mention Zero Trust by name. But many Annex A controls describe outcomes that a Zero Trust implementation produces as a byproduct [source: https://www.isms.online/zero-trust/iso-27001-and-implementing-a-zero-trust-security-model/].

The key reframe: your auditor is not asking "do you have Zero Trust?" They are asking for evidence against each control in your Statement of Applicability. Architecture diagrams do not satisfy that ask. Evidence artefacts do.

Organisations that have built out a Zero Trust architecture — identity-based access and continuous verification in particular — will find a meaningful portion of the technological Annex A controls already covered. The gaps almost always appear in the organisational and people themes.

## The Annex A controls Zero Trust addresses directly

The clearest overlap sits in the technological controls (Theme 4 of ISO 27001:2022):

**A.8.2 — Privileged access rights.** Zero Trust architectures enforce least-privilege via just-in-time access grants and continuous re-authorisation. PAM tooling access logs and periodic attestation records are direct evidence. Auditors typically sample these quarterly [source: https://www.isms.online/zero-trust/implementing-zero-trust-security-for-iso-27001-compliance/].

**A.8.3 — Information access restriction.** Identity-aware proxies and resource-level policy enforcement replace perimeter-based trust. Access request approvals, session recordings, and policy enforcement point logs map cleanly here.

**A.8.5 — Secure authentication.** Multi-factor authentication and adaptive authentication are Zero Trust baseline controls that satisfy ISO 27001's authentication requirements with minimal additional documentation.

**A.8.22 — Segregation of networks.** Software-defined perimeters and east-west micro-segmentation produce network topology documentation and policy rule exports that serve as evidence for this control.

**A.8.16 — Monitoring activities.** Zero Trust's assume-breach posture demands comprehensive logging of all access attempts and anomalous events. That log infrastructure directly satisfies ISO 27001's monitoring requirements [source: https://digisecuritas.com/blog/zero-trust-architecture-implementation].

## Where the mapping breaks down

Zero Trust does not address the full Annex A surface. These gaps surface most often in certification reviews:

**Organisational controls (A.5.x).** Policies, acceptable-use statements, and risk treatment plans are entirely organisational. Your identity platform does not produce an information security policy or a risk register. These require separate documentation work regardless of architecture. The most commonly skipped is A.5.2 (information security roles and responsibilities) — having a Zero Trust architect is not the same as having a documented ISMS responsibility assignment.

**Supplier relationships (A.5.19–A.5.22).** Zero Trust governs your own perimeter and workforce. Third-party access controls, vendor contracts, and assessment records are outside the architecture's scope. TPRM evidence must be collected through a separate programme [source: https://www.isms.online/zero-trust/implementing-zero-trust-security-for-iso-27001-compliance/].

**A.8.8 — Technical vulnerability management.** Patch management and vulnerability scanning are not Zero Trust controls. A Zero Trust deployment does not patch your hosts or scan your code. You need a vulnerability management programme with documented remediation cadences.

**Physical controls (A.7.x).** Data centre physical access, clear desk, and environmental controls are outside network or identity architecture scope. Cloud-only organisations typically inherit these controls from their IaaS provider's ISO 27001 or SOC 2 report — but you must document that inheritance explicitly in your Statement of Applicability. Inheriting without documenting is a common Stage 1 finding.

## Building the evidence artefacts your auditor expects

Auditors conducting ISO 27001 reviews look for documented controls, not architecture diagrams. A Zero Trust reference diagram in your SoA without supporting artefacts will not satisfy the review.

For each Annex A control your Zero Trust implementation addresses, prepare four things:

- **Policy statement** — a brief written statement connecting the control objective to your Zero Trust approach. A paragraph is sufficient; more detail belongs in a separate procedure document.
- **Configuration evidence** — API-exported or screenshotted configuration from your identity provider, PAM tool, or segmentation policy engine. Date-stamp exports; auditors check currency.
- **Operational logs** — a sample of access logs, MFA enforcement records, or anomaly alerts. Auditors spot-check; a three-month rolling sample is typical for technological controls.
- **Review cadence record** — evidence that someone reviewed access rights or policy configuration on a defined schedule. Quarterly cycles are standard for A.8.2; annual is often acceptable for A.8.5.

If your tooling generates automated compliance reports or access dashboards, export and archive those at the end of each review period. Do not rely on vendor portals remaining unchanged and accessible at audit time. One infrastructure vendor changing their UI between your evidence collection date and the audit is a known failure mode.

## Run the gap analysis six months before certification

Before your Stage 1 audit, map every Annex A control in your SoA to one of three states: fully covered with evidence, partially covered with identified gaps, or out of scope with documented justification.

A practical approach: list all 93 Annex A controls. For each one marked applicable, identify the evidence source — identity provider, PAM tool, segmentation config, or a policy document. If no evidence source exists, flag it for remediation now.

Zero Trust typically moves several technological controls from partially covered to fully covered. But it also reveals gaps in organisational and supplier controls that teams sometimes assume the architecture handles. Controls most often flagged in Zero Trust-heavy organisations include A.5.19 (information security in supplier relationships), A.8.8 (technical vulnerability management), and A.6.3 (information security awareness) — none of which have an architectural answer [source: https://www.isms.online/zero-trust/iso-27001-and-implementing-a-zero-trust-security-model/].

Run that analysis six months out, not six weeks. Remediating organisational controls takes longer than a configuration change.

Audit prep should not mean scrambling for evidence the month before your assessor arrives. CloudAnzen continuously maps your infrastructure to ISO 27001 Annex A controls, tracks evidence artefacts across every review cycle, and surfaces gaps before your auditor finds them. [Talk to us](/demo).