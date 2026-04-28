import { Container } from '@/components/ui/Container';
import { problemContent } from '@/content/problem';

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {problemContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-fg-strong md:text-4xl">
            {problemContent.title}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{problemContent.description}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {problemContent.cards.map((card) => (
            <article
              key={card.tag}
              className="rounded-lg border border-border bg-white p-8 transition-colors hover:border-primary/40"
            >
              <span className="inline-block rounded-full bg-primary-bg px-3 py-1 text-xs font-semibold text-primary">
                {card.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold text-fg-strong">{card.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
