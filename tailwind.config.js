/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#F8FAFC',
        'surface-subtle': '#FFFFFF',
        'surface-elevated': '#FFFFFF',
        'border-subtle': '#E2E8F0',
        'border-prominent': '#CBD5E1',
        'accent-primary': '#4F46E5',
        'accent-secondary': '#0284C7',
        'accent-success': '#059669',
        'accent-warning': '#D97706',
        'accent-danger': '#E11D48',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#64748B'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      borderRadius: {
        '2xl': '16px',
        'xl': '12px',
        'lg': '8px'
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [],
}
