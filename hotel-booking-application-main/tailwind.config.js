/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // Enables 'dark' mode using .dark class
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Add others if needed
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};
