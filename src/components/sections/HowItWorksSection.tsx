import { ClipboardList, MapPin, Trash2, Camera, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { howItWorksContent } from '@/content/howItWorks';

const STEP_ICONS: LucideIcon[] = [ClipboardList, MapPin, Trash2, Camera];

export function HowItWorksSection() {
  return (
    <section id="how" className="bg-bg-muted py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {howItWorksContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-fg-strong md:text-4xl">
            {howItWorksContent.title}
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksContent.steps.map((s, i) => {
            const Icon = STEP_ICONS[i] ?? ClipboardList;
            return (
              <li
                key={s.step}
                className="relative rounded-lg border border-border bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-muted">{s.step}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-bg">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-fg-strong">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
