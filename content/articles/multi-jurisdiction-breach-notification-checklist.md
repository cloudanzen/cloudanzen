---
title: "Multi-jurisdiction breach notification: a 2026 compliance checklist"
summary: "All 50 US states have breach notification laws, timelines range from 30 to 60 days, and India's DPDP adds a parallel 72-hour clock."
type: "blog"
collection: null
category: "Incident response"
readTime: "6 min read"
tags: ["breach notification","incident response","multi-jurisdiction","DPDP","state laws"]
sortOrder: 60
publishedAt: "2026-06-03"
author: "maria-rodriguez"
---
The breach is confirmed at 11 PM on a Thursday. Your legal lead is in a different time zone. You have users in California, New York, and Chennai. Three regulatory clocks just started, and they run at different speeds.

This is not a hypothetical. It is the operating reality for any SaaS company selling across US states and India in 2026. Here is what you need to know before the incident happens.

## The US patchwork: 50 laws, no single deadline

All 50 US states, plus DC, Guam, Puerto Rico, and the US Virgin Islands, now have data breach notification statutes [source: https://privacyrights.org/resources-tools/reports/data-breach-notification-laws-50-state-survey-2026-edition]. That sounds like progress. The problem is uniformity: the laws share almost no common deadline structure.

As of 2026, 20 states specify a fixed numeric notification deadline for consumers. The other 31 use qualitative language — "without unreasonable delay" — which creates real ambiguity under pressure [source: https://iapp.org/resources/article/state-data-breach-notification-chart].

The fixed-deadline states split into three tiers:

- **30 days**: California, Colorado, Florida, New York, Washington
- **45 days**: Alabama, Arizona, Indiana, New Mexico, Ohio, Oregon, Rhode Island, Tennessee, Vermont, Wisconsin
- **60 days**: Connecticut, Delaware, Louisiana, South Dakota, Texas

If your customer base spans even two of the 30-day states, that is your working deadline. The shortest applicable clock governs.

Beyond individual notification, 36 states — 71% of all state breach laws [source: https://iapp.org/resources/article/state-data-breach-notification-chart] — require notice to a state regulator, typically the Attorney General. Thresholds and timing differ. Colorado requires AG notification when 500 or more residents are affected, and credit bureau notification when 1,000 or more records are involved — both within 30 days [source: https://perkinscoie.com/insights/publication/security-breach-notification-chart]. Florida triggers AG notification at 500 affected residents and penalties can reach $500,000 for extended non-disclosure [source: https://perkinscoie.com/insights/publication/security-breach-notification-chart]. Texas sets the AG threshold at 250 residents and allows 60 days [source: https://perkinscoie.com/insights/publication/security-breach-notification-chart].

You cannot assume that notifying consumers is enough. Map your AG obligations by state before the incident, not during it.

## What changed in 2026

Two significant state-level changes took effect January 1, 2026, making the landscape materially stricter.

**California SB 446** replaced the prior "most expedient time possible" standard with hard deadlines: 30 calendar days for consumer notification, and 15 calendar days to notify the California Attorney General after sending consumer notices (for breaches affecting 500 or more residents) [source: https://perkinscoie.com/insights/publication/security-breach-notification-chart]. California now has the most compressed AG notification deadline of any US state.

**Oklahoma SB 626** is the first overhaul of Oklahoma's breach law since 2008. It expands the definition of personal information to include biometric identifiers, government-issued ID numbers, financial routing codes, and unique electronic credentials [source: https://perkinscoie.com/insights/publication/security-breach-notification-chart]. It adds an AG notification requirement — within 60 days — for breaches affecting 500 or more residents. It also introduces a "reasonable safeguards" affirmative defense: entities that implemented appropriate security measures may invoke this in civil penalty disputes.

New York made its own significant change in December 2024, effective March 2025: the SHIELD Act amendment added a hard 30-day consumer notification deadline and expanded required regulators to four — Attorney General, Department of State, State Police, and the Department of Financial Services. Breaches affecting 500 or more New York residents require written determination to the AG within 10 days [source: https://iapp.org/resources/article/state-data-breach-notification-chart].

The pattern across all three changes is the same: discretionary language is being replaced with hard clocks.

## The international overlay: GDPR and India DPDP

US timelines measure in days. Two international regimes measure in hours.

**GDPR** requires notification to the relevant supervisory authority within 72 hours of discovering a qualifying breach. The regulation allows phased reporting — an initial notice with available information, then supplemental updates — but the first clock starts at awareness, not investigation completion [source: https://perkinscoie.com/insights/publication/security-breach-notification-chart].

**India's DPDP Rules 2025** run a parallel structure. Upon becoming aware of a personal data breach, a data fiduciary must notify the Data Protection Board of India without delay and submit a detailed report within 72 hours [source: https://privacyrights.org/resources-tools/reports/data-breach-notification-laws-50-state-survey-2026-edition]. There is no minimum threshold — a breach affecting one person carries the same notification duty as a breach affecting one million. If the incident also constitutes a cybersecurity incident, CERT-In requires a separate notification within six hours. These are parallel obligations, not alternatives.

The 72-hour DPDP window is continuous. If the breach is confirmed on a Friday evening, the detailed Board report is due Monday evening — weekends and public holidays do not pause the clock.

For a SaaS company with EU and Indian users alongside US customers, a single incident can simultaneously trigger: GDPR (72-hour regulatory notice), DPDP (72-hour DPBI report plus 6-hour CERT-In if applicable), and US state consumer notifications (30 to 60 days depending on state). These clocks run in parallel, not sequence.

## A pre-incident checklist

Most breach notification failures are not legal failures — they are operational ones. The legal requirements were knowable. The team just did not work them out in advance.

Before the next incident:

**Map your exposure by jurisdiction.** List every US state where you have customers, identify the applicable deadline and AG threshold for each, and document the shortest applicable consumer notification clock. If you have EU users, add GDPR. If you have Indian users or process data in India, add DPDP and CERT-In.

**Assign ownership before the incident.** Breach notification requires legal review, security forensics, and executive sign-off. Define who makes the final notification decision and who drafts the regulator filings. Document this in your incident response plan — not in someone's head.

**Build notification templates per jurisdiction.** California's required notice content differs from New York's. The GDPR supervisory authority form differs from the DPBI detailed report. Pre-drafting these under attorney guidance, even in skeleton form, cuts the time spent under pressure.

**Track the "no harm" exemption carefully.** Some states — Alaska, Michigan, Ohio, Kansas — permit skipping consumer notification if a documented risk assessment finds no reasonable likelihood of harm. This exemption exists, but the documentation requirements are strict. Several states also require AG notification of the determination even when consumer notice is waived. Connecticut is actively considering legislation to eliminate this exemption for forensic AG reporting [source: https://iapp.org/resources/article/state-data-breach-notification-chart]. Assume exemptions are shrinking, not expanding.

**Test your detection-to-awareness gap.** Most breach notification clocks start at "awareness" — the moment you knew or reasonably should have known. Weak detection and escalation processes mean the clock started before your incident response did. SIEM alerting, on-call escalation paths, and log retention policies all affect your real notification window.

**Retain documentation regardless of notification decision.** Whether you notify or invoke a harm exemption, document the timeline, the data involved, the risk assessment, and the decision rationale. Retain it for a minimum of three years. Regulators and plaintiffs both want to see this record.

## Risk-of-harm exemptions are tightening

One structural shift worth watching: the risk-of-harm exemption that lets companies skip consumer notification when data is encrypted or harm is unlikely is under pressure. States are not moving to eliminate it wholesale, but Connecticut's 2026 legislative proposals would remove the exemption specifically for forensic reporting obligations to the AG — meaning even a "no harm" determination may not eliminate the regulatory disclosure duty [source: https://iapp.org/resources/article/state-data-breach-notification-chart].

If your legal team has relied on this exemption as a backstop, revisit that assumption. The direction of travel is toward mandatory regulatory disclosure regardless of consumer harm assessment.

Breaches do not respect your audit schedule or your time zone. Mapping your jurisdiction exposure, assigning clear ownership, and pre-building your notification infrastructure before an incident happens is the only way to hit a 72-hour DPDP clock or a 15-day California AG deadline without chaos. CloudAnzen helps teams maintain the incident response documentation, data mapping, and regulatory obligation tracking that make multi-jurisdiction breach response executable. [Talk to us](/demo).