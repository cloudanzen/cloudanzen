---
title: "Phishing-resistant MFA: mapping FIDO2 and passkeys to your compliance frameworks"
summary: "FIDO2 and passkeys remove credential theft from the attack surface — how they map to SOC 2, ISO 27001, HIPAA, and PCI DSS and what evidence auditors expect"
type: "blog"
collection: null
category: "Access control"
readTime: "6 min read"
tags: ["FIDO2","passkeys","phishing-resistant MFA","access control","compliance evidence"]
sortOrder: 94
publishedAt: "2026-07-14"
author: "sarah-jenkins"
---
An attacker proxied your login page in real time, captured the TOTP code, and authenticated before the six-second window closed. The user did everything right. The control failed. This is adversary-in-the-middle phishing — and it is why auditors under frameworks from SOC 2 to PCI DSS are asking, with increasing specificity, whether your MFA is actually phishing-resistant or merely harder to phish than a password alone.

## Why conventional MFA fails the compliance bar

NIST SP 800-63B defines three authenticator assurance levels [source: https://pages.nist.gov/800-63-3/sp800-63b.html]: AAL1 (single-factor or weak multi-factor), AAL2 (strong multi-factor, which includes TOTP, push, and FIDO2), and AAL3 (hardware-bound, phishing-resistant only). TOTP apps and SMS codes meet AAL2. But AAL2 is a broad tent.

CISA's guidance separates that tent into two operational categories: MFA that is phishing-resistant and MFA that is not [source: https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf]. TOTP sits in the phishable category.

The attack surface is the code or token that travels from user to server. Adversary-in-the-middle kits proxy that exchange in real time. Push notification MFA falls to push bombing — repeated approval prompts until a fatigued user taps Accept. Neither attack requires malware or credential compromise. Both are in active use by ransomware affiliates and business email compromise groups.

Auditors increasingly know this. When your SOC 2 auditor asks whether MFA is "sufficiently strong" for administrative access, the right answer is not "yes, we have an authenticator app."

## What FIDO2 and passkeys actually do

FIDO2 is a two-part specification from the FIDO Alliance: WebAuthn (the browser and platform API) and CTAP2 (the protocol between the authenticator and the device) [source: https://fidoalliance.org/fido2/]. The combination enables an authentication flow where your browser or OS generates a public/private key pair for a specific origin at enrollment. On each login, the authenticator signs a challenge that includes the origin in the cryptographic material. The server verifies the signature against the stored public key.

A phishing proxy on `login-yourapp.fake.com` receives a signature that is mathematically valid only for the enrolled origin. The attacker gets nothing replayable. There is no shared secret in transit to steal.

The SANS Institute frames the distinction directly: the phishing-resistance property comes from origin binding, not from the strength of the secret [source: https://www.sans.org/blog/what-is-phishing-resistant-mfa]. The user's action — biometric, PIN — stays local. What leaves the device is a signed challenge, not a secret.

### Passkeys versus hardware keys: the compliance distinction

Passkeys are FIDO2 credentials. The split that matters for GRC work is how the private key is stored.

**Hardware security keys**: private key generated on-device and cannot be exported. Satisfies NIST AAL3 requirements for hardware-bound authenticators [source: https://pages.nist.gov/800-63-3/sp800-63b.html]. The right choice for the highest-privilege accounts.

**Device-bound passkeys**: stored in a platform secure enclave — TPM on Windows, Secure Enclave on Apple silicon. Cannot be exported. Meets AAL2 with strong hardware backing; acceptable for most enterprise compliance requirements.

**Synced passkeys**: backed up to a cloud keychain such as iCloud or Google Password Manager. The private key material leaves the originating device. NIST AAL3 does not permit them; AAL2 allows them with caveats [source: https://pages.nist.gov/800-63-3/sp800-63b.html]. Appropriate for lower-assurance contexts where phishing resistance matters but key non-exportability does not.

For privileged and production access, default to hardware keys or device-bound passkeys. Treat synced passkeys as an option for general employee access after you have validated your IdP's handling of key sync.

## Mapping to your compliance frameworks

Phishing-resistant MFA does not map to one control. It maps across several, and the evidence you collect should reflect all of them.

**NIST SP 800-63B** — Define which AAL level you target for which access tier and document it in your authentication policy. If you claim AAL3 for privileged accounts, the evidence is hardware key inventory and enrollment records, not just a policy statement [source: https://pages.nist.gov/800-63-3/sp800-63b.html].

**SOC 2 CC6.1** — The criterion asks whether logical access controls restrict access to authorized users. Auditors check whether MFA is enforced and whether it resists the attack patterns being seen in the wild. For production and administrative access, phishing-resistant MFA versus phishable MFA is a meaningful finding difference. Evidence: IdP policy configuration export, conditional access rules, authentication method restriction settings.

**ISO 27001 Annex A 8.5** — "Secure authentication" in the 2022 controls set requires that authentication strength is appropriate to the risk. For privileged, production, and externally-accessible access paths, "appropriate" increasingly resolves to FIDO2. Evidence: risk-linked control justification in your Statement of Applicability, IdP configuration export, exception log.

**HIPAA §164.312(d)** — Person authentication is a required technical safeguard. The requirement does not prescribe a method, but it does require that the person accessing electronic protected health information is who they claim to be. Phishing-resistant MFA materially closes the gap between what the policy intends and what the control actually enforces. Evidence: authentication policy, IdP enforcement settings, workforce training records.

**PCI DSS v4.0 requirements 8.4–8.6** — Multi-factor authentication is required for all access to the cardholder data environment and for all remote access. The standard does not yet mandate phishing-resistant methods specifically, but QSAs are asking whether the MFA in place is subject to known bypass techniques. FIDO2 removes that conversation.

## Building the evidence package

For each framework, define what evidence demonstrates the control is operating — not just configured. A policy that requires FIDO2 without enforcement telemetry is an intention, not a control.

A serviceable evidence set for most programs:

- **Authentication policy** that names FIDO2 and links it to specific access tiers and assurance levels.
- **IdP configuration export** showing that phishing-resistant methods are enforced — not just permitted — for the relevant access paths.
- **Enrollment records in aggregate** — number of enrolled credentials, coverage percentage against the target population. Auditors want population coverage, not individual names.
- **Exception log** documenting every account still on a weaker method, with a named owner, compensating control, and review date.
- **Sign-in telemetry** showing the authentication method actually used, not just the policy configured. Some identity providers allow step-down to weaker methods under certain device conditions. Telemetry is what proves enforcement.

The exception log is the item operators most often skip. Persistent exceptions are the audit finding that turns into a repeat observation at the next audit. Track them from the beginning, not in the week before fieldwork.

CISA's guidance is a reference worth linking directly in your policy document, both because it names FIDO2 explicitly and because it signals to auditors that the control rationale is grounded in authoritative guidance [source: https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf].

Phishing-resistant MFA closes a control gap that conventional MFA leaves open — and auditors under SOC 2, ISO 27001, HIPAA, and PCI DSS are paying attention. Getting FIDO2 deployed is one part of the work; keeping continuous evidence that it is operating as intended is the other. CloudAnzen maps your identity and access controls to framework requirements and tracks enforcement coverage so gaps surface before the auditor does. [Talk to us](/demo).