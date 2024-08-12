const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
        blue: {
          50: "#f5f9ff",
          100: "#eaf3ff",
          200: "#c0d9ff",
          300: "#97beff",
          400: "#4d8aff",
          500: "#152cba",
          600: "#034ee6",
          700: "#023c99",
          800: "#013974",
          900: "#012b4e",
        },
      }
    },
  },
  plugins: [flowbite.plugin()],
};
