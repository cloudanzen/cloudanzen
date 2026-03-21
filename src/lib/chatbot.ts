export type ChatMessageInput = {
  role: "user" | "assistant";
  text: string;
};

type Topic = {
  id: string;
  keywords: string[];
  summary: string;
  controls: string;
  certification: string;
  cloudanzen: string;
  demo: string;
};

const TOPICS: Topic[] = [
  {
    id: "soc2",
    keywords: [
      "soc 2",
      "soc2",
      "type ii",
      "type 2",
      "type i",
      "type 1",
      "aicpa",
    ],
    summary:
      "SOC 2 is an attestation against the AICPA Trust Services Criteria, usually focused on security and often extended to availability, confidentiality, processing integrity, and privacy.",
    controls:
      "Typical SOC 2 controls include access management, MFA, change management, logging and monitoring, incident response, vendor oversight, backups, and employee security processes.",
    certification:
      "SOC 2 is not a certification - it is an auditor attestation, and Type I and Type II answer different questions about point-in-time design versus operating effectiveness over time.",
    cloudanzen:
      "CloudAnzen helps by organizing controls, evidence, owner workflows, and continuous monitoring so teams can stay ready between auditor requests instead of rebuilding proof manually.",
    demo: "If SOC 2 is a near-term goal, a demo is useful because we can show how CloudAnzen supports evidence collection and readiness tracking across the full cycle.",
  },
  {
    id: "iso27001",
    keywords: [
      "iso 27001",
      "iso27001",
      "isms",
      "annex a",
      "statement of applicability",
    ],
    summary:
      "ISO 27001 is a certifiable information security management standard centered on building and operating an ISMS with risk-based governance and documented control objectives.",
    controls:
      "Teams usually need policy management, risk assessments, asset inventory, supplier security, access control, incident management, business continuity, and evidence tied to Annex A control expectations.",
    certification:
      "Unlike SOC 2, ISO 27001 results in a certification when an accredited body confirms the ISMS is designed and operating effectively.",
    cloudanzen:
      "CloudAnzen helps by mapping controls, centralizing evidence, tracking remediation, and giving teams one place to manage readiness for both internal reviews and external certification audits.",
    demo: "If you are building or maturing an ISMS, a demo can show how CloudAnzen reduces manual coordination across policies, risks, and audit prep.",
  },
  {
    id: "gdpr",
    keywords: [
      "gdpr",
      "privacy",
      "dpa",
      "data subject",
      "processor",
      "controller",
      "dpia",
    ],
    summary:
      "GDPR is a privacy regulation rather than a certifiable framework, so teams focus on lawful processing, data governance, security safeguards, and accountability records.",
    controls:
      "Common GDPR-related controls include data inventories, retention rules, subprocessors and vendor reviews, access restrictions, incident response, DPIA workflows, and support for data subject rights handling.",
    certification:
      "There is no universal GDPR certification that replaces compliance obligations, so organizations usually prove maturity through documentation, operational controls, and audit trails.",
    cloudanzen:
      "CloudAnzen helps keep privacy-related evidence, policies, risks, and review workflows in one system so teams can answer buyer and auditor questions with better consistency.",
    demo: "If privacy readiness is part of your buying criteria, a demo can show how CloudAnzen supports ongoing governance instead of one-time documentation projects.",
  },
  {
    id: "hipaa",
    keywords: ["hipaa", "phi", "ephi", "baa", "healthcare"],
    summary:
      "HIPAA readiness usually centers on safeguarding PHI through administrative, physical, and technical controls, especially for covered entities and business associates.",
    controls:
      "Typical HIPAA controls include access restrictions, audit logging, workforce training, vendor and BAA management, incident handling, encryption, and documented security procedures.",
    certification:
      "HIPAA does not have a single official certification that substitutes for compliance, so buyers usually look for evidence of implemented safeguards and operating discipline.",
    cloudanzen:
      "CloudAnzen helps teams keep those safeguards, evidence, ownership, and audit-readiness activities visible in one place rather than across scattered documents and spreadsheets.",
    demo: "If healthcare or PHI handling matters in your environment, we can walk through a more tailored example in a demo.",
  },
  {
    id: "pci",
    keywords: ["pci", "pci dss", "cardholder", "card data", "saq", "roc"],
    summary:
      "PCI DSS focuses on protecting payment card data with prescriptive security requirements around access, network controls, monitoring, secure development, and operational discipline.",
    controls:
      "Typical PCI control areas include least privilege, MFA, vulnerability management, segmentation, logging, change control, encryption, and regular testing of security systems and processes.",
    certification:
      "PCI DSS usually leads to a formal assessment outcome such as an SAQ or ROC, depending on the environment and assessor requirements, rather than a general-purpose certification label.",
    cloudanzen:
      "CloudAnzen helps organize evidence and control ownership so PCI readiness work is easier to manage and explain across security, engineering, and audit stakeholders.",
    demo: "A demo is helpful if your team is coordinating PCI evidence across multiple systems or owners.",
  },
  {
    id: "nist",
    keywords: [
      "nist",
      "nist csf",
      "cybersecurity framework",
      "identify",
      "protect",
      "detect",
      "respond",
      "recover",
    ],
    summary:
      "NIST CSF is a maturity and risk-management framework used to structure security programs around the functions Identify, Protect, Detect, Respond, and Recover.",
    controls:
      "Teams often map current controls, gaps, and improvement initiatives into NIST categories to guide roadmap planning, executive reporting, and audit readiness.",
    certification:
      "NIST CSF is not a certification standard by itself; it is commonly used as an organizing framework for posture improvement and board-level communication.",
    cloudanzen:
      "CloudAnzen helps translate control evidence and remediation work into a more continuous, measurable operating model that aligns well with NIST-style maturity tracking.",
    demo: "If you use NIST as a program backbone, a demo can show how CloudAnzen supports continuous gap visibility and operational follow-through.",
  },
  {
    id: "audit-readiness",
    keywords: [
      "audit",
      "readiness",
      "auditor",
      "evidence",
      "fieldwork",
      "prepared",
      "audit ready",
    ],
    summary:
      "Audit readiness is usually about proving that controls exist, owners know their responsibilities, and evidence can be produced quickly without scrambling at the end of the cycle.",
    controls:
      "That often requires evidence freshness, clear ownership, review cadences, remediation tracking, and a single source of truth for what is ready, missing, or stale.",
    certification:
      "The exact output varies by framework, but the pattern is consistent: auditors want documented controls and evidence of operation, not just policy statements.",
    cloudanzen:
      "CloudAnzen helps teams maintain readiness continuously by collecting evidence, flagging gaps early, and keeping audit workflows visible before fieldwork begins.",
    demo: "If your current process depends on spreadsheets and last-minute evidence chasing, a demo will make the before-and-after very tangible.",
  },
  {
    id: "questionnaires",
    keywords: [
      "questionnaire",
      "security review",
      "caiq",
      "customer question",
      "trust center",
      "trust",
      "rfx",
      "ddq",
    ],
    summary:
      "Security questionnaires usually ask for concise, credible explanations of controls, certifications, and operational processes across access, infrastructure, incident response, and vendors.",
    controls:
      "Teams answer these best when they can reuse vetted language, link back to current evidence, and keep product, security, and GRC teams aligned on what is actually true today.",
    certification:
      "Customers often ask about framework status and certifications together, so having accurate readiness and evidence data matters more than generic boilerplate.",
    cloudanzen:
      "CloudAnzen helps by centralizing trust artifacts and reusable answers so customer diligence is faster, more consistent, and easier to update over time.",
    demo: "If your team handles frequent customer security reviews, a demo can show how CloudAnzen reduces repetitive response work.",
  },
  {
    id: "controls",
    keywords: [
      "control",
      "controls",
      "mfa",
      "access",
      "logging",
      "change management",
      "incident response",
      "vendor risk",
      "risk",
    ],
    summary:
      "Most buyers asking about controls want to know whether security practices are documented, owned, monitored, and operating consistently, not just whether a policy exists.",
    controls:
      "Common control themes include access reviews, MFA, least privilege, secure change management, logging and alerting, incident response, vendor reviews, backup and recovery, and employee lifecycle controls.",
    certification:
      "The exact control set depends on the framework, but customers usually care most about how the controls are implemented, reviewed, and evidenced over time.",
    cloudanzen:
      "CloudAnzen helps make those control activities measurable and reviewable by connecting evidence, owners, findings, and remediation into one continuous workflow.",
    demo: "If you want to see specific control workflows, a demo is the best next step.",
  },
];

