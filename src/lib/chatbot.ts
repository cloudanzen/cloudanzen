export type ChatMessageInput = {
  role: "user" | "assistant";
  text: string;
};

export const CHATBOT_SUGGESTIONS = [
  "What frameworks do you support?",
  "How do you help with audit readiness?",
  "Can you reduce questionnaire effort?",
  "Why should I book a demo?",
] as const;

export const CHATBOT_SYSTEM_PROMPT = `You are the CloudAnzen website AI assistant.

Your job:
- Answer general buyer questions about GRC, compliance frameworks, audit readiness, evidence collection, control monitoring, vendor risk, trust centers, and questionnaires.
- Explain CloudAnzen as an AI-driven continuous GRC platform for modern cloud teams.
- Be helpful, concise, commercial but not pushy.
- Use plain English and avoid making up product features that were not asked for.
- Do not provide legal advice, certification guarantees, or definitive audit outcomes.
- If the user asks for company-specific implementation details, say a tailored demo is the best next step.
- When relevant, nudge the user toward booking a demo with CloudAnzen.

Style:
- 2 to 5 sentences.
- Warm, confident, practical.
- Mention booking a demo only when it is relevant or helpful.
`;

export function buildFallbackAssistantReply(input: string) {
  const message = input.toLowerCase();

  if (
    message.includes("soc 2") ||
    message.includes("iso") ||
    message.includes("gdpr") ||
    message.includes("hipaa") ||
    message.includes("framework") ||
    message.includes("nist") ||
    message.includes("pci")
  ) {
    return "CloudAnzen helps teams operationalize frameworks like SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and NIST CSF by mapping controls, centralizing evidence, and keeping readiness visible between audits. If you want to see how that would look for your stack and frameworks, booking a demo is the best next step.";
  }

  if (
    message.includes("audit") ||
    message.includes("readiness") ||
    message.includes("evidence") ||
    message.includes("auditor")
  ) {
    return "For audit readiness, CloudAnzen helps automate evidence collection, surface control gaps early, and keep an always-current view of what is ready, missing, or needs follow-up before auditors ask. A demo can show exactly how that workflow maps to your audit cycle.";
  }

  if (
    message.includes("questionnaire") ||
    message.includes("security review") ||
    message.includes("customer") ||
    message.includes("trust")
  ) {
    return "CloudAnzen helps teams respond faster to security reviews with reusable answers, trust artifacts, and a clearer view of control status so customer questionnaires do not start from scratch every time. If your team handles a lot of diligence requests, a demo would be especially useful.";
  }

  if (
    message.includes("demo") ||
    message.includes("book") ||
    message.includes("pricing") ||
    message.includes("buy")
  ) {
    return "A demo is the best next step if you want to see how CloudAnzen fits your stack, frameworks, and audit motion. The team can walk through your current process and show where AI-driven automation saves time.";
  }

  if (
    message.includes("risk") ||
    message.includes("vendor") ||
    message.includes("continuous monitoring") ||
    message.includes("control")
  ) {
    return "Beyond compliance checklists, CloudAnzen connects control monitoring, vendor risk, remediation tracking, and audit readiness so security and GRC teams can run one continuous program instead of fragmented workflows. A tailored demo can show where that would replace manual handoffs in your environment.";
  }

  return "CloudAnzen is built for modern cloud teams that want AI-driven continuous GRC, stronger audit readiness, and less manual coordination across compliance, risk, evidence, and customer trust workflows. If you want a more tailored answer for your team, book a demo and we can walk through it live.";
}
