/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Arimo"],
      serif: ['"IBM  Plex Serif"'],
    },
    
    extend: {
      screens: {
        xs: "425px",
      },
      backgroundImage: {
        "background-texture":
          "url('/assets/images/vintage-speckles.png')",
      },
      colors: {
      beige: "#F1EFEB",
      bright: "#FF715B",
      "french-gray": "#BFCCD8",
      "reseda-green": "#798E7B",
      gunmetal: "#143642",
    },
    },
  },
  plugins: [],
};
