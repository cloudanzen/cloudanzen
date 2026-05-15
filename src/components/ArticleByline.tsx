import Image from "next/image";
import type { Writer } from "@/lib/writers";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");
}

function hueFromSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 360;
  }
  return hash;
}

export default function ArticleByline({
  writer,
  readTime,
}: {
  writer: Writer;
  readTime: string;
}) {
  const hue = hueFromSlug(writer.slug);
  return (
    <div className="flex items-center gap-3 mt-6">
      {writer.avatarUrl ? (
        <Image
          src={writer.avatarUrl}
          alt={writer.name}
          width={40}
          height={40}
          className="rounded-full object-cover h-10 w-10 border border-slate-200"
        />
      ) : (
        <div
          className="rounded-full h-10 w-10 flex items-center justify-center text-sm font-semibold text-white"
          style={{ backgroundColor: `hsl(${hue}, 50%, 45%)` }}
          aria-label={writer.name}
        >
          {initials(writer.name)}
        </div>
      )}
      <div className="text-sm leading-tight">
        <p className="text-slate-900 font-medium">
          By {writer.name}
        </p>
        <p className="text-slate-500">
          {writer.role} · {readTime}
        </p>
      </div>
    </div>
  );
}
