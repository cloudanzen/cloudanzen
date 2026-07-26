---
title: "SMS to FIDO2: migrating your workforce to phishing-resistant MFA"
summary: "How GRC teams move employees off SMS and TOTP onto FIDO2 without creating audit gaps in their SOC 2 or ISO 27001 evidence trail"
type: "blog"
collection: null
category: "Access control"
readTime: "6 min read"
tags: ["phishing-resistant MFA","FIDO2","access control","SOC 2","ISO 27001"]
sortOrder: 106
publishedAt: "2026-07-26"
author: "sarah-jenkins"
---
The OTP your employee just typed into the phishing site was valid. The attacker used it. Your MFA log shows a successful authentication. That is the failure mode that SMS-based MFA and authenticator apps cannot prevent — and the scenario that CISA has specifically asked organizations to close [source: https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf]. If you have a SOC 2 or ISO 27001 audit scheduled, this is no longer a theoretical risk your auditor is willing to overlook.

## Why SMS and TOTP leave you exposed

Adversary-in-the-middle (AiTM) attacks work against any MFA method where the code or session is transferable. The attacker stands up a transparent proxy between your user and the real login page. The user enters their password and their SMS code. The proxy relays both to the real service and captures the session token. From the IdP's log, the login looks clean.

CISA published guidance classifying SMS OTP and TOTP as non-phishing-resistant and specifically recommended FIDO2 and certificate-based authentication as the baseline for high-value accounts [source: https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf]. That guidance was aimed at federal agencies, but the attack mechanics are identical in the commercial SaaS world.

There is also push notification fatigue — a different vector, same outcome. Users who see an unexpected MFA push at an inconvenient time sometimes approve it out of reflex. It does not require a proxy. It just requires the attacker to have the password and the patience to push at the wrong moment [source: https://www.miniorange.com/blog/multi-factor-authentication-mfa-best-practices/].

FIDO2 closes both doors at the protocol layer. The authenticator signs a challenge that includes the origin domain of the relying party. A phishing site hosted on a different domain produces a challenge that no legitimate authenticator will sign. Push fatigue does not apply — there is no push to approve.

## What FIDO2 actually deploys as

FIDO2 covers two specs: WebAuthn (the browser API) and CTAP2 (the protocol that lets external authenticators speak to it). For most SaaS teams, this translates into three practical choices.

**Hardware security keys** — YubiKey, Google Titan, Feitian. USB-A, USB-C, or NFC. CISA recommends hardware keys for privileged users and high-value targets [source: https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf]. They work offline, they are auditable, and they do not sync to a cloud account. The downside is unit cost and key management overhead — distribution, loss reporting, decommissioning.

**Platform authenticators** — Windows Hello, Touch ID, macOS Face ID. Built into the device. A TPM or Secure Enclave stores the private key so it never leaves the hardware. No extra device to buy, no extra device to lose. This is the right choice for standard users on managed corporate hardware.

**Passkeys** — the consumer-friendly FIDO2 variant, often synced via iCloud Keychain or a password manager. Simpler UX, but sync introduces key custody questions. Know how your IdP classifies synced passkeys before counting them as phishing-resistant in your control narrative.

Microsoft's Secure Future Initiative recommends a tiered approach: hardware keys for administrators and high-privilege roles, platform authenticators for standard users [source: https://learn.microsoft.com/en-us/security/zero-trust/sfi/phishing-resistant-mfa]. That framing maps cleanly onto a SOC 2 user classification matrix.

## Running the migration without creating audit gaps

This is where most teams create problems. The technology works. The evidence trail does not.

**Inventory your current MFA posture before you change anything.** Pull MFA method reports from your IdP for every user. Know what method each group is on, what resources they access, and whether those resources support WebAuthn. Some legacy SaaS apps do not. Migrating users before you know which apps they use will strand people on fallback authentication.

**Enforce via conditional access, not user preference.** Okta, Entra ID, and Google Workspace all let you require specific authenticator assurance levels per application or user group [source: https://learn.microsoft.com/en-us/security/zero-trust/sfi/phishing-resistant-mfa]. Tie the FIDO2 requirement to the application policy. Users will find workarounds if it is optional.

**Run the highest-risk group first.** Engineers with production access, finance team members with wire-transfer authority, and executives are the highest-value phishing targets. Enroll them first. This gives you operational data — how long enrollment takes, how many support tickets it generates, which apps fail — before you roll out to the full company.

**Document every policy change as it happens.** Your SOC 2 auditor will ask when the conditional access policy was changed, who approved it, and what the rollout timeline looked like. If you migrate one week before your audit window opens, you do not have enough evidence history. Plan the migration at least four to six months before your audit period begins.

**Handle exceptions deliberately and in writing.** Not every user will have a FIDO2-capable device on day one. Some legacy systems may only support RADIUS or LDAP with no FIDO2 path. Document each exception: the compensating control, who approved the exception, and the target remediation date. Undocumented exceptions become findings.

## What your auditor expects to see

For SOC 2 Type II, phishing-resistant MFA speaks directly to CC6.1 (logical access controls). Auditors are increasingly asking not just whether MFA is enabled but what type — and whether it is enforced by policy or left to user choice.

Evidence that holds up:

- A written MFA policy specifying required authenticator types per user classification
- IdP configuration screenshots showing the FIDO2 enforcement policy and its effective date
- A list of exceptions with compensating controls and remediation timelines
- MFA method audit logs showing which users are on which authenticator

The last item catches teams off guard. Most IdPs generate MFA method logs, but default retention may be shorter than your audit period [source: https://www.miniorange.com/blog/multi-factor-authentication-mfa-best-practices/]. If your audit spans 12 months, you need to export and store those logs independently.

For ISO 27001, the relevant control is A.8.5 (secure authentication). The evidence set is similar, but your ISMS control narrative needs to explicitly name phishing resistance as a threat the control addresses. Saying you have MFA is not the same as saying you have phishing-resistant MFA and documenting why that distinction matters to your threat model.

## Recovery paths that do not undo your security gains

A migration is only as strong as its recovery process. If a user loses their hardware key and the fallback is "reset to SMS OTP to enroll a replacement," you have built a bypass into the system. The attacker does not need to defeat FIDO2 — they just need to trigger account recovery.

Define your recovery process before go-live:

- Hardware key replacement: what is the SLA, who approves it, and how is identity re-verified out of band before a new key is enrolled?
- Lost platform authenticator: what triggers device re-enrollment, and does it require manager approval or a video verification step?
- Backup codes: are they permitted at all? If yes, where are they stored and who has access?

Zero Trust identity thinking has moved toward recovery workflows that do not fall back to weaker factors [source: https://www.trustcloud.ai/security-assurance/what-security-leaders-need-to-know-about-zero-trust-identity-management-in-2026/]. Most Series A–C teams handle this with a documented process rather than automated tooling. That is acceptable to auditors — but the process has to be written, version-controlled, and consistently followed. Verbal norms do not survive evidence requests.

Also: plan for a support spike in the first two weeks of rollout. Assign someone to handle it. A poorly managed rollout that generates unresolved helpdesk tickets reads as a controls failure even when the underlying technology is working correctly.

The shift from SMS to FIDO2 is one of the clearer security improvements available to SaaS compliance teams right now, and auditor expectations around authenticator type are moving fast. CloudAnzen tracks your MFA enforcement posture against CC6.1 and A.8.5 continuously so when your auditor asks for phishing-resistant MFA evidence, the answer is ready — not assembled at the last minute. [Talk to us](/demo).