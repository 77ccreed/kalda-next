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
          light: "#FFF9C4", // Lighter Yellow
          DEFAULT: "#FFD700", // Kuldne Kollane
          dark: "#FBC02D", // Tume Kollane
          foreground: "#2F4858", // Tume Sinakasroheline
        },
        secondary: {
          light: "#5F7380", // Hele Sinakasroheline
          DEFAULT: "#2F4858", // Tume Sinakasroheline
          dark: "#1D2F36", // Tume Sinakasroheline (variatsioon)
          foreground: "#FFFFFF", // Valge
        },
        accent: {
          light: "#E8F5E9", // Hele Roheline
          DEFAULT: "#C8E6C9", // Hele Roheline
          dark: "#A5D6A7", // Tumeroheline
          foreground: "#2F4858", // Tume Sinakasroheline
        },
        muted: {
          light: "#F5F5F5", // Helehall
          DEFAULT: "#E0E0E0", // Hall
          dark: "#BDBDBD", // Tumehall
          foreground: "#757575", // Keskminehall
        },
        highlight: {
          light: "#FFCDD2", // Hele Korall
          DEFAULT: "#E57373", // Korall
          dark: "#D32F2F", // Tume Korall
          foreground: "#FFFFFF", // Valge
        },
        background: {
          DEFAULT: "#FFFFFF", // Valge
        },
        border: "#757575", // Keskminehall
        input: "#757575", // Keskminehall
        ring: "#757575", // Keskminehall
        foreground: "#2F4858", // Tume Sinakasroheline
        neutral: {
          light: "#FAF3E0", // Helebeež
          DEFAULT: "#E1C699", // Beež
          dark: "#C5A179", // Tumebeež
          foreground: "#2F4858", // Tume Sinakasroheline
        },
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
