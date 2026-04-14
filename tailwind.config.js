/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#04182c',
          soft: '#0b2947',
          muted: '#536273',
        },
        porcelain: '#f4f7f6',
        brand: {
          blue: '#1467b3',
          mint: '#b8eadf',
          coral: '#c64a31',
          'coral-dark': '#9f321f',
        },
      },
      boxShadow: {
        soft: '0 22px 70px rgba(4, 24, 44, 0.12)',
      },
    },
  },
  plugins: [],
}
