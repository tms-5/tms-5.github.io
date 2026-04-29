/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        plum: {
          50: "#fbf7fd",
          100: "#f7eefb",
          200: "#eadcff",
          300: "#d4c4e5",
          400: "#b88ad0",
          500: "#8d26a5",
          600: "#6f1588",
          700: "#5a0d73",
          800: "#3e0052",
          900: "#260033",
          DEFAULT: "#3e0052",
        },
        orchid: {
          50: "#fcf4ff",
          100: "#f7e6ff",
          200: "#efccfb",
          300: "#df97ed",
          400: "#c65bd5",
          500: "#8d26a5",
          600: "#7b22a0",
          700: "#641981",
          800: "#4a0f61",
          900: "#31073f",
          DEFAULT: "#8d26a5",
        },
        lavender: {
          50: "#fbf9ff",
          100: "#f7f2fb",
          200: "#efe6fb",
          300: "#d9c2f4",
          400: "#d4c4e5",
          500: "#b99ee0",
          600: "#7f629e",
          700: "#593b74",
          800: "#5f3d7d",
          900: "#432b59",
          DEFAULT: "#d4c4e5",
        },
        mist: {
          50: "#fbfcfd",
          100: "#f7f8fb",
          200: "#f2f4f7",
          300: "#e4e8ef",
          400: "#cbd3df",
          500: "#9aa7b8",
          600: "#6d7a8d",
          700: "#4f5a69",
          800: "#343c47",
          900: "#20262e",
          DEFAULT: "#f2f4f7",
        },
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "zoom-in-profile": {
          "0%": { opacity: "0", transform: "scale(0.9) translateY(24px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "blob-enter": {
          "0%": { opacity: "0", transform: "scale(0.86) rotate(-8deg)" },
          "100%": { opacity: "0.82", transform: "scale(1) rotate(0)" },
        },
        "dash-draw": {
          "100%": { strokeDashoffset: "0" },
        },
        "soft-float": {
          "0%, 100%": { translate: "0 0" },
          "50%": { translate: "0 -12px" },
        },
        "soft-pulse": {
          "0%, 100%": {
            boxShadow: "0 20px 50px rgba(62,0,82,0.14)",
          },
          "50%": {
            boxShadow: "0 28px 64px rgba(62,0,82,0.2)",
          },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-out-left": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
        "slide-out-right": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(100%)" },
        },
      },
      animation: {
        "scroll-left": "scroll-left 15s linear infinite",
        "fade-slide-up": "fade-slide-up 0.7s ease-out forwards",
        "zoom-in-profile": "zoom-in-profile 0.9s ease-out both",
        "blob-enter": "blob-enter 0.9s ease-out both",
        "dash-draw": "dash-draw 0.9s ease-out forwards",
        "soft-float": "soft-float 5.5s ease-in-out infinite",
        "soft-pulse": "soft-pulse 5.5s ease-in-out infinite",
        "slide-in-right":
          "slide-in-right 0.4s cubic-bezier(0.77, 0, 0.18, 1) forwards",
        "slide-out-left":
          "slide-out-left 0.4s cubic-bezier(0.77, 0, 0.18, 1) forwards",
        "slide-out-right":
          "slide-out-right 0.4s cubic-bezier(0.77, 0, 0.18, 1) forwards",
      },
    },
  },
  plugins: [],
};
