/**
 * Public Academy API client.
 *
 * Talks to the Cloudanzen-backend `/api/public/academy/*` endpoints.
 * Server-only fetches use `fetch` directly with short caching.
 * Browser-side calls live in `src/components/academy/CoursePlayer.tsx`
 * (course play + scoring) and `ShareButtons.tsx` (claim certificate).
 */

export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/$/, "") ??
  "https://api.cloudanzen.com";

export const ACADEMY_PUBLIC_BASE = `${BACKEND_URL}/api/public/academy`;

export interface CourseSummary {
  slug: string;
  version: number;
  frameworkSlug: string;
  frameworkName: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  passThresholdPct: number;
  moduleCount: number;
  questionCount: number;
}

export interface PublicChoice {
  id: string;
  label: string;
}

export interface PublicQuestion {
  id: string;
  kind: "single_choice" | "multi_choice" | "scenario" | "ranking";
  selectionMode?: "single" | "multi";
  scenario?: string;
  prompt: string;
  choices: PublicChoice[];
  weight?: number;
}

export interface PublicModule {
  id: string;
  title: string;
  summary: string;
  body: string;
  bullets: string[];
  questions: PublicQuestion[];
}

export interface CourseDetail extends CourseSummary {
  modules: PublicModule[];
}

export interface CourseStartResponse {
  course: CourseDetail;
  attemptToken: string;
  attemptExpiresAt: string;
}

export interface ScoreResponse {
  scorePct: number;
  passed: boolean;
  passThresholdPct: number;
  completionToken: string | null;
  perQuestion: Array<{ questionId: string; correct: boolean }>;
}

export interface ClaimResponse {
  publicId: string;
  shareUrl: string;
}

export interface VerifiedCertificate {
  status: "verified";
  publicId: string;
  courseSlug: string;
  courseVersion: number;
  frameworkSlug: string;
  courseTitle: string;
  learnerName: string;
  scorePct: number;
  issuedAt: string;
  expiresAt: string | null;
}

export interface UnavailableCertificate {
  status: "unavailable";
}

export type CertificateView = VerifiedCertificate | UnavailableCertificate;

async function safeJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Academy API ${res.status}: ${text || res.statusText}`);
  }
  return (await res.json()) as T;
}

// ── Server-side reads (used by RSC). Revalidate every 5 min. ────────────────

export async function listCourses(): Promise<CourseSummary[]> {
  const res = await fetch(`${ACADEMY_PUBLIC_BASE}/courses`, {
    next: { revalidate: 300 },
  });
  const body = await safeJson<{ courses: CourseSummary[] }>(res);
  return body.courses;
}

// SSR fetch of course detail also creates a fresh attempt. To keep an
// SSG-able catalog while only minting attempts on the LEARN page, the
// course detail page uses listCourses() + a slug match; the player
// (client) calls startCourseAttempt to mint a token.
export async function getCourseSummary(
  slug: string,
): Promise<CourseSummary | undefined> {
  const all = await listCourses();
  return all.find((c) => c.slug === slug);
}

export async function getCertificate(
  publicId: string,
): Promise<CertificateView> {
  const res = await fetch(`${ACADEMY_PUBLIC_BASE}/certificates/${encodeURIComponent(publicId)}`, {
    cache: "no-store",
  });
  return safeJson<CertificateView>(res);
}

// ── Client-side calls (browser). ───────────────────────────────────────────

export async function startCourseAttempt(
  slug: string,
): Promise<CourseStartResponse> {
  const res = await fetch(
    `${ACADEMY_PUBLIC_BASE}/courses/${encodeURIComponent(slug)}`,
    { method: "GET" },
  );
  return safeJson<CourseStartResponse>(res);
}

export async function submitScore(
  slug: string,
  attemptToken: string,
  answers: Record<string, string | string[]>,
): Promise<ScoreResponse> {
  const res = await fetch(
    `${ACADEMY_PUBLIC_BASE}/courses/${encodeURIComponent(slug)}/score`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ attemptToken, answers }),
    },
  );
  return safeJson<ScoreResponse>(res);
}

export async function claimCertificate(input: {
  completionToken: string;
  learnerName: string;
  learnerEmail: string;
  turnstileToken?: string;
}): Promise<ClaimResponse> {
  const res = await fetch(`${ACADEMY_PUBLIC_BASE}/certificates`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...input, consent: true }),
  });
  return safeJson<ClaimResponse>(res);
}

export async function requestManageLink(
  publicId: string,
  email: string,
): Promise<void> {
  await fetch(
    `${ACADEMY_PUBLIC_BASE}/certificates/${encodeURIComponent(publicId)}/manage-link`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    },
  );
}

export async function setPrivacy(
  publicId: string,
  manageToken: string,
  isPublic: boolean,
): Promise<void> {
  const res = await fetch(
    `${ACADEMY_PUBLIC_BASE}/certificates/${encodeURIComponent(publicId)}/privacy`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ manageToken, isPublic }),
    },
  );
  if (!res.ok) throw new Error(`PATCH /privacy failed: ${res.status}`);
}

export async function revokeCert(
  publicId: string,
  manageToken: string,
): Promise<void> {
  const res = await fetch(
    `${ACADEMY_PUBLIC_BASE}/certificates/${encodeURIComponent(publicId)}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ manageToken }),
    },
  );
  if (!res.ok) throw new Error(`DELETE failed: ${res.status}`);
}
