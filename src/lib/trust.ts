/**
 * Marketing-site Trust Center portal client.
 *
 * Backed by Cloudanzen-backend `/api/trust/public/:orgSlug` and
 * `/api/trust/public/:orgSlug/documents/:id/download`.
 */
import { BACKEND_URL } from "./academy";

export const TRUST_PUBLIC_BASE = `${BACKEND_URL}/api/trust/public`;

export interface TrustPortalSettings {
  orgSlug: string;
  logoUrl: string | null;
  primaryColor: string;
  description: string | null;
  securityEmail: string | null;
  orgName: string;
}

export interface TrustPublicResource {
  id: string;
  name: string;
  category: "POLICY" | "REPORT" | "CERTIFICATE" | "WHITEPAPER" | "OTHER";
  version: string | null;
  downloadPath: string;
}

export interface TrustRequestableResource {
  id: string;
  name: string;
  category: "POLICY" | "REPORT" | "CERTIFICATE" | "WHITEPAPER" | "OTHER";
  version: string | null;
  requiresNda: true;
}

export interface TrustAnnouncement {
  id: string;
  title: string;
  content: string;
  type: "SECURITY_UPDATE" | "INCIDENT" | "CERTIFICATION" | "GENERAL";
  createdAt: string;
}

export interface TrustMetricsSnapshot {
  frameworkName: string;
  compliancePercentage: number;
  controlCount: number;
  completedControls: number;
  snapshotDate: string;
}

export interface TrustLastAudit {
  name: string;
  type: string;
  closedAt: string;
}

export interface TrustPortalPayload {
  settings: TrustPortalSettings;
  publicResources: TrustPublicResource[];
  requestableResources: TrustRequestableResource[];
  announcements: TrustAnnouncement[];
  metricsSnapshot: TrustMetricsSnapshot | null;
  lastAudit: TrustLastAudit | null;
}

async function safeJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Trust portal API ${res.status}: ${text || res.statusText}`);
  }
  return (await res.json()) as T;
}

export async function getTrustPortal(orgSlug: string): Promise<{
  success: true;
  data: TrustPortalPayload;
} | null> {
  try {
    const res = await fetch(
      `${TRUST_PUBLIC_BASE}/${encodeURIComponent(orgSlug)}`,
      { next: { revalidate: 60 } },
    );
    if (res.status === 404) return null;
    return await safeJson<{ success: true; data: TrustPortalPayload }>(res);
  } catch {
    return null;
  }
}

export function downloadUrl(downloadPath: string): string {
  return `${BACKEND_URL}${downloadPath}`;
}

export async function submitAccessRequest(
  orgSlug: string,
  body: {
    requesterName: string;
    requesterEmail: string;
    company?: string;
    purpose?: string;
    documentId?: string;
    ndaSigned?: boolean;
  },
): Promise<{ success: true; data: { id: string; status?: string } }> {
  const res = await fetch(
    `${TRUST_PUBLIC_BASE}/${encodeURIComponent(orgSlug)}/request-access`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    },
  );
  return safeJson<{ success: true; data: { id: string; status?: string } }>(
    res,
  );
}

export async function subscribeToTrust(
  orgSlug: string,
  body: { email: string; name?: string },
): Promise<void> {
  // Backend always returns 202; we don't surface specific errors here
  // to avoid email-enumeration leaks.
  await fetch(
    `${TRUST_PUBLIC_BASE}/${encodeURIComponent(orgSlug)}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );
}
