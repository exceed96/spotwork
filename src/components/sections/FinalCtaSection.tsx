import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { finalCtaContent } from '@/content/finalCta';

export function FinalCtaSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <Container className="max-w-3xl text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
          {finalCtaContent.eyebrow}
        </p>
        <h2 className="mt-4 whitespace-pre-line text-balance text-3xl font-bold leading-tight md:text-4xl">
          {finalCtaContent.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          {finalCtaContent.description}
        </p>
      </Container>
    </section>
  );
}
