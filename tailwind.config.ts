import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#070707",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FAD007",
          50: "#FAD007",
          100: "#fefbc3",
          200: "#fef38a",
          300: "#fde547",
          400: "#fad007",
          500: "#eab908",
          600: "#ca9004",
          700: "#a16607",
          800: "#85500e",
          900: "#714212",
          950: "#422206",
        },
        secondary: {
          DEFAULT: "8387ad",
          50: "#f6f6f9",
          100: "#ececf2",
          200: "#d4d5e3",
          300: "#afb1ca",
          400: "#8387ad",
          500: "#636894",
          600: "#4f517a",
          700: "#414363",
          800: "#383954",
          900: "#323348",
          950: "#07070a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
