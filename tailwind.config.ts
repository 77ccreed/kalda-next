import type { Config } from "tailwindcss";

const config: Config = {
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
        primary: {
          light: "#FFF176", // Light Yellow
          DEFAULT: "#FFEB3B", // Yellow
          dark: "#FBC02D", // Dark Yellow
          foreground: "#2F4858", // Dark Blue-Green
        },
        secondary: {
          light: "#5F7380", // Light Blue-Green
          DEFAULT: "#2F4858", // Blue-Green
          dark: "#1D2F36", // Dark Blue-Green
          foreground: "#FFFFFF", // White
        },
        accent: {
          light: "#DCE775", // Light Green
          DEFAULT: "#C8E6C9", // Green
          dark: "#9CCC65", // Dark Green
          foreground: "#2F4858", // Dark Blue-Green
        },
        muted: {
          light: "#F5F5F5", // Light Grey
          DEFAULT: "#E0E0E0", // Grey
          dark: "#BDBDBD", // Dark Grey
          foreground: "#757575", // Medium Grey
        },
        background: {
          DEFAULT: "#FFFFFF", // White
        },
        border: "#757575", // Medium Grey
        input: "#757575", // Medium Grey
        ring: "#757575", // Medium Grey
        foreground: "#2F4858", // Dark Blue-Green
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionProperty: {
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
