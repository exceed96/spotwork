'use client';

import { useEffect } from 'react';

const hasAnyUtm = (url: URL) =>
  url.searchParams.has('utm_source') ||
  url.searchParams.has('utm_medium') ||
  url.searchParams.has('utm_campaign') ||
  url.searchParams.has('utm_content') ||
  url.searchParams.has('utm_term');

const toCampaignFromPathname = (pathname: string) => {
  if (!pathname || pathname === '/') return 'path_root';

  const normalized = pathname
    .trim()
    .replace(/\/+/g, '/')
    .replace(/\/$/, '')
    .replace(/^\//, '');

  const safe = normalized.replace(/[^a-zA-Z0-9/_-]/g, '_').replace(/\//g, '_');
  const campaign = `path_${safe}`.replace(/_+/g, '_');

  return campaign.length > 100 ? campaign.slice(0, 100) : campaign;
};

export const ReferralUtmInitializer = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (typeof document === 'undefined') return;

    const currentUrl = new URL(window.location.href);
    if (hasAnyUtm(currentUrl)) return;

    const ref = document.referrer;
    if (!ref) return;

    let refUrl: URL;
    try {
      refUrl = new URL(ref);
    } catch {
      return;
    }

    if (!refUrl.host) return;
    if (refUrl.host === currentUrl.host) return;

    currentUrl.searchParams.set('utm_source', refUrl.host);
    currentUrl.searchParams.set('utm_medium', 'referral');
    currentUrl.searchParams.set('utm_campaign', toCampaignFromPathname(currentUrl.pathname));
    currentUrl.searchParams.set('utm_content', currentUrl.pathname || '/');

    window.history.replaceState(window.history.state, '', currentUrl.toString());
  }, []);

  return null;
};

