'use client';

import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  gaEventName?: string;
  gaEventParams?: Record<string, string | number | boolean>;
  children: ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-hover shadow-soft',
  secondary:
    'bg-white text-fg-strong border border-border hover:border-primary hover:text-primary',
  ghost: 'text-fg-strong hover:text-primary',
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
};

const BASE_STYLES =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

/**
 * 외부(mailto/http)는 일반 anchor, 내부 라우트는 next/link로 분기.
 */
export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  gaEventName,
  gaEventParams,
  className,
  children,
  onClick,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], SIZE_STYLES[size], className);
  const isExternal = href.startsWith('mailto:') || href.startsWith('http');
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (gaEventName) {
      sendGAEvent('event', gaEventName, {
        link_url: href,
        ...gaEventParams,
      });
    }
  };

  if (isExternal) {
    return (
      <a className={classes} href={href} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {children}
    </Link>
  );
}
