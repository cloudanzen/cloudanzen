---
title: "Kubernetes and SOC 2: Mapping cluster hardening controls to Trust Services Criteria"
summary: "A practical mapping of Kubernetes hardening controls—RBAC, network policies, admission controllers—to the SOC 2 Trust Services Criteria auditors check."
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "6 min read"
tags: ["Kubernetes","SOC 2","cluster hardening","Trust Services Criteria","K8s compliance"]
sortOrder: 0
publishedAt: "2026-07-02"
author: "chloe-thompson"
---
Kubernetes is the default compute platform for most Series A–C SaaS teams. When the auditor arrives and asks for evidence of logical access controls, change management, and system monitoring, every answer traces back to how you configured the cluster. Auditors do not speak YAML, but they do ask about the controls YAML enforces. Here is a direct mapping of cluster hardening to the Trust Services Criteria that matter.

## Why cluster hardening lands in SOC 2 scope

Kubernetes manages workloads, secrets, network traffic, and access. When it sits in scope for SOC 2, every misconfiguration becomes a potential finding. The Trust Services Criteria most relevant to cluster operations are:

- **CC6** – Logical and physical access controls
- **CC7** – System operations (monitoring, detection, incident response)
- **CC8** – Change management (deployments, configuration changes)

Auditors look for evidence that access to cluster resources is restricted, that changes go through a controlled process, and that anomalous behavior is detected. The cluster's built-in primitives — RBAC, network policies, admission controllers, audit logs — are the controls that produce that evidence [source: https://www.armosec.io/blog/kubernetes-compliance-under-soc-2/].

## CC6: Logical access maps to RBAC and pod security

**RBAC**

The biggest CC6 finding in Kubernetes audits is over-permissive roles. ClusterAdmin granted to CI/CD service accounts, developers with write access to production namespaces, or wildcard verbs on core API groups — each is a CC6.3 gap: access is not limited to what the function requires.

To satisfy CC6, RBAC should enforce least privilege:

- No ClusterAdmin for service accounts except cluster operators
- Separate namespaces for production, staging, and tooling workloads
- Quarterly review of Role and ClusterRole bindings with documented sign-off
- Named owner for every service account with production write access

Service accounts are the most common RBAC problem in practice. A CI/CD service account granted ClusterAdmin because it was the easiest way to get the pipeline working is a CC6 finding waiting to happen. Audit the permissions each pipeline step actually needs and create a dedicated, scoped role. The same applies to monitoring agents, logging collectors, and any pod with an auto-mounted service account token — disable auto-mounting by default and opt in only where needed.

