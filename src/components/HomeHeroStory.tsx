"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Bot,
  Braces,
  CheckCircle2,
  ClipboardCheck,
  FolderCheck,
  GitBranchPlus,
  KeyRound,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

const SCENE_COUNT = 5;
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

export function HomeHeroStory() {
  const t = useTranslations("home.hero.story");
  const prefersReducedMotion = usePrefersReducedMotion();
  const [scene, setScene] = useState(0);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let frame = 0;

    const updateSceneFromScroll = () => {
      frame = 0;

      const story = storyRef.current;

      if (!story) return;

      const rect = story.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const storyTop = window.scrollY + rect.top;
      const progressStart = Math.max(0, storyTop - viewportHeight * 0.45);
      const progressRange = Math.max(viewportHeight * 1.1, rect.height * 0.9);
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - progressStart) / progressRange),
      );
      const nextScene = Math.min(
        SCENE_COUNT - 1,
        Math.floor(progress * SCENE_COUNT),
      );

      setScene((current) => (current === nextScene ? current : nextScene));
    };

    const requestUpdate = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(updateSceneFromScroll);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [prefersReducedMotion]);

  const scenes = useMemo(
    () => [
      {
        title: t("scenes.ask.title"),
        description: t("scenes.ask.description"),
      },
      {
        title: t("scenes.assemble.title"),
        description: t("scenes.assemble.description"),
      },
      {
        title: t("scenes.act.title"),
        description: t("scenes.act.description"),
      },
      {
        title: t("scenes.approve.title"),
        description: t("scenes.approve.description"),
      },
      {
        title: t("scenes.resolve.title"),
        description: t("scenes.resolve.description"),
      },
    ],
    [t],
  );

  const signals = useMemo(
    () => [
      { key: "questionnaire", icon: ClipboardCheck },
      { key: "vulnerability", icon: TriangleAlert },
      { key: "evidence", icon: FolderCheck },
      { key: "control", icon: ShieldCheck },
    ],
    [],
  );

  const actions = useMemo(
    () => [
      { key: "questionnaire", icon: ClipboardCheck },
      { key: "risk", icon: ShieldAlert },
      { key: "fix", icon: GitBranchPlus },
    ],
    [],
  );

  const outcomes = useMemo(
    () => [
      { key: "draft", tone: "bg-blue-500/15 text-blue-200 border-blue-400/25" },
      {
        key: "risk",
        tone: "bg-violet-500/15 text-violet-200 border-violet-400/25",
      },
      {
        key: "evidence",
        tone: "bg-emerald-500/15 text-emerald-200 border-emerald-400/25",
      },
      {
        key: "task",
        tone: "bg-amber-500/15 text-amber-200 border-amber-400/25",
      },
    ],
    [],
  );

  const activeScene = prefersReducedMotion ? 0 : scene;
  const currentScene = scenes[activeScene];
  const signalProgress = activeScene === 0 ? 1 : 4;
  const actionsActive = activeScene >= 2;
  const approvalVisible = activeScene >= 3;
  const resolved = activeScene >= 4;

  return (
    <div
      ref={storyRef}
      className="mt-4 w-full lg:mt-0 lg:ml-auto lg:max-w-[1020px] lg:justify-self-end xl:translate-x-10"
    >
      <div className="ai-hero-sheen relative overflow-hidden rounded-[24px] border border-white/12 bg-slate-950/75 p-1.5 shadow-[0_24px_72px_rgba(15,23,42,0.4)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
        <div className="pointer-events-none absolute -left-8 top-8 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-teal-400/8 blur-3xl" />

        <div className="relative rounded-[20px] border border-white/6 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(160deg,rgba(15,23,42,0.98),rgba(15,23,42,0.88))] p-3 sm:p-3.5 lg:p-3.5">
          <div className="flex flex-col gap-2.5 border-b border-white/8 pb-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                {t("eyebrow")}
              </div>
              <div className="mt-2 min-h-[4rem] lg:min-h-[4.5rem]">
                <p className="text-sm font-semibold text-white sm:text-[15px]">
                  {currentScene.title}
                </p>
                <p className="mt-1 max-w-2xl text-[13px] leading-5 text-slate-400 text-balance lg:text-sm">
                  {currentScene.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-2 py-1">
              {scenes.map((sceneItem, index) => (
                <button
                  key={sceneItem.title}
                  type="button"
                  onClick={() => setScene(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeScene
                      ? "w-9 bg-blue-400"
                      : "w-2.5 bg-white/18 hover:bg-white/28"
                  }`}
                  aria-label={sceneItem.title}
                />
              ))}
            </div>
          </div>

          <div className="mt-3.5 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {t("prompt.label")}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-100 text-balance lg:text-[15px]">
                      {t("prompt.value")}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-400/25 bg-blue-500/10 p-2.5 text-blue-200 ai-hero-float">
                    <Bot className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
                    <KeyRound className="h-3.5 w-3.5" />
                    {t("chips.byoKey")}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
                    <Braces className="h-3.5 w-3.5" />
                    {t("chips.mcp")}
                  </span>
                </div>
              </div>

              <div className="rounded-[18px] border border-white/8 bg-slate-950/60 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("signals.label")}
                </p>
                <div className="mt-2.5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {signals.map(({ key, icon: Icon }, index) => {
                    const active = index < signalProgress;

                    return (
                      <div
                        key={key}
                        className={`flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-700 ${
                          active
                            ? "border-cyan-300/60 bg-cyan-400/18 text-white shadow-[0_0_22px_rgba(34,211,238,0.16)]"
                            : "border-white/6 bg-white/[0.01] text-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-xl p-2 ${active ? "bg-cyan-300/25 text-cyan-100 ai-hero-pulse" : "bg-white/5"}`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-[13px] leading-5 lg:text-sm">
                            {t(`signals.items.${key}`)}
                          </span>
                        </div>
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${active ? "bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.7)]" : "bg-white/18"}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="pointer-events-none absolute left-7 top-16 bottom-20 hidden w-px bg-gradient-to-b from-blue-400/0 via-blue-400/35 to-cyan-300/0 lg:block" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("engine.label")}
                </p>

                <div className="mt-2.5 grid gap-3 xl:grid-cols-[1.14fr_0.86fr]">
                  <div className="rounded-[20px] border border-white/8 bg-slate-950/55 p-3">
                    <div className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-400 w-fit">
                      {t("engine.contextLabel")}
                    </div>

                    <div className="mt-3 space-y-2">
                      {actions.map(({ key, icon: Icon }, index) => {
                        const isLive = actionsActive && index <= activeScene;
                        const isDone = resolved;

                        return (
                          <div
                            key={key}
                            className={`rounded-2xl border p-2.5 transition-all duration-700 ${
                              isDone
                                ? "border-emerald-300/60 bg-emerald-400/18 shadow-[0_0_22px_rgba(52,211,153,0.14)]"
                                : isLive
                                  ? "border-blue-300/60 bg-blue-400/18 shadow-[0_0_22px_rgba(96,165,250,0.16)]"
                                  : "border-white/6 bg-white/[0.01]"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`rounded-xl p-2 ${isDone ? "bg-emerald-300/25 text-emerald-100" : isLive ? "bg-blue-300/25 text-blue-100 ai-hero-pulse" : "bg-white/5 text-slate-500"}`}
                              >
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-[13px] font-semibold text-white lg:text-sm">
                                  {t(`actions.items.${key}.title`)}
                                </p>
                                <p className="mt-1 text-[13px] leading-5 text-slate-400 lg:text-sm">
                                  {t(`actions.items.${key}.description`)}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-[20px] border border-blue-400/25 bg-[linear-gradient(180deg,rgba(37,99,235,0.2),rgba(15,23,42,0.96))] px-4 py-3.5 shadow-[0_0_36px_rgba(59,130,246,0.16)]">
                      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200 ai-hero-pulse">
                        <Braces className="h-5 w-5" />
                      </div>
                      <p className="mt-2.5 text-center text-sm font-semibold text-white">
                        {t("engine.title")}
                      </p>
                      <p className="mt-1 text-center text-[13px] leading-5 text-slate-300 text-balance lg:text-sm">
                        {t("engine.description")}
                      </p>

                      <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-300">
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1">
                          {t("engine.tags.controls")}
                        </span>
                        <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-2.5 py-1">
                          {t("engine.tags.evidence")}
                        </span>
                        <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-2.5 py-1">
                          {t("engine.tags.risks")}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`rounded-[18px] border p-3 transition-all duration-700 ${
                        approvalVisible
                          ? resolved
                            ? "border-emerald-300/60 bg-emerald-400/18 shadow-[0_0_22px_rgba(52,211,153,0.14)]"
                            : "border-amber-300/60 bg-amber-400/18 shadow-[0_0_22px_rgba(251,191,36,0.12)]"
                          : "border-white/6 bg-white/[0.01]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {t("approval.title")}
                          </p>
                          <p className="mt-1 text-[13px] leading-5 text-slate-400 lg:text-sm">
                            {t("approval.description")}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${resolved ? "bg-emerald-300/25 text-emerald-100" : approvalVisible ? "bg-amber-300/25 text-amber-100" : "bg-white/6 text-slate-500"}`}
                        >
                          {resolved
                            ? t("approval.applied")
                            : t("approval.pending")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("outcomes.label")}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {outcomes.map(({ key, tone }, index) => {
                    const show = resolved || (approvalVisible && index < 2);

                    return (
                      <span
                        key={key}
                        className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-medium transition-all duration-700 ${
                          show
                            ? tone
                            : "border-white/6 bg-white/[0.01] text-slate-600"
                        }`}
                      >
                        {show ? (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-current opacity-60" />
                        )}
                        {t(`outcomes.items.${key}`)}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-2.5 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-sm text-cyan-100">
                  <p className="font-semibold">{t("caption")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
