import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border/60 bg-bg/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-3">
          <Link
            href="/"
            aria-label="스팟워크 홈으로"
            className="flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={32}
              height={32}
              priority
              className="h-8 w-8 rounded-md"
            />
            <span className="text-lg font-bold tracking-tight text-fg-strong">스팟워크</span>
          </Link>
          <nav className="ml-2 flex flex-1 items-center justify-end gap-2" aria-label="주요 내비게이션">
            <ButtonLink
              href="/worker"
              gaEventName="worker_apply"
              className="hidden h-11 whitespace-nowrap px-5 text-sm sm:inline-flex"
            >
              워커 신청
            </ButtonLink>
            <ButtonLink
              href="/b2b"
              gaEventName="b2b_inquiry"
              className="hidden h-11 whitespace-nowrap px-5 text-sm sm:inline-flex"
            >
              기업도입 문의
            </ButtonLink>
            <ButtonLink
              href="/b2c"
              gaEventName="b2c_inquiry"
              className="hidden h-11 whitespace-nowrap px-5 text-sm sm:inline-flex"
            >
              개인구독 문의
            </ButtonLink>
            <ButtonLink
              href="https://open.kakao.com/o/gILV3Bsi"
              variant="ghost"
              gaEventName="apply_free_trial"
              className="h-9 w-9 shrink-0 px-0 sm:h-11 sm:w-11"
              aria-label="카카오톡 문의"
            >
              <Image
                src="/kakaotalk.svg"
                alt=""
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8"
              />
            </ButtonLink>
          </nav>
        </Container>
      </header>
      <div
        className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:hidden"
        aria-label="모바일 빠른 문의"
      >
        <ButtonLink
          href="/b2c"
          gaEventName="b2c_inquiry"
          className="h-11 animate-float-border-soft whitespace-nowrap border-2 border-white px-4 text-sm shadow-soft motion-reduce:animate-none"
        >
          개인구독 문의
        </ButtonLink>
        <ButtonLink
          href="/b2b"
          gaEventName="b2b_inquiry"
          className="h-11 animate-float-border-soft whitespace-nowrap border-2 border-white px-4 text-sm shadow-soft motion-reduce:animate-none"
        >
          기업도입 문의
        </ButtonLink>
        <ButtonLink
          href="/worker"
          gaEventName="worker_apply"
          className="h-11 animate-float-border-soft whitespace-nowrap border-2 border-white px-4 text-sm shadow-soft motion-reduce:animate-none"
        >
          워커 신청
        </ButtonLink>
      </div>
    </>
  );
}
