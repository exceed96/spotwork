import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-muted py-12 text-sm text-muted">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">          
          <p>근거리 O2O 매칭 플랫폼 · 분리수거·일반쓰레기 배출 대행</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          
        </div>
      </Container>
    </footer>
  );
}
