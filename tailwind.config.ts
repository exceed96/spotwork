import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        'bg-tint': 'var(--color-bg-tint)',
        'bg-muted': 'var(--color-bg-muted)',
        fg: 'var(--color-fg)',
        'fg-strong': 'var(--color-fg-strong)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          soft: 'var(--color-primary-soft)',
          bg: 'var(--color-primary-bg)',
        },
        accent: 'var(--color-accent)',
        warning: 'var(--color-warning)',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'Apple SD Gothic Neo',
          'Segoe UI',
          'Roboto',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(15 31 68 / 0.04), 0 4px 16px rgb(45 95 201 / 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
