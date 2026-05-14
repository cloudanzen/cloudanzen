# Auto-blog routine — repo-side scripts

These scripts are called by the **weekly auto-blog Claude routine** (configured on the user's Claude profile via `/schedule`). Together they validate a generated article JSON and append it to [src/lib/resources-content.ts](../../src/lib/resources-content.ts).

Routine reference: REQ-15, EPIC-15, PRJ-13. Cron: Mondays 09:00 IST.

## Files

| File | Purpose |
|------|---------|
| `validate-article.mjs` | Validates article JSON (schema, length, citations, blocklist, unique slug). Exits non-zero on failure. |
| `append-article.mjs` | Prepends a validated article to the `resourceArticles` array in `src/lib/resources-content.ts`. Runs Prettier afterwards. Supports `--dry-run` (writes to stdout, does not modify file). |
| `evergreen-topics.json` | Fallback topic list when the Notion Content Backlog has no `Status = Idea` rows. |

## Article JSON shape

Matches `ResourceArticle` from [src/lib/resources-content.ts](../../src/lib/resources-content.ts):

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

`collection` can be `null`. `featured` may be set to `true` but routine never sets it.

## Validation rules

- Required fields: `slug`, `title`, `summary`, `type`, `collection`, `category`, `readTime`, `tags`, `content`.
- `type` must be `"blog"`.
- `slug` must be kebab-case and not already present in `resourceArticles`.
- Word count: **900–1800**.
- At least **3** `## ` H2 headings.
- No raw HTML tags.
- Every `\d+%`, `\d+x`, or `$\d+` claim must have `[source: <url>]` within 80 characters after it.
- Blocklist: no `vanta`, `drata`, `sprinto`, `secureframe`, `tugboat`, `thoropass`, `anecdotes`, `scrut` (case-insensitive, whole word).

## Local usage

```bash
# Validate a JSON file
npm run blog:validate -- path/to/article.json

# Validate from stdin
cat article.json | npm run blog:validate -- -

# Dry-run append (writes modified file to stdout — use --silent to suppress npm prefix)
npm run --silent blog:dry-run -- article.json > /tmp/preview.ts

# Real append (modifies resources-content.ts + runs Prettier)
npm run blog:append -- article.json
```

## Routine sequence (what the Claude routine does)

1. Pull next `Status = Idea` row from Notion Content Backlog (data_source_id set in routine prompt).
2. If empty: pick from `evergreen-topics.json`.
3. Generate article JSON using the system prompt at `~/.claude/routines/auto-blog/system-prompt.md`.
4. `npm run blog:validate -- /tmp/article.json` → fail-stop on error.
5. `git checkout -b chore/blog-<slug>`.
6. `npm run blog:append -- /tmp/article.json`.
7. `git add src/lib/resources-content.ts && git commit && git push -u origin chore/blog-<slug>`.
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
npm run --silent blog:dry-run -- /tmp/sample.json > /tmp/preview.ts && diff src/lib/resources-content.ts /tmp/preview.ts | head
# 4. Real append on a throwaway branch:
git checkout -b test/blog-validation
npm run blog:append -- /tmp/sample.json
git diff src/lib/resources-content.ts
# 5. Clean up:
git checkout main && git branch -D test/blog-validation
```
