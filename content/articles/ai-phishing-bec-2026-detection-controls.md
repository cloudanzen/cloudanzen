---
title: "AI-powered phishing and BEC in 2026: detection controls that actually work"
summary: "AI has eliminated the quality gaps that made phishing detectable — here is the detection and response stack your incident response program needs in 2026"
type: "blog"
collection: null
category: "Incident response"
readTime: "6 min read"
tags: ["phishing","BEC","incident response","email security","DMARC"]
sortOrder: 75
publishedAt: "2026-06-19"
author: "maria-rodriguez"
---
Your finance team gets an email from the CEO. The language is crisp, the context is plausible, and the domain clears a cursory inspection. It is a wire transfer request to a supplier's updated banking details — urgent, end of day, do not discuss with legal until it clears. That email was written by a large language model, sent from a lookalike domain, and it bypassed your gateway because there was nothing malicious in the payload to detect.

## How AI changed the economics of phishing

Targeted phishing historically required attacker skill: research the target, craft the lure, match the tone. That skill ceiling kept volume low and quality inconsistent. Generative AI removed the ceiling.

Attackers now pull public context — org charts from LinkedIn, email threads from breach data, project names from public repositories — and feed it to generation tooling that produces personalised lure emails at scale. The spelling errors and awkward phrasing that security awareness training told users to spot are gone. What remains looks like a legitimate internal message.

Spear phishing in 2026 no longer requires meaningful attacker skill [source: https://www.adaptivesecurity.com/blog/spear-phishing-in-2026-the-complete-guide-to-detection-training-and-prevention]. The personalisation that once required hours of open-source intelligence work is automated in minutes. Your email security controls need to catch attacks at layers that do not depend on detecting imperfect writing.

Business email compromise follows the same pattern but with a narrower goal: trigger a financial transaction or credential handoff without a malicious attachment. No payload means no signature to match. The email is the attack, and detection that relies on scanning attachments or URLs misses it entirely.

## The technical detection layer

Detection has to operate at layers that do not depend on content quality, because content quality can no longer be used as a reliable signal.

**Domain authentication enforcement**

DMARC, SPF, and DKIM are the first layer. A lookalike domain cannot pass DMARC enforcement at `p=reject` against your actual domain. Most organisations have deployed DMARC in monitoring mode but never moved to enforcement. Enforcement is the only mode that stops spoofed mail — quarantine and reject are the actionable policies. Monitoring mode produces reports but allows spoofed messages through.

Get to enforcement on your own domain first. Then audit your key suppliers: if their domains are not DMARC-enforced, attacker impersonation of those domains reaches your users with no technical barrier.

**Behavioural anomaly detection**

Content-agnostic analysis looks at what is contextually unusual rather than what is textually suspect. A vendor sending a payment-instruction email with no prior thread history is unusual regardless of how well it is written. A first-contact email requesting an urgent wire transfer is anomalous regardless of the sender display name.

Effective email security platforms track sender-receiver relationship graphs and flag communications that deviate from established patterns [source: https://www.group-ib.com/blog/phishing-email-security/]. When evaluating email security vendors, ask specifically how the system handles first-contact anomaly detection and what the false positive rate is on legitimate cold outreach. A platform that fires on every new sender is useless; one that can score contextual risk factors is not.

**Phishing-resistant MFA on exposed accounts**

Real-time phishing proxy toolkits relay authentication tokens between the attacker and the real service in under a second. Push-notification and SMS MFA do not survive these relay attacks because the approval is forwarded before the user can recognise the inconsistency.

FIDO2 hardware keys and passkeys bind authentication cryptographically to the originating domain. A relay proxy cannot forward a valid assertion to a different domain. This is the only MFA class that structurally stops credential relay.

Prioritise phishing-resistant MFA for the accounts BEC most commonly targets: finance staff, executive assistants, HR, and anyone with wire transfer authority. Rollout is incremental — deploy to those accounts first before expanding broadly.

## Process controls that close the gap

Technical controls have gaps. BEC specifically exploits the gap between a convincing instruction and the process a team follows before acting on it.

**Out-of-band payment verification**

Any payment instruction that arrives by email and involves a change to banking details, an unusual amount, or urgency language should require a verification call to a number already on file — not a number in the email or in the email signature. This control is operationally simple and essentially unbeatable by an email-only attacker.

Document the verification threshold in your payment policy, train finance staff on the escalation path, and add it to the IR runbook as a standard step in any BEC investigation. The threshold should be low enough to catch mid-tier wire requests, not just large transactions.

**Elevated monitoring during high-risk windows**

BEC attacks concentrate around moments of legitimate business stress: M&A transitions, end-of-quarter close, leadership departures, and supplier contract renewals [source: https://cybelangel.com/blog/blog-ai-phishing-us-financial-services-2026/]. Attackers research companies before attacking and time lures to when scrutiny is lowest and urgency is highest.

Flag these operational windows in your security calendar and increase review thresholds during them. A payment instruction that would normally process same-day should hit a second approver during M&A due diligence. The window is finite; the overhead is manageable.

## Mapping controls to IR runbooks

Detection controls that do not trigger a defined response create the illusion of coverage without the substance. Each control above should map to a specific runbook action with a response-time commitment.

- DMARC reject event → automatic ticket, security review within one business day
- Behavioural anomaly flag → 30-minute review SLA before message delivery; hold longer for finance-sender combinations
- BEC report by user → immediate account isolation, manager notification, hold on pending outbound payments
- Failed out-of-band payment verification → escalate to security and finance leadership, preserve full audit trail

The critical measurement is time-to-response: how long from detection event to containment action. An alert that sits unreviewed for six hours provided no operational value regardless of how accurate it was.

Threat intelligence feeds accelerate initial triage. Active phishing campaigns publish indicators — sending infrastructure, lookalike domains, credential-harvesting URLs — that can be pushed to your email security and endpoint controls before a lure reaches your users [source: https://www.group-ib.com/blog/phishing-email-security/]. Automating indicator deployment closes the gap between public disclosure and your organisation's coverage.

## Measuring whether your controls are working

User simulation that uses current attack templates — including AI-generated lures built from real campaign patterns — produces measurable improvement in detection behaviour over time [source: https://www.adaptivesecurity.com/blog/spear-phishing-in-2026-the-complete-guide-to-detection-training-and-prevention]. Track three metrics: the rate at which simulated phishing is clicked, the rate at which it is reported to security, and the time between delivery and user report. Improvement across all three tells you the training is shifting behaviour, not just awareness.

If click rates are flat after repeated simulation cycles, the training design is the problem. AI-generated lures that are contextually indistinguishable from legitimate mail require users to act on policy — verify before you pay, flag and report before you click — not on spotting textual errors. The training should reflect that shift.

Review your email security platform's detection telemetry quarterly. If the anomaly detection layer is firing on obvious cases but not on first-contact payment requests, the configuration needs adjustment. Most platforms expose tuning knobs for exactly this tradeoff; use them.

Phishing and BEC have outpaced the controls most organisations built for commodity attacks. Mapping your detection stack to controls that survive AI-generated lures — and wiring each control to a runbook with enforcement teeth — is the incident response work that 2026 requires. CloudAnzen continuously maps your security control evidence to SOC 2 and ISO 27001 so your posture is visible and auditable before the next campaign reaches your users. [Talk to us](/demo).