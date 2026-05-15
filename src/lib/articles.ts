import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type {
  ResourceArticle,
  ResourceTypeSlug,
} from "@/lib/resources-content";
import { resourceCollections, resourceTypes } from "@/lib/resources-content";
import { writerSlugs } from "@/lib/writers";

export type ResourceArticleMeta = Omit<ResourceArticle, "content"> & {
  sortOrder: number;
  publishedAt?: string;
  author?: string;
};

type StoredArticle = {
  meta: ResourceArticleMeta;
  body: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const REQUIRED_FIELDS = [
  "title",
  "summary",
  "type",
  "category",
  "readTime",
  "tags",
  "sortOrder",
] as const;
const ALLOWED_FIELDS = new Set<string>([
  ...REQUIRED_FIELDS,
  "collection",
  "featured",
  "publishedAt",
  "author",
]);

const validTypes: ReadonlySet<ResourceTypeSlug> = new Set(
  resourceTypes.map((t) => t.slug),
);
const validCollections: ReadonlySet<string> = new Set(
  resourceCollections.map((c) => c.slug),
);

function fail(file: string, msg: string): never {
  throw new Error(`articles loader: ${file}: ${msg}`);
}

function parseFrontmatter(
  file: string,
  raw: string,
): { meta: Omit<ResourceArticleMeta, "slug">; body: string } {
  if (!raw.startsWith("---\n")) {
    fail(file, "missing frontmatter opening '---'");
  }
  const close = raw.indexOf("\n---\n", 4);
  if (close < 0) fail(file, "missing frontmatter closing '---'");
  const block = raw.slice(4, close);
  const body = raw.slice(close + 5);

  const seen = new Set<string>();
  const out: Record<string, unknown> = {};

  for (const rawLine of block.split("\n")) {
    const line = rawLine.replace(/\s+$/, "");
    if (line === "") continue;
    const m = line.match(/^([A-Za-z][A-Za-z0-9]*): (.+)$/);
    if (!m) fail(file, `bad frontmatter line: ${JSON.stringify(rawLine)}`);
    const key = m[1];
    const valueRaw = m[2];
    if (seen.has(key)) fail(file, `duplicate field: ${key}`);
    if (!ALLOWED_FIELDS.has(key)) fail(file, `unknown field: ${key}`);
    let parsed: unknown;
    try {
      parsed = JSON.parse(valueRaw);
    } catch (e) {
      fail(file, `field ${key} is not valid JSON: ${(e as Error).message}`);
    }
    out[key] = parsed;
    seen.add(key);
  }

  for (const f of REQUIRED_FIELDS) {
    if (!(f in out)) fail(file, `missing required field: ${f}`);
  }
  if (!("collection" in out)) {
    fail(file, "missing required field: collection (use null if none)");
  }

  if (typeof out.title !== "string") fail(file, "title must be string");
  if (typeof out.summary !== "string") fail(file, "summary must be string");
  if (typeof out.category !== "string") fail(file, "category must be string");
  if (typeof out.readTime !== "string") fail(file, "readTime must be string");
  if (typeof out.type !== "string" || !validTypes.has(out.type as ResourceTypeSlug)) {
    fail(file, `invalid type: ${JSON.stringify(out.type)}`);
  }
  if (out.collection !== null) {
    if (typeof out.collection !== "string") {
      fail(file, "collection must be string or null");
    }
    if (!validCollections.has(out.collection)) {
      fail(file, `unknown collection: ${out.collection}`);
    }
  }
  if (
    !Array.isArray(out.tags) ||
    out.tags.some((t) => typeof t !== "string")
  ) {
    fail(file, "tags must be string array");
  }
  if (
    typeof out.sortOrder !== "number" ||
    !Number.isInteger(out.sortOrder) ||
    out.sortOrder < 0
  ) {
    fail(file, "sortOrder must be non-negative integer");
  }
  if ("featured" in out && typeof out.featured !== "boolean") {
    fail(file, "featured must be boolean");
  }
  if ("publishedAt" in out && typeof out.publishedAt !== "string") {
    fail(file, "publishedAt must be string");
  }
  if ("author" in out) {
    if (typeof out.author !== "string" || !writerSlugs.has(out.author)) {
      fail(file, `invalid author: ${JSON.stringify(out.author)}`);
    }
  }

  const meta: Omit<ResourceArticleMeta, "slug"> = {
    title: out.title as string,
    summary: out.summary as string,
    type: out.type as ResourceTypeSlug,
    collection: out.collection as string | null,
    category: out.category as string,
    readTime: out.readTime as string,
    tags: out.tags as string[],
    sortOrder: out.sortOrder as number,
  };
  if ("featured" in out) meta.featured = out.featured as boolean;
  if ("publishedAt" in out) meta.publishedAt = out.publishedAt as string;
  if ("author" in out) meta.author = out.author as string;
  return { meta, body };
}

let cache: StoredArticle[] | null = null;

function load(): StoredArticle[] {
  if (cache) return cache;
  const files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
  const articles: StoredArticle[] = [];
  const seenSlugs = new Set<string>();
  const seenSortOrders = new Set<number>();
  for (const file of files) {
    const slug = file.slice(0, -3);
    if (!SLUG_RE.test(slug)) fail(file, `filename slug not kebab-case: ${slug}`);
    if (seenSlugs.has(slug)) fail(file, `duplicate slug: ${slug}`);
    const raw = readFileSync(path.join(ARTICLES_DIR, file), "utf8");
    const { meta, body } = parseFrontmatter(file, raw);
    if (seenSortOrders.has(meta.sortOrder)) {
      fail(file, `duplicate sortOrder: ${meta.sortOrder}`);
    }
    seenSortOrders.add(meta.sortOrder);
    seenSlugs.add(slug);
    articles.push({
      meta: { slug, ...meta },
      body,
    });
  }
  articles.sort((a, b) => a.meta.sortOrder - b.meta.sortOrder);
  cache = articles;
  return cache;
}

export function getArticleIndex(): ResourceArticleMeta[] {
  return load().map((a) => a.meta);
}

export function getFeaturedArticleMetas(): ResourceArticleMeta[] {
  return load()
    .filter((a) => a.meta.featured === true)
    .map((a) => a.meta);
}

export function getLatestArticleMetas(limit = 8): ResourceArticleMeta[] {
  const all = load();
  return all
    .slice(-limit)
    .reverse()
    .map((a) => a.meta);
}

export function getArticleMetasByType(
  type: ResourceTypeSlug,
): ResourceArticleMeta[] {
  return load()
    .filter((a) => a.meta.type === type)
    .map((a) => a.meta);
}

export function getArticleMetasByCollection(
  collectionSlug: string,
): ResourceArticleMeta[] {
  return load()
    .filter((a) => a.meta.collection === collectionSlug)
    .map((a) => a.meta);
}

export function getResourceArticleMeta(
  type: string,
  slug: string,
): ResourceArticleMeta | null {
  return (
    load().find((a) => a.meta.type === type && a.meta.slug === slug)?.meta ??
    null
  );
}

export function getResourceArticle(
  type: string,
  slug: string,
): ResourceArticle | null {
  const found = load().find(
    (a) => a.meta.type === type && a.meta.slug === slug,
  );
  if (!found) return null;
  const { slug: foundSlug, title, summary, type: t, collection, category, readTime, tags, featured, author } = found.meta;
  return {
    slug: foundSlug,
    title,
    summary,
    type: t,
    collection,
    category,
    readTime,
    tags,
    ...(featured !== undefined ? { featured } : {}),
    ...(author !== undefined ? { author } : {}),
    content: found.body,
  };
}
