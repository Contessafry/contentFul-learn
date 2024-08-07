/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00b0d2",

          secondary: "#0000ff",

          accent: "#007600",

          neutral: "#030503",

          "base-100": "#fbf9ff",

          info: "#0056f8",

          success: "#527400",

          warning: "#ff9100",

          error: "#ff7a90",
        },
      },
    ],
  },
  plugins: [daisyui],
};
