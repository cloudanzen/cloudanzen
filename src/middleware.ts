/**
 * Marketing-site middleware.
 *
 * Two responsibilities:
 *
 *   1. **Custom-domain Host → orgSlug rewrite (Trust Center Phase F).**
 *      Customers can CNAME `trust.acme.com → trust.cloudanzen.com` and have
 *      their Trust Center served from their own brand. When a request lands
 *      on a non-cloudanzen Host, we ask the backend
 *      `/api/trust/public-by-domain/:host` for the matching `orgSlug` and
 *      rewrite the URL to `/trust/<slug>` internally so the existing
 *      `[locale]/trust/[orgSlug]` page renders unchanged. 404 → fall through
 *      to next-intl so a typo on a cloudanzen subdomain still serves a
 *      reasonable page.
 *
 *      The lookup is cached for 5 minutes per host using Next's
 *      `fetch.next.revalidate` so we don't hammer the backend on every
 *      request.
 *
 *   2. **i18n routing (existing next-intl behaviour).**
 *      Delegated to `createMiddleware` from `next-intl/middleware`. Anything
 *      that is not a custom-domain Host falls through.
 */
import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales, defaultLocale } from './i18n/config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/$/, '') ??
  'https://api.cloudanzen.com';

/**
 * Hosts we treat as "the main marketing site". A request landing here is
 * NEVER subjected to a custom-domain lookup — we want
 * `cloudanzen.com/trust/<slug>` to keep working for direct deep links.
 */
const FIRST_PARTY_HOSTS = new Set([
  'cloudanzen.com',
  'www.cloudanzen.com',
  'trust.cloudanzen.com',
  'staging.cloudanzen.com',
  'staging-marketing.cloudanzen.com',
  'localhost',
  '127.0.0.1',
]);

function normaliseHost(host: string | null): string | null {
  if (!host) return null;
  // Strip port if present (host header includes :port when not on 80/443).
  return host.split(':')[0]!.trim().toLowerCase();
}

async function lookupCustomDomain(host: string): Promise<string | null> {
  try {
    const res = await fetch(
      `${BACKEND_URL}/api/trust/public-by-domain/${encodeURIComponent(host)}`,
      {
        // Edge runtime fetch — next/server middleware allows next.revalidate.
        next: { revalidate: 300 },
      },
    );
    if (!res.ok) return null;
    const body = (await res.json()) as
      | { success?: boolean; data?: { orgSlug?: string } }
      | undefined;
    return body?.data?.orgSlug ?? null;
  } catch {
    return null;
  }
}

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  const host = normaliseHost(request.headers.get('host'));

  if (host && !FIRST_PARTY_HOSTS.has(host) && !host.endsWith('.cloudanzen.com')) {
    const orgSlug = await lookupCustomDomain(host);
    if (orgSlug) {
      // Internal rewrite so the existing [orgSlug] page renders. URL bar
      // stays on the customer's domain.
      const url = request.nextUrl.clone();
      // Only rewrite the root path (and any deeper trust-center paths)
      // to the trust portal. /robots.txt, /sitemap.xml etc. still get
      // their normal handlers — we do not want to leak the customer's
      // Trust Center as a robots.txt source.
      if (
        url.pathname === '/' ||
        url.pathname === '' ||
        url.pathname.startsWith('/trust/')
      ) {
        // /trust/<existingSlug>… stays untouched (e.g. magic-link grants).
        if (url.pathname === '/' || url.pathname === '') {
          url.pathname = `/trust/${orgSlug}`;
        }
        return NextResponse.rewrite(url);
      }
    }
    // No matching active custom domain → fall through to next-intl so the
    // origin still serves something (probably 404 from the default page).
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except API routes, static files, Next.js
    // internals.
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
