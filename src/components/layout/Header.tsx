import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
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
        <nav className="flex items-center gap-2" aria-label="주요 내비게이션">
          <ButtonLink href="/">무료체험</ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
