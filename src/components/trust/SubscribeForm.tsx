"use client";

import { useState } from "react";
import { MailCheck } from "lucide-react";
import { subscribeToTrust } from "@/lib/trust";

interface Props {
  orgSlug: string;
}

export default function SubscribeForm({ orgSlug }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    try {
      await subscribeToTrust(orgSlug, {
        email: email.trim(),
        name: name.trim() || undefined,
      });
      // Backend always returns 202 — show confirmation UI regardless.
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 flex items-start gap-3">
        <MailCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-semibold">Check your inbox</p>
          <p className="mt-1">
            We sent a confirmation link to {email}. Click it to finish
            subscribing.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name (optional)"
        maxLength={120}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
      />
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          maxLength={254}
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
        />
        <button
          type="submit"
          disabled={submitting || !email.trim()}
          className="inline-flex items-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 hover:bg-slate-800"
        >
          {submitting ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      <p className="text-xs text-slate-500">
        Confirmation required by email. Unsubscribe at any time.
      </p>
    </form>
  );
}
