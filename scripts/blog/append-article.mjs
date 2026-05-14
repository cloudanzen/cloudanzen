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

const DRY_RUN = process.argv.includes("--dry-run");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

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

function serialize(article, sortOrder, publishedAt) {
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

const fileContent = serialize(article, sortOrder, publishedAt);

if (DRY_RUN) {
  console.error(`DRY_RUN: would write ${path.relative(REPO_ROOT, targetPath)}`);
  process.stdout.write(fileContent);
  process.exit(0);
}

mkdirSync(ARTICLES_DIR, { recursive: true });
writeFileSync(targetPath, fileContent, "utf8");
console.log(
  `wrote ${path.relative(REPO_ROOT, targetPath)} (sortOrder=${sortOrder}, publishedAt=${publishedAt})`,
);
