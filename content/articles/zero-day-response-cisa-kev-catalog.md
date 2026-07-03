---
title: "Zero-day vulnerability response: triaging and patching with the CISA KEV catalog"
summary: "How GRC and security teams can use the CISA Known Exploited Vulnerabilities catalog to prioritize, track, and evidence zero-day patch cycles"
type: "blog"
collection: null
category: "Risk management"
readTime: "6 min read"
tags: ["zero-day","CISA KEV","vulnerability management","patch management","risk register"]
sortOrder: 84
publishedAt: "2026-07-03"
author: "james-peterson"
---
When a zero-day drops in the wild, the first question isn't whether you're vulnerable — it's how fast you need to move. The CISA Known Exploited Vulnerabilities (KEV) catalog answers that. It's a continuously updated, public list of CVEs confirmed to have active exploitation in the wild, and it gives GRC and security teams a defensible basis for patch prioritization. This article is about building a repeatable triage process around it.

## What the KEV catalog tells you — and what it doesn't

CISA's Known Exploited Vulnerabilities catalog [source: https://www.cisa.gov/known-exploited-vulnerabilities-catalog] lists CVEs with confirmed active exploitation in the wild. Each entry includes the CVE ID, affected vendor and product, a short vulnerability name, the date the entry was added, and a required remediation date for federal civilian agencies under Binding Operational Directive 22-01.

BOD 22-01 sets 14-day remediation deadlines for internet-facing systems and 60-day deadlines for internal systems [source: https://www.cisa.gov/known-exploited-vulnerabilities-catalog]. These are binding for federal civilian executive branch agencies. For organizations outside that scope, the deadlines aren't mandatory.

But the catalog is still the most operationally useful public triage signal available. CISA doesn't add a CVE because its CVSS score is high. It adds CVEs that have confirmed, working exploits being used against real targets. That's a different bar than theoretical severity, and for GRC purposes it's a more defensible prioritization input.

What KEV doesn't tell you: CVSS scores, proof-of-concept code, threat actor attribution, or attack volume. It's a triage list, not a threat intelligence feed. Use it alongside your scanner output, not as a substitute for it.

## Building a repeatable workflow on top of KEV

The failure mode is treating KEV as a reading list. The operational version wires it directly into your vulnerability management process.

**Automate the asset-to-KEV match.** CISA publishes the catalog as a machine-readable JSON feed [source: https://www.cisa.gov/known-exploited-vulnerabilities-catalog]. If your asset inventory tracks vendor and product names — even in a spreadsheet — you can build or buy an automated match that flags new KEV additions against your environment. This is the first automation investment worth making.

**Set internal SLAs by system exposure.** Mirror the federal structure, adjusted for your context:
- Internet-facing systems processing customer or regulated data: 14 days
- Internal systems without external access or regulated data: 30 days
- Isolated or legacy systems: documented risk acceptance with a named approver and review date

These aren't universal rules. What matters is that they're written down, so "we treat different systems differently" is a documented policy, not an undocumented gap that surfaces at audit time.

**Open a tracking item before you know if you can patch.** The worst post-incident conversation with an auditor is explaining that the team saw the KEV addition and didn't act because they were still assessing. Open the ticket immediately. Triage documented first, patch plan second.

**Require evidence for closure.** A ticket marked resolved is not audit-ready. Closure means: the patch version applied, the deployment date, and a scan result or deployment log confirming the CVE is no longer present on affected systems. Not a checkbox. A record.

**Track exceptions formally.** When you can't hit your SLA — vendor delay, testing requirements, a dependency you don't control — the exception needs a named approver, a stated compensating control, and a review date. Undocumented exceptions look identical to no-shows in an audit.

## Responding to zero-days that break your sprint cycle

Zero-days don't wait for sprint planning. When CISA adds an actively exploited entry for software you run, slotting it into next sprint isn't an option.

In April 2026, Microsoft's Patch Tuesday addressed 167 flaws including two actively exploited zero-days [source: https://www.bleepingcomputer.com/news/microsoft/microsoft-april-2026-patch-tuesday-fixes-167-flaws-2-zero-days/]. Teams with a KEV-based triage workflow knew within hours which of those applied to their environment. Teams without one spent days in reactive triage before they could even scope the remediation work.

When a zero-day can't be patched immediately — legacy dependencies, vendor-controlled timelines, testing requirements — use compensating controls. A WAF rule targeting the exploit pattern, a firewall restriction, or an access limitation can reduce exposure while the patch is pending. The key requirement: document the control, who approved it, and when you'll revisit.

Zero-days belong in a separate tracking bucket from routine vulnerability findings. Mixing them into the standard patch queue with different SLAs makes performance reporting meaningless and exceptions invisible to leadership and auditors.

Effective zero-day response separates detection, triage, and remediation phases clearly [source: https://www.decryptiondigest.com/blog/zero-day-vulnerability-response-guide]. Speed without that structure produces incomplete closures and evidence gaps — exactly what you don't want when an auditor pulls the response record six months later.

## Connecting KEV events to your risk register

A patch ticket is operational. A risk register entry is what connects it to your GRC posture and makes it visible to leadership.

For any KEV entry that matches your environment where you deviate from the federal remediation timeline, that's a risk acceptance decision. It belongs in your risk register with: the CVE, the affected system, your chosen remediation date, the justification for the deviation, the approver's name, and a review date if the patch isn't yet available.

Control anchors:
- **ISO 27001 2022**: A.8.8 — management of technical vulnerabilities
- **SOC 2**: Change Management and Availability criteria

A reference field in the risk item pointing to the relevant control is enough. It doesn't need to be elaborate. It needs to exist and be dated.

CISA adds new KEV entries continuously [source: https://thehackernews.com/2026/04/cisa-adds-8-exploited-flaws-to-kev-sets.html]. An alert-only setup misses context — timing gaps, partial matches, entries added between alert cycles. A monthly pull of the full catalog compared against your asset inventory keeps the process complete and auditable.

## What the audit evidence chain looks like

When an auditor reviews your zero-day response capability, they're not looking for a process description. They want dated artifacts that trace the response from discovery to closure.

For each KEV-driven event:

1. **Detection** — a dated record of when your team learned of the KEV addition: an alert log, a ticket creation timestamp, or a dated Slack message
2. **Triage** — the asset match result, the SLA assigned, and justification if it differs from your documented policy
3. **Remediation** — the patch version, deployment date, and scan output confirming the CVE is no longer present on affected systems
4. **Exception (if applicable)** — the compensating control description, the approver, and the scheduled review date

A completed ticket with no supporting artifacts doesn't hold up. A ticket with timestamped triage notes, a scan report, and a named approver does. The difference between those two outcomes is process, not additional effort — and it's the difference between a clean audit finding and an open observation.

Keeping zero-day patch cycles evidenced and auditable is one of the highest-friction areas in ongoing GRC operations. CloudAnzen continuously maps your asset inventory to CISA KEV entries, tracks remediation SLAs against your control thresholds, and builds the evidence chain as work progresses — so nothing has to be reconstructed from memory when auditors arrive. [Talk to us](/demo).