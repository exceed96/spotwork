import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.spotwork.kr';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '스팟워크 — 분리수거·일반쓰레기 배출 대행 서비스',
    template: '%s | 스팟워크',
  },
  description:
    '동네 이웃 워커가 사무실과 가정의 반복적인 분리수거·일반쓰레기 배출을 대신 처리합니다. 가까운 워커 매칭, 사진 인증, 양방향 평점.',
  keywords: [
    '스팟워크',
    'Spotwork',
    '분리수거 대행',
    '일반쓰레기 배출 대행',
    'O2O 매칭',
    '근거리 매칭',
    '사무실 분리수거',
    '아파트 분리수거',
  ],
  applicationName: 'Spotwork',
  authors: [{ name: 'Spotwork' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: 'Spotwork',
    title: '스팟워크 — 분리수거·일반쓰레기 배출 대행 서비스',
    description:
      '동네 이웃 워커가 사무실과 가정의 반복적인 배출 업무를 대신 처리합니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '스팟워크 — 분리수거·일반쓰레기 배출 대행 서비스',
    description: '가까운 워커가 빠르게 처리하는 생활밀착형 매칭 플랫폼.',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#2D5FC9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 사전 연결로 첫 로드 지연 최소화 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
    </html>
  );
}
