#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { execSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const ARTICLES_FILE = path.join(REPO_ROOT, "src", "lib", "resources-content.ts");

const DRY_RUN = process.argv.includes("--dry-run");

function fail(msg) {
  console.error(`APPEND_ERROR: ${msg}`);
  process.exit(1);
}

function readArticleJson() {
  const args = process.argv.filter((a) => !a.startsWith("--") && a !== process.argv[0] && a !== process.argv[1]);
  const arg = args[0];
  const raw = arg && arg !== "-" ? readFileSync(arg, "utf8") : readFileSync(0, "utf8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    fail(`article JSON parse failed: ${e.message}`);
  }
}

function escapeBacktick(content) {
  return content.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function formatTags(tags) {
  return `[${tags.map((t) => JSON.stringify(t)).join(", ")}]`;
}

function renderEntry(article) {
  const collection = article.collection === null ? "null" : JSON.stringify(article.collection);
  const featured = article.featured ? "    featured: true,\n" : "";
  return `  {
    slug: ${JSON.stringify(article.slug)},
    title: ${JSON.stringify(article.title)},
    summary: ${JSON.stringify(article.summary)},
    type: ${JSON.stringify(article.type)},
    collection: ${collection},
    category: ${JSON.stringify(article.category)},
    readTime: ${JSON.stringify(article.readTime)},
    tags: ${formatTags(article.tags)},
${featured}    content: \`${escapeBacktick(article.content)}\`,
  },
`;
}

const article = readArticleJson();
const source = readFileSync(ARTICLES_FILE, "utf8");

const marker = "export const resourceArticles: ResourceArticle[] = [";
const idx = source.indexOf(marker);
if (idx < 0) fail(`cannot find marker "${marker}" in ${ARTICLES_FILE}`);

const insertAt = idx + marker.length + 1;
const next = source.slice(0, insertAt) + renderEntry(article) + source.slice(insertAt);

if (DRY_RUN) {
  process.stdout.write(next);
  console.error(`DRY_RUN: would insert ${article.slug} at offset ${insertAt}`);
  process.exit(0);
}

writeFileSync(ARTICLES_FILE, next, "utf8");

try {
  execSync(`npx prettier --write ${JSON.stringify(ARTICLES_FILE)}`, {
    cwd: REPO_ROOT,
    stdio: "inherit",
  });
} catch (e) {
  fail(`prettier failed: ${e.message}`);
}

console.log(`APPENDED ${article.slug}`);
