"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Award, RotateCcw } from "lucide-react";
import { claimCertificate, type ScoreResponse } from "@/lib/academy";

interface Props {
  slug: string;
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: { sitekey: string; callback: (token: string) => void },
      ) => string;
      remove: (id: string) => void;
    };
  }
}

export default function CompleteFlow({ slug }: Props) {
  const router = useRouter();
  const [result, setResult] = useState<ScoreResponse | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [claimError, setClaimError] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(`academy-result-${slug}`);
    if (!stored) {
      router.replace(`/academy/courses/${slug}`);
      return;
    }
    try {
      setResult(JSON.parse(stored) as ScoreResponse);
    } catch {
      router.replace(`/academy/courses/${slug}`);
    }
  }, [router, slug]);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !result?.passed) return;
    let widgetId: string | undefined;
    const tryRender = () => {
      const el = document.getElementById("turnstile-widget");
      if (!el || !window.turnstile) return false;
      widgetId = window.turnstile.render(el, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token: string) => setTurnstileToken(token),
      });
      return true;
    };
    if (!tryRender()) {
      const interval = setInterval(() => {
        if (tryRender()) clearInterval(interval);
      }, 300);
      return () => clearInterval(interval);
    }
    return () => {
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [result?.passed]);

  async function handleClaim(ev: React.FormEvent) {
    ev.preventDefault();
    if (!result?.completionToken) return;
    setSubmitting(true);
    setClaimError(null);
    try {
      const claim = await claimCertificate({
        completionToken: result.completionToken,
        learnerName: name.trim(),
        learnerEmail: email.trim().toLowerCase(),
        turnstileToken: turnstileToken || undefined,
      });
      sessionStorage.removeItem(`academy-result-${slug}`);
      router.push(`/academy/certificates/${claim.publicId}`);
    } catch (err) {
      setClaimError(err instanceof Error ? err.message : "Claim failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (!result) {
    return (
      <div className="page-shell pt-32 pb-24">
        <p className="text-slate-500">Loading your result…</p>
      </div>
    );
  }

  return (
    <>
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      )}
      <div className="page-shell pt-32 pb-24 max-w-2xl">
        <div
          className={`rounded-2xl border p-8 text-center ${
            result.passed
              ? "border-emerald-200 bg-emerald-50"
              : "border-rose-200 bg-rose-50"
          }`}
        >
          <div
            className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${
              result.passed
                ? "bg-emerald-500 text-white"
                : "bg-rose-500 text-white"
            }`}
          >
            <Award className="h-7 w-7" />
          </div>
          <h1
            className={`mt-4 text-3xl font-bold ${
              result.passed ? "text-emerald-800" : "text-rose-800"
            }`}
          >
            {result.passed ? "You passed!" : "Not quite there yet"}
          </h1>
          <p
            className={`mt-2 text-base ${
              result.passed ? "text-emerald-700" : "text-rose-700"
            }`}
          >
            You scored {result.scorePct}%. Pass threshold:{" "}
            {result.passThresholdPct}%.
          </p>
        </div>

        {result.passed ? (
          <form
            onSubmit={handleClaim}
            className="mt-8 rounded-2xl border border-slate-200 bg-white p-8"
          >
            <h2 className="text-xl font-bold text-slate-900">
              Claim your verified certificate
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              We&apos;ll generate a public verification URL you can share on
              LinkedIn or X. Your name appears on the certificate; your email
              stays private.
            </p>

            <div className="mt-6 space-y-4">
              <Field
                label="Full name"
                value={name}
                onChange={setName}
                placeholder="Vineet Singh"
                required
                maxLength={120}
              />
              <Field
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="you@example.com"
                required
                maxLength={254}
              />
            </div>

            {TURNSTILE_SITE_KEY && (
              <div id="turnstile-widget" className="mt-4 flex justify-center" />
            )}

            <p className="mt-3 text-xs text-slate-500">
              By claiming, you consent to the certificate being verifiable at a
              public URL. You can revoke it later via the manage link sent to
              your inbox.
            </p>

            {claimError && (
              <div className="mt-4 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                {claimError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || !name.trim() || !email.trim()}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-fuchsia-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50 hover:bg-fuchsia-700"
            >
              {submitting ? "Claiming…" : "Claim certificate"}
            </button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-slate-600">
              You can retake the course as many times as you like. Each attempt
              starts fresh — your previous answers are not saved.
            </p>
            <Link
              href={`/academy/courses/${slug}/learn`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <RotateCcw className="w-4 h-4" /> Retake course
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  maxLength,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-200"
      />
    </label>
  );
}
