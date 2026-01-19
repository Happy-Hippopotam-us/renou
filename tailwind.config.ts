import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Renou Homes Brand Colors
        renou: {
          gold: '#a67939',      // Warm Gold - Primary brand color
          forest: '#30531C',    // Deep Forest Green - Secondary brand color
          cream: '#F5F1E8',     // Soft Cream - Backgrounds
          gray: '#8B8680',      // Warm Gray - Body text
          charcoal: '#2D2926',  // Deep Charcoal - Headers
          terracotta: '#C97D60',// Terracotta - Accent
          sage: '#7A9B76',      // Sage Green - Success states
        },
      },
      fontFamily: {
        display: ['New Astro', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
