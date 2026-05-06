export type UtmParams = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content?: string;
  utm_term?: string;
};

const toUrl = (value: string): URL => {
  if (value.startsWith('http://') || value.startsWith('https://')) return new URL(value);
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.spotwork.kr';
  return new URL(value, base);
};

export const withUtm = (inputUrl: string, utm: UtmParams): string => {
  const url = toUrl(inputUrl);

  (Object.entries(utm) as Array<[keyof UtmParams, UtmParams[keyof UtmParams]]>).forEach(
    ([key, value]) => {
      if (value === undefined || value === null || value === '') return;
      url.searchParams.set(key, String(value));
    },
  );

  return url.toString();
};
