/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans your files
    theme: {
      extend: {
        colors: {
          disneyBlue: "#0072CE",
          castleGold: "#FAA61A",
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar-hide'),
    ],
  };
  