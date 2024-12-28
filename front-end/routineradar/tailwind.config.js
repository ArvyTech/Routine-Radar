/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom futuristic colors if needed
        primary: "#1e293b", // Dark blue-gray
        secondary: "#0ea5e9", // Cyan
      },
    },
  },
  plugins: [],
};
