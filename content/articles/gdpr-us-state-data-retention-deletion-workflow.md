---
title: "Data retention schedules under GDPR and US state privacy laws: building a defensible deletion workflow"
summary: "GDPR and US state privacy laws both require documented retention periods — here is how to build a deletion workflow that holds up to regulatory scrutiny"
type: "blog"
collection: null
category: "Data protection"
readTime: "5 min read"
tags: ["data retention","GDPR","US privacy laws","data deletion","privacy compliance"]
sortOrder: 114
publishedAt: "2026-08-03"
author: "sarah-jenkins"
---
The GDPR enforcement inquiry arrives and your first task is to answer an obvious question: do you still hold personal data you were supposed to have deleted? Most teams answer honestly — they are not sure. That uncertainty is the finding. Storage limitation has been a core GDPR obligation since 2018. US state privacy laws add their own retention requirements on top. Here is how to build a deletion schedule you can actually defend.

## What storage limitation means in practice

GDPR Article 5(1)(e) requires that personal data be kept in a form permitting identification of data subjects for no longer than necessary for the stated purpose. That is the storage limitation principle. It sounds simple. In practice, most SaaS teams have no documented retention schedule at all.

The principle creates three obligations. First, define the purpose for each processing activity. Second, set a retention period tied to that purpose. Third, actually delete or anonymize the data when the period expires.

Regulators are moving from guidance to enforcement on this [source: https://secureprivacy.ai/blog/data-minimization-retention-enforcement]. The key phrase is "no longer than is necessary." Your retention period must be justified, not arbitrary. "We keep it for five years because that is what we have always done" is not a justification. "We keep it for five years because the contractual obligation runs for that period and the data is needed to fulfill warranty claims" is.

## How US state laws layer on top

GDPR gets most of the attention, but US state privacy laws now impose meaningful retention obligations too. The 2026 enforcement landscape covers active obligations across multiple states [source: https://arhivix.com/blog/us-state-privacy-laws-2026-data-retention-records].

The requirements differ from GDPR but point in the same direction:

- **CCPA/CPRA**: Requires disclosure of the retention period for each category of personal information, or the criteria used to determine it. Failing to disclose retention periods is a standalone violation under California's framework.
- **Colorado CPA**: Requires data minimization — collection limited to what is adequate, relevant, and reasonably necessary. That purpose limitation implies a retention ceiling.
- **Virginia CDPA**: Requires processors to adhere to the controller's instructions on retention and deletion. If you are a SaaS vendor, your DPA must address this explicitly.
- **Texas TDPSA**: Includes data minimization requirements and mandates documented privacy notices that cover retention.

New state laws taking effect across 2026 expand these obligations further [source: https://www.omm.com/insights/alerts-publications/2026-data-security-and-privacy-compliance-checklist-key-us-state-law-updates-ai-rules-coppa-changes-and-global-data-protection-risks/]. The common thread: you need documented retention periods, not policy language that says "we delete data when no longer needed" without specifying what that means in practice.

## Building a defensible retention schedule

A retention schedule is a structured document that maps each data category to a retention period and the legal basis for that period. Start with your RoPA — your Record of Processing Activities under GDPR Article 30 — or your CCPA data inventory. You need to know what you collect before you can schedule its deletion.

For each data category, document four things.

**Legal basis and purpose.** Why do you hold this data? Customer account data serves contract performance. Marketing analytics data might rest on legitimate interests. If you cannot articulate the purpose clearly, the data probably should be deleted now.

**Retention period.** How long is necessary for that purpose? Not how long is convenient. Contract-related data commonly uses the contract term plus a legal hold period tied to the relevant statute of limitations in your jurisdiction. Log data has different operational needs versus fraud investigation needs — treat these as separate schedule entries with separate retention periods.

**Trigger and start date.** When does the retention clock start? For account data, it might be the account closure date. For transaction records, the transaction date. The trigger matters as much as the period itself.

**Delete or anonymize.** What happens at end of period? Full deletion removes the data. Anonymization must be robust — GDPR standards require that re-identification be effectively impossible, not just difficult. Pseudonymization alone is not anonymization under GDPR.

What a granular schedule looks like in practice is worth studying from documented policy examples [source: https://www.trackingplan.com/blog/data-retention-policy-examples]. If your schedule has three entries covering everything — "user data: seven years, logs: one year, backups: 90 days" — you do not have a retention schedule. You have a stub.

## Running the deletion workflow

A schedule without execution creates liability without protection. The deletion workflow translates your schedule into operational tasks with evidence.

**Map the schedule to storage locations.** For each data category, where does the data actually live? Application database, data warehouse, cold storage, backups, third-party processors. The record in your primary database may delete on schedule. The copy in your analytics warehouse may not. The copy in backups almost certainly will not — which is why backup retention needs its own explicit policy and a documented maximum retention window.

**Automate where you can.** Row-level deletion in a relational database is automatable. Connect your deletion schedule to your identity lifecycle management system. When an account closes, start the retention clock. When the clock expires, trigger a deletion job. Log each deletion with a timestamp and a stable record identifier. You need evidence of deletion, not just deletion itself.

**Handle backups explicitly.** Backups are the most common gap teams miss. A deleted user's data typically persists in backups until those backups age out. Document this in your privacy notice — state that backup data may be retained until backup expiry, with a documented maximum retention window. That transparency converts a gap into a disclosed residual risk.

**Verify sub-processors.** If you share data with analytics platforms, support ticketing systems, or CRM tools, their deletion obligations must appear in your DPAs with them. Regulators treat data shared with processors as data you still control. A deletion you cannot verify at a sub-processor is a deletion gap that belongs to you.

**Test and evidence the workflow.** Run a quarterly deletion review. Pull a sample of accounts closed beyond your retention threshold. Confirm the data is gone across every storage location in scope. Document the test result. This is what you show an auditor — not the policy, the evidence of execution.

Retention enforcement is moving from theoretical risk to audit finding. Documenting your schedule is table stakes — the defensible part is evidence that deletion runs on schedule, across every storage location, including sub-processors. CloudAnzen maps your processing activities to your retention schedule and surfaces deletion evidence continuously so you are not reconstructing the record when an inquiry lands. [Talk to us](/demo).