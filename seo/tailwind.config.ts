import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#579bb1',
        'primary-dark': '#3f7a8c',
        'primary-light': '#e0f2f7',
        'accent': '#e07a5f',
        'accent-hover': '#c86045',
        'paper': '#fdfbf7',
        'paper-dark': '#f4f1ea',
        'ink': '#2c3e50',
        'ink-light': '#64748b',
        'grid-line': 'rgba(87, 155, 177, 0.1)',
      },
      fontFamily: {
        'display': ['Spline Sans', 'sans-serif'],
        'handwritten': ['Caveat', 'cursive'],
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'paper': '2px 4px 15px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config
