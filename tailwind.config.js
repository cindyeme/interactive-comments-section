/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(357, 100%, 86%)",
          200: "hsl(358, 79%, 66%)",
          300: "hsl(239, 57%, 85%)",
          400: "hsl(238, 40%, 52%)",
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(228, 33%, 97%)",
          300: "hsl(223, 19%, 93%)",
          400: "hsl(211, 10%, 45%)",
          500: "hsl(212, 24%, 26%)",
        },
      },
      fontFamily: {
        manrope: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      boxShadow: {
        "3xl": "0 0px 40px -2px hsl(211, 10%, 45%)",
        cyan: "0 0px 40px -2px hsl(193, 38%, 86%)",
      },
    },
  },
  plugins: [],
};
