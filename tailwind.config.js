/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('./public/images/bg.jpeg')",
      },
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      },
      colors: {
        primary: '#f497af',
        secondary: '#ea3665',
      },
      // fontFamily: {
      //   'poppins': ['Poppins', 'sans'],
      // },
    },
  },
  // plugins: [require('@tailwindcss/typography')],
}