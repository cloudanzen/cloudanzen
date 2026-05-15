import { writers } from "@/lib/writers";

const STOPWORDS = new Set([
  "the",
  "and",
  "for",
  "of",
  "to",
  "a",
  "an",
  "your",
  "with",
  "on",
  "in",
  "is",
  "as",
  "how",
  "what",
  "why",
  "be",
  "are",
  "you",
  "this",
  "that",
  "by",
  "or",
  "it",
  "its",
  "their",
  "from",
  "into",
  "more",
  "most",
]);

// Merge known compound phrases so multi-word signals (e.g. "SOC 2",
// "ISO 27001", "Zero Trust", "Type II", "CI/CD") survive tokenization.
const PHRASE_MERGES: Array<[RegExp, string]> = [
  [/\bsoc\s*[-\/]?\s*2\b/gi, "soc2"],
  [/\biso[\/\s-]*iec[\/\s-]*27001\b/gi, "iso27001"],
  [/\biso[\s-]*27001\b/gi, "iso27001"],
  [/\btype\s*ii\b/gi, "typeii"],
  [/\bci[\s\/-]*cd\b/gi, "cicd"],
  [/\bc[\s-]*suite\b/gi, "csuite"],
  [/\bzero[\s-]*trust\b/gi, "zerotrust"],
  [/\bzero[\s-]*day\b/gi, "zeroday"],
  [/\bdevsecops\b/gi, "devsecops"],
  [/\bnist\s*csf\b/gi, "nistcsf"],
];

function tokenize(text: string): string[] {
  let normalized = text;
  for (const [re, repl] of PHRASE_MERGES) {
    normalized = normalized.replace(re, repl);
  }
  return normalized
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(
      (t) =>
        t.length >= 2 ||
        /^[0-9]+$/.test(t),
    )
    .filter((t) => t.length > 0 && !STOPWORDS.has(t));
}

// Expertise tokens identify a writer's primary specialty and are weighted
// higher than suggestedTopics / role tokens.
const EXPERTISE_WEIGHT = 5;
const TOPIC_WEIGHT = 1;
const ROLE_WEIGHT = 1;

type WeightedBag = { token: string; weight: number };

const writerWeightedBags: { slug: string; bag: WeightedBag[] }[] = writers.map(
  (w) => {
    const tokenMap = new Map<string, number>();
    function addAll(tokens: string[], weight: number) {
      for (const t of tokens) {
        tokenMap.set(t, Math.max(tokenMap.get(t) ?? 0, weight));
      }
    }
    addAll(tokenize(w.expertise.join(" ")), EXPERTISE_WEIGHT);
    addAll(tokenize(w.suggestedTopics.join(" ")), TOPIC_WEIGHT);
    addAll(tokenize(w.role), ROLE_WEIGHT);
    return {
      slug: w.slug,
      bag: [...tokenMap.entries()].map(([token, weight]) => ({ token, weight })),
    };
  },
);

export function pickWriterSlug(article: {
  title: string;
  summary: string;
  category: string;
  tags: string[];
}): string {
  const articleTokens = new Set(
    tokenize(
      [article.title, article.summary, article.category, ...article.tags].join(
        " ",
      ),
    ),
  );

  let bestSlug = writers[0].slug;
  let bestScore = -1;
  for (const { slug, bag } of writerWeightedBags) {
    let score = 0;
    for (const { token, weight } of bag) {
      if (articleTokens.has(token)) score += weight;
    }
    if (score > bestScore) {
      bestScore = score;
      bestSlug = slug;
    }
  }
  return bestSlug;
}
