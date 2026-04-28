import { Clock, Repeat, MapPin, ShieldCheck, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { valuePropsContent } from '@/content/valueProps';

const ICONS: Record<string, LucideIcon> = {
  clock: Clock,
  repeat: Repeat,
  mapPin: MapPin,
  shield: ShieldCheck,
};

export function ValuePropsSection() {
  return (
    <section id="value" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {valuePropsContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-fg-strong md:text-4xl">
            {valuePropsContent.title}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">{valuePropsContent.description}</p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valuePropsContent.items.map((item) => {
            const Icon = ICONS[item.iconKey] ?? Clock;
            return (
              <li
                key={item.title}
                className="rounded-lg bg-primary-bg/60 p-6 transition-colors hover:bg-primary-bg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white shadow-soft">
                  <Icon className="h-6 w-6 text-primary" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-fg-strong">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
