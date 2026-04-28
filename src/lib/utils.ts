import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind 클래스를 안전하게 병합한다.
 * - 조건부 클래스: `cn('p-2', isActive && 'bg-primary')`
 * - 충돌 클래스 자동 정리: `cn('p-2', 'p-4')` → 'p-4'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
