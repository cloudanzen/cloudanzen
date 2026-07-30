---
title: "Ransomware kill chain disruption: how to block initial access before encryption starts"
summary: "Ransomware ends in encryption but starts with a valid login — here are the identity, access and exposure controls that break the kill chain early"
type: "blog"
collection: null
category: "Incident response"
readTime: "6 min read"
tags: ["ransomware","initial access","identity security","NIST CSF","incident response"]
sortOrder: 110
publishedAt: "2026-07-30"
author: "maria-rodriguez"
---
Encryption is the last step, not the attack. By the time files lock, someone has been inside for days — logging in with valid credentials, reading your Slack, finding your backups, deleting your snapshots. Every control that changes the outcome fires before that moment. This is how to build the ones that break initial access, and how to evidence them so the work counts for your audit too.

## Attackers are logging in, not breaking in

The mental model most teams carry is wrong. They picture an unpatched CVE and a payload. What happens far more often is a valid login.

Stolen credentials remain the most reliable entry point into an environment, obtained through credential stuffing against reused passwords, password spraying at exposed services, and phishing [source: https://thehackernews.com/2026/04/no-exploit-needed-how-attackers-walk.html]. This works because a successful authentication looks like nothing. A port scan generates an alert. A login from a real account, with the right password and a satisfied MFA prompt, generates a row in a log nobody reads.

Privileged users get the focused attention. More than 8.2 million phishing emails hit VIP inboxes in 2025 [source: https://thehackernews.com/2026/04/no-exploit-needed-how-attackers-walk.html], over a quarter of all phishing activity. That is a deliberate strategy: compromise one admin identity and you inherit the blast radius across every connected SaaS and cloud tenant.

MFA does not settle this. Adversary-in-the-middle phishing puts the attacker between the user and the identity provider, harvests the password and the second factor in real time, and walks away with a valid session cookie [source: https://thehackernews.com/2026/04/no-exploit-needed-how-attackers-walk.html]. The attacker is then authenticated. Not bypassing your MFA — holding a session that already passed it.

There is a second door that gets less attention. Prior compromise now accounts for 30% of initial infection vectors [source: https://www.sans.org/blog/stay-ahead-ransomware-what-2026-threat-reports-are-telling-us], up from 15% [source: https://www.sans.org/blog/stay-ahead-ransomware-what-2026-threat-reports-are-telling-us] the year before. A previous incident you thought was closed is now one of the most common ways attackers get back in. Incomplete eradication is an initial access vector.

## This is industrial, and you are a queue entry

Teams under-invest here because they assume they are too small to be interesting. Ransomware-as-a-service removed targeting from the equation.

INC has claimed no fewer than 830 victims since August 2023 [source: https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html]. In Q1 2026 it ranked fourth by volume with over 120 incidents [source: https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html], behind Qilin at 338 and Akira at 197 [source: https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html]. Affiliates migrate between brands as operations get disrupted or shut down; the crews and the tradecraft persist even when the logo changes.

Two details matter operationally. United States organisations are more than 65% of INC's listed victims [source: https://thehackernews.com/2026/06/inc-ransomware-claims-830-victims-since.html], concentrated in legal services, manufacturing, construction, technology and healthcare. And the group's Windows and Linux/ESXi encryptors have been rewritten in Rust for easier cross-platform builds. Your hypervisor is a first-class target, not collateral damage.

None of this requires exotic threat intelligence to defend against. It requires a small number of boring controls, operated consistently, with evidence.

## Five controls that break initial access

### Phishing-resistant MFA on every identity path

Push-based and TOTP MFA lose to adversary-in-the-middle attacks. FIDO2 and passkeys do not, because the credential is bound to the origin. Roll it out to admins, engineering, finance and executives first, then everyone.

The failure mode is not the rollout. It is the exceptions. Every break-glass account, every service account with a password, every legacy IMAP or SMTP endpoint, every temporary bypass for the contractor with the unsupported device. Enumerate authentication paths, not users. If there is a way to reach your identity provider that does not require a phishing-resistant factor, that is the path the attacker will take.

### Make sessions short and revocable

If the stolen artefact is a session cookie, your token lifetime is your exposure window. Shorten session duration for privileged roles. Bind sessions to device posture where your identity provider supports it. Rehearse revocation: can an on-call engineer kill every active session for a user in under five minutes, at 3am, without a ticket? Time that drill. It is the most useful exercise you can run.

### Remove standing privilege

Attackers escalate through accounts that already had the permissions. Standing production admin, standing cloud org-level roles, standing database access. Move to just-in-time elevation with an approval and an expiry. Where you cannot, cut the population down and review it monthly.

Quarterly access reviews satisfy an auditor. They do not catch an attacker who arrives in week two of the quarter. Run privileged-tier reviews monthly.

### Close the exposed edge

Remote access services reachable from the internet without phishing-resistant authentication in front of them are the most reliable single point of failure. Inventory what is exposed — VPN concentrators, RDP, management interfaces, hypervisor and backup consoles, forgotten staging environments. Your backup infrastructure and your ESXi management plane should not be reachable from a workstation network.

### Treat unfinished incidents as live exposure

Prior compromise now drives 30% of initial infections [source: https://www.sans.org/blog/stay-ahead-ransomware-what-2026-threat-reports-are-telling-us]. Eradication needs a defined bar. Rotate credentials for every identity touched. Invalidate refresh tokens and API keys, not just passwords. Remove persistence in scheduled tasks, OAuth grants and identity provider app registrations. Write down what "closed" means for each incident and get a second pair of eyes on it before you close the ticket.

## Map these controls to NIST IR 8374r1 so the work counts twice

NIST published IR 8374 Revision 1 as a Ransomware Risk Management Community Profile built on CSF 2.0 [source: https://nvlpubs.nist.gov/nistpubs/ir/2026/NIST.IR.8374r1.pdf]. It identifies outcomes across GOVERN, IDENTIFY, PROTECT, DETECT, RESPOND and RECOVER that support protection against ransomware events.

Use it as your control spine rather than inventing your own taxonomy. The controls above already carry weight in the frameworks your buyers ask about:

| Control | NIST IR 8374r1 area | SOC 2 | ISO 27001:2022 |
|---|---|---|---|
| Phishing-resistant MFA | PROTECT (identity, authentication) | CC6.1, CC6.6 | A.5.15, A.5.17, A.8.5 |
| Just-in-time privilege | PROTECT (access management) | CC6.2, CC6.3 | A.5.15, A.5.18 |
| Session revocation | RESPOND | CC7.4 | A.5.26 |
| Exposure inventory | IDENTIFY (asset management) | CC7.1 | A.5.9, A.8.8 |
| Eradication standard | RECOVER, RESPOND | CC7.4, CC7.5 | A.5.26, A.5.27 |

One control, three audiences: the incident you are trying to prevent, the auditor, and the enterprise buyer's security questionnaire.

## The evidence pack

If you cannot show it, you cannot claim it. For each control, keep the artefact that proves it operated over a period — not a screenshot from the week before fieldwork:

- Identity provider export showing authentication methods by user and by application, dated, with the exception list and a documented owner for each exception
- Privileged role membership snapshots on a monthly cadence, with the diff and the approval trail for additions
- Session policy configuration, plus a timed revocation drill with the date, participants and elapsed time
- External exposure scan output on a fixed cadence, with tickets for anything remediated
- Closed incident records showing credential rotation, token invalidation and persistence checks against a written eradication checklist

That last item is the gap most teams carry. Incident tickets get closed with a narrative and no proof of eradication — which fails both an auditor's test of operating effectiveness and the next attacker's reuse attempt.

Ransomware defence fails in the same place audit prep fails: the controls exist, but nobody can prove they ran every week for a year. CloudAnzen continuously collects identity, access and exposure evidence against SOC 2, ISO 27001 and NIST CSF mappings, so your kill-chain controls are provable on the day the auditor — or the underwriter — asks. [Talk to us](/demo).