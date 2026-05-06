import { withUtm } from '@/lib/utm';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.spotwork.kr';

export const OKKY_LANDING_URL = withUtm(SITE_URL, {
  utm_source: 'okky',
  utm_medium: 'referral',
  utm_campaign: 'community',
});
