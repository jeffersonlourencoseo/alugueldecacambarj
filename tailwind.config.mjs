import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
      },
      colors: {
        primary: '#FACC15',
        secondary: '#1E3A8A',
        accent: '#000000',
        concrete: '#1a1a1a',
        'concrete-light': '#2d2d2d',
        safety: '#F5C518',
        'safety-dark': '#D4A017',
        steel: '#4a4a4a',
        pale: '#FAFAFA',
      },
    },
  },
  plugins: [typography],
};
