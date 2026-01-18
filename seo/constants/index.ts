import type { Level } from '../types'

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

export const getLevelConfig = (level: Level) => {
  const configs = {
    A1: {
      icon: 'school',
      hoverBorder: 'hover:border-blue-200',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      checkColor: 'text-blue-600',
      buttonClass: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300',
    },
    A2: {
      icon: 'trending_up',
      hoverBorder: 'hover:border-green-200',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      checkColor: 'text-green-600',
      buttonClass: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:border-green-300',
    },
    B1: {
      icon: 'workspace_premium',
      hoverBorder: 'hover:border-yellow-200',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      checkColor: 'text-yellow-600',
      buttonClass: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300',
    },
    B2: {
      icon: 'star',
      hoverBorder: 'hover:border-orange-200',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      checkColor: 'text-orange-600',
      buttonClass: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300',
    },
    C1: {
      icon: 'military_tech',
      hoverBorder: 'hover:border-purple-200',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      checkColor: 'text-purple-600',
      buttonClass: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 hover:border-purple-300',
    },
    C2: {
      icon: 'emoji_events',
      hoverBorder: 'hover:border-pink-200',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      checkColor: 'text-pink-600',
      buttonClass: 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300',
    },
  }

  return configs[level]
}
