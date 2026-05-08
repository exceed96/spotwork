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
      keyframes: {
        'float-border-soft': {
          '0%, 100%': {
            borderColor: 'rgb(255 255 255 / 0.45)',
            boxShadow:
              '0 1px 2px rgb(15 31 68 / 0.04), 0 4px 16px rgb(45 95 201 / 0.06), 0 0 0 1px rgb(255 255 255 / 0.2)',
          },
          '50%': {
            borderColor: 'rgb(255 255 255 / 1)',
            boxShadow:
              '0 1px 2px rgb(15 31 68 / 0.06), 0 4px 20px rgb(45 95 201 / 0.14), 0 0 14px rgb(255 255 255 / 0.35)',
          },
        },
      },
      animation: {
        'float-border-soft': 'float-border-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
