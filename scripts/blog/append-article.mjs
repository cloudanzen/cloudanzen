#!/usr/bin/env node
// Append a new article to the markdown content store.
// Reads the same JSON input shape as before; writes content/articles/<slug>.md
// with JSON-valued frontmatter so the article loader can parse it.

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const ARTICLES_DIR = path.join(REPO_ROOT, "content", "articles");
const WRITERS_FILE = path.join(REPO_ROOT, "src", "lib", "writers.ts");

const DRY_RUN = process.argv.includes("--dry-run");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const STOPWORDS = new Set([
  "the","and","for","of","to","a","an","your","with","on","in","is","as",
  "how","what","why","be","are","you","this","that","by","or","it","its",
  "their","from","into","more","most",
]);
const PHRASE_MERGES = [
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
const EXPERTISE_WEIGHT = 5;
const TOPIC_WEIGHT = 1;
const ROLE_WEIGHT = 1;

function tokenize(text) {
  let n = text;
  for (const [re, repl] of PHRASE_MERGES) n = n.replace(re, repl);
  return n
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 2 || /^[0-9]+$/.test(t))
    .filter((t) => t.length > 0 && !STOPWORDS.has(t));
}

function parseWriters() {
  const src = readFileSync(WRITERS_FILE, "utf8");
  const writers = [];
  const blockRegex = /\{([^{}]*?(?:\[[^\]]*\][^{}]*?)*)\}/gs;
  let m;
  while ((m = blockRegex.exec(src)) !== null) {
    const block = m[1];
    const slugMatch = block.match(/slug:\s*"([a-z0-9-]+)"/);
    if (!slugMatch) continue;
    const expertise = (block.match(/expertise:\s*\[([^\]]*)\]/s) || [, ""])[1];
    const topics = (block.match(/suggestedTopics:\s*\[([^\]]*)\]/s) || [, ""])[1];
    const role = (block.match(/role:\s*"([^"]*)"/) || [, ""])[1];
    const slug = slugMatch[1];
    const expTokens = [...expertise.matchAll(/"([^"]+)"/g)].map((x) => x[1]).join(" ");
    const topTokens = [...topics.matchAll(/"([^"]+)"/g)].map((x) => x[1]).join(" ");
    const bag = new Map();
    for (const t of tokenize(expTokens)) bag.set(t, Math.max(bag.get(t) ?? 0, EXPERTISE_WEIGHT));
    for (const t of tokenize(topTokens)) bag.set(t, Math.max(bag.get(t) ?? 0, TOPIC_WEIGHT));
    for (const t of tokenize(role)) bag.set(t, Math.max(bag.get(t) ?? 0, ROLE_WEIGHT));
    writers.push({ slug, bag: [...bag.entries()] });
  }
  return writers;
}

function pickWriterSlug(article, writers) {
  const tokens = new Set(
    tokenize(
      [article.title, article.summary, article.category, ...(article.tags || [])].join(" "),
    ),
  );
  let bestSlug = writers[0].slug;
  let bestScore = -1;
  for (const { slug, bag } of writers) {
    let score = 0;
    for (const [token, weight] of bag) if (tokens.has(token)) score += weight;
    if (score > bestScore) {
      bestScore = score;
      bestSlug = slug;
    }
  }
  return bestSlug;
}

function fail(msg) {
  console.error(`APPEND_ERROR: ${msg}`);
  process.exit(1);
}

function readArticleJson() {
  const args = process.argv.filter(
    (a) => !a.startsWith("--") && a !== process.argv[0] && a !== process.argv[1],
  );
  const arg = args[0];
  const raw = arg && arg !== "-" ? readFileSync(arg, "utf8") : readFileSync(0, "utf8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    fail(`article JSON parse failed: ${e.message}`);
  }
}

function pickSortOrder() {
  if (!existsSync(ARTICLES_DIR)) return 0;
  const files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
  let min = Infinity;
  for (const file of files) {
    const raw = readFileSync(path.join(ARTICLES_DIR, file), "utf8");
    const m = raw.match(/^sortOrder: (\d+)$/m);
    if (m) {
      const n = parseInt(m[1], 10);
      if (Number.isFinite(n) && n < min) min = n;
    }
  }
  return min === Infinity ? 0 : min - 1;
}

function serialize(article, sortOrder, publishedAt, author) {
  const lines = ["---"];
  lines.push(`title: ${JSON.stringify(article.title)}`);
  lines.push(`summary: ${JSON.stringify(article.summary)}`);
  lines.push(`type: ${JSON.stringify(article.type)}`);
  lines.push(`collection: ${JSON.stringify(article.collection)}`);
  lines.push(`category: ${JSON.stringify(article.category)}`);
  lines.push(`readTime: ${JSON.stringify(article.readTime)}`);
  lines.push(`tags: ${JSON.stringify(article.tags)}`);
  if (article.featured === true) lines.push(`featured: true`);
  lines.push(`sortOrder: ${sortOrder}`);
  lines.push(`publishedAt: ${JSON.stringify(publishedAt)}`);
  lines.push(`author: ${JSON.stringify(author)}`);
  lines.push("---");
  return lines.join("\n") + "\n" + article.content;
}

const article = readArticleJson();

if (typeof article.slug !== "string" || !SLUG_RE.test(article.slug)) {
  fail(`slug must be kebab-case, got "${article.slug}"`);
}
for (const f of [
  "title",
  "summary",
  "type",
  "collection",
  "category",
  "readTime",
  "tags",
  "content",
]) {
  if (!(f in article)) fail(`missing required field "${f}"`);
}

const targetPath = path.join(ARTICLES_DIR, `${article.slug}.md`);
if (existsSync(targetPath)) {
  fail(`slug "${article.slug}" already exists at ${path.relative(REPO_ROOT, targetPath)}`);
}

const publishedAt =
  typeof article.publishedAt === "string" && DATE_RE.test(article.publishedAt)
    ? article.publishedAt
    : new Date().toISOString().slice(0, 10);

const sortOrder =
  typeof article.sortOrder === "number" && Number.isInteger(article.sortOrder)
    ? article.sortOrder
    : pickSortOrder();

const writers = parseWriters();
const knownAuthors = new Set(writers.map((w) => w.slug));
let author;
if (typeof article.author === "string") {
  if (!knownAuthors.has(article.author)) {
    fail(`unknown author slug: "${article.author}"`);
  }
  author = article.author;
} else {
  author = pickWriterSlug(article, writers);
}

const fileContent = serialize(article, sortOrder, publishedAt, author);

if (DRY_RUN) {
  console.error(`DRY_RUN: would write ${path.relative(REPO_ROOT, targetPath)} (author=${author})`);
  process.stdout.write(fileContent);
  process.exit(0);
}

mkdirSync(ARTICLES_DIR, { recursive: true });
writeFileSync(targetPath, fileContent, "utf8");
console.log(
  `wrote ${path.relative(REPO_ROOT, targetPath)} (sortOrder=${sortOrder}, publishedAt=${publishedAt}, author=${author})`,
);
