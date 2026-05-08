import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { B2CInquiryForm } from '@/components/forms/B2CInquiryForm';

export const metadata: Metadata = {
  title: '개인구독 문의',
  description: '스팟워크 개인 구독 문의 폼입니다.',
  alternates: { canonical: '/b2c-inquiry' },
};

export default function B2CInquiryPage() {
  return (
    <>
      <Header />
      <main className="py-10 sm:py-14">
        <Container className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-fg-strong sm:text-3xl">
              개인구독 문의
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              이용 지역/주기를 알려주시면 빠르게 안내드릴게요.
            </p>
          </header>

          <div className="rounded-2xl border border-border bg-bg p-5 shadow-soft sm:p-6">
            <B2CInquiryForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

