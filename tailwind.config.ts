import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Radiance Brand Colors
        primary: {
          DEFAULT: '#A45A9D', // Main branding
          foreground: '#FFFFFF',
          light: '#D45AA8',
        },
        secondary: '#F4D03F',
        accent: '#D35400',
        // Neutrals
        background: '#FFFFFF',
        foreground: '#2C3E50',
        muted: '#BDC3C7',
        'muted-foreground': '#64748B',
        card: '#FFFFFF',
        'card-foreground': '#2C3E50',
        border: '#E2E8F0',
        // Section backgrounds
        surface: '#F8F9FA',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
        accent: ['var(--font-accent)'],
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'hover': '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config