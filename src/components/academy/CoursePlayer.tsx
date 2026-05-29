"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  startCourseAttempt,
  submitScore,
  type CourseDetail,
  type PublicQuestion,
} from "@/lib/academy";

interface Props {
  slug: string;
}

type Answers = Record<string, string[]>;

export default function CoursePlayer({ slug }: Props) {
  const router = useRouter();
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [attemptToken, setAttemptToken] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [moduleIdx, setModuleIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [scoreError, setScoreError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const result = await startCourseAttempt(slug);
        if (cancelled) return;
        setCourse(result.course);
        setAttemptToken(result.attemptToken);
      } catch (err) {
        if (cancelled) return;
        setLoadError(err instanceof Error ? err.message : "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const totalModules = course?.modules.length ?? 0;
  const currentModule = course?.modules[moduleIdx];
  const isLast = totalModules > 0 && moduleIdx === totalModules - 1;

  const allQuestionsAnswered = useMemo(() => {
    if (!course) return false;
    for (const m of course.modules) {
      for (const q of m.questions) {
        const a = answers[q.id];
        if (!a || a.length === 0) return false;
      }
    }
    return true;
  }, [course, answers]);

  if (loading) {
    return (
      <div className="page-shell pt-32 pb-24">
        <p className="text-slate-500">Loading course…</p>
      </div>
    );
  }
  if (loadError || !course) {
    return (
      <div className="page-shell pt-32 pb-24">
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-6 text-rose-700">
          {loadError ?? "Course not available"}
        </div>
      </div>
    );
  }

  async function handleSubmit() {
    if (!course) return;
    setSubmitting(true);
    setScoreError(null);
    try {
      const flat: Record<string, string[]> = {};
      for (const m of course.modules) {
        for (const q of m.questions) {
          flat[q.id] = answers[q.id] ?? [];
        }
      }
      const result = await submitScore(course.slug, attemptToken, flat);
      // Persist score + completion token via sessionStorage for the
      // completion page. The token is short-lived (10 min) and bound to
      // this attempt; sessionStorage is OK because it dies with the tab.
      sessionStorage.setItem(
        `academy-result-${course.slug}`,
        JSON.stringify(result),
      );
      router.push(`/academy/courses/${course.slug}/complete`);
    } catch (err) {
      setScoreError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="page-shell pt-32 pb-24">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{course.title}</h1>
          <p className="text-sm text-slate-500">
            Module {moduleIdx + 1} of {totalModules}
          </p>
        </div>
        <div className="w-48 hidden md:block">
          <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-fuchsia-500 transition-all"
              style={{ width: `${((moduleIdx + 1) / totalModules) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {currentModule && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-10">
          <h2 className="text-xl font-bold text-slate-900">
            {currentModule.title}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{currentModule.summary}</p>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            {currentModule.body
              .split("\n\n")
              .map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>
          {currentModule.bullets.length > 0 && (
            <ul className="mt-6 space-y-2">
              {currentModule.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          <hr className="my-8 border-slate-200" />

          <div className="space-y-8">
            {currentModule.questions.map((q, i) => (
              <QuestionBlock
                key={q.id}
                question={q}
                index={i}
                answer={answers[q.id] ?? []}
                onChange={(next) =>
                  setAnswers((prev) => ({ ...prev, [q.id]: next }))
                }
              />
            ))}
          </div>
        </div>
      )}

      {scoreError && (
        <div className="mt-6 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
          {scoreError}
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={() => setModuleIdx((i) => Math.max(0, i - 1))}
          disabled={moduleIdx === 0}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 disabled:opacity-40 hover:bg-slate-50"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </button>
        {isLast ? (
          <button
            onClick={handleSubmit}
            disabled={submitting || !allQuestionsAnswered}
            className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-600 px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-50 hover:bg-fuchsia-700"
          >
            {submitting
              ? "Submitting…"
              : allQuestionsAnswered
                ? "Submit answers"
                : "Answer all questions to submit"}
          </button>
        ) : (
          <button
            onClick={() => setModuleIdx((i) => Math.min(totalModules - 1, i + 1))}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Next module <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function QuestionBlock({
  question,
  index,
  answer,
  onChange,
}: {
  question: PublicQuestion;
  index: number;
  answer: string[];
  onChange: (next: string[]) => void;
}) {
  const isSingle =
    question.kind === "single_choice" ||
    (question.kind === "scenario" && question.selectionMode === "single");
  const isRanking = question.kind === "ranking";

  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Question {index + 1}
        {isRanking && " — drag-rank by clicking choices in order"}
      </div>
      {question.scenario && (
        <p className="mt-2 rounded-md bg-slate-50 border-l-4 border-slate-300 p-3 text-sm italic text-slate-700">
          {question.scenario}
        </p>
      )}
      <p className="mt-3 font-medium text-slate-900">{question.prompt}</p>
      <div className="mt-3 space-y-2">
        {question.choices.map((c) => {
          const selected = answer.includes(c.id);
          const rankPos = isRanking ? answer.indexOf(c.id) : -1;
          return (
            <label
              key={c.id}
              className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                selected
                  ? "border-fuchsia-400 bg-fuchsia-50"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              {isRanking ? (
                <span
                  className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                    selected
                      ? "bg-fuchsia-600 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {selected ? rankPos + 1 : ""}
                </span>
              ) : (
                <input
                  type={isSingle ? "radio" : "checkbox"}
                  name={question.id}
                  checked={selected}
                  onChange={() => undefined}
                  className="mt-1"
                />
              )}
              <button
                type="button"
                onClick={() => {
                  if (isRanking) {
                    if (selected) {
                      onChange(answer.filter((id) => id !== c.id));
                    } else {
                      onChange([...answer, c.id]);
                    }
                  } else if (isSingle) {
                    onChange([c.id]);
                  } else {
                    onChange(
                      selected
                        ? answer.filter((id) => id !== c.id)
                        : [...answer, c.id],
                    );
                  }
                }}
                className="flex-1 text-left text-sm text-slate-700"
              >
                {c.label}
              </button>
            </label>
          );
        })}
      </div>
    </div>
  );
}

