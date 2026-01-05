// Type definitions for the application
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

export type ButtonVariant = 'primary' | 'secondary' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type HeadingVariant = 'display' | 'section' | 'card'

export type LinkVariant = 'default' | 'nav' | 'nav-active' | 'underline'

export interface Course {
  level: Level
  title: string
  description: string
  longDescription: string
  duration: string
  sessions: string
  price: number
  schedule: string
  features: string[]
  curriculum: string[]
}

export interface BreadcrumbItem {
  label: string
  to?: string
}

export interface MenuItem {
  label: string
  href: string
  active?: boolean
}

export interface LevelConfig {
  icon: string
  hoverBorder: string
  iconColor: string
  checkColor: string
  buttonClass: string
  bgColor: string
  textColor: string
  borderColor: string
}
