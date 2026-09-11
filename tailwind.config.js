/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0a",
          900: "#0d0d0f",
          850: "#121215",
          800: "#17171b",
          700: "#212126",
          600: "#2c2c33",
          500: "#3f3f47",
          400: "#6b6b76",
          300: "#9a9aa5",
          200: "#c4c4cc",
          100: "#e8e8ec",
          50: "#f5f5f7",
        },
        accent: {
          DEFAULT: "#5EEBD6",
          soft: "#8FF3E4",
          dim: "#2E8B7D",
          violet: "#8B7CF6",
          amber: "#F5B971",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "mesh-1":
          "radial-gradient(circle at 15% 20%, rgba(94,235,214,0.16), transparent 45%), radial-gradient(circle at 85% 10%, rgba(139,124,246,0.14), transparent 40%), radial-gradient(circle at 50% 80%, rgba(94,235,214,0.08), transparent 55%)",
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
        glow: "0 0 0 1px rgba(94,235,214,0.15), 0 0 40px rgba(94,235,214,0.08)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
