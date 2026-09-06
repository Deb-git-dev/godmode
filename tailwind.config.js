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
        // Museum Editorial Portfolio Tokens
        bone: '#f3efe7',
        'bone-deep': '#ece6d9',
        sand: '#e4dbc8',
        ink: '#1b1710',
        'ink-soft': '#2a241a',
        umber: '#211b12',
        copper: '#c05a2e',
        'copper-deep': '#a34822',
        taupe: '#8b8172',
        linen: '#faf7f0',

        // System Colors
        canvas: '#F8FAFC',
        'surface-subtle': '#FFFFFF',
        'surface-elevated': '#FFFFFF',
        'border-subtle': '#E2E8F0',
        'border-prominent': '#CBD5E1',
        'accent-primary': '#4F46E5',
        'accent-secondary': '#0284C7',
        'accent-success': '#D97706', // Muted amber / no green rule
        'accent-warning': '#D97706',
        'accent-danger': '#E11D48',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#64748B'
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"Instrument Sans"', 'Inter', 'sans-serif'],
        label: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        pixel: ['"Silkscreen"', '"Courier New"', 'monospace'],
        heading: ['Space Grotesk', 'sans-serif'],
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
