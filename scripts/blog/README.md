# Auto-blog routine — repo-side scripts

These scripts are called by the **weekly auto-blog Claude routine** (configured on the user's Claude profile via `/schedule`). Together they validate a generated article JSON and write it to a per-article markdown file under [content/articles/](../../content/articles/).

Routine reference: REQ-15, EPIC-15, PRJ-13. Cron: Mondays 09:00 IST.

## Files

| File | Purpose |
|------|---------|
| `validate-article.mjs` | Validates article JSON (schema, length, citations, blocklist, unique slug, optional author). Exits non-zero on failure. |
| `append-article.mjs` | Writes a validated article to `content/articles/<slug>.md` with JSON-valued frontmatter. Auto-assigns `author` via topic match against `src/lib/writers.ts` when the JSON does not include one. Supports `--dry-run` (writes generated markdown to stdout, does not touch disk). |
| `validate-content.mjs` | Walks every `content/articles/*.md` file and checks frontmatter shape, taxonomy, writer slugs, dedup of slugs and `sortOrder`, blocklist, and raw HTML. Run in CI. |
| `evergreen-topics.json` | Fallback topic list when the Notion Content Backlog has no `Status = Idea` rows. |

## Article JSON shape

```json
{
  "slug": "kebab-case-slug",
  "title": "Title",
  "summary": "One-sentence summary.",
  "type": "blog",
  "collection": "soc-2",
  "category": "SOC 2",
  "readTime": "6 min read",
  "tags": ["SOC 2", "Audit strategy"],
  "content": "## H2\n\nParagraph...\n\n## H2\n\nMore..."
}
```

`collection` can be `null`. `featured` may be set to `true` but routine never sets it. `publishedAt` is optional (`YYYY-MM-DD`); the append script defaults to today when omitted. `author` is optional in the JSON; when omitted the append script picks the best-matching writer from `src/lib/writers.ts` via keyword score on the article's title, summary, category, and tags.

## Validation rules (validate-article.mjs)

- Required fields: `slug`, `title`, `summary`, `type`, `collection`, `category`, `readTime`, `tags`, `content`.
- `type` must be `"blog"`.
- `slug` must be kebab-case and not already present in `content/articles/`.
- Word count: **900–1800**.
- At least **3** `## ` H2 headings.
- No raw HTML tags.
- Every `\d+%`, `\d+x`, or `$\d+` claim must have `[source: <url>]` within 80 characters after it.
- Blocklist: no `vanta`, `drata`, `sprinto`, `secureframe`, `tugboat`, `thoropass`, `anecdotes`, `scrut` (case-insensitive, whole word).

## Storage format (content/articles/<slug>.md)

```markdown
---
title: "..."
summary: "..."
type: "blog"
collection: "soc-2"
category: "SOC 2"
readTime: "6 min read"
tags: ["SOC 2","Audit strategy"]
featured: true
sortOrder: 3
publishedAt: "2026-05-14"
---
Markdown body starts here.
```

Frontmatter values are JSON-encoded. The article loader at `src/lib/articles.ts` parses these files, sorts by `sortOrder` ascending, and exposes both metadata-only and full-body helpers.

## Local usage

```bash
# Validate a JSON file
npm run blog:validate -- path/to/article.json

# Validate from stdin
cat article.json | npm run blog:validate -- -

# Dry-run append (writes the would-be markdown file to stdout)
npm run --silent blog:dry-run -- article.json > /tmp/preview.md

# Real append (creates content/articles/<slug>.md)
npm run blog:append -- article.json

# Validate every committed article
npm run blog:validate-content
```

## Routine sequence (what the Claude routine does)

1. Pull next `Status = Idea` row from Notion Content Backlog (data_source_id set in routine prompt).
2. If empty: pick from `evergreen-topics.json`.
3. Generate article JSON using the system prompt at `~/.claude/routines/auto-blog/system-prompt.md`.
4. `npm run blog:validate -- /tmp/article.json` → fail-stop on error.
5. `git checkout -b chore/blog-<slug>`.
6. `npm run blog:append -- /tmp/article.json`.
7. `git add content/articles/<slug>.md && git commit && git push -u origin chore/blog-<slug>`.
8. `gh pr create --title "chore: weekly blog <slug> [REQ-15]" ...`.
9. `gh pr merge --auto --squash --delete-branch`.
10. Update Notion row: `Status = Published`, `Published URL`, `PR URL`, `Run Date`.

On any validation failure: routine updates Notion row to `Status = Failed` + writes `Error` column and stops without opening a PR.

## Manual test

```bash
# 1. Build a sample article JSON file (write by hand or copy from an existing entry).
# 2. Validate:
npm run blog:validate -- /tmp/sample.json
# 3. Dry-run append:
npm run --silent blog:dry-run -- /tmp/sample.json > /tmp/preview.md
# 4. Real append on a throwaway branch:
git checkout -b test/blog-validation
npm run blog:append -- /tmp/sample.json
git status content/articles
# 5. Verify the whole content directory still passes:
npm run blog:validate-content
# 6. Clean up:
git checkout main && git branch -D test/blog-validation
```
