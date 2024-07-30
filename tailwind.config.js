/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-9px 9px 28px #010a12, 9px -9px 28px #03203a;',
        '4xl': '-9px 9px 28px #787878, 9px -9px 28px #ffffff;',

      }
    },
  },
  plugins: [],
}

