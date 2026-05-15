#!/usr/bin/env node
// Validate every committed article in content/articles/*.md.
// Run in CI and locally before deploys.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const ARTICLES_DIR = path.join(REPO_ROOT, "content", "articles");
const RESOURCES_FILE = path.join(REPO_ROOT, "src", "lib", "resources-content.ts");

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

// Generation-quality checks (word count, H2 count, citation density) live in
// validate-article.mjs, which gates new submissions. validate-content.mjs only
// enforces correctness rules (taxonomy, dedup, raw HTML, blocklist) so legacy
// short entries do not break CI.
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const REQUIRED_FIELDS = [
  "title",
  "summary",
  "type",
  "category",
  "readTime",
  "tags",
  "sortOrder",
  "author",
];
const ALLOWED_FIELDS = new Set([
  ...REQUIRED_FIELDS,
  "collection",
  "featured",
  "publishedAt",
]);

const errors = [];
function err(file, msg) {
  errors.push(`${file}: ${msg}`);
}

function readTaxonomy() {
  const src = readFileSync(RESOURCES_FILE, "utf8");
  const typeBlockMatch = src.match(
    /export type ResourceTypeSlug =\s*([\s\S]*?);/,
  );
  if (!typeBlockMatch) {
    console.error("validate-content: cannot find ResourceTypeSlug");
    process.exit(1);
  }
  const types = new Set(
    [...typeBlockMatch[1].matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]),
  );

  const collBlockMatch = src.match(
    /resourceCollections: ResourceCollection\[\] = \[([\s\S]*?)\n\];/,
  );
  if (!collBlockMatch) {
    console.error("validate-content: cannot find resourceCollections");
    process.exit(1);
  }
  const collections = new Set(
    [...collBlockMatch[1].matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]),
  );

  const writersSrc = readFileSync(
    path.join(REPO_ROOT, "src", "lib", "writers.ts"),
    "utf8",
  );
  const writers = new Set(
    [...writersSrc.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]),
  );
  return { types, collections, writers };
}

function parseFrontmatter(file, raw) {
  if (!raw.startsWith("---\n")) {
    err(file, "missing frontmatter opening '---'");
    return null;
  }
  const close = raw.indexOf("\n---\n", 4);
  if (close < 0) {
    err(file, "missing frontmatter closing '---'");
    return null;
  }
  const block = raw.slice(4, close);
  const body = raw.slice(close + 5);
  const seen = new Set();
  const out = {};
  for (const rawLine of block.split("\n")) {
    const line = rawLine.replace(/\s+$/, "");
    if (line === "") continue;
    const m = line.match(/^([A-Za-z][A-Za-z0-9]*): (.+)$/);
    if (!m) {
      err(file, `bad frontmatter line: ${JSON.stringify(rawLine)}`);
      return null;
    }
    const key = m[1];
    if (seen.has(key)) {
      err(file, `duplicate field: ${key}`);
      return null;
    }
    if (!ALLOWED_FIELDS.has(key)) {
      err(file, `unknown field: ${key}`);
      return null;
    }
    try {
      out[key] = JSON.parse(m[2]);
    } catch (e) {
      err(file, `field ${key} not valid JSON: ${e.message}`);
      return null;
    }
    seen.add(key);
  }
  return { meta: out, body };
}

function validateMeta(file, slug, meta, taxonomy) {
  for (const f of REQUIRED_FIELDS) {
    if (!(f in meta)) err(file, `missing required field: ${f}`);
  }
  if (!("collection" in meta)) {
    err(file, "missing required field: collection (use null if none)");
  }
  if (typeof meta.title !== "string" || meta.title.length === 0) {
    err(file, "title must be non-empty string");
  }
  if (typeof meta.summary !== "string" || meta.summary.length === 0) {
    err(file, "summary must be non-empty string");
  }
  if (typeof meta.category !== "string") err(file, "category must be string");
  if (typeof meta.readTime !== "string") err(file, "readTime must be string");
  if (typeof meta.type !== "string" || !taxonomy.types.has(meta.type)) {
    err(file, `invalid type: ${JSON.stringify(meta.type)}`);
  }
  if (meta.collection !== null) {
    if (typeof meta.collection !== "string") {
      err(file, "collection must be string or null");
    } else if (!taxonomy.collections.has(meta.collection)) {
      err(file, `unknown collection: ${meta.collection}`);
    }
  }
  if (
    !Array.isArray(meta.tags) ||
    meta.tags.some((t) => typeof t !== "string")
  ) {
    err(file, "tags must be string array");
  }
  if (
    typeof meta.sortOrder !== "number" ||
    !Number.isInteger(meta.sortOrder) ||
    meta.sortOrder < 0
  ) {
    err(file, "sortOrder must be non-negative integer");
  }
  if ("featured" in meta && typeof meta.featured !== "boolean") {
    err(file, "featured must be boolean");
  }
  if ("publishedAt" in meta) {
    if (typeof meta.publishedAt !== "string" || !DATE_RE.test(meta.publishedAt)) {
      err(file, "publishedAt must be YYYY-MM-DD string");
    }
  }
  if (typeof meta.author !== "string" || !taxonomy.writers.has(meta.author)) {
    err(file, `invalid author: ${JSON.stringify(meta.author)}`);
  }
}

function validateBlogBody(file, body) {
  if (/<\/?[a-z][^>]*>/i.test(body)) {
    err(file, "raw HTML tags are not allowed in content");
  }
  const hay = body.toLowerCase();
  for (const term of BLOCKLIST) {
    if (new RegExp(`\\b${term}\\b`).test(hay)) {
      err(file, `blocklist term "${term}" present`);
    }
  }
}

function main() {
  if (!statSync(ARTICLES_DIR, { throwIfNoEntry: false })) {
    console.error(`validate-content: missing directory ${ARTICLES_DIR}`);
    process.exit(1);
  }
  const taxonomy = readTaxonomy();
  const files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));

  if (files.length === 0) {
    console.error("validate-content: no articles found");
    process.exit(1);
  }

  const slugCounts = new Map();
  const sortOrderCounts = new Map();

  for (const file of files) {
    const slug = file.slice(0, -3);
    if (!SLUG_RE.test(slug)) err(file, `filename slug not kebab-case: ${slug}`);
    slugCounts.set(slug, (slugCounts.get(slug) ?? 0) + 1);
    const raw = readFileSync(path.join(ARTICLES_DIR, file), "utf8");
    const parsed = parseFrontmatter(file, raw);
    if (!parsed) continue;
    const { meta, body } = parsed;
    validateMeta(file, slug, meta, taxonomy);
    if (typeof meta.sortOrder === "number") {
      sortOrderCounts.set(
        meta.sortOrder,
        (sortOrderCounts.get(meta.sortOrder) ?? 0) + 1,
      );
    }
    if (meta.type === "blog") validateBlogBody(file, body);
    if (body.trim().length === 0) err(file, "body is empty");
  }

  for (const [slug, count] of slugCounts) {
    if (count > 1) errors.push(`duplicate slug across files: ${slug}`);
  }
  for (const [order, count] of sortOrderCounts) {
    if (count > 1) errors.push(`duplicate sortOrder across files: ${order}`);
  }

  if (errors.length > 0) {
    console.error(`validate-content: ${errors.length} problem(s)`);
    for (const e of errors) console.error(`  ${e}`);
    process.exit(1);
  }
  console.log(`validate-content: ${files.length} articles OK`);
}

main();
