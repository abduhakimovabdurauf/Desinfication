/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '800',
      },
      fontStyle: {
        italic: 'italic',
      },
    },
  },
  plugins: [],
};
