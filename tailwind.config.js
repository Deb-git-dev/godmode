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
        canvas: '#0B0F19',
        'surface-subtle': '#111827',
        'surface-elevated': '#1E293B',
        'border-subtle': '#1E293B',
        'border-prominent': '#334155',
        'accent-primary': '#6366F1',
        'accent-secondary': '#06B6D4',
        'accent-success': '#10B981',
        'accent-warning': '#F59E0B',
        'accent-danger': '#F43F5E',
        'text-primary': '#F8FAFC',
        'text-secondary': '#94A3B8',
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
