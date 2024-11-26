/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "neutral-100": "hsl(0, 0%, 100%)",
      "neutral-300": "hsl(231, 77%, 90%)",
      "neutral-900": "hsl(230, 35%, 7%)",
    },
    fontFamily: {
      base: ['"Barlow"', "sans-serif"],
      accent: ['"Barlow Condensed"', "sans-serif"],
      serif: ['"Bellefair"', "serif"],
    },
    fontSize: {
      12: "9rem",
      11: "6.25rem",
      10: "5rem",
      9: "3.5rem",
      8: "2.5rem",
      7: "2rem",
      6: "1.75rem",
      5: "1.5rem",
      4: "1.125rem",
      3: "1rem",
      2: "0.9375rem",
      1: "0.875rem",
    },
    letterSpacing: {
      1: "2px",
      2: "2.7px",
      3: "4px",
    },
    spacing: {
      0: "0",
      25: "0.125rem",
      50: "0.25rem",
      100: "0.5rem",
      150: "0.75rem",
      200: "1rem",
      300: "1.5rem",
      400: "2rem",
      500: "2.5rem",
      600: "3rem",
      800: "4rem",
      1000: "5rem",
      1200: "6rem",
      1600: "8rem",
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disables Tailwind's reset styles
    container: false, // Disables Tailwind's container class
  },
};
