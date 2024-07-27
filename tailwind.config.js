/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
        md: "0 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "0 3px 6px rgba(0, 0, 0, 0.5)",
        xl: "0 4px 8px rgba(0, 0, 0, 0.5)",
        "2xl": "0 5px 10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-in-out",
        fadeInDown: "fadeInDown 1s ease-in-out",
        ramDoli: "ramDoli 1s ease-in-out infinite",
      },
      keyframes: {
        ramDoli: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-xl": {
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-2xl": {
          textShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
