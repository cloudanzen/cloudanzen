"use client";

import { useState } from "react";
import Link from "next/link";
import { requestManageLink, setPrivacy, revokeCert } from "@/lib/academy";

interface Props {
  publicId: string;
  initialToken?: string;
}

export default function ManageFlow({ publicId, initialToken }: Props) {
  const token = initialToken ?? "";
  const [email, setEmail] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function handleRequestLink(ev: React.FormEvent) {
    ev.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      await requestManageLink(publicId, email.trim().toLowerCase());
      setLinkSent(true);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed");
    } finally {
      setBusy(false);
    }
  }

  async function handlePrivacy(isPublic: boolean) {
    setBusy(true);
    setErr(null);
    setMsg(null);
    try {
      await setPrivacy(publicId, token, isPublic);
      setMsg(`Certificate is now ${isPublic ? "public" : "private"}.`);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed");
    } finally {
      setBusy(false);
    }
  }

  async function handleRevoke() {
    if (!confirm("Revoke this certificate? This cannot be undone.")) return;
    setBusy(true);
    setErr(null);
    setMsg(null);
    try {
      await revokeCert(publicId, token);
      setMsg("Certificate revoked. PII will be erased after a 30-day grace.");
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="page-shell pt-32 pb-24 max-w-xl">
      <h1 className="text-2xl font-bold text-slate-900">Manage certificate</h1>
      <p className="mt-2 text-slate-600">
        Toggle privacy or revoke this certificate. Both actions require a
        manage-link token sent to the email used at claim time.
      </p>

      {token ? (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
          <button
            onClick={() => handlePrivacy(false)}
            disabled={busy}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 disabled:opacity-40 hover:bg-slate-50"
          >
            Make certificate private
          </button>
          <button
            onClick={() => handlePrivacy(true)}
            disabled={busy}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 disabled:opacity-40 hover:bg-slate-50"
          >
            Make certificate public
          </button>
          <button
            onClick={handleRevoke}
            disabled={busy}
            className="w-full rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40 hover:bg-rose-700"
          >
            Revoke certificate
          </button>
          {msg && (
            <p className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
              {msg}
            </p>
          )}
          {err && (
            <p className="rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
              {err}
            </p>
          )}
        </div>
      ) : linkSent ? (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-800">
          <p>
            If an account exists for that email, a manage link has been sent.
            Check your inbox — the link is valid for 15 minutes.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleRequestLink}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"
        >
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Email used at claim
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-200"
            />
          </label>
          {err && (
            <p className="mt-3 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
              {err}
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50 hover:bg-slate-800"
          >
            {busy ? "Sending…" : "Send manage link"}
          </button>
        </form>
      )}

      <div className="mt-8 text-center">
        <Link
          href={`/academy/certificates/${publicId}`}
          className="text-sm text-slate-500 hover:underline"
        >
          Back to certificate
        </Link>
      </div>
    </div>
  );
}