Audit evidence is not a YAML snapshot. It is a closed ticket showing who reviewed the bindings, when, and what was changed or confirmed. One export without a review trail does not satisfy CC6 [source: https://www.armosec.io/blog/kubernetes-compliance-under-soc-2/].

**Pod security**

CC6.6 covers protection from external threats. Pods running as root, with `hostPID` or `hostNetwork` enabled, or with privileged containers create a control gap. The OWASP Kubernetes Security Cheat Sheet recommends enforcing Pod Security Admission at the namespace level to block non-compliant pods before they reach production [source: https://cheatsheetseries.owasp.org/cheatsheets/Kubernetes_Security_Cheat_Sheet.html].

Set the namespace annotation to `enforce: restricted` for production and `warn: baseline` for lower environments. Blocked deployments generate a log entry with the requesting user and rejected manifest — that log is CC6.6 evidence.

**Network policies**

By default, all pods in a cluster can communicate with all other pods across namespaces. A compromised pod in a lower-trust namespace can reach database backends and internal APIs without restriction. NetworkPolicy objects restrict traffic to explicitly declared flows [source: https://cheatsheetseries.owasp.org/cheatsheets/Kubernetes_Security_Cheat_Sheet.html]. Define ingress and egress rules at the namespace level: production workloads should not accept connections from development namespaces, and application pods should not reach the Kubernetes API server unless their function requires it. NetworkPolicy enforcement depends on your CNI plugin — verify yours enforces it before treating network policies as an active control.

## CC7: System operations map to audit logs and runtime monitoring

CC7 requires detecting and responding to anomalies. In Kubernetes, that means capturing what the API server sees and catching what happens inside running containers.

**API server audit logs**

The Kubernetes API server logs every request — reads, writes, exec calls, secret access — when audit logging is enabled. For managed clusters (EKS, GKE, AKS), audit logging is configurable but not always on by default. An audit policy logging at `RequestResponse` level for secrets, configmaps, and exec operations gives you the data CC7.2 requires [source: https://cheatsheetseries.owasp.org/cheatsheets/Kubernetes_Security_Cheat_Sheet.html]. Retain logs for at least 90 days — most auditors request logs covering the full audit period.

**Runtime detection**

Static configuration checks catch misconfigurations at deploy time. Runtime tools catch what happens after: unexpected shell executions inside containers, privilege escalation attempts, or writes outside expected paths. Falco is the open-source standard for Kubernetes runtime monitoring [source: https://www.sentinelone.com/cybersecurity-101/cloud-security/kubernetes-security-checklist/].

Map Falco rule categories to CC7 sub-criteria in your control library. When an auditor asks how you detect anomalous activity in the compute environment, the answer should be a rule set, a log destination, and a documented escalation path — not "we have Falco installed." An alert that fires and is never acknowledged is worse than no alert — it proves the system detected something and the team ignored it.

## CC8: Change management maps to admission controllers and CI/CD gates

CC8 requires that changes to production infrastructure follow a controlled process. In Kubernetes, changes arrive via `kubectl apply` or CI/CD pipelines. Without gates, anyone with write access can push arbitrary manifests directly to production.

**Admission controllers as change gates**

OPA/Gatekeeper or Kyverno enforce policy before any manifest takes effect. Policies useful for CC8:

- Block image tags other than SHA digests to prevent mutable `latest` from deploying
- Require labels (`app`, `owner`, `environment`) on all workloads
- Enforce resource limits on pods to prevent unbounded resource consumption

Each rejected manifest is logged with the requesting user, timestamp, and rejected configuration. That log is CC8 evidence [source: https://www.armosec.io/blog/kubernetes-compliance-under-soc-2/].

**Restrict direct cluster access**

If developers can run `kubectl apply` in production alongside the CI/CD pipeline, the change audit trail has gaps. Restrict production kubeconfig access to CI/CD service accounts. Give developers read-only access for debugging; write access goes through a pipeline with a peer-approval step that creates a reviewable record. Document this restriction in your access control policy, link it to CC8 in your control library, and include it in engineer onboarding so new team members do not receive broad cluster access by default.

## Gaps auditors find in Kubernetes evidence

These gaps come up in evidence requests repeatedly.

**Audit logging enabled but not reviewed.** Logs exist, but there is no documented review process, no alert on anomalous patterns, and no escalation record. CC7.2 asks for evidence that someone acted on findings — not just that logs were retained.

**RBAC evidence covers bindings but not roles.** Teams export `rolebindings` and `clusterrolebindings` but skip the actual `roles` and `clusterroles`. An auditor who sees a binding to a role named `read-only-prod` cannot confirm it is actually read-only without reviewing the role definition.

**Admission controllers in audit-only mode.** Kyverno and Gatekeeper both support `audit` and `enforce` modes. Teams stay in `audit` to avoid breaking deployments — which means policies log violations but nothing is blocked. Audit-mode policies do not satisfy CC8's change control requirement [source: https://www.sentinelone.com/cybersecurity-101/cloud-security/kubernetes-security-checklist/].

**Secrets in environment variables.** Kubernetes Secrets mounted as environment variables appear in audit logs and process listings. Mounting them as files or using an external secrets operator reduces exposure and addresses CC6.7's requirement to protect sensitive configuration at rest [source: https://cheatsheetseries.owasp.org/cheatsheets/Kubernetes_Security_Cheat_Sheet.html].

Kubernetes evidence is scattered across RBAC exports, admission controller logs, API server audit streams, and runtime alerts. Mapping it to Trust Services Criteria sub-criteria manually means someone is assembling YAML dumps the week before fieldwork. CloudAnzen organizes cluster controls against SOC 2 sub-criteria and keeps evidence collection running continuously so the folder is ready when the auditor is. [Talk to us](/demo).