  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        greatVibes: ['"Great Vibes"', "cursive"],
        playwrite: ['"Playwrite PL"', "cursive"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0,0,0,0.25)",
        DEFAULT: "2px 2px 4px rgba(0,0,0,0.45)",
        lg: "3px 3px 6px rgba(0,0,0,0.5)",
        cyan: "0 0 10px rgba(6, 182, 212, 0.7)",
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.2)",
        "glass-dark": "rgba(0, 0, 0, 0.3)",
      },
      borderColor: {
        glass: "rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
