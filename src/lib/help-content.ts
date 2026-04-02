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
      "Your starting point for learning CloudAnzen, with quick access to essential setup and onboarding resources.",
    icon: "Rocket",
    articles: [
      {
        slug: "welcome-to-cloudanzen",
        title: "Welcome to CloudAnzen",
        summary:
          "An overview of CloudAnzen and how it helps you achieve continuous GRC.",
        content: `## Welcome to CloudAnzen

CloudAnzen is an AI-driven continuous GRC (Governance, Risk, and Compliance) platform designed for modern cloud teams. Whether you're a startup pursuing your first SOC 2 or an enterprise managing multiple frameworks, CloudAnzen automates the heavy lifting so you can focus on building.

### What You Can Do with CloudAnzen

- **Automate compliance** — Map controls to frameworks, collect evidence automatically, and stay audit-ready year-round.
- **Monitor continuously** — Track control health in real time with automated checks across your infrastructure.
- **Manage risk** — Log, prioritize, and treat risks with a centralized risk register.
- **Streamline audits** — Collaborate with auditors directly in the platform, share evidence rooms, and close findings faster.
- **Oversee vendors** — Assess and monitor third-party risk with standardized workflows.

### Next Steps

1. [Set up your account](/help/getting-started/account-setup) and invite your team.
2. [Connect your first integrations](/help/integrations/connecting-integrations) to start collecting evidence automatically.
3. [Choose your compliance framework](/help/compliance-frameworks/choosing-a-framework) and map your controls.`,
      },
      {
        slug: "account-setup",
        title: "Setting Up Your Account",
        summary:
          "Step-by-step guide to configuring your CloudAnzen workspace for the first time.",
        content: `## Setting Up Your Account

Getting started with CloudAnzen takes just a few minutes. Follow these steps to configure your workspace.

### Step 1: Create Your Organization

After signing up, you'll be prompted to create your organization. Enter your company name, industry, and estimated team size. This information helps CloudAnzen tailor recommendations for your compliance journey.

### Step 2: Configure Your Profile

Set up your personal profile including your name, role, and notification preferences. As the account creator, you'll have the **Owner** role by default.

### Step 3: Invite Team Members

Navigate to **Settings → Team** to invite colleagues. Assign roles based on their responsibilities:

- **Owner** — Full administrative access including billing and account deletion.
- **Admin** — Can manage settings, integrations, and team members.
- **Compliance Manager** — Can manage controls, evidence, policies, and risk.
- **Contributor** — Can complete assigned tasks and upload evidence.
- **Viewer** — Read-only access to dashboards and reports.

### Step 4: Connect Integrations

Head to **Settings → Integrations** to connect your cloud infrastructure, identity provider, and other services. CloudAnzen supports 100+ integrations out of the box.

### Step 5: Choose Your Framework

Select one or more compliance frameworks from the **Frameworks** section. CloudAnzen will automatically map relevant controls and begin monitoring.`,
      },
      {
        slug: "navigating-the-dashboard",
        title: "Navigating the Dashboard",
        summary:
          "Learn how to use the CloudAnzen dashboard to monitor your compliance posture at a glance.",
        content: `## Navigating the Dashboard

The CloudAnzen dashboard gives you a real-time overview of your compliance posture. Here's what each section shows you.

### Compliance Score

The compliance score at the top of your dashboard shows your overall readiness as a percentage. It's calculated based on the ratio of passing controls to total controls across all active frameworks.

### Control Health

The control health panel displays the status of all mapped controls:

- **Passing** (green) — The control is meeting requirements and evidence is up to date.
- **Failing** (red) — The control has issues that need attention.
- **Needs Review** (yellow) — Evidence has been collected but requires manual review.
- **Not Started** (gray) — The control hasn't been configured yet.

### Recent Activity

The activity feed shows the latest actions taken across your organization, including evidence uploads, policy approvals, risk updates, and integration sync events.

### Quick Actions

Use the quick action buttons to:

- Upload evidence
- Create a new risk
- Assign a task
- Start an audit

### Framework Progress

If you have multiple frameworks active, the framework progress section shows a breakdown of readiness for each one.`,
      },
      {
        slug: "quick-start-checklist",
        title: "Quick Start Checklist",
        summary:
          "A checklist of essential tasks to complete in your first week with CloudAnzen.",
        content: `## Quick Start Checklist

Complete these tasks in your first week to get the most out of CloudAnzen.

### Day 1: Foundation

- [ ] Create your organization and set your company profile
- [ ] Invite your core compliance team (at least 2-3 members)
- [ ] Connect your primary cloud provider (AWS, GCP, or Azure)
- [ ] Connect your identity provider (Okta, Google Workspace, Azure AD)

### Day 2: Framework Setup

- [ ] Select your target compliance framework(s)
- [ ] Review the automatically mapped controls
- [ ] Customize control mappings if needed
- [ ] Assign control owners to team members

### Day 3: Policies

- [ ] Review the policy templates provided by CloudAnzen
- [ ] Customize policies to match your organization's practices
- [ ] Set up policy approval workflows
- [ ] Distribute policies to team members for acknowledgment

### Day 4: Evidence & Monitoring

- [ ] Review automatically collected evidence
- [ ] Upload any manual evidence for controls that require it
- [ ] Configure alerting thresholds for control monitoring
- [ ] Set up notification channels (email, Slack)

### Day 5: Risk & Vendors

- [ ] Set up your risk register with initial risks
- [ ] Add your critical vendors to the vendor inventory
- [ ] Send vendor assessment questionnaires
- [ ] Review your dashboard and compliance score`,
      },
      {
        slug: "roles-and-permissions",
        title: "Roles and Permissions",
        summary:
          "Understand the different user roles in CloudAnzen and what each can access.",
        content: `## Roles and Permissions

CloudAnzen uses role-based access control (RBAC) to ensure team members only access what they need.

### Available Roles

| Role | Description |
|------|-------------|
| **Owner** | Full access to all features, billing, and account management. Only one owner per organization. |
| **Admin** | Can manage settings, integrations, team members, and all compliance features. Cannot delete the organization or transfer ownership. |
| **Compliance Manager** | Can manage controls, evidence, policies, risks, and vendors. Cannot modify integrations or team settings. |
| **Contributor** | Can complete assigned tasks, upload evidence, and update risks assigned to them. |
| **Viewer** | Read-only access to dashboards, reports, and audit rooms. |

### Changing Roles

Owners and Admins can change a user's role from **Settings → Team**. Click the role badge next to a user's name to change it.

### Custom Roles

Enterprise plan customers can create custom roles with granular permissions. Contact your account manager or reach out to support to learn more.`,
      },
    ],
  },
  {
    slug: "compliance-frameworks",
    title: "Compliance Frameworks",
    description:
      "Guides for SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, NIST CSF, and custom frameworks.",
    icon: "ShieldCheck",
    articles: [
      {
        slug: "choosing-a-framework",
        title: "Choosing the Right Framework",
        summary:
          "Compare popular compliance frameworks and learn which ones are right for your business.",
        content: `## Choosing the Right Framework

Selecting the right compliance framework depends on your industry, customer requirements, and business goals.

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

CloudAnzen supports running multiple frameworks simultaneously with shared controls. This means a single control can satisfy requirements across SOC 2, ISO 27001, and other frameworks—reducing duplicate work.`,
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

### Generating Reports

Export framework progress reports for stakeholders:

1. Navigate to **Frameworks → [Your Framework] → Reports**.
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

- **Security certifications** — Check if vendors maintain their SOC 2, ISO 27001, or other certifications.
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

- **Compliance badges** — Display your SOC 2, ISO 27001, and other certifications.
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

- **My Tasks** — Tasks assigned to you.
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
