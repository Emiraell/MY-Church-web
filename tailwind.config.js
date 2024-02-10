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
        milk: {
          50: "#f6f53",
          70: "#f3f2ee",
          100: "##efeee9",
          150: "#dbd5c7",
          200: "#d5d1c3",
          250: "#c4bfab",
          300: "#b6b097",
          500: "#dcd9cd",
        },
        blood: {
          50: "#fdf4f4",
          100: "#fcecec",
          150: "#fad5d6",
          200: "#eb5a5a",
          250: "#e51f1f",
          300: "#be1616",
          350: "#a81313",
          400: "#a01212",
          500: "#a41313",
          550: "#660b0b",
          600: "#a3a060",
          650: "#500909",
          700: "#410707",
          900: "#330505",
        },
        orang: {
          100: "#be5504",
          200: "#fc6a03",
          300: "#dd571c",
          400: "#8d4004",
          500: "#893101",
          600: "#c95b0c",
          700: "#7a3803",
        },
        greeny: {
          80: "#057d08",
          70: "#08d303",
          50: "#09eb10",
          100: "#046507",
          150: "06a40b",
          200: "#035606",
          300: "#034e05",
          400: "#023e04",
          500: "#012f03",
          600: "#011f02",
          700: "#001701",
          800: "#000f01",
        },
      },
      transitionDuration: {
        0.5: "0.5s",
        1: "1s",
        2: "2s",
        3: "3s",
        5: "5s",
        7: "7s",
        10: "10s",
      },

      keyframes: {
        "move-right": {
          "0%, 100%": { transform: "translateX(-10rem)" },
          "50%": { transform: "translateX(10rem)" },
        },
        "move-left": {
          "0%, 100%": { transform: "translateX(10rem)" },
          "50%": { transform: "translateX(-10rem)" },
        },
      },
      animation: {
        "move-right": "move-right 5s linear infinite",
        "move-left": "move-left 5s linear infinite",
      },
    },
  },
  plugins: [],
};