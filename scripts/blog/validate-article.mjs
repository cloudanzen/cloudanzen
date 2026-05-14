#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const ARTICLES_DIR = path.join(REPO_ROOT, "content", "articles");

const BLOCKLIST = [
  "vanta",
  "drata",
  "sprinto",
  "secureframe",
  "tugboat",
  "thoropass",
  "anecdotes",
  "scrut",
];

const REQUIRED_FIELDS = [
  "slug",
  "title",
  "summary",
  "type",
  "collection",
  "category",
  "readTime",
  "tags",
  "content",
];

const MIN_WORDS = 900;
const MAX_WORDS = 1800;
const MIN_H2 = 3;
const CITATION_WINDOW = 80;

function fail(msg) {
  console.error(`VALIDATION_ERROR: ${msg}`);
  process.exit(1);
}

function readArticleJson() {
  const arg = process.argv[2];
  const raw = arg && arg !== "-" ? readFileSync(arg, "utf8") : readFileSync(0, "utf8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    fail(`article JSON parse failed: ${e.message}`);
  }
}

function checkShape(article) {
  for (const field of REQUIRED_FIELDS) {
    if (!(field in article)) fail(`missing required field "${field}"`);
  }
  if (article.type !== "blog") fail(`type must be "blog", got "${article.type}"`);
  if (typeof article.slug !== "string" || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(article.slug)) {
    fail(`slug must be kebab-case, got "${article.slug}"`);
  }
  if (!Array.isArray(article.tags)) fail("tags must be an array");
  if (article.collection !== null && typeof article.collection !== "string") {
    fail("collection must be string or null");
  }
}

function checkUniqueSlug(article) {
  const target = path.join(ARTICLES_DIR, `${article.slug}.md`);
  if (existsSync(target)) {
    fail(`slug "${article.slug}" already exists at ${path.relative(REPO_ROOT, target)}`);
  }
}

function wordCount(content) {
  return content.trim().split(/\s+/).filter(Boolean).length;
}

function checkLength(article) {
  const n = wordCount(article.content);
  if (n < MIN_WORDS) fail(`content has ${n} words, minimum ${MIN_WORDS}`);
  if (n > MAX_WORDS) fail(`content has ${n} words, maximum ${MAX_WORDS}`);
}

function checkStructure(article) {
  const h2s = (article.content.match(/^##\s+\S/gm) || []).length;
  if (h2s < MIN_H2) fail(`needs at least ${MIN_H2} H2 sections, found ${h2s}`);
  if (/<\/?[a-z][^>]*>/i.test(article.content)) {
    fail("raw HTML tags are not allowed in content");
  }
}

function checkCitations(article) {
  const text = article.content;
  const patterns = [/\d+%/g, /\d+x\b/g, /\$\d[\d,]*/g];
  for (const pat of patterns) {
    let m;
    while ((m = pat.exec(text)) !== null) {
      const after = text.slice(m.index + m[0].length, m.index + m[0].length + CITATION_WINDOW);
      if (!after.includes("[source:")) {
        fail(`numeric claim "${m[0]}" missing nearby [source: ...] citation`);
      }
    }
  }
}

function checkBlocklist(article) {
  const haystack = `${article.title}\n${article.summary}\n${article.content}`.toLowerCase();
  for (const term of BLOCKLIST) {
    const re = new RegExp(`\\b${term}\\b`);
    if (re.test(haystack)) fail(`blocklist term "${term}" present`);
  }
}

const article = readArticleJson();
checkShape(article);
checkUniqueSlug(article);
checkLength(article);
checkStructure(article);
checkCitations(article);
checkBlocklist(article);

console.log(
  `OK ${article.slug} (${wordCount(article.content)} words, ${
    (article.content.match(/^##\s+\S/gm) || []).length
  } H2s)`,
);
