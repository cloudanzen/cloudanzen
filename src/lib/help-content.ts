export interface HelpArticle {
  slug: string;
  title: string;
  summary: string;
  content: string;
}

export interface HelpCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  articles: HelpArticle[];
}

export const helpCategories: HelpCategory[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description:
      "Practical onboarding guides for setting up CloudAnzen, inviting your team, connecting evidence sources, and building your first operating rhythm.",
    icon: "Rocket",
    articles: [
      {
        slug: "welcome-to-cloudanzen",
        title: "Welcome to CloudAnzen",
        summary:
          "Understand how CloudAnzen helps teams run compliance, risk, audits, vendors, and trust workflows from one connected workspace.",
        content: `## Welcome to CloudAnzen

CloudAnzen is a continuous GRC workspace for modern software teams. It helps you turn security and compliance from a seasonal scramble into an operating system: controls have owners, evidence stays fresh, risks are visible, policies are reviewed, vendors are tracked, and audit work happens in one place.

Most teams start CloudAnzen because they need to answer customer security reviews, prepare for ISO 42001, SOC 2, or ISO 27001, organize HIPAA or privacy work, or give leadership a clearer view of security readiness. The platform is designed to help with all of those jobs without forcing your team to manage dozens of spreadsheets, shared folders, and one-off reminders.

### What You Can Do with CloudAnzen

- **Run framework readiness** — Activate ISO 42001, SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, NIST CSF, or internal frameworks and map requirements to a common control set.
- **Assign clear ownership** — Give controls, evidence, policies, risks, vendors, and validations accountable owners so work does not disappear into shared inboxes.
- **Collect evidence continuously** — Connect cloud, identity, code, ticketing, MDM, and SaaS tools so CloudAnzen can collect and refresh evidence automatically where possible.
- **Review control health** — Use validations and monitoring signals to see which controls are passing, stale, failing, or waiting for human review.
- **Manage policies** — Draft, approve, publish, review, and track acceptance of policy documents.
- **Coordinate audits** — Share scoped evidence, respond to audit requests, track findings, and keep the audit trail close to the controls it supports.
- **Oversee vendors** — Maintain a vendor inventory, collect security documents, run periodic reviews, and connect vendor controls to your own readiness program.
- **Support trust reviews** — Publish trust-center materials and reduce repetitive customer security review work.

### How CloudAnzen Is Organized

CloudAnzen is easiest to understand as a set of connected operating areas:

| Area | What it helps you manage |
|------|--------------------------|
| Frameworks | Requirements, mapped controls, readiness progress, and framework-specific gaps |
| Controls | Security and compliance practices your organization must operate consistently |
| Validations | Automated or manual checks that show whether controls are working |
| Evidence | Files, snapshots, integrations, and artifacts used to prove control operation |
| Policies | Policy drafting, approval, publishing, review cadence, and acceptance tracking |
| Risks | Risk register, treatment plans, owners, due dates, and business impact |
| Vendors | Third-party inventory, review cadence, documents, and vendor risk decisions |
| Audits | Audit scope, evidence rooms, auditor requests, findings, and final reports |
| Trust Center | Customer-facing security, compliance, and privacy materials |

### The First Outcomes to Aim For

Do not try to configure everything on day one. A healthy first rollout usually aims for these outcomes:

- **A clear compliance target** — Pick the framework or customer requirement that matters most right now.
- **A core team** — Invite the people who own infrastructure, security, HR, legal, engineering, and vendor work.
- **A few live integrations** — Connect the systems that produce the highest-value evidence first.
- **A reviewed control set** — Confirm which controls apply, who owns them, and which ones need evidence.
- **A working Todo rhythm** — Use assigned work and notifications so the platform becomes part of weekly operations.
- **An audit-ready trail** — Keep decisions, evidence, status changes, and reviews inside CloudAnzen instead of scattered across documents.

### A Simple First-Week Path

1. Create your organization and confirm company details.
2. Invite your core team and assign appropriate roles.
3. Activate your first framework.
4. Connect your primary cloud provider and identity provider.
5. Review mapped controls and assign owners.
6. Check automatically collected evidence.
7. Upload missing manual evidence.
8. Review open risks, vendors, and policy gaps.
9. Use the dashboard and Todo page to build a weekly operating rhythm.

### Next Steps

1. [Set up your account](/help/getting-started/account-setup) and invite your team.
2. [Connect your first integrations](/help/integrations/connecting-integrations) to start collecting evidence automatically.
3. [Choose your compliance framework](/help/compliance-frameworks/choosing-a-framework) and map your controls.
4. [Use the quick start checklist](/help/getting-started/quick-start-checklist) to turn setup into a first-week plan.`,
      },
      {
        slug: "account-setup",
        title: "Setting Up Your Account",
        summary:
          "Configure your CloudAnzen workspace, invite the right people, choose roles, and avoid common first-week setup mistakes.",
        content: `## Setting Up Your Account

Your CloudAnzen account becomes the system of record for compliance work, so it is worth setting it up intentionally. A clean setup makes it easier to assign ownership, connect evidence, onboard auditors, and keep customer-facing trust materials accurate.

### Before You Start

Gather a few details before creating your workspace:

- Legal company name and common customer-facing name.
- Primary industry and region.
- Target framework or audit objective, such as ISO 42001, SOC 2 Type I, SOC 2 Type II, ISO 27001, HIPAA, or customer security review readiness.
- Core systems to connect first, such as AWS, Google Workspace, GitHub, Jira, Slack, MDM, or ticketing.
- Names of the people who own security, engineering, HR, IT, legal, vendor management, and compliance.

### Step 1: Create Your Organization Profile

After signing up, create your organization profile. Enter your company name, industry, approximate team size, and primary compliance objective. This information helps CloudAnzen tailor framework suggestions, onboarding tasks, and operating defaults.

Use the name your customers and auditors recognize. If your legal entity name differs from your product brand, use the customer-facing name in the workspace and keep legal details in policy and audit documents.

### Step 2: Configure Your Profile

Set your name, role, timezone, and notification preferences. These details affect assignment notifications, Todo views, audit collaboration, and reminders.

For the first admin user, choose a durable account owned by someone who can manage users and integrations. Avoid making a temporary contractor or test account the only admin.

### Step 3: Invite the Core Team

Navigate to **Settings -> Team** to invite colleagues. Start with the small group required to make progress:

- Security or compliance lead.
- Infrastructure owner.
- Identity or IT owner.
- Engineering manager or platform owner.
- HR or people operations owner if personnel controls apply.
- Legal or operations owner for policies and vendors.
- Executive sponsor if you need dashboard visibility or approvals.

### Step 4: Choose Roles Carefully

Assign roles based on day-to-day responsibility, not job title alone.

| Role | Best for | Typical work |
|------|----------|--------------|
| Owner | Company administrator or founder | Billing, organization-level settings, critical access decisions |
| Admin | Security or compliance lead | Team settings, integrations, frameworks, controls, and reports |
| Compliance Manager | GRC operator or security program owner | Controls, evidence, policies, vendors, risks, and audits |
| Contributor | Engineering, IT, HR, or operations owner | Completing assigned tasks, uploading evidence, responding to requests |
| Viewer | Executives, auditors, or observers | Reviewing dashboards, reports, and shared audit materials |

### Step 5: Connect Your First Systems

Head to **Settings -> Integrations** and connect the systems that will produce the most evidence. For most SaaS teams, this means:

- Cloud provider: AWS, GCP, or Azure.
- Identity provider: Google Workspace, Okta, Microsoft Entra ID, or similar.
- Code hosting: GitHub, GitLab, or Bitbucket.
- Device or MDM source: Fleet, Kandji, Jamf, Intune, or equivalent.
- Ticketing or change management: Jira, Linear, ServiceNow, or similar.

Start with two or three high-value integrations. A smaller complete setup is better than connecting every tool before owners are ready to review the results.

### Step 6: Choose Your Framework

Select one or more compliance frameworks from the **Frameworks** section. CloudAnzen maps relevant controls and helps you see what is already covered by existing evidence.

If you are unsure where to start:

- Choose **ISO 42001** if you build, provide, or heavily use AI systems and need to prove AI governance.
- Choose **SOC 2** if customers are asking for a SOC 2 report.
- Choose **ISO 27001** if you sell globally or need a formal information security management system.
- Choose **HIPAA** if you handle protected health information.
- Choose **GDPR** if you process EU personal data.
- Choose **NIST CSF** if you need a flexible security maturity baseline.

### Step 7: Set Your Operating Defaults

Before assigning lots of work, configure these defaults:

- Notification preferences for admins and contributors.
- Evidence review cadence.
- Policy review cadence.
- Vendor review cadence.
- Risk severity and due-date expectations.
- Integration sync expectations.

### Common Setup Mistakes to Avoid

- Inviting everyone before you have clear owners.
- Connecting many integrations without assigning someone to review the findings.
- Activating too many frameworks at once.
- Treating Viewer users as task owners.
- Leaving controls unassigned after framework activation.
- Uploading evidence without linking it to the right control or request.

### What Good Setup Looks Like

By the end of setup, you should be able to answer:

- Which framework are we working toward first?
- Who owns each major control area?
- Which systems are connected for automated evidence?
- Which evidence must be uploaded manually?
- Where will team members see their assigned work?
- How often will we review open gaps?`,
      },
      {
        slug: "navigating-the-dashboard",
        title: "Navigating the Dashboard",
        summary:
          "Use the dashboard to understand readiness, prioritize work, track owners, and turn compliance signals into weekly action.",
        content: `## Navigating the Dashboard

The CloudAnzen dashboard is designed to answer one practical question: what needs attention now? It brings together framework readiness, control health, assigned work, evidence freshness, risks, vendor reviews, policy activity, and recent changes so your team can operate from a shared view.

Use the dashboard during weekly compliance reviews, audit preparation, customer security reviews, and leadership updates.

### Compliance Score

The compliance score gives you a directional view of readiness across active frameworks. It is not a substitute for an auditor's judgment, but it helps you see whether the program is moving in the right direction.

Use the score to spot trends:

- A rising score usually means owners are closing gaps, evidence is being linked, and validations are passing.
- A flat score may mean work is blocked, controls are waiting for manual review, or evidence is stale.
- A falling score often means new framework scope, failed validations, expired evidence, or integration drift.

Do not optimize only for the score. Review the underlying controls, risks, and evidence so you understand why the score changed.

### Control Health

Control health shows whether mapped controls appear to be operating as expected. This is where compliance work becomes concrete.

- **Passing** — The control has current evidence and no open blocking issues.
- **Failing** — A validation, evidence review, or integration signal indicates a problem.
- **Needs Review** — Evidence or a control decision needs human review.
- **Not Started** — The control has not been configured, assigned, or evidenced yet.
- **Not Applicable** — The control has been excluded with a documented justification.

When reviewing control health, ask:

- Is there a named owner?
- Is evidence current?
- Is the control mapped to the right framework requirements?
- Are failures tied to a remediation owner?
- Is the status supported by evidence, or is it just a manual assertion?

### Recent Activity

The activity feed shows what changed recently: evidence uploads, policy approvals, validation results, risk updates, vendor reviews, audit comments, and integration syncs. It is useful for spotting movement and for reconstructing what happened during an audit period.

Use recent activity to answer:

- Who changed a control or evidence item?
- Which integrations synced recently?
- Which policies were approved or published?
- Which risks or vendors changed status?
- Which audit requests or findings were updated?

### Todo and Assigned Work

The Todo area helps individuals find their own work. Depending on your role, this can include validation ownership, onboarding tasks, evidence requests, policy acknowledgments, access review tasks, or audit request responses.

For admins, Todo is a good way to verify whether owners actually have actionable work. For contributors, it should become the default starting point.

### Framework Progress

Framework progress shows readiness by framework, requirement family, or domain. This is useful when you are preparing for a specific audit or customer request.

Look for:

- Domains with many incomplete controls.
- Requirements that depend on manual evidence.
- Shared controls that improve multiple frameworks at once.
- Requirements marked not applicable without a clear justification.

### Risk and Vendor Signals

CloudAnzen connects risk and vendor work to compliance readiness. A control might look complete until you notice an untreated risk or overdue vendor review tied to the same area.

During dashboard review, pay attention to:

- Critical or high risks without treatment plans.
- Vendor reviews past their renewal date.
- Vendors missing security documents.
- Risks created from failed validations.
- Audit findings that should be linked to remediation work.

### Quick Actions

Use the quick action buttons to:

- Upload evidence.
- Create a risk.
- Assign work to an owner.
- Start an audit.
- Review policies.
- Add or review vendors.
- Open framework progress.

### Weekly Dashboard Review

For a practical weekly operating rhythm, review the dashboard in this order:

1. Look at readiness changes since last week.
2. Review failing or stale controls.
3. Check overdue assigned work.
4. Confirm evidence freshness for critical controls.
5. Review new high or critical risks.
6. Check vendor reviews due soon.
7. Review policy approvals and acceptances.
8. Assign next actions before the meeting ends.

### Reading the Dashboard During Audit Prep

Before an audit, use the dashboard to find gaps that could slow down fieldwork:

- Controls without current evidence.
- Evidence without a clear owner.
- Policies past review date.
- Risks without treatment status.
- Vendors missing recent review.
- Audit requests waiting for assignee response.
- Failed validations that need remediation notes.

The dashboard should help you move from "Are we ready?" to "Here are the specific owners and blockers."`,
      },
      {
        slug: "quick-start-checklist",
        title: "Quick Start Checklist",
        summary:
          "A practical first-week checklist for launching CloudAnzen without overloading your team.",
        content: `## Quick Start Checklist

Use this checklist to turn your first week in CloudAnzen into a focused rollout. The goal is not to finish every compliance task immediately. The goal is to establish the right owners, connect the most important evidence sources, and create a repeatable operating rhythm.

### Day 1: Foundation

- [ ] Create your organization and set the company profile.
- [ ] Confirm the first compliance objective, such as SOC 2 readiness, ISO 27001 implementation, HIPAA readiness, or customer security review support.
- [ ] Invite the core team: security, compliance, infrastructure, identity/IT, engineering, HR, legal, and vendor owner as applicable.
- [ ] Assign roles intentionally. Keep admin access limited and use Contributor for task owners.
- [ ] Review notification settings so owners receive assignment and reminder alerts.
- [ ] Confirm who will run the weekly compliance review.

### Day 2: Framework Setup

- [ ] Activate the first target framework.
- [ ] Review the automatically mapped controls.
- [ ] Mark clearly irrelevant controls as not applicable with justification.
- [ ] Assign owners for the highest-impact control groups.
- [ ] Identify controls that require manual evidence.
- [ ] Note which controls can be satisfied by integrations.
- [ ] Avoid activating extra frameworks until the first one has owners and evidence moving.

### Day 3: Integrations and Evidence

- [ ] Connect your primary cloud provider.
- [ ] Connect your identity provider.
- [ ] Connect code hosting or change management tools if they support your controls.
- [ ] Connect device or MDM tooling if personnel workstation controls apply.
- [ ] Review the first sync results.
- [ ] Confirm evidence is linked to the right controls.
- [ ] Upload one or two examples of manual evidence so owners understand the pattern.

### Day 4: Policies and People Controls

- [ ] Review the policy library and choose the policies you need first.
- [ ] Customize policy templates to reflect how your company actually works.
- [ ] Assign policy owners and reviewers.
- [ ] Publish the first policy only after it has been reviewed.
- [ ] Set an acceptance deadline for employees where required.
- [ ] Confirm onboarding tasks such as security training, MDM enrollment, and policy acceptance.

### Day 5: Risks, Vendors, and Review Rhythm

- [ ] Add known risks to the risk register.
- [ ] Assign owners and due dates for high-priority risks.
- [ ] Add critical vendors and record review status.
- [ ] Upload vendor security documents where available.
- [ ] Review the dashboard with the core team.
- [ ] Convert open gaps into assigned Todo items.
- [ ] Schedule the next weekly compliance review.

### Week 2: Turn Setup Into Operations

- [ ] Review all failed or stale validations.
- [ ] Add remediation notes for control gaps.
- [ ] Check whether owners are completing assigned work.
- [ ] Link evidence to controls and audit requests where relevant.
- [ ] Review vendor renewal dates.
- [ ] Confirm policy acceptance progress.
- [ ] Prepare an executive summary of remaining gaps.

### First 30 Days

By the end of the first month, aim for:

- Every in-scope control has an owner.
- Critical integrations are connected and syncing.
- Manual evidence requirements are identified.
- Policy review and acceptance workflows are running.
- High risks have treatment plans.
- Critical vendors have review status and documents.
- The dashboard is reviewed weekly.
- Audit preparation work is tracked inside CloudAnzen rather than in spreadsheets.

### What to Defer

It is normal to defer some setup. You can wait on:

- Secondary frameworks that are not tied to an immediate customer or audit need.
- Low-risk vendor records.
- Custom policy workflows if a basic approval flow works for now.
- Complex custom role design.
- Historical evidence cleanup that is not needed for the current audit period.

### Success Criteria

Your first week is successful if the team knows:

- What framework or readiness goal matters first.
- Who owns each major workstream.
- Which systems are producing automated evidence.
- Which controls still need manual evidence.
- Where owners go to find their work.
- When the team will review progress again.`,
      },
      {
        slug: "roles-and-permissions",
        title: "Roles and Permissions",
        summary:
          "Choose the right roles for admins, auditors, contributors, viewers, and control owners without overexposing sensitive workflows.",
        content: `## Roles and Permissions

CloudAnzen uses role-based access control to keep sensitive security and compliance work limited to the people who need it. Good role design helps you move faster because owners can complete their tasks without giving everyone full administrative access.

Role assignment should reflect what a person needs to do in the platform. A senior title does not always mean admin access is required, and a contributor may need action permissions for only a specific set of work.

### Available Roles

| Role | Best fit | Typical responsibilities |
|------|----------|--------------------------|
| **Owner** | Founder, security executive, or primary workspace owner | Organization-level access, billing, high-risk administrative changes, final ownership decisions |
| **Admin** | Security lead, compliance lead, or GRC operator | Team management, integrations, frameworks, controls, reports, and workspace configuration |
| **Compliance Manager** | Person running the compliance program | Controls, evidence, policies, risks, vendors, audits, readiness tracking |
| **Contributor** | Engineering, IT, HR, legal, vendor, or operations owner | Assigned Todo work, evidence uploads, remediation updates, request responses |
| **Viewer** | Executive, observer, or read-only stakeholder | Dashboards, reports, and shared materials without edit permissions |

### Common Role Assignments

Use these examples as a starting point:

- Security or compliance lead: Admin or Compliance Manager.
- Infrastructure owner: Contributor, unless they also manage integrations.
- HR owner: Contributor for personnel controls, training, and policy evidence.
- Legal or privacy owner: Contributor or Compliance Manager depending on scope.
- Engineering manager: Contributor for change management, code review, and remediation tasks.
- Executive sponsor: Viewer unless they need approval or owner-level control.
- External auditor: Viewer or auditor-specific access where available, depending on the audit workflow.

### Principle of Least Privilege

Give each user the minimum access needed to complete their work. This reduces accidental changes and makes audit trails cleaner.

Practical examples:

- Do not make every control owner an Admin.
- Do not give integration management access to people who only upload evidence.
- Use Viewer for people who only need dashboards or reports.
- Review Admin access periodically.
- Remove access for people who leave the project or company.

### Permission Boundaries to Watch

Some areas are more sensitive than others:

- **Integrations** can expose infrastructure and identity configuration.
- **Policies** may include internal security commitments.
- **Audits** may include customer or auditor communications.
- **Risks** can include sensitive business impact details.
- **Vendor records** may include contracts, security reports, and review decisions.
- **Trust Center content** may become visible to customers.

Assign access with those boundaries in mind.

### Changing Roles

Owners and Admins can change a user's role from **Settings -> Team**. Click the role badge next to a user's name and choose the new role.

Before changing a role, check:

- Does this user still own active work?
- Will the new role remove access they need for assigned tasks?
- Should someone else receive their open assignments?
- Does the role change affect policy approvals, audit requests, or evidence ownership?
- Should the change be documented for audit purposes?

### Offboarding Users

When someone leaves the company or no longer participates in compliance work:

1. Reassign their open controls, risks, vendors, evidence requests, and audit requests.
2. Remove or downgrade their role.
3. Confirm integrations or service accounts are not tied to their personal account.
4. Review recent activity if the departure is sensitive.
5. Preserve audit history rather than deleting records.

### Working with Auditors

Auditors usually need focused access to audit materials, not broad workspace administration. When possible, give auditors access only to the audit, evidence, reports, and requests relevant to their engagement.

For external auditors:

- Confirm which audit they are reviewing.
- Limit access to the engagement scope.
- Use audit requests to collect follow-up evidence.
- Keep comments and request responses inside the audit workspace.
- Remove access after the engagement closes if no longer needed.

### Role Review Cadence

Review roles at least quarterly, and always before a major audit. During review, check:

- Admin and Owner users.
- Inactive users.
- Users with no current assignments.
- External users.
- Former employees or contractors.
- Users who changed job functions.

### Custom Roles

Enterprise plan customers can create custom roles with more granular permissions. Custom roles are useful when you need to separate responsibilities such as integration administration, policy approval, risk management, vendor review, or audit collaboration.

Before creating custom roles, document:

- Which actions each persona needs.
- Which data each persona should not see.
- Who approves role changes.
- How often custom role membership is reviewed.
- Whether the role affects audit evidence or customer-facing materials.`,
      },
    ],
  },
  {
    slug: "compliance-frameworks",
    title: "Compliance Frameworks",
    description:
      "Guides for ISO 42001, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, NIST CSF, and custom frameworks.",
    icon: "ShieldCheck",
    articles: [
      {
        slug: "choosing-a-framework",
        title: "Choosing the Right Framework",
        summary:
          "Compare popular compliance frameworks and learn which ones are right for your business.",
        content: `## Choosing the Right Framework

Selecting the right compliance framework depends on your industry, customer requirements, and business goals.

### ISO 42001

Best for AI-native teams, companies shipping AI features, and organizations that need to demonstrate governance over AI systems, model providers, training data, RAG pipelines, and human oversight.

**Choose ISO 42001 if:** You build, provide, or rely on AI systems and customers are asking how your AI is governed.

### SOC 2

Best for SaaS companies selling to mid-market and enterprise customers in the US. SOC 2 is often the first compliance requirement potential customers ask about.

**Choose SOC 2 if:** You're a SaaS company and prospects are asking for a SOC 2 report.

### ISO 27001

The international standard for information security management. Recognized globally and often required by European and Asian customers.

**Choose ISO 27001 if:** You sell internationally or your customers specifically require it.

### GDPR

Required for any company processing personal data of EU residents, regardless of where your company is based.

**Choose GDPR if:** You have EU customers or process EU personal data.

### HIPAA

Required for handling protected health information (PHI) in the United States.

**Choose HIPAA if:** You handle health data or sell to healthcare organizations.

### PCI DSS

Required for any company that stores, processes, or transmits credit card data.

**Choose PCI DSS if:** You handle payment card information.

### NIST CSF

A flexible cybersecurity framework developed by the US government. Increasingly adopted by private sector organizations.

**Choose NIST CSF if:** You want a flexible security baseline or sell to US government entities.

### Multiple Frameworks

CloudAnzen supports running multiple frameworks simultaneously with shared controls. This means a single control can satisfy requirements across ISO 42001, SOC 2, ISO 27001, and other frameworks—reducing duplicate work.`,
      },
      {
        slug: "mapping-controls",
        title: "Mapping Controls to Frameworks",
        summary:
          "Learn how CloudAnzen automatically maps controls and how to customize mappings.",
        content: `## Mapping Controls to Frameworks

When you activate a compliance framework, CloudAnzen automatically maps a set of controls based on the framework's requirements.

### Automatic Mapping

CloudAnzen ships with pre-built control mappings for all supported frameworks. When you activate a framework, controls are automatically created and mapped to the relevant requirements.

### Reviewing Mappings

Navigate to **Frameworks → [Your Framework] → Controls** to see all mapped controls. Each control shows:

- **Control name and description**
- **Framework requirement(s)** it satisfies
- **Current status** (passing, failing, needs review, not started)
- **Evidence sources** linked to the control
- **Assigned owner**

### Customizing Mappings

You can customize mappings in several ways:

1. **Add a control** — Create a new control and map it to one or more framework requirements.
2. **Remove a mapping** — Unmap a control from a requirement if it's not applicable.
3. **Edit a control** — Modify the control's description, testing criteria, or evidence requirements.
4. **Mark as not applicable** — If a requirement doesn't apply to your organization, mark it as N/A with a justification.

### Cross-Framework Mapping

If you're running multiple frameworks, CloudAnzen shows which controls are shared. Updating a shared control's evidence or status automatically reflects across all mapped frameworks.`,
      },
      {
        slug: "framework-progress",
        title: "Tracking Framework Progress",
        summary:
          "Monitor your compliance readiness with progress dashboards and reports.",
        content: `## Tracking Framework Progress

CloudAnzen provides multiple views to track your progress toward compliance readiness.

### Framework Dashboard

Each framework has a dedicated dashboard showing:

- **Overall readiness percentage** — Controls passing vs. total controls.
- **Requirement breakdown** — Progress grouped by framework sections or domains.
- **Risk indicators** — Failing controls sorted by severity.
- **Timeline view** — Progress over the past 30, 60, or 90 days.

### Generating Progress Reports

Export framework progress reports for stakeholders:

1. Navigate to **Frameworks → [Your Framework] → Progress**.
2. Select the report type (Executive Summary, Detailed Status, or Gap Analysis).
3. Choose the date range and format (PDF or CSV).
4. Click **Generate Report**.

### Setting Milestones

Create milestones to track progress against deadlines:

1. Go to **Frameworks → [Your Framework] → Milestones**.
2. Click **Add Milestone** and set a target date.
3. Select the controls or requirements that must be complete.
4. CloudAnzen will notify you if you're falling behind.`,
      },
    ],
  },
  {
    slug: "policy-management",
    title: "Policy Management",
    description:
      "Create, manage, and distribute security policies using built-in templates and approval workflows.",
    icon: "FileText",
    articles: [
      {
        slug: "creating-policies",
        title: "Creating Policies",
        summary:
          "Use built-in templates or create custom policies for your organization.",
        content: `## Creating Policies

CloudAnzen provides a library of policy templates that you can customize to fit your organization.

### Using Policy Templates

1. Navigate to **Policies → Templates**.
2. Browse or search for a template (e.g., "Information Security Policy", "Acceptable Use Policy").
3. Click **Use Template** to create a new policy based on it.
4. Edit the content to match your organization's practices.
5. Set a review schedule (quarterly, semi-annually, or annually).
6. Click **Save Draft**.

### Available Templates

CloudAnzen includes templates for common policies:

- Information Security Policy
- Acceptable Use Policy
- Access Control Policy
- Data Classification Policy
- Incident Response Policy
- Business Continuity Policy
- Change Management Policy
- Risk Management Policy
- Vendor Management Policy
- Data Retention Policy
- Encryption Policy
- Physical Security Policy

### Creating Custom Policies

To create a policy from scratch:

1. Go to **Policies → New Policy**.
2. Enter the policy title and description.
3. Write or paste your policy content using the rich text editor.
4. Assign an owner and set the review schedule.
5. Save as draft or submit for approval.`,
      },
      {
        slug: "approval-workflows",
        title: "Policy Approval Workflows",
        summary:
          "Set up multi-step approval workflows for policy reviews and updates.",
        content: `## Policy Approval Workflows

CloudAnzen supports multi-step approval workflows to ensure policies are reviewed and approved by the right people.

### Setting Up a Workflow

1. Navigate to **Settings → Workflows → Policies**.
2. Click **Create Workflow**.
3. Add approval steps:
   - **Step 1:** Policy owner reviews and submits.
   - **Step 2:** Compliance manager reviews.
   - **Step 3:** Executive sponsor approves.
4. Set notification preferences for each step.
5. Save the workflow.

### Submitting a Policy for Approval

1. Open the policy you want to submit.
2. Click **Submit for Approval**.
3. The first approver receives a notification.
4. Each approver can approve, request changes, or reject.
5. Once all steps are complete, the policy is published.

### Policy Versioning

CloudAnzen automatically versions policies. Each time a policy is approved, a new version is created. You can:

- View the full version history.
- Compare changes between versions.
- Revert to a previous version if needed.`,
      },
      {
        slug: "policy-acknowledgment",
        title: "Policy Acknowledgment Tracking",
        summary:
          "Distribute policies to team members and track acknowledgment status.",
        content: `## Policy Acknowledgment Tracking

Ensure all team members have read and acknowledged your policies.

### Distributing Policies

1. Open a published policy.
2. Click **Distribute**.
3. Select the recipients (individual users, teams, or the entire organization).
4. Set a deadline for acknowledgment.
5. Click **Send**.

Recipients receive an email notification with a link to read and acknowledge the policy.

### Tracking Acknowledgments

Navigate to **Policies → Acknowledgments** to see:

- **Acknowledged** — Users who have completed the acknowledgment.
- **Pending** — Users who haven't acknowledged yet.
- **Overdue** — Users past the deadline.

### Automated Reminders

CloudAnzen sends automatic reminders to users who haven't acknowledged a policy:

- 3 days before the deadline
- 1 day before the deadline
- 1 day after the deadline (overdue notice)

You can customize reminder frequency in **Settings → Notifications**.`,
      },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    description:
      "Connect your cloud infrastructure, identity providers, and business tools to automate evidence collection.",
    icon: "Plug",
    articles: [
      {
        slug: "connecting-integrations",
        title: "Connecting Your First Integration",
        summary:
          "Step-by-step guide to connecting your cloud provider or SaaS tool to CloudAnzen.",
        content: `## Connecting Your First Integration

Integrations are the foundation of automated evidence collection in CloudAnzen. Connect your tools to start gathering compliance evidence automatically.

### How to Connect

1. Navigate to **Settings → Integrations**.
2. Browse or search for the service you want to connect.
3. Click **Connect** on the integration card.
4. Follow the authorization flow (OAuth, API key, or service account).
5. Once connected, CloudAnzen begins syncing data immediately.

### Connection Methods

Different integrations use different connection methods:

- **OAuth** — One-click authorization (e.g., Google Workspace, GitHub, Slack).
- **API Key** — Enter an API key generated from the service's admin console.
- **Service Account** — Upload a service account key file (e.g., GCP, AWS IAM role).
- **Webhook** — Configure a webhook URL in the external service.

### What Happens After Connecting

Once connected, CloudAnzen:

1. Performs an initial sync to pull current configuration data.
2. Maps discovered resources to relevant controls.
3. Begins continuous monitoring based on sync intervals.
4. Generates evidence artifacts automatically.`,
      },
      {
        slug: "cloud-providers",
        title: "Cloud Provider Integrations",
        summary:
          "Connect AWS, Google Cloud, and Microsoft Azure for infrastructure monitoring.",
        content: `## Cloud Provider Integrations

Connect your cloud infrastructure for automated compliance monitoring and evidence collection.

### Amazon Web Services (AWS)

CloudAnzen monitors your AWS environment using a cross-account IAM role.

**What's monitored:**
- IAM users, roles, and policies
- S3 bucket configurations
- VPC and security group settings
- CloudTrail logging
- RDS and encryption settings
- Lambda function configurations

**Setup:** Create an IAM role using the CloudFormation template provided during setup.

### Google Cloud Platform (GCP)

Connect using a service account with read-only access.

**What's monitored:**
- IAM policies and service accounts
- Cloud Storage bucket settings
- VPC firewall rules
- Cloud Audit Logs
- Compute Engine configurations
- BigQuery access controls

**Setup:** Create a service account and upload the JSON key to CloudAnzen.

### Microsoft Azure

Connect using an Azure AD app registration.

**What's monitored:**
- Azure AD users and groups
- Network security groups
- Storage account configurations
- Activity logs
- Key Vault settings
- Virtual machine configurations

**Setup:** Register an application in Azure AD and grant the required read permissions.`,
      },
      {
        slug: "identity-providers",
        title: "Identity Provider Integrations",
        summary:
          "Connect Okta, Google Workspace, Azure AD, and other identity providers.",
        content: `## Identity Provider Integrations

Identity provider integrations help CloudAnzen monitor user access, MFA enrollment, and SSO configurations.

### Supported Identity Providers

| Provider | Connection Method | Key Monitors |
|----------|------------------|--------------|
| **Okta** | OAuth / API Token | MFA enrollment, inactive users, admin roles |
| **Google Workspace** | OAuth | 2FA status, admin access, app permissions |
| **Azure AD** | OAuth | MFA registration, conditional access, guest users |
| **JumpCloud** | API Key | MFA status, user groups, device compliance |
| **OneLogin** | API Credentials | MFA policies, app access, user provisioning |

### What Identity Integrations Monitor

- **MFA enrollment** — Ensure all users have multi-factor authentication enabled.
- **Inactive accounts** — Flag accounts that haven't logged in within a configurable period.
- **Admin access** — Monitor who has administrative privileges.
- **SSO configuration** — Verify SSO is properly configured for connected applications.
- **Password policies** — Check that password requirements meet compliance standards.`,
      },
      {
        slug: "developer-tools",
        title: "Developer Tool Integrations",
        summary:
          "Connect GitHub, GitLab, Jira, and other developer tools for code and project monitoring.",
        content: `## Developer Tool Integrations

Connect your development tools to monitor code security, change management, and project tracking.

### Source Code Management

**GitHub / GitLab / Bitbucket**

- Branch protection rules
- Code review requirements
- Secret scanning status
- Dependency vulnerability alerts
- Merge request approvals

### Project Management

**Jira / Linear / Asana**

- Change management ticket tracking
- Incident response task tracking
- Compliance task assignments
- SLA monitoring

### CI/CD

**GitHub Actions / GitLab CI / CircleCI**

- Pipeline security checks
- Deployment approval gates
- Build artifact signing
- Environment variable management

### Communication

**Slack / Microsoft Teams**

- Receive CloudAnzen notifications in your team channels
- Get alerts for failing controls, policy deadlines, and risk updates
- Use slash commands to check compliance status`,
      },
    ],
  },
  {
    slug: "evidence-collection",
    title: "Evidence Collection",
    description:
      "Automate evidence gathering and manage manual evidence uploads for audit readiness.",
    icon: "FolderCheck",
    articles: [
      {
        slug: "automated-evidence",
        title: "Automated Evidence Collection",
        summary:
          "How CloudAnzen automatically collects and organizes evidence from your integrations.",
        content: `## Automated Evidence Collection

CloudAnzen automatically collects evidence from your connected integrations, reducing manual work and ensuring evidence is always up to date.

### How It Works

1. **Integration sync** — CloudAnzen periodically syncs with your connected services (every 1-24 hours depending on the integration).
2. **Evidence generation** — Configuration snapshots, logs, and settings are captured as evidence artifacts.
3. **Control mapping** — Evidence is automatically linked to the controls it supports.
4. **Freshness tracking** — CloudAnzen tracks when evidence was last collected and alerts you if it becomes stale.

### Types of Automated Evidence

- **Configuration snapshots** — Point-in-time captures of system settings (e.g., S3 bucket encryption settings).
- **User lists** — Exports of users, roles, and permissions from identity providers.
- **Log summaries** — Aggregated audit log data showing monitoring is active.
- **Policy configurations** — Security group rules, firewall settings, IAM policies.
- **Scan results** — Vulnerability scan outputs and dependency audit results.

### Evidence Freshness

Evidence has a freshness period based on its type:

| Evidence Type | Default Freshness | Configurable |
|--------------|-------------------|--------------|
| Configuration snapshots | 24 hours | Yes |
| User access reviews | 90 days | Yes |
| Vulnerability scans | 30 days | Yes |
| Policy documents | 365 days | Yes |
| Training records | 365 days | Yes |`,
      },
      {
        slug: "manual-evidence",
        title: "Uploading Manual Evidence",
        summary:
          "Upload documents, screenshots, and other files as evidence for controls that require manual input.",
        content: `## Uploading Manual Evidence

Some controls require evidence that can't be automatically collected. CloudAnzen makes it easy to upload and manage manual evidence.

### How to Upload

1. Navigate to the control that needs evidence.
2. Click **Add Evidence → Upload File**.
3. Select the file(s) from your computer.
4. Add a description explaining what the evidence shows.
5. Click **Upload**.

### Supported File Types

- Documents: PDF, DOCX, XLSX, PPTX
- Images: PNG, JPG, SVG
- Archives: ZIP
- Text: CSV, TXT, JSON, XML

Maximum file size: 50 MB per file.

### Organizing Evidence

- **Tags** — Add tags to evidence for easy filtering.
- **Categories** — Assign evidence to categories like "HR", "IT", "Legal".
- **Linked controls** — One piece of evidence can be linked to multiple controls.

### Evidence Review

After uploading, evidence may go through a review process:

1. **Uploaded** — Evidence is uploaded but not reviewed.
2. **Under Review** — A compliance manager is reviewing the evidence.
3. **Approved** — Evidence is accepted and linked to the control.
4. **Rejected** — Evidence doesn't meet requirements; uploader is notified.`,
      },
      {
        slug: "evidence-requests",
        title: "Evidence Requests and Tasks",
        summary:
          "Assign evidence collection tasks to team members and track completion.",
        content: `## Evidence Requests and Tasks

Delegate evidence collection to the right team members with evidence requests.

### Creating an Evidence Request

1. Navigate to the control that needs evidence.
2. Click **Request Evidence**.
3. Select the assignee (the person responsible for providing the evidence).
4. Add instructions describing what's needed.
5. Set a due date.
6. Click **Send Request**.

The assignee receives an email and in-app notification with the request details.

### Tracking Requests

View all outstanding evidence requests in **Evidence → Requests**. Filter by:

- **Status** — Open, In Progress, Completed, Overdue
- **Assignee** — Filter by team member
- **Framework** — Filter by compliance framework
- **Due date** — Sort by upcoming deadlines

### Bulk Requests

For initial setup or periodic reviews, create bulk evidence requests:

1. Go to **Evidence → Bulk Request**.
2. Select the controls that need evidence.
3. CloudAnzen suggests assignees based on control ownership.
4. Review and adjust assignments.
5. Set a common due date.
6. Click **Send All Requests**.`,
      },
    ],
  },
  {
    slug: "continuous-monitoring",
    title: "Continuous Monitoring",
    description:
      "Track control health in real time with automated checks and alerts.",
    icon: "Activity",
    articles: [
      {
        slug: "how-monitoring-works",
        title: "How Continuous Monitoring Works",
        summary:
          "Understand how CloudAnzen monitors your controls and detects compliance drift.",
        content: `## How Continuous Monitoring Works

CloudAnzen continuously monitors your connected systems to detect compliance drift before it becomes a problem.

### The Monitoring Loop

1. **Sync** — CloudAnzen syncs with your integrations on a regular schedule.
2. **Evaluate** — Each synced data point is evaluated against control criteria.
3. **Status update** — Controls are marked as passing, failing, or needs review.
4. **Alert** — If a control status changes, relevant team members are notified.

### What Gets Monitored

- **Infrastructure configuration** — Cloud provider settings, network rules, encryption.
- **Access controls** — User permissions, MFA status, inactive accounts.
- **Security tools** — Antivirus, endpoint protection, vulnerability scanners.
- **Operational processes** — Backup schedules, patch management, incident response.
- **Code security** — Branch protection, code reviews, secret scanning.

### Sync Frequencies

| Integration Type | Default Frequency | Minimum |
|-----------------|-------------------|---------|
| Cloud providers | Every 4 hours | 1 hour |
| Identity providers | Every 6 hours | 1 hour |
| Developer tools | Every 12 hours | 4 hours |
| HR/business tools | Every 24 hours | 12 hours |

You can customize sync frequencies for each integration in **Settings → Integrations**.`,
      },
      {
        slug: "alerts-and-notifications",
        title: "Alerts and Notifications",
        summary:
          "Configure alerts for control failures, compliance drift, and upcoming deadlines.",
        content: `## Alerts and Notifications

Stay on top of your compliance posture with configurable alerts and notifications.

### Alert Types

- **Control failure** — A previously passing control is now failing.
- **New finding** — A new compliance issue has been detected.
- **Evidence expiring** — Evidence is approaching its freshness deadline.
- **Policy due for review** — A policy's review date is approaching.
- **Task overdue** — An assigned task has passed its due date.
- **Vendor risk change** — A vendor's risk score has changed.

### Notification Channels

Configure where you receive notifications:

- **Email** — Individual or digest notifications.
- **Slack** — Real-time alerts in your chosen channel.
- **Microsoft Teams** — Alerts via Teams webhook.
- **In-app** — Notifications in the CloudAnzen dashboard.

### Configuring Alerts

1. Go to **Settings → Notifications**.
2. For each alert type, choose:
   - **Severity threshold** — Only alert for high-severity issues.
   - **Channels** — Where to send the alert.
   - **Recipients** — Who should be notified.
   - **Frequency** — Immediate, hourly digest, or daily digest.`,
      },
      {
        slug: "compliance-dashboards",
        title: "Compliance Dashboards",
        summary:
          "Use real-time dashboards to visualize your compliance posture across frameworks.",
        content: `## Compliance Dashboards

CloudAnzen's dashboards give you a real-time view of your compliance posture.

### Main Dashboard

The main dashboard shows:

- **Overall compliance score** across all active frameworks.
- **Control status breakdown** (passing, failing, needs review).
- **Trend chart** showing compliance score over time.
- **Top failing controls** requiring immediate attention.
- **Recent activity** feed.

### Framework Dashboards

Each active framework has its own dashboard with:

- **Framework-specific compliance score.**
- **Requirement-level progress** grouped by sections.
- **Gap analysis** showing unaddressed requirements.
- **Evidence completeness** indicators.

### Custom Dashboards

Enterprise customers can create custom dashboards:

1. Go to **Dashboards → Create Dashboard**.
2. Add widgets from the widget library.
3. Configure data sources and filters.
4. Arrange widgets in a grid layout.
5. Share the dashboard with team members or export as PDF.

### Executive Reports

Generate executive-level reports from any dashboard by clicking **Export → Executive Report**. These reports summarize:

- Current compliance posture.
- Key risks and failing controls.
- Progress since last report.
- Recommended actions.`,
      },
    ],
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    description:
      "Identify, assess, and treat risks with a centralized risk register and scoring.",
    icon: "AlertTriangle",
    articles: [
      {
        slug: "risk-register",
        title: "Using the Risk Register",
        summary:
          "Log and manage organizational risks in CloudAnzen's centralized risk register.",
        content: `## Using the Risk Register

The risk register is your central repository for tracking all identified risks.

### Adding a Risk

1. Navigate to **Risk Management → Risk Register**.
2. Click **Add Risk**.
3. Fill in the risk details:
   - **Title** — A concise name for the risk.
   - **Description** — What could go wrong and what would be affected.
   - **Category** — Operational, Technical, Compliance, Financial, or Strategic.
   - **Likelihood** — How likely is this risk to occur (1-5 scale).
   - **Impact** — How severe would the consequences be (1-5 scale).
   - **Owner** — Who is responsible for managing this risk.
4. Click **Save**.

### Risk Score

CloudAnzen calculates a risk score as **Likelihood × Impact**, resulting in a score from 1 to 25:

| Score Range | Severity |
|-------------|----------|
| 1-4 | Low |
| 5-9 | Medium |
| 10-15 | High |
| 16-25 | Critical |

### Risk Views

- **List view** — Sortable table of all risks.
- **Heat map** — Visual grid showing risks by likelihood and impact.
- **Board view** — Kanban-style board grouped by treatment status.`,
      },
      {
        slug: "risk-assessment",
        title: "Risk Assessment Process",
        summary:
          "Conduct risk assessments and document your evaluation methodology.",
        content: `## Risk Assessment Process

CloudAnzen supports structured risk assessments to systematically identify and evaluate risks.

### Creating an Assessment

1. Go to **Risk Management → Assessments**.
2. Click **New Assessment**.
3. Define the scope (organization-wide, department, or system-specific).
4. Set the assessment period and deadline.
5. Assign assessors.

### Assessment Steps

**1. Risk Identification**
Assessors review their areas and add new risks or confirm existing ones. CloudAnzen suggests potential risks based on your industry and integrations.

**2. Risk Analysis**
For each risk, assessors evaluate:
- Likelihood of occurrence
- Potential business impact
- Existing controls that mitigate the risk
- Residual risk after controls

**3. Risk Evaluation**
Compare assessed risks against your risk appetite. CloudAnzen highlights risks that exceed your defined tolerance thresholds.

**4. Treatment Planning**
For each risk above threshold, define a treatment plan:
- **Mitigate** — Implement controls to reduce likelihood or impact.
- **Transfer** — Shift the risk to a third party (e.g., insurance).
- **Accept** — Acknowledge and monitor the risk.
- **Avoid** — Change plans to eliminate the risk entirely.`,
      },
      {
        slug: "risk-treatment",
        title: "Risk Treatment Plans",
        summary:
          "Create and track treatment plans to mitigate, transfer, accept, or avoid risks.",
        content: `## Risk Treatment Plans

After assessing risks, create treatment plans to bring them within acceptable levels.

### Creating a Treatment Plan

1. Open a risk from the risk register.
2. Click **Add Treatment Plan**.
3. Select the treatment strategy:
   - **Mitigate** — Implement new controls or improve existing ones.
   - **Transfer** — Use insurance, outsourcing, or contracts.
   - **Accept** — Document the rationale for accepting the risk.
   - **Avoid** — Remove the activity or system causing the risk.
4. Define specific actions:
   - Action description
   - Responsible person
   - Target completion date
   - Expected residual risk after treatment
5. Click **Save**.

### Tracking Treatment Progress

Each treatment plan shows:

- **Status** — Not started, In progress, Completed, Overdue.
- **Actions** — Checklist of treatment actions with completion status.
- **Timeline** — Visual timeline of milestones and deadlines.
- **Residual risk** — Updated risk score after completed treatments.

### Treatment Review

Schedule periodic reviews of treatment plans to ensure they remain effective. CloudAnzen sends reminders based on the review frequency you set (monthly, quarterly, or semi-annually).`,
      },
    ],
  },
  {
    slug: "vendor-risk",
    title: "Vendor Risk Management",
    description:
      "Track and assess third-party vendor risk with standardized questionnaires and monitoring.",
    icon: "Building",
    articles: [
      {
        slug: "vendor-inventory",
        title: "Managing Your Vendor Inventory",
        summary:
          "Add, categorize, and manage vendors in your centralized vendor inventory.",
        content: `## Managing Your Vendor Inventory

Keep a centralized inventory of all third-party vendors that handle your data or support critical operations.

### Adding a Vendor

1. Navigate to **Vendor Risk → Vendors**.
2. Click **Add Vendor**.
3. Enter vendor details:
   - **Name** and **website**
   - **Category** (SaaS, Infrastructure, Professional Services, etc.)
   - **Data access** — What types of data does this vendor access?
   - **Criticality** — How critical is this vendor to your operations? (Low, Medium, High, Critical)
   - **Contract details** — Start date, renewal date, contract value.
   - **Owner** — Internal team member responsible for the vendor relationship.
4. Click **Save**.

### Vendor Tiers

CloudAnzen automatically suggests a risk tier based on the vendor's data access and criticality:

| Tier | Criteria | Assessment Frequency |
|------|----------|---------------------|
| **Tier 1** | Critical vendors with access to sensitive data | Annually |
| **Tier 2** | Important vendors with limited data access | Every 18 months |
| **Tier 3** | Low-risk vendors with no sensitive data access | Every 24 months |

### Vendor Dashboard

The vendor dashboard shows:
- Total vendors by tier and category
- Upcoming assessment due dates
- Vendors with expiring contracts
- Risk score distribution across vendors`,
      },
      {
        slug: "vendor-assessments",
        title: "Vendor Security Assessments",
        summary:
          "Send security questionnaires to vendors and review their responses.",
        content: `## Vendor Security Assessments

Assess your vendors' security posture using standardized questionnaires.

### Sending an Assessment

1. Open a vendor from your inventory.
2. Click **Send Assessment**.
3. Choose a questionnaire template:
   - **Standard Security Questionnaire** — General security practices.
   - **Data Privacy Assessment** — GDPR and privacy-focused questions.
   - **SOC 2 Readiness** — Questions aligned with SOC 2 criteria.
   - **Custom** — Build your own questionnaire.
4. Set a response deadline.
5. Click **Send**.

The vendor receives an email with a link to complete the questionnaire. No CloudAnzen account is required.

### Reviewing Responses

When a vendor submits their response:

1. You receive a notification.
2. Open the assessment from **Vendor Risk → Assessments**.
3. Review each answer. CloudAnzen flags high-risk responses automatically.
4. Add notes or request clarification on specific answers.
5. Assign an overall risk rating (Low, Medium, High, Critical).
6. Accept or request re-assessment.

### Assessment History

CloudAnzen maintains a full history of vendor assessments, so you can track how a vendor's security posture changes over time.`,
      },
      {
        slug: "vendor-monitoring",
        title: "Continuous Vendor Monitoring",
        summary:
          "Monitor vendor risk continuously with automated checks and alerts.",
        content: `## Continuous Vendor Monitoring

Go beyond periodic assessments with continuous vendor monitoring.

### What's Monitored

CloudAnzen can track public signals about vendor security:

- **Security certifications** — Check if vendors maintain their ISO 42001, SOC 2, ISO 27001, or other certifications.
- **Data breach reports** — Monitor for reported breaches involving your vendors.
- **Compliance status** — Track vendor compliance with regulations like GDPR.
- **Financial health** — Monitor for signs of financial instability.

### Setting Up Monitoring

1. Go to **Vendor Risk → Monitoring**.
2. Enable monitoring for each vendor.
3. Configure alert thresholds.
4. Choose notification preferences.

### Risk Score Changes

When monitoring detects a change:

1. The vendor's risk score is updated automatically.
2. The vendor owner receives an alert.
3. A task is created to review and respond to the change.
4. The assessment may be flagged for early renewal.`,
      },
    ],
  },
  {
    slug: "audit-readiness",
    title: "Audit Readiness",
    description:
      "Prepare for audits with evidence rooms, auditor collaboration, and readiness reports.",
    icon: "ClipboardCheck",
    articles: [
      {
        slug: "preparing-for-audit",
        title: "Preparing for Your Audit",
        summary:
          "A step-by-step guide to getting audit-ready with CloudAnzen.",
        content: `## Preparing for Your Audit

CloudAnzen streamlines audit preparation so you can go into your audit with confidence.

### Pre-Audit Checklist

**4-6 Weeks Before:**
- [ ] Review your compliance dashboard for any failing controls
- [ ] Address all critical and high-severity findings
- [ ] Ensure all evidence is current and within freshness requirements
- [ ] Complete any outstanding evidence requests
- [ ] Review and update policies that are due for renewal

**2-4 Weeks Before:**
- [ ] Create an audit room for your auditor
- [ ] Run a gap analysis report
- [ ] Prepare responses for any known gaps
- [ ] Brief control owners on the audit process
- [ ] Test your evidence room to ensure everything is accessible

**1 Week Before:**
- [ ] Final review of all controls and evidence
- [ ] Ensure auditor access is configured
- [ ] Prepare a list of key contacts for the auditor
- [ ] Schedule kickoff meeting with your auditor

### Readiness Score

CloudAnzen's audit readiness score factors in:
- Percentage of controls passing
- Evidence freshness and completeness
- Open findings and their severity
- Policy review status
- Team task completion rate`,
      },
      {
        slug: "audit-rooms",
        title: "Using Audit Rooms",
        summary:
          "Create secure audit rooms to share evidence and collaborate with auditors.",
        content: `## Using Audit Rooms

Audit rooms provide a secure, organized space for sharing evidence with your auditors.

### Creating an Audit Room

1. Navigate to **Audit → Audit Rooms**.
2. Click **Create Audit Room**.
3. Configure the room:
   - **Name** — e.g., "SOC 2 Type II — 2025"
   - **Framework** — Select the framework being audited.
   - **Audit period** — Start and end dates.
   - **Auditor access** — Invite your auditor via email.
4. Click **Create**.

### What Auditors See

Auditors get a read-only view of:

- All controls mapped to the framework
- Evidence linked to each control
- Policy documents
- Risk register entries
- Organizational information

### Managing Audit Rooms

- **Add evidence** — Link additional evidence to controls within the room.
- **Add comments** — Communicate with your auditor via threaded comments on any control.
- **Track progress** — See which controls the auditor has reviewed.
- **Export** — Download the entire audit room as a ZIP file for offline review.

### Audit Room Security

- Auditor access is time-limited to the audit period.
- All access is logged with a full audit trail.
- Files are encrypted at rest and in transit.
- You can revoke auditor access at any time.`,
      },
      {
        slug: "managing-findings",
        title: "Managing Audit Findings",
        summary:
          "Track, respond to, and remediate audit findings within CloudAnzen.",
        content: `## Managing Audit Findings

When auditors identify findings, CloudAnzen helps you track and remediate them efficiently.

### Logging Findings

1. Go to **Audit → Findings**.
2. Click **Add Finding**.
3. Enter the finding details:
   - **Title** and **description**
   - **Severity** — Observation, Minor, Major, Critical
   - **Related control(s)**
   - **Auditor recommendation**
4. Assign an owner and set a remediation deadline.

### Remediation Workflow

1. **Acknowledged** — Finding is logged and assigned.
2. **In Progress** — Owner is working on remediation.
3. **Remediated** — Fix has been implemented.
4. **Verified** — Auditor confirms the remediation is acceptable.
5. **Closed** — Finding is resolved.

### Remediation Plans

For each finding, create a detailed remediation plan:

- Description of the root cause
- Steps to remediate
- Timeline and milestones
- Evidence of remediation
- Preventive measures to avoid recurrence

### Finding Trends

Track findings across multiple audit cycles to identify patterns and systemic issues. CloudAnzen's analytics show:

- Finding count by severity over time
- Most common finding categories
- Average time to remediate
- Repeat findings across audits`,
      },
    ],
  },
  {
    slug: "trust-center",
    title: "Trust Center",
    description:
      "Create a public-facing trust page to proactively share your security posture with customers.",
    icon: "Globe",
    articles: [
      {
        slug: "setting-up-trust-center",
        title: "Setting Up Your Trust Center",
        summary:
          "Create and customize a public trust page to showcase your security posture.",
        content: `## Setting Up Your Trust Center

Your Trust Center is a public-facing page where prospects and customers can view your security posture, request documents, and build trust.

### Creating Your Trust Center

1. Navigate to **Trust Center → Settings**.
2. Click **Enable Trust Center**.
3. Customize your trust center:
   - **Company name and logo**
   - **Custom subdomain** (e.g., trust.yourcompany.com)
   - **Brand colors** to match your website
   - **Welcome message** explaining your commitment to security

### What to Include

- **Compliance badges** — Display your ISO 42001, SOC 2, ISO 27001, and other certifications.
- **Security overview** — Describe your security practices at a high level.
- **Sub-processors** — List the third-party services you use and their roles.
- **FAQs** — Answer common security questions from prospects.
- **Document library** — Share whitepapers, certifications, and security summaries.

### Custom Domain

To use a custom domain:

1. Go to **Trust Center → Settings → Domain**.
2. Enter your desired domain (e.g., trust.yourcompany.com).
3. Add the provided CNAME record to your DNS settings.
4. Click **Verify Domain**.`,
      },
      {
        slug: "document-sharing",
        title: "Sharing Security Documents",
        summary:
          "Manage document access with NDA-gated downloads and access requests.",
        content: `## Sharing Security Documents

Share sensitive security documents with prospects and customers through controlled access.

### Document Library

Add documents to your Trust Center:

1. Go to **Trust Center → Documents**.
2. Click **Add Document**.
3. Upload the file and set access level:
   - **Public** — Anyone visiting your Trust Center can download.
   - **Request access** — Visitors must submit a request (name, email, company).
   - **NDA required** — Visitors must accept an NDA before downloading.
4. Add a description and tags.
5. Click **Publish**.

### Common Documents to Share

- SOC 2 Type II report (typically NDA-gated)
- ISO 27001 certificate (public)
- Penetration test summary (request access)
- Security whitepaper (public)
- Data processing agreement (public)
- Business continuity plan summary (request access)

### Access Request Management

When someone requests access:

1. You receive a notification.
2. Review the request in **Trust Center → Requests**.
3. Approve or deny the request.
4. If approved, the requester receives a time-limited download link.

### Analytics

Track document engagement:
- Views and download counts
- Most requested documents
- Requester details and companies
- Conversion from Trust Center to demo requests`,
      },
    ],
  },
  {
    slug: "team-management",
    title: "Team Management",
    description:
      "Manage users, assign roles, and distribute compliance responsibilities across your team.",
    icon: "Users",
    articles: [
      {
        slug: "inviting-team-members",
        title: "Inviting Team Members",
        summary:
          "Add new users to your CloudAnzen workspace and assign appropriate roles.",
        content: `## Inviting Team Members

Add team members to your CloudAnzen workspace so they can contribute to your compliance program.

### How to Invite

1. Navigate to **Settings → Team**.
2. Click **Invite Members**.
3. Enter email addresses (one per line or comma-separated).
4. Select the role for all invitees (you can change individual roles later).
5. Click **Send Invitations**.

Invitees receive an email with a link to create their account and join your workspace.

### Bulk Invitations

For larger teams:

1. Go to **Settings → Team → Bulk Invite**.
2. Download the CSV template.
3. Fill in email addresses and roles.
4. Upload the completed CSV.
5. Review and confirm.

### SSO Auto-Provisioning

If you've connected an identity provider with SCIM:

- New users are automatically provisioned when added to the designated group in your IdP.
- Roles can be mapped based on IdP group membership.
- Deprovisioned users are automatically deactivated in CloudAnzen.`,
      },
      {
        slug: "task-assignments",
        title: "Assigning Tasks",
        summary:
          "Assign compliance tasks to team members and track progress.",
        content: `## Assigning Tasks

Distribute compliance work across your team with task assignments.

### Creating Tasks

1. Navigate to **Tasks → New Task**.
2. Fill in the task details:
   - **Title** — Clear description of what needs to be done.
   - **Description** — Additional context and instructions.
   - **Assignee** — The team member responsible.
   - **Due date** — When the task should be completed.
   - **Priority** — Low, Medium, High, or Urgent.
   - **Related items** — Link to a control, risk, vendor, or policy.
3. Click **Create Task**.

### Task Sources

Tasks can be created from multiple places:

- **Controls** — Assign someone to fix a failing control.
- **Evidence** — Request evidence from a team member.
- **Risks** — Assign risk treatment actions.
- **Policies** — Assign policy review or updates.
- **Findings** — Assign audit finding remediation.

### Task Dashboard

The task dashboard shows:

- **ToDo** — Tasks assigned to you.
- **Team Tasks** — All tasks across your organization.
- **Overdue** — Tasks past their due date.
- **Completed** — Recently completed tasks.

Filter by assignee, priority, due date, or related item.`,
      },
      {
        slug: "sso-setup",
        title: "Setting Up SSO",
        summary:
          "Configure single sign-on for your CloudAnzen workspace using SAML or OIDC.",
        content: `## Setting Up SSO

Enforce single sign-on for your CloudAnzen workspace to improve security and simplify access management.

### Supported Protocols

- **SAML 2.0** — Works with Okta, Azure AD, OneLogin, and other SAML providers.
- **OIDC** — Works with providers supporting OpenID Connect.

### SAML Setup

1. Go to **Settings → Security → SSO**.
2. Select **SAML 2.0**.
3. Enter your IdP details:
   - **SSO URL** — Your IdP's single sign-on endpoint.
   - **Entity ID** — Your IdP's entity identifier.
   - **Certificate** — Upload your IdP's signing certificate.
4. Copy the **ACS URL** and **Entity ID** from CloudAnzen into your IdP configuration.
5. Click **Test Connection** to verify.
6. Enable **Enforce SSO** to require all users to sign in via your IdP.

### OIDC Setup

1. Go to **Settings → Security → SSO**.
2. Select **OIDC**.
3. Enter your provider's details:
   - **Issuer URL**
   - **Client ID**
   - **Client Secret**
4. Configure the redirect URI in your provider.
5. Test and enable.

### SSO Enforcement

When SSO is enforced:
- All users must sign in through your identity provider.
- Password-based login is disabled.
- Owner accounts retain a backup email login for emergency access.`,
      },
    ],
  },
  {
    slug: "questionnaire-automation",
    title: "Questionnaire Automation",
    description:
      "Respond to security questionnaires and RFPs faster with AI-powered automation.",
    icon: "MessageSquareText",
    articles: [
      {
        slug: "answering-questionnaires",
        title: "Answering Security Questionnaires",
        summary:
          "Use CloudAnzen to respond to customer security questionnaires quickly and consistently.",
        content: `## Answering Security Questionnaires

CloudAnzen's questionnaire automation helps you respond to customer security questionnaires in minutes instead of days.

### How It Works

1. **Upload** — Upload the questionnaire (Excel, CSV, or PDF).
2. **AI Analysis** — CloudAnzen's AI reads and categorizes each question.
3. **Auto-Fill** — Answers are populated based on your existing policies, controls, and previous responses.
4. **Review** — Your team reviews and adjusts auto-filled answers.
5. **Export** — Download the completed questionnaire in its original format.

### Knowledge Base

CloudAnzen builds a knowledge base from:

- Your approved policies
- Control descriptions and configurations
- Previous questionnaire responses
- Custom answer templates you create

The more questionnaires you complete, the more accurate auto-fill becomes.

### Answer Confidence

Each auto-filled answer includes a confidence score:

- **High (90%+)** — Answer matches a verified, up-to-date source.
- **Medium (70-89%)** — Answer is likely correct but should be reviewed.
- **Low (<70%)** — Answer needs manual input or verification.

### Response Library

Build a library of approved responses:

1. Go to **Questionnaires → Response Library**.
2. Review and approve auto-generated responses.
3. Create custom responses for frequently asked questions.
4. Tag responses for easy categorization.`,
      },
      {
        slug: "questionnaire-templates",
        title: "Questionnaire Templates",
        summary:
          "Use and customize questionnaire templates for common security frameworks.",
        content: `## Questionnaire Templates

CloudAnzen includes templates for commonly received security questionnaires.

### Available Templates

- **SIG (Standardized Information Gathering)** — The industry-standard shared assessment questionnaire.
- **CAIQ (Consensus Assessment Initiative Questionnaire)** — Cloud Security Alliance's cloud-specific questionnaire.
- **VSA (Vendor Security Alliance)** — Concise vendor security questionnaire.
- **Custom templates** — Create your own templates for internal use.

### Using a Template

1. Go to **Questionnaires → Templates**.
2. Select a template.
3. Click **Start Response**.
4. CloudAnzen auto-fills answers from your knowledge base.
5. Review, edit, and approve answers.
6. Export the completed questionnaire.

### Creating Custom Templates

1. Go to **Questionnaires → Templates → Create**.
2. Add sections and questions.
3. Set expected answer types (text, yes/no, multiple choice).
4. Map questions to controls or policies.
5. Save the template for reuse.`,
      },
    ],
  },
];

export function getAllArticles(): (HelpArticle & { categorySlug: string; categoryTitle: string })[] {
  return helpCategories.flatMap((cat) =>
    cat.articles.map((article) => ({
      ...article,
      categorySlug: cat.slug,
      categoryTitle: cat.title,
    }))
  );
}

export function getCategory(slug: string): HelpCategory | undefined {
  return helpCategories.find((cat) => cat.slug === slug);
}

export function getArticle(
  categorySlug: string,
  articleSlug: string
): (HelpArticle & { categorySlug: string; categoryTitle: string }) | undefined {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const article = category.articles.find((a) => a.slug === articleSlug);
  if (!article) return undefined;
  return {
    ...article,
    categorySlug: category.slug,
    categoryTitle: category.title,
  };
}
