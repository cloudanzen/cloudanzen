export function markdownToHtml(md: string): string {
  let html = md;

  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="text-lg font-semibold text-slate-900 mt-8 mb-3">$1</h3>',
  );
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="text-xl font-bold text-slate-900 mt-10 mb-4">$1</h2>',
  );

  html = html.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-slate-900">$1</strong>',
  );

  html = html.replace(
    /`(.+?)`/g,
    '<code class="px-1.5 py-0.5 rounded bg-slate-100 text-sm font-mono text-slate-800">$1</code>',
  );

  html = html.replace(
    /\[(.+?)\]\((.+?)\)/g,
    '<a href="$2" class="text-blue-600 hover:underline">$1</a>',
  );

  html = html.replace(/^\|(.+)\|$/gm, (match) => {
    const cells = match.split("|").filter((c) => c.trim());
    return `<tr>${cells
      .map(
        (c) =>
          `<td class="px-4 py-2.5 text-sm border-b border-slate-100">${c.trim()}</td>`,
      )
      .join("")}</tr>`;
  });
  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, (match) => {
    const rows = match
      .split("\n")
      .filter(
        (r) => r.trim() && !r.match(/^<tr>(<td[^>]*>\s*-+\s*<\/td>)+<\/tr>$/),
      );
    if (rows.length === 0) return "";
    const [header, ...body] = rows;
    const theadRow = header.replace(/<td/g, "<th").replace(/<\/td>/g, "</th>");
    return `<div class="overflow-x-auto my-6"><table class="w-full border border-slate-200 rounded-lg overflow-hidden"><thead class="bg-slate-50 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">${theadRow}</thead><tbody class="divide-y divide-slate-100">${body.join("\n")}</tbody></table></div>`;
  });

  html = html.replace(
    /^- \[ \] (.+)$/gm,
    '<div class="flex items-start gap-3 py-1"><div class="w-4 h-4 mt-0.5 rounded border-2 border-slate-300 flex-shrink-0"></div><span class="text-sm text-slate-700">$1</span></div>',
  );

  html = html.replace(
    /^- (.+)$/gm,
    '<li class="text-sm text-slate-700 leading-relaxed">$1</li>',
  );
  html = html.replace(
    /(<li[^>]*>.*<\/li>\n?)+/g,
    (match) =>
      `<ul class="space-y-2 my-4 ml-4 list-disc list-outside marker:text-slate-400">${match}</ul>`,
  );

  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="text-sm text-slate-700 leading-relaxed">$1</li>',
  );

  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      return `<p class="text-base text-slate-600 leading-relaxed my-4">${trimmed}</p>`;
    })
    .join("\n");

  return html;
}
