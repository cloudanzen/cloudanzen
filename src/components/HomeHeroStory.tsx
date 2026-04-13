"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Bot,
  Braces,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  FolderCheck,
  GitBranchPlus,
  KeyRound,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

const SCENE_COUNT = 5;
const SCENE_INTERVAL_MS = 1800;

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

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setScene((current) => (current + 1) % SCENE_COUNT);
    }, SCENE_INTERVAL_MS);

    return () => window.clearInterval(timer);
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
      { key: "policy", icon: Braces },
    ],
    [],
  );

  const actions = useMemo(
    () => [
      { key: "questionnaire", icon: ClipboardCheck },
      { key: "risk", icon: ShieldAlert },
      { key: "evidence", icon: FileSearch },
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

  const activeScene = prefersReducedMotion ? SCENE_COUNT - 1 : scene;
  const currentScene = scenes[activeScene];
  const signalProgress = activeScene === 0 ? 1 : 5;
  const actionsActive = activeScene >= 2;
  const approvalVisible = activeScene >= 3;
  const resolved = activeScene >= 4;

  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <div className="rounded-[32px] border border-white/12 bg-slate-950/75 p-2 shadow-[0_40px_120px_rgba(15,23,42,0.45)] backdrop-blur-xl">
        <div className="rounded-[28px] border border-white/6 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(160deg,rgba(15,23,42,0.98),rgba(15,23,42,0.86))] p-5 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-4 border-b border-white/8 pb-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                {t("eyebrow")}
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-white">
                  {currentScene.title}
                </p>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                  {currentScene.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
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

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_1.2fr_1fr]">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {t("prompt.label")}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-100">
                    {t("prompt.value")}
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-400/25 bg-blue-500/10 p-3 text-blue-200 ai-hero-float">
                  <Bot className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
                  <KeyRound className="h-3.5 w-3.5" />
                  {t("chips.byoKey")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
                  <Braces className="h-3.5 w-3.5" />
                  {t("chips.mcp")}
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-white/8 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("signals.label")}
                </p>
                <div className="mt-4 space-y-2.5">
                  {signals.map(({ key, icon: Icon }, index) => {
                    const active = index < signalProgress;

                    return (
                      <div
                        key={key}
                        className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-500 ${
                          active
                            ? "border-blue-400/25 bg-blue-500/10 text-slate-100"
                            : "border-white/6 bg-white/[0.02] text-slate-500"
                        }`}
                      >
                        <div
                          className={`rounded-xl p-2 ${
                            active
                              ? "bg-blue-400/20 text-blue-200 ai-hero-pulse"
                              : "bg-white/5"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm">
                          {t(`signals.items.${key}`)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="absolute inset-x-8 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent lg:block" />
              <div className="absolute left-1/2 top-16 hidden h-[calc(100%-8rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent lg:block" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t("engine.label")}
              </p>

              <div className="relative mt-6 flex min-h-[22rem] items-center justify-center rounded-[28px] border border-white/8 bg-slate-950/55">
                <div className="absolute left-4 top-4 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-400">
                  {t("engine.contextLabel")}
                </div>

                <div className="grid w-full gap-4 p-4 sm:grid-cols-2 lg:absolute lg:inset-0 lg:grid-cols-2 lg:p-5">
                  {signals.slice(0, 4).map(({ key, icon: Icon }, index) => {
                    const active = index < signalProgress - 1;

                    return (
                      <div
                        key={key}
                        className={`rounded-2xl border p-3 text-sm transition-all duration-500 ${
                          active
                            ? "border-cyan-400/25 bg-cyan-500/10 text-slate-100"
                            : "border-white/6 bg-white/[0.02] text-slate-500"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon
                            className={`h-4 w-4 ${active ? "text-cyan-200" : "text-slate-500"}`}
                          />
                          <span>{t(`signals.items.${key}`)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative z-10 mx-auto max-w-xs rounded-[28px] border border-blue-400/25 bg-[linear-gradient(180deg,rgba(37,99,235,0.18),rgba(15,23,42,0.96))] px-6 py-6 shadow-[0_0_60px_rgba(59,130,246,0.18)]">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200 ai-hero-pulse">
                    <Braces className="h-7 w-7" />
                  </div>
                  <p className="mt-4 text-center text-sm font-semibold text-white">
                    {t("engine.title")}
                  </p>
                  <p className="mt-2 text-center text-sm leading-6 text-slate-300">
                    {t("engine.description")}
                  </p>

                  <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-300">
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
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t("outcomes.label")}
              </p>

              <div className="mt-4 space-y-3">
                {actions.map(({ key, icon: Icon }, index) => {
                  const isLive = actionsActive && index <= activeScene;
                  const isDone = resolved;

                  return (
                    <div
                      key={key}
                      className={`rounded-2xl border p-3.5 transition-all duration-500 ${
                        isDone
                          ? "border-emerald-400/20 bg-emerald-500/10"
                          : isLive
                            ? "border-blue-400/25 bg-blue-500/10"
                            : "border-white/6 bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`rounded-xl p-2 ${
                            isDone
                              ? "bg-emerald-500/15 text-emerald-200"
                              : isLive
                                ? "bg-blue-500/15 text-blue-200 ai-hero-pulse"
                                : "bg-white/5 text-slate-500"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {t(`actions.items.${key}.title`)}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {t(`actions.items.${key}.description`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`mt-4 rounded-2xl border p-4 transition-all duration-500 ${
                  approvalVisible
                    ? resolved
                      ? "border-emerald-400/20 bg-emerald-500/10"
                      : "border-amber-400/25 bg-amber-500/10"
                    : "border-white/6 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t("approval.title")}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {t("approval.description")}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      resolved
                        ? "bg-emerald-500/15 text-emerald-200"
                        : approvalVisible
                          ? "bg-amber-500/15 text-amber-200"
                          : "bg-white/6 text-slate-500"
                    }`}
                  >
                    {resolved ? t("approval.applied") : t("approval.pending")}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {outcomes.map(({ key, tone }, index) => {
                  const show = resolved || (approvalVisible && index < 2);

                  return (
                    <span
                      key={key}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all duration-500 ${
                        show
                          ? tone
                          : "border-white/6 bg-white/[0.02] text-slate-500"
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

              <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">
                <p className="font-semibold">{t("caption")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
