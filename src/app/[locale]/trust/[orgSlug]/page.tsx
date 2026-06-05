import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  Award,
  CalendarCheck2,
  Download,
  FileText,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { downloadUrl, getTrustPortal, type TrustAnnouncement } from "@/lib/trust";
import RequestAccessButton from "@/components/trust/RequestAccessButton";
import SubscribeForm from "@/components/trust/SubscribeForm";

interface PageParams {
  params: Promise<{ locale: string; orgSlug: string }>;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { orgSlug } = await params;
  const portal = await getTrustPortal(orgSlug);
  if (!portal) {
    return { title: "Trust Center", robots: { index: false, follow: false } };
  }
  const { settings } = portal.data;
  return {
    title: `${settings.orgName} Trust Center`,
    description:
      settings.description ??
      `${settings.orgName} security, compliance, and policy documentation.`,
    openGraph: {
      title: `${settings.orgName} Trust Center`,
      description: settings.description ?? undefined,
      type: "website",
    },
  };
}

const ANNOUNCEMENT_STYLE: Record<TrustAnnouncement["type"], string> = {
  SECURITY_UPDATE: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800",
  INCIDENT: "border-rose-200 bg-rose-50 text-rose-800",
  CERTIFICATION: "border-emerald-200 bg-emerald-50 text-emerald-800",
  GENERAL: "border-slate-200 bg-slate-50 text-slate-800",
};

const CATEGORY_LABEL: Record<string, string> = {
  POLICY: "Policy",
  REPORT: "Report",
  CERTIFICATE: "Certificate",
  WHITEPAPER: "Whitepaper",
  OTHER: "Document",
};

export default async function TrustPortalPage({ params }: PageParams) {
  const { orgSlug } = await params;
  const portal = await getTrustPortal(orgSlug);
  if (!portal) notFound();

  const {
    settings,
    publicResources,
    requestableResources,
    announcements,
    metricsSnapshot,
    lastAudit,
  } = portal.data;

  const accentStyle = {
    "--tc-color": settings.primaryColor,
  } as React.CSSProperties;

  return (
    <div style={accentStyle} className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header
        className="border-b border-slate-200 bg-white"
        style={{ borderTopColor: settings.primaryColor, borderTopWidth: 4 }}
      >
        <div className="page-shell py-8 flex items-start gap-5">
          {settings.logoUrl ? (
            <img
              src={settings.logoUrl}
              alt={settings.orgName}
              className="h-16 w-16 rounded-lg object-contain bg-white border border-slate-200 p-2"
            />
          ) : (
            <div
              className="flex h-16 w-16 items-center justify-center rounded-lg text-white"
              style={{ background: settings.primaryColor }}
            >
              <ShieldCheck className="h-8 w-8" />
            </div>
          )}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Trust Center
            </p>
            <h1 className="text-3xl font-bold text-slate-900">
              {settings.orgName}
            </h1>
            {settings.description && (
              <p className="mt-2 max-w-2xl text-slate-600">
                {settings.description}
              </p>
            )}
          </div>
          {settings.securityEmail && (
            <a
              href={`mailto:${settings.securityEmail}`}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <Mail className="h-4 w-4" />
              Security contact
            </a>
          )}
        </div>
      </header>

      <main className="page-shell py-12 space-y-12">
        {/* Compliance snapshot */}
        {(metricsSnapshot || lastAudit) && (
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {metricsSnapshot && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Compliance posture
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {Math.round(metricsSnapshot.compliancePercentage)}%
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {metricsSnapshot.completedControls} of{" "}
                  {metricsSnapshot.controlCount} controls — {metricsSnapshot.frameworkName}
                </p>
              </div>
            )}
            {lastAudit && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Last audit
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {lastAudit.name}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                  <CalendarCheck2 className="h-4 w-4 text-emerald-600" />
                  Closed{" "}
                  {new Date(lastAudit.closedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            )}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Certifications
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {
                  publicResources.filter((d) => d.category === "CERTIFICATE")
                    .length
                }{" "}
                public · {requestableResources.filter((d) => d.category === "CERTIFICATE").length} requestable
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Latest attestations available below.
              </p>
            </div>
          </section>
        )}

        {/* Announcements */}
        {announcements.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Announcements
            </h2>
            <div className="space-y-3">
              {announcements.map((a) => (
                <div
                  key={a.id}
                  className={`rounded-lg border p-4 ${ANNOUNCEMENT_STYLE[a.type]}`}
                >
                  <div className="flex items-start gap-3">
                    {a.type === "INCIDENT" ? (
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    ) : a.type === "CERTIFICATION" ? (
                      <Award className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-semibold">{a.title}</p>
                      <p className="mt-1 text-sm whitespace-pre-line">
                        {a.content}
                      </p>
                      <p className="mt-2 text-xs opacity-75">
                        {new Date(a.createdAt).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Public docs */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Available resources
          </h2>
          {publicResources.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">
              No public resources yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {publicResources.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:shadow-sm transition-shadow"
                >
                  <FileText className="h-5 w-5 mt-0.5 text-slate-400" />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{doc.name}</p>
                    <p className="text-xs text-slate-500">
                      {CATEGORY_LABEL[doc.category] ?? "Document"}
                      {doc.version ? ` · v${doc.version}` : ""}
                    </p>
                  </div>
                  <a
                    href={downloadUrl(doc.downloadPath)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Requestable docs */}
        {requestableResources.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Available on request
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              These documents require an NDA. Submit a request and the {settings.orgName} team will review.
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {requestableResources.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <Lock className="h-5 w-5 mt-0.5 text-slate-400" />
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{doc.name}</p>
                    <p className="text-xs text-slate-500">
                      {CATEGORY_LABEL[doc.category] ?? "Document"}
                      {doc.version ? ` · v${doc.version}` : ""}
                    </p>
                  </div>
                  <RequestAccessButton
                    orgSlug={settings.orgSlug}
                    documentId={doc.id}
                    documentName={doc.name}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* General access request */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900">
            Need something not listed?
          </h2>
          <p className="mt-2 text-slate-600 max-w-xl mx-auto">
            Request general access to {settings.orgName}&apos;s Trust Center. We&apos;ll review and respond with a download link.
          </p>
          <div className="mt-5">
            <RequestAccessButton
              orgSlug={settings.orgSlug}
              variant="primary"
              label="Request general access"
            />
          </div>
        </section>

        {/* Subscribe to updates */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Subscribe to updates
              </h2>
              <p className="mt-2 text-slate-600">
                Get notified when {settings.orgName} publishes new security
                announcements, certifications, or incident updates. One-click
                unsubscribe.
              </p>
            </div>
            <SubscribeForm orgSlug={settings.orgSlug} />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        Powered by{" "}
        <a
          href="https://www.cloudanzen.com"
          className="font-semibold text-slate-700 hover:underline"
        >
          CloudAnzen
        </a>
      </footer>
    </div>
  );
}
