import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        sand: {
          50: "#FBF8F4",
          100: "#F6F1EB",
          200: "#EFE6DB",
          300: "#E4D5C2",
          400: "#C9B199",
        },
        terracotta: {
          50: "#F4ECE3",
          100: "#E7D2BD",
          200: "#C99972",
          300: "#A4703F",
          500: "#7C491D",
          600: "#6A3D17",
          700: "#562F10",
        },
        ink: {
          DEFAULT: "#2B1E13",
          soft: "#4A3A2D",
          muted: "#7A6A5C",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(124, 73, 29, 0.25)",
        card: "0 10px 40px -20px rgba(124, 73, 29, 0.18)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 0.9s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
