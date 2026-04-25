/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#141414',
          soft: '#222326',
          muted: '#4f5056',
        },
        graphite: '#626269',
        fog: '#f6f5f1',
        porcelain: '#f4f4f4',
        line: '#dedbd2',
        brand: {
          yellow: '#ffcc00',
          soft: '#fff4c7',
          grey: '#626269',
          amber: '#f1b900',
        },
      },
      boxShadow: {
        soft: '0 22px 70px rgba(4, 24, 44, 0.12)',
        nav: '0 18px 70px rgba(0, 0, 0, 0.10)',
        form: '0 30px 90px rgba(0, 0, 0, 0.22)',
      },
    },
  },
  plugins: [],
}
