import { Building2, Home, Check, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { forUsersContent } from '@/content/forUsers';

const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  home: Home,
};

interface UserCardProps {
  iconKey: string;
  label: string;
  title: string;
  points: ReadonlyArray<string>;
}

function UserCard({ iconKey, label, title, points }: UserCardProps) {
  const Icon = ICONS[iconKey] ?? Building2;
  return (
    <article className="rounded-lg border border-border bg-white p-8 transition-colors hover:border-primary/40">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-bg">
          <Icon className="h-5 w-5 text-primary" aria-hidden />
        </span>
        <span className="text-sm font-semibold text-primary">{label}</span>
      </div>
      <h3 className="mt-5 text-xl font-bold text-fg-strong">{title}</h3>
      <ul className="mt-5 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-2 text-sm text-fg">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ForUsersSection() {
  const { eyebrow, title, business, resident } = forUsersContent;
  return (
    <section id="for-you" className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-fg-strong md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <UserCard
            iconKey={business.iconKey}
            label={business.label}
            title={business.title}
            points={business.points}
          />
          <UserCard
            iconKey={resident.iconKey}
            label={resident.label}
            title={resident.title}
            points={resident.points}
          />
        </div>
      </Container>
    </section>
  );
}
