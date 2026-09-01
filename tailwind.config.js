/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#121210",
          soft: "#57544C",
          faint: "#8A867A",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          subtle: "#F6F5F1",
          line: "#E4E1D8",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Work Sans'", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
