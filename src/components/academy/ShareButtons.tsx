"use client";

import { useState } from "react";
import { Copy, Linkedin, Check } from "lucide-react";

interface Props {
  shareUrl: string;
  courseTitle: string;
  publicId: string;
  issuedAt: string;
}

/**
 * LinkedIn "Add to profile" deep link drops the cert directly onto a
 * learner's profile rather than just sharing a post. It's a much higher
 * attach rate than a plain share intent.
 *
 * See https://learn.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/adding-a-course-or-certification
 */
function linkedInAddToProfile({
  shareUrl,
  courseTitle,
  publicId,
  issuedAt,
}: Props): string {
  const issued = new Date(issuedAt);
  const params = new URLSearchParams({
    startTask: "CERTIFICATION_NAME",
    name: courseTitle,
    organizationName: "CloudAnzen",
    issueYear: String(issued.getUTCFullYear()),
    issueMonth: String(issued.getUTCMonth() + 1),
    certUrl: shareUrl,
    certId: publicId,
  });
  return `https://www.linkedin.com/profile/add?${params.toString()}`;
}

function linkedInShare(shareUrl: string): string {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
}

function xShare(shareUrl: string, courseTitle: string): string {
  const text = `I just earned a verified ${courseTitle} certificate from CloudAnzen Academy.`;
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
}

export default function ShareButtons(props: Props) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={linkedInAddToProfile(props)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-[#0a66c2] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
      >
        <Linkedin className="w-4 h-4" /> Add to LinkedIn profile
      </a>
      <a
        href={linkedInShare(props.shareUrl)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        <Linkedin className="w-4 h-4" /> Share to feed
      </a>
      <a
        href={xShare(props.shareUrl, props.courseTitle)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        Share to X
      </a>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(props.shareUrl);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" /> Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" /> Copy link
          </>
        )}
      </button>
    </div>
  );
}
