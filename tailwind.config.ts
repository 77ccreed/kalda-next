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
          DEFAULT: "#FFD700", // Golden Yellow
          dark: "#FBC02D", // Dark Yellow
          foreground: "#2F4858", // Dark Teal
        },
        secondary: {
          light: "#5F7380", // Light Teal
          DEFAULT: "#2F4858", // Dark Teal
          foreground: "#FFFFFF", // White
        },
        accent: {
          DEFAULT: "#C8E6C9", // Light Green
          foreground: "#2F4858", // Dark Teal
        },
        highlight: {
          DEFAULT: "#E57373", // Coral
          foreground: "#FFFFFF", // White
        },
        neutral: {
          DEFAULT: "#E0E0E0", // Neutral Gray
          dark: "#424242", // Dark Gray
          foreground: "#2F4858", // Dark Teal
        },
        background: {
          DEFAULT: "#FFFFFF", // White
        },
        border: "#2F4858", // Dark Teal for borders
        input: "#757575", // Medium Gray for input borders
        ring: "#757575", // Medium Gray for focus rings
      },
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Open Sans", "sans-serif"],
        cta: ["Poppins", "sans-serif"],
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
