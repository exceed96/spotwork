import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { B2BInquiryForm } from '@/components/forms/B2BInquiryForm';

export const metadata: Metadata = {
  title: '기업도입 문의',
  description: '스팟워크 기업 도입 문의 폼입니다.',
  alternates: { canonical: '/b2b-inquiry' },
};

export default function B2BInquiryPage() {
  return (
    <>
      <Header />
      <main className="py-10 sm:py-14">
        <Container className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-fg-strong sm:text-3xl">
              기업도입 문의
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              사무실 규모/지역을 알려주시면 맞춤 안내를 드립니다.
            </p>
          </header>

          <div className="rounded-2xl border border-border bg-bg p-5 shadow-soft sm:p-6">
            <B2BInquiryForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

