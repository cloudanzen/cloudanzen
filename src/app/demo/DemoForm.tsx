"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function DemoForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLSelectElement).value,
      framework: (form.elements.namedItem("framework") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  /* ── Success state ─────────────────────────────────────────────────── */
  if (state === "success") {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[520px]">
        <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-teal-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Request received!</h2>
        <p className="text-slate-500 max-w-sm">
          Thanks for your interest in CloudAnzen. We&apos;ll be in touch within one business day
          to schedule your demo.
        </p>
      </div>
    );
  }

  /* ── Form ──────────────────────────────────────────────────────────── */
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 lg:p-10">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Request a demo</h2>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="firstName">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              disabled={state === "loading"}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              placeholder="Jordan"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="lastName">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              disabled={state === "loading"}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              placeholder="Torres"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
            Work email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={state === "loading"}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            placeholder="jordan@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="company">
            Company name <span className="text-red-500">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            disabled={state === "loading"}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            placeholder="Acme Corp"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="role">
            Your role
          </label>
          <select
            id="role"
            name="role"
            disabled={state === "loading"}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white disabled:opacity-50"
          >
            <option value="">Select your role</option>
            <option>Founder / CEO</option>
            <option>CTO / VP Engineering</option>
            <option>CISO / Head of Security</option>
            <option>GRC Manager</option>
            <option>Compliance Lead</option>
            <option>IT Manager</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="framework">
            Primary framework of interest
          </label>
          <select
            id="framework"
            name="framework"
            disabled={state === "loading"}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white disabled:opacity-50"
          >
            <option value="">Select a framework</option>
            <option>SOC 2</option>
            <option>ISO 27001</option>
            <option>GDPR</option>
            <option>HIPAA</option>
            <option>PCI DSS</option>
            <option>NIST CSF</option>
            <option>Multiple frameworks</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
            Anything specific you&apos;d like to cover?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            disabled={state === "loading"}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:opacity-50"
            placeholder="e.g., We're a 50-person SaaS company starting SOC 2 Type I..."
          />
        </div>

        {/* Error banner */}
        {state === "error" && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{errorMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {state === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Request a demo"
          )}
        </button>

        <p className="text-xs text-slate-400 text-center">
          We&apos;ll respond within one business day to schedule your session.
        </p>
      </form>
    </div>
  );
}
