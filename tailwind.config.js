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
        cyber: {
          dark: '#050811',
          darker: '#030509',
          card: '#0a1020',
          cardHover: '#0e1830',
          border: '#162340',
          borderHover: '#00e5ff33',
          cyan: '#00e5ff',
          cyanGlow: '#00f0ff80',
          blue: '#3b82f6',
          green: '#10b981',
          greenGlow: '#10b98180',
          accent: '#06b6d4',
          muted: '#94a3b8',
        },
        lightSurface: {
          bg: '#f8fafc',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          borderHover: '#0284c7',
          text: '#0f172a',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Grotesk"', 'monospace'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'cyber-cyan': '0 0 25px -5px rgba(0, 229, 255, 0.25)',
        'cyber-cyan-lg': '0 0 40px -5px rgba(0, 229, 255, 0.4)',
        'cyber-green': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'light-glow': '0 10px 25px -5px rgba(2, 132, 199, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
