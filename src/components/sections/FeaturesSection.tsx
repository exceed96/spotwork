import {
  Smartphone,
  Radar,
  PackageOpen,
  Camera,
  ShieldCheck,
  Check,
  type LucideIcon,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { featuresContent } from '@/content/features';

const ICONS: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  radar: Radar,
  package: PackageOpen,
  camera: Camera,
  shield: ShieldCheck,
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {featuresContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-fg-strong md:text-4xl">
            {featuresContent.title}
          </h2>
          <p className="mt-4 text-base text-muted md:text-lg">
            {featuresContent.description}
          </p>
        </div>

        <ol className="mt-14 space-y-6">
          {featuresContent.items.map((item) => {
            const Icon = ICONS[item.iconKey] ?? Smartphone;
            return (
              <li
                key={item.no}
                className="rounded-lg border border-border bg-white p-6 transition-colors hover:border-primary/40 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-4">
                    <span className="text-xs font-bold tracking-widest text-muted">
                      {item.no}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-bg">
                      <Icon className="h-6 w-6 text-primary" aria-hidden />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-fg-strong md:text-xl">
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {item.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2 text-sm leading-relaxed text-fg md:text-base"
                        >
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-accent"
                            aria-hidden
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
