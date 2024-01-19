/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        rochester: ["Rochester"],
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        poppins: ["Poppins"],
      },
      colors: {
        oran: { light: "#f46308", dark: "#b74702" },
        textCol: { primary: "#414141", secondary: "#5a5a5a" },
        backG: {
          darker: "#2a1101",
          dark: "#391804",
          medium: "#221a1a",
          light: "#622702",
          lighter: "#a74000",
        },
      },
    },
  },
  plugins: [],
};
