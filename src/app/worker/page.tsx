import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { WorkerApplyForm } from '@/components/forms/WorkerApplyForm';

export const metadata: Metadata = {
  title: '워커 신청',
  description: '스팟워크 워커 신청 폼입니다.',
  alternates: { canonical: '/worker-apply' },
};

export default function WorkerApplyPage() {
  return (
    <>
      <Header />
      <main className="py-10 sm:py-14">
        <Container className="space-y-6">
          <header className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-fg-strong sm:text-3xl">
              워커 신청
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              간단한 정보만 남겨주시면 연락드릴게요.
            </p>
          </header>

          <div className="rounded-2xl border border-border bg-bg p-5 shadow-soft sm:p-6">
            <WorkerApplyForm />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

