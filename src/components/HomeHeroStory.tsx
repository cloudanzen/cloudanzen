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
const SCENE_WHEEL_THRESHOLD = 150;
const SCENE_RELEASE_THRESHOLD = 220;

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
  const wheelProgressRef = useRef(0);
  const releaseProgressRef = useRef(0);
  const releaseReadyRef = useRef(false);
  const sceneRef = useRef(scene);

  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const handleWheel = (event: WheelEvent) => {
      if (!desktopQuery.matches) return;

      const story = storyRef.current;

      if (!story) return;

      const rect = story.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const isInLockZone =
        rect.top <= viewportHeight * 0.2 && rect.bottom >= viewportHeight * 0.85;

      if (!isInLockZone) {
        wheelProgressRef.current = 0;
        releaseProgressRef.current = 0;
        releaseReadyRef.current = false;
        return;
      }

      const direction = Math.sign(event.deltaY);

      if (direction === 0) return;

      const shouldLockForward =
        direction > 0 && sceneRef.current < SCENE_COUNT - 1;
      const shouldLockBackward = direction < 0 && sceneRef.current > 0;
      const isHoldingFinalScene =
        direction > 0 && sceneRef.current === SCENE_COUNT - 1 && !releaseReadyRef.current;

      if (shouldLockForward || shouldLockBackward || isHoldingFinalScene) {
        event.preventDefault();
      }

      if (direction < 0) {
        releaseProgressRef.current = 0;
        releaseReadyRef.current = false;
      }

      if (sceneRef.current === SCENE_COUNT - 1 && direction > 0) {
        if (releaseReadyRef.current) {
          return;
        }

        releaseProgressRef.current += event.deltaY;

        if (releaseProgressRef.current >= SCENE_RELEASE_THRESHOLD) {
          releaseReadyRef.current = true;
          releaseProgressRef.current = 0;
        }

        return;
      }

      setScene((current) => {
        const atLowerBound = direction < 0 && current === 0;
        const atUpperBound = direction > 0 && current === SCENE_COUNT - 1;

        if (atLowerBound || atUpperBound) {
          wheelProgressRef.current = 0;
          return current;
        }

        wheelProgressRef.current += event.deltaY;

        if (Math.abs(wheelProgressRef.current) < SCENE_WHEEL_THRESHOLD) {
          return current;
        }

        wheelProgressRef.current = 0;
        releaseProgressRef.current = 0;
        releaseReadyRef.current = false;
        return Math.min(
          SCENE_COUNT - 1,
          Math.max(0, current + direction),
        );
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
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
      { key: "draft", tone: "border-sky-200 bg-sky-50 text-sky-700" },
      {
        key: "risk",
        tone: "border-violet-200 bg-violet-50 text-violet-700",
      },
      {
        key: "evidence",
        tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
      },
      {
        key: "task",
        tone: "border-amber-200 bg-amber-50 text-amber-700",
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
      className="mt-4 w-full lg:mt-0 lg:ml-auto lg:max-w-[1020px] lg:justify-self-end xl:translate-x-8 2xl:translate-x-10"
    >
      <div className="ai-hero-sheen relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent" />
        <div className="pointer-events-none absolute -left-8 top-8 h-32 w-32 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative rounded-[24px] border border-white/80 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.14),_transparent_36%),linear-gradient(160deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] p-3 sm:p-3.5 lg:p-3.5">
          <div className="flex flex-col gap-2.5 border-b border-slate-200/80 pb-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-100 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-[0_6px_18px_rgba(244,114,182,0.06)]">
                <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" />
                {t("eyebrow")}
              </div>
              <div className="mt-2 min-h-[4rem] lg:min-h-[4.5rem]">
                <p className="text-sm font-semibold text-slate-900 sm:text-[15px]">
                  {currentScene.title}
                </p>
                <p className="mt-1 max-w-2xl text-[13px] leading-5 text-slate-500 text-balance lg:text-sm">
                  {currentScene.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-2 py-1 shadow-sm">
              {scenes.map((sceneItem, index) => (
                <button
                  key={sceneItem.title}
                  type="button"
                  onClick={() => setScene(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeScene
                      ? "w-9 bg-gradient-to-r from-fuchsia-500 to-emerald-500"
                      : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={sceneItem.title}
                />
              ))}
            </div>
          </div>

          <div className="mt-3.5 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-3">
              <div className="rounded-[18px] border border-white/85 bg-white/90 p-3 shadow-[0_8px_22px_rgba(15,23,42,0.045)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {t("prompt.label")}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700 text-balance lg:text-[15px]">
                      {t("prompt.value")}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-2.5 text-fuchsia-600 ai-hero-float">
                    <Bot className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                    <KeyRound className="h-3.5 w-3.5" />
                    {t("chips.byoKey")}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700">
                    <Braces className="h-3.5 w-3.5" />
                    {t("chips.mcp")}
                  </span>
                </div>
              </div>

              <div className="rounded-[18px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(248,250,252,0.9))] p-3 shadow-[0_8px_22px_rgba(15,23,42,0.045)]">
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
                            ? "border-sky-200 bg-sky-50 text-slate-900 shadow-[0_6px_18px_rgba(14,165,233,0.08)]"
                            : "border-slate-200/80 bg-white/70 text-slate-500"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-xl p-2 ${active ? "bg-sky-100 text-sky-600 ai-hero-pulse" : "bg-slate-100 text-slate-400"}`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-[13px] leading-5 lg:text-sm">
                            {t(`signals.items.${key}`)}
                          </span>
                        </div>
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${active ? "bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.45)]" : "bg-slate-200"}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-[18px] border border-white/85 bg-white/90 p-3 shadow-[0_8px_22px_rgba(15,23,42,0.045)]">
                <div className="pointer-events-none absolute left-7 top-16 bottom-20 hidden w-px bg-gradient-to-b from-fuchsia-300/0 via-fuchsia-300/60 to-emerald-300/0 lg:block" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t("engine.label")}
                </p>

                <div className="mt-2.5 grid gap-3 xl:grid-cols-[1.14fr_0.86fr]">
                  <div className="rounded-[20px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.95))] p-3">
                    <div className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-500">
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
                                ? "border-emerald-200 bg-emerald-50 shadow-[0_6px_18px_rgba(16,185,129,0.08)]"
                                : isLive
                                  ? "border-fuchsia-200 bg-fuchsia-50 shadow-[0_6px_18px_rgba(217,70,239,0.08)]"
                                  : "border-slate-200/80 bg-white/70"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`rounded-xl p-2 ${isDone ? "bg-emerald-100 text-emerald-600" : isLive ? "bg-fuchsia-100 text-fuchsia-600 ai-hero-pulse" : "bg-slate-100 text-slate-400"}`}
                              >
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-[13px] font-semibold text-slate-900 lg:text-sm">
                                  {t(`actions.items.${key}.title`)}
                                </p>
                                <p className="mt-1 text-[13px] leading-5 text-slate-500 lg:text-sm">
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
                    <div className="relative overflow-hidden rounded-[20px] border border-fuchsia-100 bg-[linear-gradient(180deg,rgba(250,245,255,0.95),rgba(255,255,255,0.92))] px-4 py-3.5 shadow-[0_10px_26px_rgba(217,70,239,0.06)]">
                      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent" />
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-600 ai-hero-pulse">
                        <Braces className="h-5 w-5" />
                      </div>
                      <p className="mt-2.5 text-center text-sm font-semibold text-slate-900">
                        {t("engine.title")}
                      </p>
                      <p className="mt-1 text-center text-[13px] leading-5 text-slate-500 text-balance lg:text-sm">
                        {t("engine.description")}
                      </p>

                      <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-600">
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1">
                          {t("engine.tags.controls")}
                        </span>
                        <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1">
                          {t("engine.tags.evidence")}
                        </span>
                        <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1">
                          {t("engine.tags.risks")}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`rounded-[18px] border p-3 transition-all duration-700 ${
                        approvalVisible
                          ? resolved
                            ? "border-emerald-200 bg-emerald-50 shadow-[0_6px_18px_rgba(16,185,129,0.08)]"
                            : "border-amber-200 bg-amber-50 shadow-[0_6px_18px_rgba(251,191,36,0.08)]"
                          : "border-slate-200/80 bg-white/70"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {t("approval.title")}
                          </p>
                          <p className="mt-1 text-[13px] leading-5 text-slate-500 lg:text-sm">
                            {t("approval.description")}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${resolved ? "bg-emerald-100 text-emerald-700" : approvalVisible ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"}`}
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

              <div className="rounded-[18px] border border-white/85 bg-white/90 p-3 shadow-[0_8px_22px_rgba(15,23,42,0.045)]">
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
                            : "border-slate-200/80 bg-white/70 text-slate-500"
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

                <div className="mt-2.5 rounded-2xl border border-fuchsia-100 bg-[linear-gradient(90deg,rgba(250,245,255,0.95),rgba(236,253,245,0.95))] p-3 text-sm text-slate-700">
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
