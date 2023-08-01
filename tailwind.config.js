/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f158fc",

          secondary: "#fc97ee",

          accent: "#53d1af",

          neutral: "#3e2442",

          "base-100": "#f5f4fa",

          info: "#92b1dd",

          success: "#0e5848",

          warning: "#ecd041",

          error: "#ec695f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
