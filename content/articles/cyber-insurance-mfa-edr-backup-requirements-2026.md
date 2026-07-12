---
title: "Cyber insurance technical requirements in 2026: the MFA, EDR, and backup checklist carriers demand"
summary: "What underwriters actually check at renewal — MFA scope, EDR coverage gaps, immutable backups, and the evidence package that makes a claim defensible"
type: "blog"
collection: null
category: "Risk management"
readTime: "5 min read"
tags: ["cyber insurance","MFA","EDR","backup","risk management"]
sortOrder: 92
publishedAt: "2026-07-12"
author: "james-peterson"
---
Your renewal came back with a 40-page questionnaire and a list of technical controls your underwriter is now calling minimum requirements. You have three months to close the gaps or accept a significant premium increase. This is the 2026 cyber insurance market. Carriers have moved from asking about MFA to demanding proof of it — and the evidence bar keeps rising.

## What carriers are actually checking now

The questionnaire your renewal manager sends is no longer a formality. Underwriters cross-reference your self-reported answers against external scanning data. A mismatch between your stated MFA posture and what their tools observe externally is grounds for policy rescission, not just a premium adjustment.

The core checklist in 2026 centres on three control families: multi-factor authentication, endpoint detection and response, and offline or immutable backups [source: https://breachcraft.io/resources/blog/cyber-insurance-requirements/]. Carriers differ on thresholds, but the pattern is consistent across major markets. If you are going into renewal without current evidence across all three families, you are not negotiating — you are guessing.

## MFA: the scope has expanded well beyond email

Two years ago, answering "yes" to "Do you have MFA?" was enough. That question now has sub-clauses. Carriers want MFA covering:

- All privileged and admin accounts
- Remote access (VPN, RDP, cloud management consoles)
- Email for all employees, not just executives
- Business-critical SaaS applications — ERP, payroll, finance platforms
- Cloud infrastructure management planes (AWS IAM, Azure Entra, GCP IAM)

Phishing-resistant MFA — FIDO2 passkeys and hardware security keys — is moving from preferred to required for privileged access [source: https://tds-is.com/blog/2026-05-20-mfa-cyber-insurance-2026]. SMS one-time passwords are explicitly excluded from meeting the phishing-resistant bar by carriers who reviewed 2025 incident data [source: https://breachcraft.io/resources/blog/cyber-insurance-requirements/]. If your privileged accounts still rely on SMS OTP, that is a gap your underwriter's questionnaire will surface.

The evidence that works: an exported report from your identity provider showing the authentication method registered per user, pulled within 30 days of the attestation date. Screenshots of a single test account are not accepted.

## EDR: coverage gaps are the new exclusion trigger

Endpoint detection and response is the second pillar. Carriers are no longer satisfied by antivirus declarations. The minimum bar in 2026 is an agent-based EDR solution with active behavioural detection, coverage across all managed endpoints, centralised alerting, and either a managed detection and response service or documented 24/7 SOC coverage [source: https://seedpodcyber.com/cyber-insurance-requirements-the-minimum-controls-checklist-for-smbs-msps/].

The coverage gap problem is where most claims get challenged post-incident. If your EDR console shows a handful of endpoints without agents, you need documented compensating controls for each exception and a named owner. Carriers have begun including warranty language that ties claim eligibility to the percentage of enrolled endpoints. Read your policy for "EDR coverage threshold" clauses before you sign the attestation.

Evidence that works: an export from your EDR platform showing agent version, last check-in timestamp, and managed or unmanaged status per device, reconciled against your asset inventory. Any gap between the two lists needs an explanation in writing.

## Backups: the offline and immutable standard

Ransomware claims have pushed carriers to scrutinise backup architecture more closely than any other control area. The standard that appears across most 2026 policies [source: https://breachcraft.io/resources/blog/cyber-insurance-requirements/]:

- **3-2-1 or better**: three copies of data, across two media types, with one stored offsite
- **Offline or immutable copies**: at least one backup copy that ransomware cannot reach over the network — S3 Object Lock, Azure Blob versioning with legal hold, or air-gapped tape all qualify
- **Tested restores**: carriers increasingly require documented restore test records, not just backup job success logs — a backup you have never restored is an untested assumption
- **Backup management plane MFA**: the admin console for your backup solution must itself be MFA-protected — several 2025 incidents involved attackers deleting cloud backups through an unprotected backup admin account

Recovery time matters too. Some policies tier premiums based on whether you can document an RTO under 72 hours for critical systems [source: https://seedpodcyber.com/cyber-insurance-requirements-the-minimum-controls-checklist-for-smbs-msps/]. If you cannot demonstrate that today, closing the gap before your renewal is worth the effort.

## Building the evidence package before the questionnaire arrives

The attestation form is a summary of evidence you should already hold. Carriers are increasingly requesting supporting documentation at the point of quote, and post-incident forensic reviews always subpoena it [source: https://ironscales.com/blog/cyber-insurance-in-2026-what-to-prioritize-and-how-ironscales-helps]. Building the folder the week the questionnaire lands is late.

Organise evidence by control family and update it on a quarterly cadence:

**MFA folder**: IdP export showing authentication method per user, policy configuration screenshots, exception log with owner sign-off dates.

**EDR folder**: console coverage report, agent version log, MDR service agreement or SOC escalation runbook.

**Backup folder**: 90-day job history, restore test records with measured RTO, screenshot of immutability configuration or offline copy inventory.

When you attest to a control at renewal, the evidence folder is what distinguishes a defensible claim from a rejected one when the forensics team arrives.

A trend to watch: carriers have signalled they are likely to require third-party validation of control posture at renewal for organisations carrying larger coverage limits [source: https://ironscales.com/blog/cyber-insurance-in-2026-what-to-prioritize-and-how-ironscales-helps]. SOC 2 reports, penetration test results, and carrier-appointed assessor visits are all being discussed. If your coverage falls in that range, start building toward external validation now.

## The renewal is a de facto audit

The underwriter reviewing your attestation is, in effect, an external auditor who can deny your claim if the post-incident evidence contradicts what you declared at renewal. Work through the checklist before you sign.

1. Pull your IdP coverage report. Any account without phishing-resistant MFA is a documented gap before your underwriter's scanning tool finds it externally.
2. Export your EDR enrollment report and reconcile it against your asset inventory. Document every exception with a named owner.
3. Trigger a backup restore test, measure the RTO against your critical systems list, and put the result in writing.
4. Read your policy for coverage threshold clauses and warranty conditions. Know the thresholds before you attest.

The GRC operator who approaches renewal with organised, current evidence spends the cycle negotiating terms. The one who scrambles spends it explaining gaps.

Cyber insurance renewal prep is a continuous posture problem, not a once-a-year scramble. CloudAnzen maps your MFA coverage, EDR enrollment, and backup controls continuously so the evidence is ready the day the questionnaire arrives. [Talk to us](/demo).