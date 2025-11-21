/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        soul: ['"My Soul"', 'cursive']
      },
      colors: {
        background: 'rgb(var(--background))',
        card: 'rgb(var(--card))',
        border: 'rgb(var(--border))',
        primary: 'rgb(var(--primary))',
        muted: 'rgb(var(--muted))',
      },
      fontSize:{
        '10xl': '10rem', // Adjust this value as needed, e.g., '12rem', '14rem', etc.
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}