const GENERAL_KNOWLEDGE = [
  "CloudAnzen is positioned as an AI-driven continuous GRC platform for modern cloud teams.",
  "It helps with compliance automation, continuous control monitoring, audit readiness, risk management, vendor oversight, trust workflows, and questionnaire support.",
  "The website assistant should answer basic buyer questions, but for company-specific scoping, implementation, or pricing nuance, it should recommend a demo.",
];

export const CHATBOT_SUGGESTIONS = [
  "What frameworks do you support?",
  "What is the difference between SOC 2 and ISO 27001?",
  "What controls do customers usually ask about?",
  "How do you help with audit readiness?",
  "Can you reduce questionnaire effort?",
] as const;

export const CHATBOT_SYSTEM_PROMPT = `You are the CloudAnzen website AI assistant.

Your job:
- Answer general buyer questions about GRC, compliance frameworks, controls, certification concepts, audit readiness, evidence collection, control monitoring, vendor risk, trust centers, and questionnaires.
- Explain CloudAnzen as an AI-driven continuous GRC platform for modern cloud teams.
- Be accurate, concise, and commercially helpful without sounding repetitive or robotic.
- Use the knowledge context provided to ground your answer.
- Prefer direct answers over generic marketing language.
- Do not invent product features, legal advice, certification guarantees, or implementation details you do not know.
- If the user asks for company-specific scoping, implementation details, or a deeper walkthrough, recommend booking a demo.

Style:
- Usually 3 to 6 sentences.
- Warm, confident, practical.
- Vary wording across turns and do not repeat the same closing sentence every time.
- Only mention booking a demo when it is genuinely relevant.
`;

