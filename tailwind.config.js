/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#141617',
          soft: '#212934',
          muted: '#565657',
        },
        porcelain: '#f4f4f4',
        brand: {
          blue: '#0056a7',
          mint: '#f6ce46',
          coral: '#f6ce46',
          'coral-dark': '#e7ba28',
        },
      },
      boxShadow: {
        soft: '0 22px 70px rgba(4, 24, 44, 0.12)',
      },
    },
  },
  plugins: [],
}
