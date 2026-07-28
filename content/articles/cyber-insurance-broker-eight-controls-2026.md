---
title: "Cyber insurance underwriting 2026: the eight controls your broker now verifies before quoting"
summary: "Insurers have turned the renewal questionnaire into a technical audit — here are the eight controls they verify and the evidence you need ready"
type: "blog"
collection: null
category: "Risk management"
readTime: "6 min read"
tags: ["cyber insurance","underwriting","risk management","MFA","EDR"]
sortOrder: 108
publishedAt: "2026-07-28"
author: "james-peterson"
---
Renewal season used to mean a phone call and a PDF. Underwriters asked about revenue, employee count, and whether you had antivirus. That era is over. In 2026, cyber insurers have quietly turned the underwriting process into a technical audit. If you cannot produce evidence of eight specific controls, the quote either does not come back or it comes back unaffordable. Here is what your broker now verifies — and what you need to have ready.

## Why the questionnaire became an audit

Insurers lost heavily on ransomware claims between 2020 and 2023. The response was predictable: tighter underwriting, higher premiums, and coverage exclusions for preventable incidents. By 2026, underwriting has become a technical audit in which brokers submit not just your answers but evidence — screenshots, policy documents, configuration exports — to the underwriter before a quote is issued [source: https://emergeits.com/blog/cyber-insurance-requirements-underwriting-has-quietly-become-a-technical-audit/]. Self-attestation alone is rarely enough for higher coverage limits.

The shift matters because controls that were best practice two years ago are now binary requirements. Missing one can void your coverage even after a claim has been paid.

## The eight controls underwriters verify in 2026

Across the major insurer groups operating in India and global markets, the verification checklist has converged on eight controls [source: https://basgcorp.com/blog/cyber-insurance-requirements-2026-what-insurers-demand/]. Not all insurers weight them equally, but all eight appear on every questionnaire.

### 1. Phishing-resistant MFA on all privileged access

Multi-factor authentication is no longer sufficient on its own. Underwriters now ask specifically whether admin and privileged accounts use phishing-resistant methods — FIDO2, hardware tokens, or passkeys — rather than TOTP or SMS. Evidence required: a screenshot of your IdP configuration or a policy document specifying the MFA method for privileged roles.

### 2. EDR on all managed endpoints with active monitoring

Endpoint detection and response tools must be deployed on every managed device, not just servers. Partial coverage is a common gap. Insurers are increasingly asking for a device inventory export to verify the coverage percentage [source: https://emergeits.com/blog/cyber-insurance-requirements-underwriting-has-quietly-become-a-technical-audit/].

### 3. Immutable, tested backups stored off-network

Backups that live on the same network as production are worthless against ransomware. Underwriters verify that backups are stored off-network or in a separate cloud account, are immutable, and have been tested within the last 90 days. A restore test log is the standard evidence.

### 4. Privileged access management or just-in-time elevation

Standing admin credentials are a top-of-the-attack-chain target. Insurers ask whether privileged access is managed through a PAM tool or whether just-in-time elevation prevents standing access. Evidence: a screenshot or policy showing how admins request and receive elevated access.

### 5. Vulnerability management with a documented remediation SLA

You need a defined SLA for patching critical CVEs. The typical threshold underwriters accept is critical vulnerabilities remediated within 30 days. Evidence: a configuration export from your vulnerability scanner showing open findings and their ages, or a policy that defines the SLA.

### 6. Network segmentation separating production from corporate

Flat networks allow ransomware to move laterally from a compromised laptop to a production database. Underwriters verify that your production environment sits in a segment isolated from corporate endpoints. Evidence: a network diagram or a firewall ruleset export.

### 7. Incident response plan with a tested tabletop exercise

An IR plan that has never been exercised is not evidence of readiness. Insurers now ask for the date of your most recent tabletop exercise and a summary of what changed afterward. A one-page after-action report is usually sufficient.

### 8. Email security controls — DMARC enforcement, DKIM, and SPF

Email remains the primary initial access vector. DMARC enforcement — not just monitoring mode — is a hard requirement for most insurers in 2026 [source: https://www.todyl.com/blog/how-cyber-insurance-requirements-are-changing]. Evidence: a DMARC record showing `p=reject` or `p=quarantine`, plus confirmation that SPF and DKIM are configured for all sending domains.

## What to do when you have gaps before renewal

The worst outcome is discovering gaps two weeks before your renewal date. Brokers can negotiate with underwriters on coverage terms if you can show a remediation plan with milestones — but you need lead time.

### Triage by insurer weight

Not all eight controls carry equal weight. MFA on privileged accounts, immutable backups, and full EDR coverage are the top three controls associated with renewal denials [source: https://www.cyberduo.com/blog/cyber-insurance-renewal-denied-2026-checklist/]. If you have to prioritize, start there. An insurer will sometimes accept a time-bound commitment for a lower-weight control; they will rarely accept one for MFA or backups.

### Assemble the evidence package before the questionnaire arrives

Underwriters cannot assess what they cannot see. Before renewal, pull together: IdP screenshots confirming MFA method on privileged accounts, a device inventory export showing EDR coverage, backup configuration screenshots and a restore test log dated within 90 days, a vulnerability scan report with SLA compliance data, a DMARC DNS record showing enforcement mode, a network diagram, and an IR tabletop after-action report. Having this ready shortens the underwriting cycle and reduces back-and-forth that delays your quote.

### Treat the questionnaire as a continuous readiness check

Waiting for renewal to discover which controls you are missing puts you in a reactive position. Teams that maintain the eight-control checklist as a standing operational cadence spend far less time scrambling — and tend to get better quotes because they can produce evidence the same day the questionnaire arrives [source: https://basgcorp.com/blog/cyber-insurance-requirements-2026-what-insurers-demand/].

## The evidence problem: having the controls is not the same as proving them

Most teams find that their real gap is not the controls themselves — it is the evidence. You have EDR deployed, but you cannot produce a device inventory export that matches your HR system. You have backups, but no restore test log from the last 90 days. You have an IR plan, but the tabletop exercise was 18 months ago.

Evidence lives in tools, not in one place. At renewal, someone has to manually pull screenshots from five different platforms and assemble them into a coherent submission. That process is slow, error-prone, and frequently surfaces controls that were assumed to be covered but were not.

Continuous evidence collection — mapping each of the eight controls to the tool that generates its evidence and maintaining that mapping over time — is what turns a reactive scramble into a one-day task. A cleaner, faster submission also affects premium and coverage terms. Underwriters reward teams that make their job easier.

Cyber insurance underwriting has become a technical audit, and the evidence package your broker submits is now as important as the controls you have deployed. CloudAnzen continuously maps your control stack to the eight controls insurers verify and keeps the evidence collection current so you are never scrambling at renewal. [Talk to us](/demo).