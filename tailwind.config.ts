import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Artisanal color palette inspired by natural materials
        'artisan': {
          cream: '#F5F1E8',
          sand: '#E8DCC4',
          terracotta: '#C87D5C',
          clay: '#8B5A3C',
          sage: '#A4B494',
          olive: '#7A8A6B',
          charcoal: '#3A3A3A',
          warm: '#FFF8F0',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
