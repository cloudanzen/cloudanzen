"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { getAllArticles } from "@/lib/help-content";

export default function HelpSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const articles = useMemo(() => getAllArticles(), []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return articles
      .filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.categoryTitle.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, articles]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search help articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          className="w-full pl-12 pr-12 py-4 text-lg rounded-2xl border border-white/20 bg-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:bg-white/15 transition-all backdrop-blur-sm"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setFocused(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 text-slate-400" />
          </button>
        )}
      </div>

      {focused && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50">
          {results.map((article) => (
            <Link
              key={`${article.categorySlug}/${article.slug}`}
              href={`/help/${article.categorySlug}/${article.slug}`}
              onClick={() => {
                setFocused(false);
                setQuery("");
              }}
              className="block px-5 py-3.5 hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-b-0"
            >
              <p className="text-sm font-semibold text-slate-900">
                {article.title}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {article.categoryTitle} &middot; {article.summary}
              </p>
            </Link>
          ))}
        </div>
      )}

      {focused && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50">
          <div className="px-5 py-6 text-center">
            <p className="text-sm text-slate-500">
              No articles found for &ldquo;{query}&rdquo;
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Try different keywords or{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                contact support
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