function normalizeText(text: string) {
  return text.toLowerCase();
}

function scoreTopic(topic: Topic, message: string) {
  return topic.keywords.reduce((score, keyword) => {
    if (message.includes(keyword))
      return score + (keyword.includes(" ") ? 3 : 1);
    return score;
  }, 0);
}

function pickRelevantTopics(message: string) {
  const scored = TOPICS.map((topic) => ({
    topic,
    score: scoreTopic(topic, message),
  }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0) {
    return scored.slice(0, 2).map((entry) => entry.topic);
  }

  if (message.includes("framework") || message.includes("certification")) {
    return TOPICS.filter((topic) =>
      ["soc2", "iso27001", "gdpr"].includes(topic.id),
    );
  }

  return [TOPICS.find((topic) => topic.id === "controls")!];
}

function shouldMentionDemo(message: string) {
  return [
    "demo",
    "book",
    "see",
    "evaluate",
    "buy",
    "team",
    "our company",
    "our stack",
    "questionnaire",
    "audit",
    "soc 2",
    "iso 27001",
  ].some((token) => message.includes(token));
}

export function buildChatbotKnowledgeContext(input: string) {
  const message = normalizeText(input);
  const relevantTopics = pickRelevantTopics(message);

  return [
    ...GENERAL_KNOWLEDGE,
    ...relevantTopics.flatMap((topic) => [
      `[Topic: ${topic.id}] ${topic.summary}`,
      `[Topic: ${topic.id}] ${topic.controls}`,
      `[Topic: ${topic.id}] ${topic.certification}`,
      `[Topic: ${topic.id}] ${topic.cloudanzen}`,
    ]),
  ].join("\n");
}

export function buildFallbackAssistantReply(
  input: string,
  history: ChatMessageInput[] = [],
) {
  const message = normalizeText(input);
  const relevantTopics = pickRelevantTopics(message);
  const priorAssistantText = history
    .filter((entry) => entry.role === "assistant")
    .slice(-2)
    .map((entry) => normalizeText(entry.text))
    .join(" ");

  const wantsComparison =
    message.includes("difference") ||
    message.includes("compare") ||
    message.includes("vs") ||
    message.includes("versus");
  const asksControls =
    message.includes("control") ||
    message.includes("controls") ||
    message.includes("ask about");
  const asksCertification =
    message.includes("certification") ||
    message.includes("certified") ||
    message.includes("attestation") ||
    message.includes("type i") ||
    message.includes("type ii");

  const sentences: string[] = [];

  if (wantsComparison && relevantTopics.length >= 2) {
    const [first, second] = relevantTopics;
    sentences.push(
      `${first.summary} ${second.summary}`,
      `${first.certification} ${second.certification}`,
      `In practice, CloudAnzen helps teams manage the shared operational work across both by centralizing controls, evidence, owners, and readiness tracking.`,
    );
  } else {
    const primary = relevantTopics[0];
    sentences.push(primary.summary);

    if (asksControls) {
      sentences.push(primary.controls);
    }

    if (asksCertification) {
      sentences.push(primary.certification);
    }

    if (!asksControls && !asksCertification) {
      const secondary = relevantTopics[1];
      sentences.push(primary.controls);
      if (secondary) {
        sentences.push(secondary.summary);
      }
    }

    sentences.push(primary.cloudanzen);
  }

  if (
    shouldMentionDemo(message) &&
    !priorAssistantText.includes("book a demo")
  ) {
    const demoTopic = relevantTopics[0];
    sentences.push(demoTopic.demo);
  }

  return sentences.slice(0, 4).join(" ");
}
