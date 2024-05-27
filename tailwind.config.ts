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
        // Peamised värvid
        primary: {
          DEFAULT: "#4CAF50", // Roheline
          foreground: "#FFFFFF", // Valge
        },
        secondary: {
          DEFAULT: "#2F4858", // Sinakasroheline
          foreground: "#FFFFFF", // Valge
        },
        accent: {
          DEFAULT: "#FFEB3B", // Helekollane
          foreground: "#2F4858", // Sinakasroheline
        },
        muted: {
          DEFAULT: "#E0E0E0", // Helehall
          foreground: "#757575", // Tumehall
        },
        background: {
          DEFAULT: "#F5F5DC", // Pehme beež
        },
        lightGreen: {
          DEFAULT: "#C8E6C9", // Hele roheline
        },
        // Täiendavad värvid
        border: "#757575", // Tumehall
        input: "#757575", // Tumehall
        ring: "#757575", // Tumehall
        foreground: "#2F4858", // Sinakasroheline
        card: {
          DEFAULT: "#E0E0E0", // Helehall
          foreground: "#2F4858", // Sinakasroheline
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
