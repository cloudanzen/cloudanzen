---
title: "ISO 27001 internal audit mistakes that trigger nonconformities"
summary: "The gaps that become certification nonconformities are almost always visible in the internal audit first — here is what operators keep missing."
type: "blog"
collection: "iso-27001"
category: "ISO 27001"
readTime: "6 min read"
tags: ["ISO 27001","internal audit","nonconformities","ISMS","audit evidence"]
sortOrder: 61
publishedAt: "2026-06-09"
author: "sarah-jenkins"
---
Internal audits are where ISO 27001 programs quietly fail. Not at the certification stage — before it. The gaps that turn into nonconformities during the external audit were almost always visible in the internal review. Someone skipped the evidence pull, sampled too thin, or filed a corrective action that was never actually verified. This is a rundown of the mistakes that consistently hand nonconformities to external auditors.

## Auditing the document instead of the control

The most common pattern in failing internal audits: the auditor reads the policy, sees it says the right thing, ticks the box, and moves on. No evidence examined. No test that the control is actually operating.

A patching policy that says "all critical patches applied within 14 days" is not a control. The control is the log of patches applied, the ticketing records showing when each CVE was triaged, and the exception register for anything that missed the window. Auditing the policy text and skipping the evidence trail is the exact gap that a certification auditor will pursue [source: https://www.isms.online/iso-27001/how-to-avoid-common-iso-27001-internal-audit-mistakes/].

For each control in scope, the internal audit needs to establish:
- What evidence exists that the control operated during the review period?
- Is the evidence complete — not just one month of a twelve-month surveillance cycle?
- Does the evidence match what the procedure says should happen?

If the internal audit report says "reviewed, no issues" with no underlying evidence documented, you have created a record that looks like assurance but delivers none. The external auditor will ask to see the evidence trail from the internal review. If there is nothing to show, that absence becomes a finding in itself [source: https://www.isms.online/iso-27001/how-to-avoid-common-iso-27001-internal-audit-mistakes/].

## Sampling the easy cases instead of the hard ones

Internal audit teams tend to sample cases they know will be clean. The accounts that were terminated correctly. The suppliers with current questionnaires. The incidents that closed without escalation. This is understandable — it is faster and less uncomfortable — but it produces a false picture.

External auditors sample differently. They look at edge cases: contractors and temporary staff who are commonly missed in access reviews, suppliers who went quiet several months into the review period, incidents that touched multiple systems and had handoffs between teams [source: https://www.isms.online/iso-27001/what-is-the-iso-27001-audit-process/].

An internal audit that only confirms what you already believe is not an audit. It is a self-certification exercise. Effective sampling deliberately targets:
- Populations where exceptions are likely — departing employees, legacy systems, third-party integrations
- Controls with a history of evidence gaps from previous review cycles
- Control owners who changed roles mid-year without a formal handover

The internal audit should surface the uncomfortable cases. Not because it makes the programme look bad, but because finding problems internally is the only way to fix them before the certification auditor does [source: https://www.isms.online/iso-27001/what-is-the-iso-27001-audit-process/].

## Competence gaps and independence failures

ISO 27001 Clause 9.2 requires that internal auditors are competent and that the audit process is objective [source: https://www.isms.online/iso-27001/whats-involved-in-an-audit/]. Both conditions get routinely bent in smaller organisations.

Competence means the auditor understands both the standard and the operational context being assessed. An engineer auditing HR controls they have no background in, or a legal counsel reviewing infrastructure hardening, produces a report the certification body cannot rely on. Clause knowledge alone is not enough — domain knowledge is required to recognise when something that looks compliant is actually missing a step.

Independence means you cannot audit your own work. This trips up programmes where one person owns implementation and assurance across the same controls. If the ISMS manager also runs the internal audit programme, the certification body will note it. The fix does not require a large team:

- Rotate auditors across domains — the person who built the access review process should not be the person who assesses whether it operated correctly
- Bring in a second reviewer for areas where full separation is not available internally
- Contract an external auditor for specific controls where internal independence is structurally impossible

Neither issue is resolved by documentation alone. Both require deliberate programme design before the audit cycle begins [source: https://www.isms.online/iso-27001/whats-involved-in-an-audit/].

## Corrective actions that close on paper but not in practice

Clause 10.1 requires that nonconformities are corrected and that the effectiveness of corrective actions is evaluated [source: https://www.isms.online/iso-27001/how-to-avoid-common-iso-27001-internal-audit-mistakes/]. The evaluation step is what most teams skip.

The pattern is familiar: an internal audit surfaces a gap, a corrective action is assigned, the item is marked closed in the tracker, and nothing actually changes. The certification audit begins months later, the same gap reappears, and what was a minor nonconformity becomes a major one because the evidence now shows awareness of the problem without any evidence of resolution.

A corrective action that is genuinely complete requires:
- Root cause analysis — identifying why the control failed, not just patching the symptom
- Implementation verified by someone other than the person who made the fix
- A re-test of the affected evidence to confirm the control is now operating as intended
- Documentation showing the full chain from finding to verified closure

"Closed" in a tracker is not the same as corrected and effective. External auditors know the difference and the evidence trail will reveal it [source: https://www.isms.online/iso-27001/what-is-the-iso-27001-audit-process/].

## Reports that management cannot act on

The internal audit report exists to enable management review under Clause 9.3 and to drive decisions about the ISMS [source: https://www.isms.online/iso-27001/what-is-the-iso-27001-audit-process/]. A report that lists every control reviewed in scope order, assigns a status to each one, and places the critical findings near the end is not useful — it is a compliance artefact masquerading as a management tool.

Management needs to see the significant findings first, expressed in terms of exposure rather than clause references. "Access reviews for contractor accounts have no sign-off trail covering the last audit period" communicates more than "A.9 partial." The report also needs to make clear what decision or action is required, by whom, and by when.

Reports that actually drive action:
- Lead with the two or three issues that require management decision, not a summary of everything that was fine
- Express gaps in risk terms rather than standard clause numbers
- Provide a prioritised action list with named owners and realistic deadlines
- Distinguish between nonconformities that must be resolved before certification and observations that represent improvement opportunities

If the certification body reviews your internal audit report and finds no evidence that management was clearly informed of significant gaps, that too becomes a finding against your management review process.

ISO 27001 internal audit failures are evidence problems at their core — the control exists but the proof of operation is missing, incomplete, or never verified. CloudAnzen continuously maps your ISMS controls to live evidence across your stack so gaps surface during your internal cycle, not the certification auditor's. [Talk to us](/demo).