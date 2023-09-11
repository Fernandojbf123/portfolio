/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        hardbounce: {
          "0%, 100%": { scale: "1" },
          "50%": { scale: "0.95" },
        },
      },
      animation: {
        "hardbounce": "hardbounce 500ms ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
      },
        

    },
  },
  plugins: [],
}

