---
title: "Ransomware recovery playbook: isolation to business restoration"
summary: "The decision sequence from confirming ransomware through containment, evidence preservation, and tiered restoration to get production back safely"
type: "blog"
collection: null
category: "Incident response"
readTime: "6 min read"
tags: ["incident response","ransomware","IR playbook","business continuity"]
sortOrder: 0
publishedAt: "2026-06-28"
author: "maria-rodriguez"
---
You get the call at 2 AM. Encrypted files. Ransom note on every desktop. The SOC is already on a bridge. The next four hours determine whether you are looking at a week of recovery or a month of crisis management. What follows is the operational sequence — not the 50-page incident response policy that lives in SharePoint, but the decisions, in order, that actually get you through.

## Step one: contain before you investigate

The impulse is to understand what happened. Resist it. Your first job is to stop the spread.

Isolate at the network boundary, not the host boundary. Pull affected segments off the production network using firewall rules or security groups. Do not shut down endpoints yet — running memory contains decryption keys, attacker tooling, and process trees that you will need for forensics. Killing power destroys all of it.

Revoke write access to shared storage immediately. NAS shares, S3 buckets with overly permissive policies, backup targets accessible from production networks. Read access can stay for now; write is the attack surface the ransomware is exploiting right now.

Disable external access paths. VPN concentrators, RDP gateways, jump boxes. The attacker almost certainly entered through one of these vectors [source: https://www.cyber.gc.ca/en/guidance/ransomware-playbook-itsm00099]. Closing them cuts off reinfection and stops additional credential harvesting.

Suspend compromised accounts — do not reset them. A password reset signals to the attacker that they have been detected. A suspended account just stops working. Reset credentials later, from a clean machine, after you control the environment.

## Step two: assess scope without tipping your hand

Once the blast radius is contained, you need to understand what you are dealing with: what is encrypted, what is merely offline, and whether the attacker has pre-positioned on systems you have not yet touched.

Run your assessment from out-of-band infrastructure — a clean laptop on a separate network, not a machine that touched the production environment during the incident window. Assume the attacker is still watching.

Check backup integrity before anything else. Modern ransomware operators spend time inside your environment specifically to corrupt backups before triggering encryption [source: https://www.n-able.com/blog/ransomware-recovery-playbook]. Pull backup metadata, verify checksums, and test restorability on a sample set before deciding your recovery path. Intact backups mean you are recovering on your terms. Compromised backups change the entire calculus.

Build two separate lists: confirmed encrypted systems and systems that are offline due to isolation but not yet encrypted. A system in the second list can be cleaned and returned to service without a full restore. Treat them differently in your recovery plan.

Look for attacker persistence on systems that appear clean. Ransomware operators routinely pre-position on secondary systems — scheduled tasks, startup items, service installs — before triggering the encryption payload on primary targets. A host that looks clean with a suspicious scheduled task is not clean.

Identify patient zero. You need the initial access vector closed before recovery begins. Correlate authentication logs for anomalous activity in the 48 to 72 hours preceding the encryption event. Initial access is usually credential-based, and the window between compromise and detonation is rarely hours — it is days.

## Step three: preserve evidence before you remediate

Under pressure to restore, teams gut the evidence. This is the mistake that makes the next incident worse and makes your insurance claim harder to defend.

Take forensic images before reimaging anything. Disk images of encrypted hosts, memory captures from systems still running, network flow logs for the period preceding the event. Your legal counsel and cyber insurer will need these artifacts [source: https://blog.computersecurity.us/ransomware-recovery-steps-playbook-4/].

Preserve ransom notes in their original form. Do not delete them. They carry versioning information that identifies the ransomware variant, which determines whether public decryptors exist and directly informs your insurance claim and law enforcement referral.

Keep a timestamped incident log from the moment of discovery. Every action taken, every system touched, every external party notified. This document becomes your regulatory notification evidence, your board briefing, and the foundation of your retrospective. Incident response without a contemporaneous timeline cannot be reviewed or defended after the fact.

Notify legal counsel and your cyber insurer now, not after recovery. Attorney-client privilege over your investigation materials may depend on who you notify and when. Your insurer's breach coach or panel counsel may need to be in the loop before certain decisions — including any negotiation — are made.

## Step four: restore in tiers, not all at once

Most teams try to restore everything simultaneously. The result is a second incident caused by restoring from a backup the attacker has already seeded.

Restore in order based on criticality and confirmed clean status.

**Identity first.** Your directory service — Active Directory or your cloud IdP — comes before anything else. You cannot safely restore any production system if your identity plane is still compromised. Rebuild domain controllers in an isolated environment, validate them, then reconnect [source: https://www.cyberreadinessinstitute.org/wp-content/uploads/20-CRI-Ransomware-Playbook.pdf]. Rotate all privileged credentials from a clean machine before any production restore. Assume every domain admin credential used during the incident window is burned.

**Business-critical read-only systems second.** Finance reporting, internal coordination tools, customer-facing status pages. Restore from verified clean backups to new infrastructure — not the original hosts — and confirm clean before opening to users.

**Transactional production third.** Core product, payment flows, data pipelines. Only after identity is confirmed stable and restore sources are verified clean. Bringing a transaction system up from a seeded backup re-encrypts your recovery and compounds the incident.

**Everything else last.** Productivity tools, internal wikis, non-critical integrations. They wait until production is stable. Where possible, restore to new instances rather than cleaning originals — imaging over a known-infected host carries residual risk that is hard to eliminate and harder to prove you eliminated.

## Step five: close the door before you close the incident

You are not done when the last system comes back online. You are done when you have closed the initial access vector, rotated all credentials exposed during the dwell period, and confirmed that no attacker persistence survives on any system.

Schedule the retrospective within five business days of full recovery, while details are still fresh across everyone who was involved. The output is a set of action items — each with an owner and a deadline. A retrospective that produces a list without owners is a meeting, not a retrospective.

The three questions your retrospective must answer: what was the initial access vector, what was the dwell time before encryption triggered, and what was the backup gap — the configuration that looked correct but failed under real conditions. These three findings drive the remediations that change your risk posture.

Update your IR runbook with every gap identified. The playbook you had going into this incident was the best version of your pre-incident knowledge. The version you write afterward is the first one actually worth running.

Ransomware incidents expose the gap between what your controls documentation says and what your environment actually does. CloudAnzen maps your stack to controls continuously so your IR evidence, access inventory, and audit trail reflect the real state of your environment — before the auditor arrives, and before the attacker uses it against you. [Talk to us](/demo).