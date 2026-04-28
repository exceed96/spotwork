'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { faqContent } from '@/content/faq';

export function FaqSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(faqContent.categories[0].id);
  const activeCategory = faqContent.categories.find((c) => c.id === activeCategoryId)!;
  const [openId, setOpenId] = useState<string | null>(activeCategory.items[0]?.id ?? null);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const category = faqContent.categories.find((c) => c.id === categoryId);
    setOpenId(category?.items[0]?.id ?? null);
  };

  return (
    <section id="faq" className="bg-bg-muted py-20 md:py-28">
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {faqContent.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-fg-strong md:text-4xl">
            {faqContent.title}
          </h2>
        </div>

        <div className="mt-10 flex gap-2 rounded-lg border border-border bg-white p-1">
          {faqContent.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.id)}
              className={cn(
                'flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors',
                activeCategoryId === category.id
                  ? 'bg-primary text-white'
                  : 'text-muted hover:text-fg-strong',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <ul className="mt-4 divide-y divide-border overflow-hidden rounded-lg border border-border bg-white">
          {activeCategory.items.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bg-muted/40"
                >
                  <span className="font-semibold text-fg-strong">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted transition-transform duration-200',
                      isOpen && 'rotate-180 text-primary',
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  id={panelId}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-base leading-relaxed text-muted"
                >
                  {item.a}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
