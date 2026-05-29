import { Award } from "lucide-react";
import type { VerifiedCertificate } from "@/lib/academy";

const FRAMEWORK_ACCENT: Record<string, string> = {
  "iso-42001": "from-fuchsia-500 to-violet-500",
  "iso-27001": "from-emerald-500 to-sky-500",
  "soc-2": "from-indigo-500 to-fuchsia-500",
  hipaa: "from-rose-500 to-orange-500",
  "nist-csf": "from-amber-500 to-emerald-500",
};

export default function CertificateCard({
  cert,
}: {
  cert: VerifiedCertificate;
}) {
  const accent =
    FRAMEWORK_ACCENT[cert.frameworkSlug] ?? "from-slate-700 to-slate-900";
  const issuedFmt = new Date(cert.issuedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
      <div
        className={`bg-gradient-to-r ${accent} px-8 py-6 text-white flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <Award className="h-7 w-7" />
          <span className="font-bold tracking-wide">CloudAnzen Academy</span>
        </div>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
          Verified
        </span>
      </div>
      <div className="p-8 md:p-12 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Certificate of completion
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
          {cert.learnerName}
        </h1>
        <p className="mt-4 text-slate-600">has successfully completed</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          {cert.courseTitle}
        </h2>
        <p className="mt-6 text-sm text-slate-500">
          Issued {issuedFmt} · Score {cert.scorePct}% ·{" "}
          {cert.expiresAt
            ? `Valid through ${new Date(cert.expiresAt).toLocaleDateString()}`
            : "No expiry"}
        </p>
        <div className="mt-6 text-xs text-slate-400 font-mono">
          Certificate ID: {cert.publicId}
        </div>
      </div>
    </div>
  );
}
