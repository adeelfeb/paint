/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        paint: {
          amber: '#f59e0b',
          'amber-light': '#fbbf24',
          'amber-dark': '#d97706',
        },
        /**
         * Brand palette: deep forest teal + warm accent — tuned for contrast & clarity on light UI.
         */
        brand: {
          50: '#ecf8f3',
          100: '#d1efe2',
          200: '#a6dfc6',
          300: '#6bc49a',
          400: '#36a876',
          500: '#1c9464',
          600: '#157a54',
          700: '#126347',
          800: '#0f4f3a',
          900: '#0c3d2e',
          950: '#071a14',
          accent: '#ea8c2d',
          'accent-light': '#ffc078',
          'accent-muted': '#fff4e8',
          ink: '#0a1f18',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'pulse-soft': 'pulse 1.5s ease-in-out infinite',
      },
      backgroundSize: {
        'shimmer': '200% 100%',
      },
      boxShadow: {
        'brand-sm': '0 1px 2px rgba(12, 61, 46, 0.06), 0 4px 16px rgba(12, 61, 46, 0.06)',
        'brand-md': '0 4px 6px rgba(12, 61, 46, 0.05), 0 12px 28px rgba(12, 61, 46, 0.08)',
        'brand-glow': '0 0 0 1px rgba(21, 122, 84, 0.12), 0 8px 32px rgba(21, 122, 84, 0.12)',
      },
    },
  },
  plugins: [],
}

