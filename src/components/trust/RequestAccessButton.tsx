"use client";

import { useState } from "react";
import { submitAccessRequest } from "@/lib/trust";

interface Props {
  orgSlug: string;
  documentId?: string;
  documentName?: string;
  variant?: "outline" | "primary";
  label?: string;
}

export default function RequestAccessButton({
  orgSlug,
  documentId,
  documentName,
  variant = "outline",
  label,
}: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [purpose, setPurpose] = useState("");
  const [nda, setNda] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (documentId && !nda) {
      setError("Please confirm the NDA to continue.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await submitAccessRequest(orgSlug, {
        requesterName: name.trim(),
        requesterEmail: email.trim(),
        company: company.trim() || undefined,
        purpose: purpose.trim() || undefined,
        documentId,
        ndaSigned: documentId ? nda : undefined,
      });
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  const buttonClass =
    variant === "primary"
      ? "inline-flex items-center rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
      : "inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50";

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={buttonClass}>
        {label ?? "Request access"}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            {submitted ? (
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  Request received
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We&apos;ll review and email you{" "}
                  {email && <span className="font-medium">{email}</span>} once
                  approved. The link will be valid for 7 days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setCompany("");
                    setPurpose("");
                    setNda(false);
                  }}
                  className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-bold text-slate-900">
                  Request access
                </h3>
                {documentName && (
                  <p className="mt-1 text-sm text-slate-500">
                    Document: <span className="font-medium">{documentName}</span>
                  </p>
                )}

                <div className="mt-5 space-y-3">
                  <Field
                    label="Full name"
                    value={name}
                    onChange={setName}
                    required
                  />
                  <Field
                    label="Work email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                  />
                  <Field label="Company" value={company} onChange={setCompany} />
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">
                      Purpose (optional)
                    </span>
                    <textarea
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      rows={3}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    />
                  </label>
                  {documentId && (
                    <label className="flex items-start gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={nda}
                        onChange={(e) => setNda(e.target.checked)}
                        className="mt-1"
                      />
                      <span>
                        I confirm I am bound by an NDA with the document owner
                        and will treat this material as confidential.
                      </span>
                    </label>
                  )}
                </div>

                {error && (
                  <div className="mt-4 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                    {error}
                  </div>
                )}

                <div className="mt-6 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting || !name.trim() || !email.trim()}
                    className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
                  >
                    {submitting ? "Sending…" : "Submit request"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
      />
    </label>
  );
}
