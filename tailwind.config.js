/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fade-in-up 1s linear",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          }
        },
        boxShadow: {
          '3xl': '-9px 9px 28px #010a12, 9px -9px 28px #03203a;',
          '4xl': '-9px 9px 28px #787878, 9px -9px 28px #ffffff;',

          }
        }
      }
    },
    plugins: [],
  }