/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'movie-black': '#1d2024',
        'movie-black-200': '#1f2326',
        oranje: '#f37515',
      },
    },
  },
  plugins: [],
};
