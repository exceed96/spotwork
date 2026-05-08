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
              href="/b2c"
              gaEventName="b2c_inquiry"
              className="hidden h-11 whitespace-nowrap px-5 text-sm sm:inline-flex shadow-md"
            >
              <b>개인 무료</b>
            </ButtonLink>
            <ButtonLink
              href="/b2b"
              gaEventName="b2b_inquiry"
              className="hidden h-11 whitespace-nowrap px-5 text-sm sm:inline-flex bg-[rgba(230,239,253)] text-black hover:bg-primary hover:text-white shadow-md"
            >
              <b>기업 문의</b>
            </ButtonLink>
            <ButtonLink
              href="/worker"
              gaEventName="worker_apply"
              className="hidden h-11 whitespace-nowrap px-5 text-sm sm:inline-flex bg-[rgba(61,69,85)] hover:bg-black hover:text-white shadow-md"
            >
              <b>워커 신청</b>
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
                className="hidden h-7 w-7 sm:block sm:h-8 sm:w-8"
              />
            </ButtonLink>
          </nav>
        </Container>
      </header>
      <div
        className="fixed bottom-4 right-10 z-40 flex items-center gap-2 sm:hidden"
        aria-label="모바일 빠른 문의"
      >
        <ButtonLink
          href="/b2c"
          gaEventName="b2c_inquiry"
          className="h-11 animate-float-border-soft whitespace-nowrap border-2 border-white px-4 text-xs sm:text-sm shadow-soft motion-reduce:animate-none"
        >
          <b>개인 무료</b>
        </ButtonLink>
        <ButtonLink
          href="/b2b"
          gaEventName="b2b_inquiry"
          className="h-11 animate-float-border-soft whitespace-nowrap border-2 border-white px-4 text-xs sm:text-sm shadow-soft motion-reduce:animate-none bg-[rgba(230,239,253)] text-black"
        >
          <b>기업 문의</b>
        </ButtonLink>
        <ButtonLink
          href="/worker"
          gaEventName="worker_apply"
          className="h-11 animate-float-border-soft whitespace-nowrap border-2 border-white px-4 text-xs sm:text-sm shadow-soft motion-reduce:animate-none bg-[rgba(61,69,85)]"
        >
          <b>워커 신청</b>
        </ButtonLink>
        <ButtonLink
          href="https://open.kakao.com/o/gILV3Bsi"
          variant="ghost"
          gaEventName="apply_free_trial"
          className="h-9 w-9 shrink-0 px-0 sm:h-11 sm:w-11 "
          aria-label="카카오톡 문의"
        >
          <Image
            src="/kakaotalk.svg"
            alt=""
            width={32}
            height={32}
            className="h-12 w-12 sm:h-8 sm:w-8"
          />
        </ButtonLink>
      </div>
    </>
  );
}
