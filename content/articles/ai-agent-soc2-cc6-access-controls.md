---
title: "AI agent access controls for SOC 2: preventing the CC6 failures auditors are flagging"
summary: "AI agents are breaking SOC 2 CC6 controls — here is what auditors look for and how to close the gap before fieldwork starts"
type: "blog"
collection: null
category: "Access control"
readTime: "6 min read"
tags: ["SOC 2","CC6","AI agents","access control","audit readiness"]
sortOrder: 104
publishedAt: "2026-07-24"
author: "chloe-thompson"
---
AI agents don't log in. They don't have a name in your IdP. They call APIs with credentials your access review never touched. That's exactly the scenario auditors started flagging in CC6 findings during 2026 fieldwork, and it catches teams off guard because nothing in the legacy access control playbook covers a service identity that can spawn sub-agents, re-authenticate on its own schedule, and operate across the boundary of your stated scope.

## Why CC6 breaks when AI agents enter the picture

CC6 — SOC 2's Logical and Physical Access Controls criteria — requires that access to systems and data is restricted to authorised entities, and that those entities are reviewed periodically. Classic controls were designed for humans and conventional service accounts: provisioning workflows, role-based access, quarterly access reviews.

AI agents break the model in three specific ways.

**They are dynamic.** An agent can spin up a temporary execution context with its own short-lived credential, perform its work, and terminate. Your IdP never records it.

**They chain privileges.** An orchestrator calls sub-agents. Each sub-agent may carry its own API key. The effective permission set of the orchestrator is the union of all downstream credentials — which no single access review captures.

**They hold secrets in unexpected locations.** Environment variables in CI pipelines, secrets referenced from model context, third-party API keys embedded in agent configuration. None of these live in your PAM tool.

The CC6 finding language auditors are writing now typically reads: *"Management did not demonstrate that logical access for AI agent service accounts was reviewed during the period."* That is a deviation. It appears in your Type II report.

## What CC6.1, CC6.2, and CC6.3 each require for agent identities

The CC6 criteria are specific. So are the evidence gaps.

**CC6.1** covers the infrastructure restricting logical access. For agents, every agent identity must be registered as a service account in a system of record. If you cannot enumerate your agents the same way you enumerate your employees, you cannot satisfy this control.

**CC6.2** covers provisioning and de-provisioning. Agents need a provisioning process. That means: who approved this agent's API key scope? When was it granted? What is the review cadence? If the answer is "a developer created it," the control is not operating.

**CC6.3** covers removal of access when no longer required. Agents get retired. Keys do not always get rotated or deleted when agents are deprecated. Auditors will ask for evidence of key revocation tied to agent retirement events.

The practical test: can you produce a list of every AI agent service identity active during the audit period, the scope of its permissions, who approved it, and when it was last reviewed? If that list does not exist, you have a CC6 gap before fieldwork begins [source: https://soc2auditors.org/insights/soc-2-security-controls/].

## Building the evidence package auditors accept

The gap is not conceptual. Teams understand that agents need access controls. The failure is that no repeatable process exists to produce evidence.

A defensible CC6 evidence package for AI agents needs five components.

**Agent registry.** A maintained list of agent identities tied to the systems they operate in. At minimum: agent name, associated service account or API key reference, owning team, provisioning date, current scope.

**Provisioning approvals.** A record — ticket, pull request, change record — showing that scope was reviewed and approved before the agent received credentials. The approval must be dated within the audit period for agents provisioned during the period.

**Quarterly access review.** The same cadence that applies to human accounts applies to agent identities. The review must confirm each agent's scope is still appropriate, that no agent has accumulated excess permissions, and that deprecated agents have been offboarded. Document who performed the review and when.

**Credential rotation evidence.** Proof that credentials for long-lived agent identities are rotated on a defined schedule. Your policy must state the cadence; your secrets manager logs must confirm it happened [source: https://securitycomplianceguide.com/blog/soc-2-updates-2026/].

**De-provisioning records.** When an agent is retired, a corresponding record shows the credential was revoked. This is the CC6.3 evidence item most teams are missing.

## Where CC6.3 findings are actually coming from

Of the three CC6 sub-criteria, CC6.3 generates the highest volume of AI agent findings. The reason is operational: deprecating an agent is a development event, not a security event. The developer removes the code. The API key stays live.

Auditors are direct about this. They pull active API keys from your secrets management system, cross-reference against your agent registry, and flag keys that remain active for agents no longer operating. Teams that have not built a formal agent offboarding process get flagged on this step consistently [source: https://soc2auditors.org/insights/soc-2-security-controls/].

Fix it operationally: add key revocation to your agent deprecation checklist. Make it mandatory. Tie it to your change management process so there is a record. That record is your CC6.3 evidence.

### When the de-provisioning gap is historical

If you cannot produce revocation records for agents deprecated before your process existed, a compensating control narrative is the path forward. Document when the gap existed, what detective controls covered it — log review, anomaly alerting — and when the remediation process was implemented. Auditors understand that controls mature over time. What they will not accept is no documentation at all.

## Scoping agent access controls before your next audit window

The most common mistake is treating agent access control as a future project. Auditors are flagging it in current engagements, and the scope is broad [source: https://www.konfirmity.com/blog/soc-2-what-changed-in-2026]. If your Type II period covers the last twelve months and agents have been running for any portion of that period, you need evidence or a compensating control narrative for the full period.

The cleaner path: scope agent access controls into your next control review cycle. Define the policy. Build the registry. Run the first access review. Get that evidence dated before fieldwork starts, not after.

A few implementation steps reduce friction significantly: store your agent registry in whatever system you already use for service account tracking; use your existing change management workflow to gate API key provisioning; tie agent deprecation to the same ticket workflow that governs infrastructure teardown. None of this requires a new tool. It requires a defined process and someone accountable for it.

Audit prep already consumes more team capacity than it should. CloudAnzen maps your AI agent service identities to CC6 controls continuously, surfaces access review gaps before they become findings, and maintains the evidence trail your auditor will ask for on day one of fieldwork. [Talk to us](/demo).