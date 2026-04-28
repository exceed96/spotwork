import { ShieldCheck, Star, GraduationCap, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { trustSystemContent } from '@/content/trustSystem';

const ICONS: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  star: Star,
  graduation: GraduationCap,
};

export function TrustSystemSection() {
  return (
    <section id="trust" className="bg-bg-muted py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {trustSystemContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-fg-strong md:text-4xl">
            {trustSystemContent.title}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            {trustSystemContent.description}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {trustSystemContent.pillars.map((p) => {
            const Icon = ICONS[p.iconKey] ?? ShieldCheck;
            return (
              <li key={p.title} className="rounded-lg border border-border bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-fg-strong">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
