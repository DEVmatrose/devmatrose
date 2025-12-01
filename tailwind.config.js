/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#0a0f14',
        'copper-orange': '#FF8C42',
        'cyber-cyan': '#00D9FF',
        'deep-blue': '#1a2332',
        'glitch-red': '#ff0055',
        'off-white': '#e0e6ed',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 5px currentColor' },
          '50%': { opacity: '1', boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        devmatrose: {
          "primary": "#FF8C42",
          "secondary": "#00D9FF",
          "accent": "#ff0055",
          "neutral": "#0a0f14",
          "base-100": "#0a0f14",
          "base-200": "#151a1f",
          "base-300": "#1f262d",
          "info": "#00D9FF",
          "success": "#00ff9d",
          "warning": "#FF8C42",
          "error": "#ff0055",
        },
      },
    ],
  },
}
