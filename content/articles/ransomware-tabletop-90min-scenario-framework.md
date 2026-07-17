---
title: "Ransomware tabletop exercise: the 90-minute scenario framework for security and legal teams"
summary: "A structured 90-minute scenario that puts security and legal in the same room before a ransomware incident forces the conversation under real pressure"
type: "blog"
collection: null
category: "Incident response"
readTime: "6 min read"
tags: ["ransomware","tabletop exercise","incident response","legal","IR planning"]
sortOrder: 97
publishedAt: "2026-07-17"
author: "maria-rodriguez"
---
The ransomware call comes on a Tuesday morning. Your incident response plan says invoke legal immediately. Legal says what's the exposure. Security says we're still assessing. That silence costs you. A structured tabletop exercise, run before the incident, buys you the coordination you need when the clock is real. Here is a 90-minute scenario framework that puts security and legal in the same room, under pressure, before any attacker does.

## Why security and legal must exercise together

Most teams run tabletop exercises inside the security function. Legal joins when the breach notification window is already running down. That is backwards.

Ransomware incidents require legal input from the first minutes: should the organisation pay, and under what conditions? How do you preserve attorney-client privilege over internal forensics? When does the regulatory notification clock start? How do you document decisions in a way that holds up under scrutiny?

Running a joint exercise surfaces these questions before they arrive under real pressure. CISA's Tabletop Exercise Packages are explicitly built for cross-functional audiences [source: https://www.cisa.gov/resources-tools/services/cisa-tabletop-exercise-packages]. They push scenarios toward decision points rather than pure technical remediation, because the technical team rarely needs practice isolating hosts — they need practice getting the right authorisation to do it in time.

## Pre-exercise setup

Before the clock starts, lock down three things in writing.

**Scope.** Which systems and data sets are in play. Which are out of scope. Be specific: production database cluster and associated backups, not the staging environment.

**Ground rules.** No live credentials. No actual system access. No real data used as scenario inputs. The exercise should feel realistic without creating genuine risk.

**Privilege framing.** Talk to legal about whether exercise records can be protected under attorney-client privilege. Some organisations run exercises under outside counsel specifically to preserve that option.

Assign roles before the room fills. Map directly to your actual IR plan: incident commander, technical lead, legal lead, communications lead. Use whatever titles your real plan uses.

Send each participant a one-page pre-read the evening before. It covers the scenario background — the company type, the relevant systems, the general threat landscape — but not the inject timeline. Participants should arrive prepared on context, not briefed on outcomes.

## The 90-minute scenario: four acts

### Act 1 — Discovery (0 to 15 minutes)

The inject: your endpoint detection tool alerts on lateral movement across three internal servers. A ransom note appears on a shared drive. Initial forensics suggest the attacker has been present for several days before detection.

Decision point: do you isolate now or maintain observation to understand scope? Who has authority to make that call?

This decision surfaces two gaps almost immediately. First, whether your technical team and business leadership agree on the isolation threshold, or whether the incident commander has to negotiate it in real time. Second, whether the person named as incident commander actually has authority to act, or needs another approval layer.

### Act 2 — Escalation (15 to 35 minutes)

The inject: a second wave hits your cloud backup system. A business-critical integration stops responding. A journalist emails your communications lead asking if you have experienced a security incident.

Decision points: is this a notifiable event under your jurisdiction's rules? Who calls the CEO? Do you acknowledge the journalist's email or stay silent?

The NCSC's Exercise in a Box materials identify this moment as the hardest in most tabletops [source: https://www.ncsc.gov.uk/section/exercise-in-a-box/tabletop-exercises]. Security wants silence to avoid tipping off the attacker. Legal wants to get ahead of disclosure. Communications needs guidance from both. The exercise forces the conversation before the real version has a hard deadline attached.

### Act 3 — Negotiation window (35 to 60 minutes)

The inject: the attacker sends a ransom demand with a deadline. Early forensics suggest some customer records were accessed before encryption began.

Decision points: under what conditions, if any, would the organisation pay? Who holds that authority? What is the regulatory notification deadline given the data types potentially exposed?

Split the room intentionally for this act. Legal and the incident commander work through the demand and exposure question. The technical team continues scoping the breach without being pulled into the payment discussion. Bring the groups back together at the 60-minute mark with separate summaries ready.

### Act 4 — Recovery (60 to 90 minutes)

The inject: systems are being restored from a known-clean backup. Forensics have identified the initial access vector — a phishing email targeting an accounts payable employee. One network segment still shows active attacker traffic.

Decision points: what is the sequenced recovery order? When and how do you notify customers? What changes before next month?

Analysis of tabletop exercises consistently shows that recovery decisions expose undiscovered gaps in backup coverage and communication authority chains [source: https://www.cm-alliance.com/cybersecurity-blog/the-ultimate-guide-to-a-cyber-tabletop-exercise-in-2026]. Knowing your recovery sequence in the abstract is different from knowing it under time pressure with partial information.

## Capturing findings and running the debrief

Assign a dedicated scribe for the full exercise. The scribe's job is not to record correct answers — it is to capture where participants paused, disagreed, or went silent. Those moments mark the gaps.

Run a 20-minute debrief immediately after the scenario ends. Three questions:

- What decision took the longest to reach, and why?
- What information were you missing that you needed?
- Where did communication break down?

Write the debrief up within 48 hours. A tabletop that produces no written action list is a compliance checkbox. A tabletop that produces a specific list of owners and due dates is a control improvement. The difference is whether someone owns the writeup.

## Mapping exercise findings to your compliance evidence

The findings are only useful if they land in tracked artefacts. Map each gap to a specific IR plan section, an owner, and a due date. Then map those updates to the controls your framework requires.

For organisations under SOC 2, ISO 27001, or NIST CSF, this closes the loop between the exercise and your audit evidence. Auditors want evidence that tabletops drive documented improvement, not just evidence that they occurred. An IR plan that has not been updated based on exercise findings shows you ran the exercise and ignored the output.

If your plan has not been tested in the past year, run this framework before your next audit window opens and capture the output. An untested plan is not a control — it is a document.

Ransomware responses fail when legal and security have not built a shared model of who decides what, and when. CloudAnzen continuously maps your incident response controls to SOC 2, ISO 27001, and NIST CSF so the evidence is current when the auditor or regulator asks. [Talk to us](/demo).