/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.jsx",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1400px'
    },
    extend: {
      colors: {
        theme: '#f9f9fb',
        primary: '',
        secondary: '',
      },
      backgroundImage: {
        hero: 'url("./hero.png")'
      },
      fontFamily: {
        roboto: ['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}