export * from './levels'

// Color variants
export const COLOR_VARIANTS = {
  primary: {
    bg: 'bg-primary/5 group-hover:bg-primary/10',
    iconBg: 'bg-primary-light',
    iconColor: 'text-primary',
  },
  accent: {
    bg: 'bg-accent/5 group-hover:bg-accent/10',
    iconBg: 'bg-[#fff0eb]',
    iconColor: 'text-accent',
  },
} as const

export type ColorVariant = keyof typeof COLOR_VARIANTS
