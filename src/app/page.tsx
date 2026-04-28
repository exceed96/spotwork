import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ValuePropsSection } from '@/components/sections/ValuePropsSection';
import { TrustSystemSection } from '@/components/sections/TrustSystemSection';
import { ForUsersSection } from '@/components/sections/ForUsersSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';
import { faqContent } from '@/content/faq';
import { Analytics } from "@vercel/analytics/next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.spotwork.kr';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Spotwork',
  alternateName: '스팟워크',
  url: SITE_URL,
  email: 'contact@spotwork.kr',
  description:
    '근거리 O2O 매칭 플랫폼. 동네 이웃 워커가 사무실·가정의 분리수거·일반쓰레기 배출을 대행합니다.',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqContent.categories.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  ),
};

export default function HomePage() {
  return (
    <>
      <Analytics />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ValuePropsSection />
        <TrustSystemSection />
        <ForUsersSection />
        <FeaturesSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />

      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- 정적 JSON-LD (CLAUDE.md §6.5 예외)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
