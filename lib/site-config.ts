/**
 * Falls back to localhost until a production domain is set (Phase 8 deploy)
 * — set NEXT_PUBLIC_SITE_URL in the Vercel project once a domain is live.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
