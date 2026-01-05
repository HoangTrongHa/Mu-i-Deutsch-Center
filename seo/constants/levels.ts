import type { Level, LevelConfig } from '~/types'

// Level configurations with Tailwind safe-list compatible classes
export const LEVEL_CONFIGS: Record<Level, LevelConfig> = {
  A1: {
    icon: 'looks_one',
    hoverBorder: 'hover:border-blue-200',
    iconColor: 'text-gray-300 group-hover:text-blue-400 transition-colors',
    checkColor: 'text-blue-500',
    buttonClass: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-100',
  },
  A2: {
    icon: 'looks_two',
    hoverBorder: 'hover:border-green-200',
    iconColor: 'text-gray-300 group-hover:text-green-400 transition-colors',
    checkColor: 'text-green-500',
    buttonClass: 'bg-green-50 text-green-700 hover:bg-green-100',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-100',
  },
  B1: {
    icon: 'looks_3',
    hoverBorder: 'hover:border-yellow-200',
    iconColor: 'text-gray-300 group-hover:text-yellow-400 transition-colors',
    checkColor: 'text-yellow-500',
    buttonClass: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-100',
  },
  B2: {
    icon: 'looks_4',
    hoverBorder: 'hover:border-pink-200',
    iconColor: 'text-gray-300 group-hover:text-pink-400 transition-colors',
    checkColor: 'text-pink-500',
    buttonClass: 'bg-pink-50 text-pink-700 hover:bg-pink-100',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-100',
  },
  C1: {
    icon: 'looks_5',
    hoverBorder: 'hover:border-purple-200',
    iconColor: 'text-gray-300 group-hover:text-purple-400 transition-colors',
    checkColor: 'text-purple-500',
    buttonClass: 'bg-purple-50 text-purple-700 hover:bg-purple-100',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-100',
  },
  C2: {
    icon: 'looks_6',
    hoverBorder: 'hover:border-red-200',
    iconColor: 'text-gray-300 group-hover:text-red-400 transition-colors',
    checkColor: 'text-red-500',
    buttonClass: 'bg-red-50 text-red-700 hover:bg-red-100',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    borderColor: 'border-red-100',
  },
}

// Available levels for the course platform
export const AVAILABLE_LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2']

// Check if a level is valid
export const isValidLevel = (level: string): level is Level => {
  return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(level.toUpperCase())
}

// Get level config safely
export const getLevelConfig = (level: Level): LevelConfig => {
  return LEVEL_CONFIGS[level]
}
