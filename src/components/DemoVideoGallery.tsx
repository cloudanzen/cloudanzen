"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

type DemoVideo = {
  title: string;
  eyebrow: string;
  description: string;
  audience: string;
  duration: string;
  src: string;
  accent: string;
};

export default function DemoVideoGallery({ videos }: { videos: DemoVideo[] }) {
  const [activeVideo, setActiveVideo] = useState<DemoVideo | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {videos.map((video, index) => (
          <article
            key={video.src}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-fuchsia-200 hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              className="block w-full text-left"
              aria-label={`Play ${video.title}`}
            >
              <div
                className={`relative aspect-video overflow-hidden bg-gradient-to-br ${video.accent}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.12),rgba(15,23,42,0.42))]" />
                <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/25 bg-white/14 p-4 shadow-2xl backdrop-blur-md">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-2/3 rounded-full bg-white/70" />
                    <div className="h-2.5 w-full rounded-full bg-white/35" />
                    <div className="h-2.5 w-4/5 rounded-full bg-white/35" />
                  </div>
                </div>
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl transition-transform group-hover:scale-105">
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
                  {String(index + 1).padStart(2, "0")} / {video.eyebrow}
                </p>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {video.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  {video.description}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Best for
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {video.audience}
                </p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-6xl overflow-hidden rounded-2xl bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white sm:px-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-200">
                  {activeVideo.eyebrow}
                </p>
                <h2 className="text-base font-semibold sm:text-lg">
                  {activeVideo.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <video
              key={activeVideo.src}
              controls
              autoPlay
              preload="metadata"
              playsInline
              className="aspect-video w-full bg-black"
            >
              <source src={activeVideo.src} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
