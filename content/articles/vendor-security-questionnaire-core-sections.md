---
title: "Vendor security questionnaire core sections"
summary: "The sections most teams actually need to assess vendor risk without sending a bloated questionnaire."
type: "guides"
collection: "vendor-risk"
category: "Vendor Risk"
readTime: "7 min read"
tags: ["Vendor risk","Questionnaires","Guides"]
sortOrder: 27
author: "james-peterson"
---
## Start with the essentials

Questionnaires should help you evaluate risk, not collect trivia. A bloated questionnaire slows vendors down, slows your own reviewers down, and often produces answers nobody reads. The better approach is to ask enough to make a risk decision, then go deeper only when the vendor's tier, data access, or regulatory exposure justifies it.

Before sending a questionnaire, confirm the vendor's use case, data handled, integration method, business owner, and risk tier. Those inputs should decide which sections are required.

## Core sections

- Data handling and retention
- Access control and MFA
- Logging and monitoring
- Incident response and breach notification
- Infrastructure and subprocessor model
- Business continuity and recovery

Each section should answer a decision question.

### Data handling and retention

Ask what data the vendor processes, where it is stored, who can access it, and how long it is retained. This section should also cover deletion support, export options, and whether customer data is used for training, analytics, or product improvement.

### Access control and MFA

Ask how workforce access is granted, reviewed, and removed. Confirm MFA for administrative access, privileged role controls, and whether customer administrators can manage their own users. For higher-risk vendors, ask about SSO, SCIM, and audit logs.

### Logging and monitoring

Ask what security events are logged, how logs are protected, and whether customers can access relevant audit logs. For vendors with production or customer-data exposure, monitoring and alerting practices matter because they influence detection and investigation.

### Incident response and notification

Ask how incidents are classified, who is notified, and what contractual notification commitments exist. The answer should tell you whether the vendor can support your own incident response obligations.

### Infrastructure and subprocessors

Ask where the service is hosted, which subprocessors are used, and how changes are communicated. This section is especially important for privacy, data residency, and regulated customer commitments.

### Business continuity and recovery

Ask about backups, recovery objectives, continuity testing, and dependency management. The depth should match business criticality. A critical production dependency needs more scrutiny than a low-impact internal tool.

## When to go deeper

Add more depth only when the vendor tier, data sensitivity, or regulatory exposure justifies it.

Go deeper when:

- The vendor stores or processes sensitive customer data.
- The vendor can access production systems.
- The vendor supports a critical business workflow.
- The vendor is part of your own compliance scope.
- The vendor introduces cross-border transfer or subprocessor risk.
- The vendor has limited independent assurance evidence.

For low-risk vendors, use a shorter intake and approval path. For high-risk vendors, request supporting evidence such as a SOC 2 report, ISO certificate, penetration test summary, security whitepaper, DPA, or subprocessor list.

## Turn answers into decisions

A questionnaire is not complete when the vendor replies. Reviewers need to decide:

- Approve
- Approve with conditions
- Request remediation
- Escalate for legal or privacy review
- Reject or find an alternative

Record the decision, rationale, owner, and next review date. If a risk is accepted, document who accepted it and when it will be revisited.

## Keep the questionnaire maintainable

Review the questionnaire every six to twelve months. Remove questions nobody uses. Add questions only when they improve decisions. Map each section to your vendor risk model so reviewers understand why the question exists.

The best vendor questionnaire is not the longest. It is the one that reliably separates low-risk vendors from vendors that need real scrutiny.
